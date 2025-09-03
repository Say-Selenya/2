from fastapi import FastAPI, APIRouter, Request
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List
import uuid
from datetime import datetime
import hashlib


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

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

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
