from fastapi import FastAPI, APIRouter, Request, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional, Dict
import uuid
from datetime import datetime
import hashlib
from emergentintegrations.payments.stripe.checkout import StripeCheckout, CheckoutSessionResponse, CheckoutStatusResponse, CheckoutSessionRequest

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Stripe configuration
stripe_api_key = os.environ.get('STRIPE_API_KEY')

# Predefined tip packages (security: amounts defined on server only)
TIP_PACKAGES = {
    "small": 5.00,
    "medium": 10.00,
    "large": 25.00,
    "xl": 50.00,
    "cosmic": 100.00
}

# Helper function for MongoDB serialization
def prepare_for_mongo(data):
    """Prepare data for MongoDB storage by converting datetime objects to ISO strings"""
    if isinstance(data, dict):
        for key, value in data.items():
            if isinstance(value, datetime):
                data[key] = value.isoformat()
            elif isinstance(value, dict):
                data[key] = prepare_for_mongo(value)
            elif isinstance(value, list):
                data[key] = [prepare_for_mongo(item) if isinstance(item, dict) else item for item in value]
    return data

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

class VisitorCount(BaseModel):
    total_visitors: int
    unique_visitors: int
    last_updated: datetime

class Visitor(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    ip_hash: str
    user_agent_hash: str
    first_visit: datetime = Field(default_factory=datetime.utcnow)
    last_visit: datetime = Field(default_factory=datetime.utcnow)
    visit_count: int = 1

# Tip/Payment Models
class TipRequest(BaseModel):
    package_id: str
    origin_url: str

class PaymentTransaction(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    session_id: str
    amount: float
    currency: str = "usd"
    package_id: str
    payment_status: str = "pending"
    status: str = "initiated"
    metadata: Optional[Dict[str, str]] = None
    timestamp: datetime = Field(default_factory=datetime.utcnow)

# Cosmic Comments Model
class CosmicComment(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    message: str
    email: str = "anonymous@cosmos.space"
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    ip_address: Optional[str] = None

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# Visitor tracking endpoints
def create_visitor_hash(ip: str, user_agent: str) -> str:
    """Create a hash from IP and user agent for unique visitor identification"""
    combined = f"{ip}:{user_agent}"
    return hashlib.sha256(combined.encode()).hexdigest()

@api_router.post("/track-visit")
async def track_visit(request: Request):
    """Track a visitor and return updated count excluding admin"""
    try:
        # Get client info
        client_ip = request.client.host if request.client else "unknown"
        user_agent = request.headers.get("user-agent", "unknown")
        
        # Create unique identifier
        visitor_hash = create_visitor_hash(client_ip, user_agent)
        
        # Check if visitor already exists
        existing_visitor = await db.visitors.find_one({"ip_hash": visitor_hash})
        
        if existing_visitor:
            # Update existing visitor
            await db.visitors.update_one(
                {"ip_hash": visitor_hash},
                {
                    "$set": {"last_visit": datetime.utcnow()},
                    "$inc": {"visit_count": 1}
                }
            )
        else:
            # Create new visitor
            new_visitor = Visitor(
                ip_hash=visitor_hash,
                user_agent_hash=hashlib.sha256(user_agent.encode()).hexdigest()
            )
            await db.visitors.insert_one(new_visitor.dict())
        
        # Get total counts (excluding admin/owner)
        total_visitors = await db.visitors.count_documents({})
        total_visits = await db.visitors.aggregate([
            {"$group": {"_id": None, "total_visits": {"$sum": "$visit_count"}}}
        ]).to_list(1)
        
        visit_count = total_visits[0]["total_visits"] if total_visits else 0
        
        return {
            "unique_visitors": total_visitors,
            "total_visits": visit_count,
            "message": "Visit tracked successfully"
        }
        
    except Exception as e:
        logger.error(f"Error tracking visit: {e}")
        return {"error": "Could not track visit"}

@api_router.get("/visitor-count")
async def get_visitor_count():
    """Get current visitor statistics"""
    try:
        total_visitors = await db.visitors.count_documents({})
        total_visits = await db.visitors.aggregate([
            {"$group": {"_id": None, "total_visits": {"$sum": "$visit_count"}}}
        ]).to_list(1)
        
        visit_count = total_visits[0]["total_visits"] if total_visits else 0
        
        return {
            "unique_visitors": total_visitors,
            "total_visits": visit_count,
            "last_updated": datetime.utcnow()
        }
        
    except Exception as e:
        logger.error(f"Error getting visitor count: {e}")
        return {"unique_visitors": 0, "total_visits": 0, "last_updated": datetime.utcnow()}

# Payment/Tips endpoints
@api_router.post("/payments/checkout/session")
async def create_checkout_session(tip_request: TipRequest, request: Request):
    try:
        # Validate package exists
        if tip_request.package_id not in TIP_PACKAGES:
            raise HTTPException(status_code=400, detail="Invalid tip package")
        
        # Get amount from server-side definition only (security)
        amount = TIP_PACKAGES[tip_request.package_id]
        
        # Initialize Stripe checkout
        host_url = tip_request.origin_url
        webhook_url = f"{host_url}/api/webhook/stripe"
        stripe_checkout = StripeCheckout(api_key=stripe_api_key, webhook_url=webhook_url)
        
        # Build URLs from provided origin
        success_url = f"{tip_request.origin_url}/tip-success?session_id={{CHECKOUT_SESSION_ID}}"
        cancel_url = f"{tip_request.origin_url}/tip-cancelled"
        
        # Create checkout session request
        checkout_request = CheckoutSessionRequest(
            amount=amount,
            currency="usd",
            success_url=success_url,
            cancel_url=cancel_url,
            metadata={
                "package_id": tip_request.package_id,
                "source": "zaestelar_tips",
                "tip_type": "cosmic_offering"
            }
        )
        
        # Create checkout session
        session: CheckoutSessionResponse = await stripe_checkout.create_checkout_session(checkout_request)
        
        # Store transaction in database BEFORE redirecting
        payment_transaction = PaymentTransaction(
            session_id=session.session_id,
            amount=amount,
            currency="usd",
            package_id=tip_request.package_id,
            payment_status="pending",
            status="initiated",
            metadata={
                "package_id": tip_request.package_id,
                "source": "zaestelar_tips",
                "tip_type": "cosmic_offering"
            }
        )
        
        # Insert into payment_transactions collection
        await db.payment_transactions.insert_one(prepare_for_mongo(payment_transaction.dict()))
        
        logger.info(f"Created checkout session {session.session_id} for tip package {tip_request.package_id}")
        
        return {
            "url": session.url,
            "session_id": session.session_id
        }
        
    except Exception as e:
        logger.error(f"Error creating checkout session: {e}")
        raise HTTPException(status_code=500, detail="Failed to create payment session")

@api_router.get("/payments/checkout/status/{session_id}")
async def get_checkout_status(session_id: str):
    try:
        # Initialize Stripe checkout  
        stripe_checkout = StripeCheckout(api_key=stripe_api_key, webhook_url="")
        
        # Get checkout status from Stripe
        checkout_status: CheckoutStatusResponse = await stripe_checkout.get_checkout_status(session_id)
        
        # Update transaction in database
        update_data = {
            "payment_status": checkout_status.payment_status,
            "status": checkout_status.status,
        }
        
        # Only update if not already processed (prevent double processing)
        existing_transaction = await db.payment_transactions.find_one({"session_id": session_id})
        if existing_transaction and existing_transaction.get("payment_status") != "paid":
            await db.payment_transactions.update_one(
                {"session_id": session_id},
                {"$set": update_data}
            )
            logger.info(f"Updated transaction status for session {session_id}: {checkout_status.payment_status}")
        
        return {
            "status": checkout_status.status,
            "payment_status": checkout_status.payment_status,
            "amount_total": checkout_status.amount_total,
            "currency": checkout_status.currency,
            "metadata": checkout_status.metadata
        }
        
    except Exception as e:
        logger.error(f"Error getting checkout status: {e}")
        raise HTTPException(status_code=500, detail="Failed to get payment status")

@api_router.post("/webhook/stripe")
async def stripe_webhook(request: Request):
    try:
        # Get raw body and stripe signature
        webhook_request_body = await request.body()
        stripe_signature = request.headers.get("Stripe-Signature")
        
        # Initialize Stripe checkout
        stripe_checkout = StripeCheckout(api_key=stripe_api_key, webhook_url="")
        
        # Handle webhook
        webhook_response = await stripe_checkout.handle_webhook(webhook_request_body, stripe_signature)
        
        # Update transaction based on webhook event
        if webhook_response.event_type == "checkout.session.completed":
            await db.payment_transactions.update_one(
                {"session_id": webhook_response.session_id},
                {"$set": {
                    "payment_status": webhook_response.payment_status,
                    "status": "completed"
                }}
            )
            logger.info(f"Webhook processed: {webhook_response.event_type} for session {webhook_response.session_id}")
        
        return {"status": "processed"}
        
    except Exception as e:
        logger.error(f"Error processing webhook: {e}")
        return {"status": "error", "message": str(e)}

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
