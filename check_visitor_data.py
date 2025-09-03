#!/usr/bin/env python3
"""
Check what's actually happening with visitor data in MongoDB
"""

import requests
import json
import hashlib
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv('/app/frontend/.env')

BACKEND_URL = os.getenv('REACT_APP_BACKEND_URL', 'https://cosmic-portal-2.preview.emergentagent.com')
API_BASE = f"{BACKEND_URL}/api"

def create_visitor_hash(ip: str, user_agent: str) -> str:
    """Same hash function as in backend"""
    combined = f"{ip}:{user_agent}"
    return hashlib.sha256(combined.encode()).hexdigest()

def test_visitor_identification():
    """Test visitor identification logic"""
    print("=" * 60)
    print("VISITOR IDENTIFICATION TEST")
    print("=" * 60)
    
    # Test with a specific user agent
    test_user_agent = "TestBrowser/1.0 (IdentificationTest)"
    
    # Since we don't know the exact IP the backend sees, let's test the logic
    print(f"Testing with User-Agent: {test_user_agent}")
    
    # Make first request
    print("\n1. Making first request...")
    headers1 = {'User-Agent': test_user_agent}
    response1 = requests.post(f"{API_BASE}/track-visit", headers=headers1)
    data1 = response1.json()
    print(f"   Response: {json.dumps(data1, indent=2)}")
    
    # Make second request with same user agent
    print("\n2. Making second request (same user agent)...")
    headers2 = {'User-Agent': test_user_agent}
    response2 = requests.post(f"{API_BASE}/track-visit", headers=headers2)
    data2 = response2.json()
    print(f"   Response: {json.dumps(data2, indent=2)}")
    
    # Check the difference
    unique_diff = data2['unique_visitors'] - data1['unique_visitors']
    total_diff = data2['total_visits'] - data1['total_visits']
    
    print(f"\n3. Analysis:")
    print(f"   Unique visitors change: +{unique_diff}")
    print(f"   Total visits change: +{total_diff}")
    
    if unique_diff == 0 and total_diff == 1:
        print("   ✅ CORRECT: Same visitor recognized, only total visits increased")
    elif unique_diff == 1 and total_diff == 1:
        print("   ❌ ISSUE: Same visitor treated as new visitor")
        print("   This suggests visitor identification is not working")
    else:
        print(f"   ❌ UNEXPECTED: Unique +{unique_diff}, Total +{total_diff}")
    
    # Test with different user agent
    print("\n4. Testing with different user agent...")
    different_user_agent = "DifferentBrowser/2.0 (NewVisitor)"
    headers3 = {'User-Agent': different_user_agent}
    response3 = requests.post(f"{API_BASE}/track-visit", headers=headers3)
    data3 = response3.json()
    
    unique_diff2 = data3['unique_visitors'] - data2['unique_visitors']
    total_diff2 = data3['total_visits'] - data2['total_visits']
    
    print(f"   Different user agent response: {json.dumps(data3, indent=2)}")
    print(f"   Unique visitors change: +{unique_diff2}")
    print(f"   Total visits change: +{total_diff2}")
    
    if unique_diff2 == 1 and total_diff2 == 1:
        print("   ✅ CORRECT: Different visitor correctly identified as new")
    else:
        print(f"   ❌ ISSUE: Expected +1 unique, +1 total, got +{unique_diff2} unique, +{total_diff2} total")

if __name__ == "__main__":
    test_visitor_identification()