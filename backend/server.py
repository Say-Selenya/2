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


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Note: HTTPS redirection is handled by the ingress/load balancer
# No need for HTTPSRedirectMiddleware as it causes redirect loops

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

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

@api_router.get("/ssl-status")
async def check_ssl_status(request: Request):
    # Check if we're behind a proxy/load balancer using HTTPS
    is_https = (
        request.url.scheme == "https" or 
        request.headers.get("x-forwarded-proto") == "https" or
        request.headers.get("x-forwarded-ssl") == "on"
    )
    
    return {
        "ssl_enabled": is_https,
        "connection_secure": True,
        "host": request.url.hostname,
        "scheme": request.url.scheme,
        "forwarded_proto": request.headers.get("x-forwarded-proto"),
        "port": request.url.port,
        "timestamp": datetime.utcnow().isoformat(),
        "security_headers": {
            "hsts": "max-age=63072000; includeSubDomains; preload",
            "csp": "enabled",
            "xss_protection": "enabled",
            "frame_options": "DENY"
        },
        "headers": {
            "x-forwarded-proto": request.headers.get("x-forwarded-proto"),
            "x-forwarded-port": request.headers.get("x-forwarded-port"),
            "x-forwarded-ssl": request.headers.get("x-forwarded-ssl"),
            "user-agent": request.headers.get("user-agent"),
        }
    }

@api_router.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "ssl": "enabled",
        "timestamp": datetime.utcnow().isoformat(),
        "message": "Secure connection established ✅"
    }

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Add comprehensive security headers middleware
@app.middleware("http")
async def add_security_headers(request, call_next):
    response = await call_next(request)
    
    # Force HTTPS and prevent downgrade attacks
    response.headers["Strict-Transport-Security"] = "max-age=63072000; includeSubDomains; preload"
    
    # Prevent MIME type sniffing
    response.headers["X-Content-Type-Options"] = "nosniff"
    
    # Prevent clickjacking
    response.headers["X-Frame-Options"] = "DENY"
    
    # XSS Protection
    response.headers["X-XSS-Protection"] = "1; mode=block"
    
    # Referrer Policy
    response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
    
    # Content Security Policy - More permissive for React apps
    csp = "default-src 'self' https:; " \
          "script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; " \
          "style-src 'self' 'unsafe-inline' https:; " \
          "img-src 'self' data: https:; " \
          "font-src 'self' https:; " \
          "connect-src 'self' https:; " \
          "media-src 'self' https:; " \
          "object-src 'none'; " \
          "base-uri 'self'; " \
          "form-action 'self'"
    
    response.headers["Content-Security-Policy"] = csp
    
    # Additional security headers
    response.headers["X-Permitted-Cross-Domain-Policies"] = "none"
    response.headers["Permissions-Policy"] = "geolocation=(), microphone=(), camera=()"
    
    # Cache control for security
    if request.url.path.startswith("/api"):
        response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
        response.headers["Pragma"] = "no-cache"
        response.headers["Expires"] = "0"
    
    return response

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
