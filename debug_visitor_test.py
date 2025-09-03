#!/usr/bin/env python3
"""
Debug test for visitor tracking to understand the repeat visitor issue
"""

import requests
import json
import time
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv('/app/frontend/.env')

BACKEND_URL = os.getenv('REACT_APP_BACKEND_URL', 'https://cosmic-portal-2.preview.emergentagent.com')
API_BASE = f"{BACKEND_URL}/api"

def debug_repeat_visitor():
    """Debug the repeat visitor tracking issue"""
    print("=" * 60)
    print("DEBUG: REPEAT VISITOR TRACKING")
    print("=" * 60)
    
    # Get initial state
    print("1. Getting initial visitor count...")
    response = requests.get(f"{API_BASE}/visitor-count")
    initial_data = response.json()
    print(f"   Initial state: {json.dumps(initial_data, indent=2)}")
    
    # Use a very specific user agent for this test
    test_user_agent = "DebugTestBrowser/1.0 (RepeatVisitorTest)"
    headers = {
        'User-Agent': test_user_agent,
        'Content-Type': 'application/json'
    }
    
    print(f"\n2. Testing with User-Agent: {test_user_agent}")
    
    # First visit
    print("\n3. Making first visit...")
    response1 = requests.post(f"{API_BASE}/track-visit", headers=headers)
    data1 = response1.json()
    print(f"   First visit response: {json.dumps(data1, indent=2)}")
    
    # Wait a moment
    time.sleep(2)
    
    # Second visit (same visitor)
    print("\n4. Making second visit (same visitor)...")
    response2 = requests.post(f"{API_BASE}/track-visit", headers=headers)
    data2 = response2.json()
    print(f"   Second visit response: {json.dumps(data2, indent=2)}")
    
    # Get final state
    print("\n5. Getting final visitor count...")
    response3 = requests.get(f"{API_BASE}/visitor-count")
    final_data = response3.json()
    print(f"   Final state: {json.dumps(final_data, indent=2)}")
    
    # Analysis
    print("\n" + "=" * 60)
    print("ANALYSIS:")
    print("=" * 60)
    
    unique_change = final_data['unique_visitors'] - initial_data['unique_visitors']
    total_change = final_data['total_visits'] - initial_data['total_visits']
    
    print(f"Unique visitors change: {initial_data['unique_visitors']} -> {final_data['unique_visitors']} (change: +{unique_change})")
    print(f"Total visits change: {initial_data['total_visits']} -> {final_data['total_visits']} (change: +{total_change})")
    
    print(f"\nExpected: +1 unique visitor, +2 total visits")
    print(f"Actual: +{unique_change} unique visitors, +{total_change} total visits")
    
    if unique_change == 1 and total_change == 2:
        print("✅ CORRECT: Repeat visitor tracking is working properly")
    else:
        print("❌ ISSUE: Repeat visitor tracking is not working as expected")
        
        # Let's check if the issue is with visitor identification
        print(f"\nPossible issues:")
        print(f"- Visitor identification might not be working correctly")
        print(f"- Database update logic might have issues")
        print(f"- IP address or User-Agent hashing might be inconsistent")

if __name__ == "__main__":
    debug_repeat_visitor()