#!/usr/bin/env python3
"""
Backend API Testing for Visitor Tracking System
Tests the visitor tracking endpoints and MongoDB integration
"""

import requests
import json
import time
from datetime import datetime
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv('/app/frontend/.env')

# Get backend URL from environment
BACKEND_URL = os.getenv('REACT_APP_BACKEND_URL', 'https://cosmic-portal-2.preview.emergentagent.com')
API_BASE = f"{BACKEND_URL}/api"

class VisitorTrackingTester:
    def __init__(self):
        self.base_url = API_BASE
        self.test_results = []
        
    def log_test(self, test_name, success, message, response_data=None):
        """Log test results"""
        result = {
            'test': test_name,
            'success': success,
            'message': message,
            'timestamp': datetime.now().isoformat(),
            'response_data': response_data
        }
        self.test_results.append(result)
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status}: {test_name} - {message}")
        if response_data:
            print(f"   Response: {json.dumps(response_data, indent=2)}")
        print()

    def test_basic_connectivity(self):
        """Test basic API connectivity"""
        try:
            response = requests.get(f"{self.base_url}/", timeout=10)
            if response.status_code == 200:
                data = response.json()
                self.log_test(
                    "Basic API Connectivity", 
                    True, 
                    f"API is accessible, status: {response.status_code}",
                    data
                )
                return True
            else:
                self.log_test(
                    "Basic API Connectivity", 
                    False, 
                    f"API returned status: {response.status_code}"
                )
                return False
        except Exception as e:
            self.log_test(
                "Basic API Connectivity", 
                False, 
                f"Connection failed: {str(e)}"
            )
            return False

    def test_track_visit_endpoint(self):
        """Test POST /api/track-visit endpoint"""
        try:
            # Test with custom headers to simulate different visitors
            headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Test Browser',
                'Content-Type': 'application/json'
            }
            
            response = requests.post(f"{self.base_url}/track-visit", headers=headers, timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                # Check if response has required fields
                required_fields = ['unique_visitors', 'total_visits', 'message']
                missing_fields = [field for field in required_fields if field not in data]
                
                if not missing_fields:
                    # Verify data types
                    if (isinstance(data['unique_visitors'], int) and 
                        isinstance(data['total_visits'], int) and
                        isinstance(data['message'], str)):
                        
                        self.log_test(
                            "Track Visit Endpoint", 
                            True, 
                            "Successfully tracked visit with proper response format",
                            data
                        )
                        return True, data
                    else:
                        self.log_test(
                            "Track Visit Endpoint", 
                            False, 
                            "Response fields have incorrect data types"
                        )
                        return False, None
                else:
                    self.log_test(
                        "Track Visit Endpoint", 
                        False, 
                        f"Missing required fields: {missing_fields}"
                    )
                    return False, None
            else:
                self.log_test(
                    "Track Visit Endpoint", 
                    False, 
                    f"HTTP error: {response.status_code}"
                )
                return False, None
                
        except Exception as e:
            self.log_test(
                "Track Visit Endpoint", 
                False, 
                f"Request failed: {str(e)}"
            )
            return False, None

    def test_visitor_count_endpoint(self):
        """Test GET /api/visitor-count endpoint"""
        try:
            response = requests.get(f"{self.base_url}/visitor-count", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                # Check if response has required fields
                required_fields = ['unique_visitors', 'total_visits', 'last_updated']
                missing_fields = [field for field in required_fields if field not in data]
                
                if not missing_fields:
                    # Verify data types
                    if (isinstance(data['unique_visitors'], int) and 
                        isinstance(data['total_visits'], int) and
                        isinstance(data['last_updated'], str)):
                        
                        self.log_test(
                            "Visitor Count Endpoint", 
                            True, 
                            "Successfully retrieved visitor count with proper response format",
                            data
                        )
                        return True, data
                    else:
                        self.log_test(
                            "Visitor Count Endpoint", 
                            False, 
                            "Response fields have incorrect data types"
                        )
                        return False, None
                else:
                    self.log_test(
                        "Visitor Count Endpoint", 
                        False, 
                        f"Missing required fields: {missing_fields}"
                    )
                    return False, None
            else:
                self.log_test(
                    "Visitor Count Endpoint", 
                    False, 
                    f"HTTP error: {response.status_code}"
                )
                return False, None
                
        except Exception as e:
            self.log_test(
                "Visitor Count Endpoint", 
                False, 
                f"Request failed: {str(e)}"
            )
            return False, None

    def test_unique_visitor_tracking(self):
        """Test unique visitor identification with different user agents"""
        try:
            # Track visit with first user agent
            headers1 = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/91.0 Test1',
                'Content-Type': 'application/json'
            }
            
            response1 = requests.post(f"{self.base_url}/track-visit", headers=headers1, timeout=10)
            
            if response1.status_code != 200:
                self.log_test(
                    "Unique Visitor Tracking", 
                    False, 
                    "First visitor tracking failed"
                )
                return False
                
            data1 = response1.json()
            initial_unique = data1.get('unique_visitors', 0)
            initial_total = data1.get('total_visits', 0)
            
            # Small delay to ensure different timestamps
            time.sleep(1)
            
            # Track visit with second user agent (should be different visitor)
            headers2 = {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Safari/605.1 Test2',
                'Content-Type': 'application/json'
            }
            
            response2 = requests.post(f"{self.base_url}/track-visit", headers=headers2, timeout=10)
            
            if response2.status_code != 200:
                self.log_test(
                    "Unique Visitor Tracking", 
                    False, 
                    "Second visitor tracking failed"
                )
                return False
                
            data2 = response2.json()
            final_unique = data2.get('unique_visitors', 0)
            final_total = data2.get('total_visits', 0)
            
            # Check if unique visitors increased
            if final_unique > initial_unique and final_total > initial_total:
                self.log_test(
                    "Unique Visitor Tracking", 
                    True, 
                    f"Unique visitor tracking works: {initial_unique} -> {final_unique} unique, {initial_total} -> {final_total} total",
                    {'before': data1, 'after': data2}
                )
                return True
            else:
                self.log_test(
                    "Unique Visitor Tracking", 
                    False, 
                    f"Visitor counts didn't increase properly: {initial_unique} -> {final_unique} unique, {initial_total} -> {final_total} total"
                )
                return False
                
        except Exception as e:
            self.log_test(
                "Unique Visitor Tracking", 
                False, 
                f"Test failed: {str(e)}"
            )
            return False

    def test_repeat_visitor_tracking(self):
        """Test that repeat visits from same visitor increment total but not unique count"""
        try:
            # Get initial counts
            count_response = requests.get(f"{self.base_url}/visitor-count", timeout=10)
            if count_response.status_code != 200:
                self.log_test(
                    "Repeat Visitor Tracking", 
                    False, 
                    "Could not get initial visitor count"
                )
                return False
                
            initial_data = count_response.json()
            initial_unique = initial_data.get('unique_visitors', 0)
            initial_total = initial_data.get('total_visits', 0)
            
            # Track visit with same user agent twice
            headers = {
                'User-Agent': 'Mozilla/5.0 (RepeatVisitor) Test Browser',
                'Content-Type': 'application/json'
            }
            
            # First visit
            response1 = requests.post(f"{self.base_url}/track-visit", headers=headers, timeout=10)
            if response1.status_code != 200:
                self.log_test(
                    "Repeat Visitor Tracking", 
                    False, 
                    "First repeat visit failed"
                )
                return False
                
            time.sleep(1)
            
            # Second visit (same visitor)
            response2 = requests.post(f"{self.base_url}/track-visit", headers=headers, timeout=10)
            if response2.status_code != 200:
                self.log_test(
                    "Repeat Visitor Tracking", 
                    False, 
                    "Second repeat visit failed"
                )
                return False
                
            data2 = response2.json()
            final_unique = data2.get('unique_visitors', 0)
            final_total = data2.get('total_visits', 0)
            
            # Check that unique visitors increased by 1 but total visits increased by 2
            unique_increase = final_unique - initial_unique
            total_increase = final_total - initial_total
            
            if unique_increase == 1 and total_increase == 2:
                self.log_test(
                    "Repeat Visitor Tracking", 
                    True, 
                    f"Repeat visitor tracking works correctly: +{unique_increase} unique, +{total_increase} total visits",
                    {'initial': initial_data, 'final': data2}
                )
                return True
            else:
                self.log_test(
                    "Repeat Visitor Tracking", 
                    False, 
                    f"Unexpected count changes: +{unique_increase} unique (expected 1), +{total_increase} total (expected 2)"
                )
                return False
                
        except Exception as e:
            self.log_test(
                "Repeat Visitor Tracking", 
                False, 
                f"Test failed: {str(e)}"
            )
            return False

    def test_cors_headers(self):
        """Test CORS configuration"""
        try:
            # Test preflight request
            headers = {
                'Origin': 'https://cosmic-portal-2.preview.emergentagent.com',
                'Access-Control-Request-Method': 'POST',
                'Access-Control-Request-Headers': 'Content-Type'
            }
            
            response = requests.options(f"{self.base_url}/track-visit", headers=headers, timeout=10)
            
            # Check CORS headers in response
            cors_headers = {
                'Access-Control-Allow-Origin': response.headers.get('Access-Control-Allow-Origin'),
                'Access-Control-Allow-Methods': response.headers.get('Access-Control-Allow-Methods'),
                'Access-Control-Allow-Headers': response.headers.get('Access-Control-Allow-Headers')
            }
            
            if cors_headers['Access-Control-Allow-Origin']:
                self.log_test(
                    "CORS Configuration", 
                    True, 
                    "CORS headers are properly configured",
                    cors_headers
                )
                return True
            else:
                self.log_test(
                    "CORS Configuration", 
                    False, 
                    "CORS headers missing or misconfigured",
                    cors_headers
                )
                return False
                
        except Exception as e:
            self.log_test(
                "CORS Configuration", 
                False, 
                f"CORS test failed: {str(e)}"
            )
            return False

    def test_json_response_format(self):
        """Test that all responses are valid JSON"""
        try:
            # Test track-visit endpoint
            response1 = requests.post(f"{self.base_url}/track-visit", timeout=10)
            if response1.status_code == 200:
                try:
                    data1 = response1.json()
                    json_valid_1 = True
                except:
                    json_valid_1 = False
            else:
                json_valid_1 = False
                
            # Test visitor-count endpoint
            response2 = requests.get(f"{self.base_url}/visitor-count", timeout=10)
            if response2.status_code == 200:
                try:
                    data2 = response2.json()
                    json_valid_2 = True
                except:
                    json_valid_2 = False
            else:
                json_valid_2 = False
                
            if json_valid_1 and json_valid_2:
                self.log_test(
                    "JSON Response Format", 
                    True, 
                    "All endpoints return valid JSON responses"
                )
                return True
            else:
                self.log_test(
                    "JSON Response Format", 
                    False, 
                    f"JSON validation failed - track-visit: {json_valid_1}, visitor-count: {json_valid_2}"
                )
                return False
                
        except Exception as e:
            self.log_test(
                "JSON Response Format", 
                False, 
                f"JSON format test failed: {str(e)}"
            )
            return False

    def run_all_tests(self):
        """Run all visitor tracking tests"""
        print("=" * 60)
        print("VISITOR TRACKING SYSTEM - BACKEND API TESTS")
        print("=" * 60)
        print(f"Testing API at: {self.base_url}")
        print()
        
        # Run tests in order
        tests = [
            self.test_basic_connectivity,
            self.test_track_visit_endpoint,
            self.test_visitor_count_endpoint,
            self.test_unique_visitor_tracking,
            self.test_repeat_visitor_tracking,
            self.test_cors_headers,
            self.test_json_response_format
        ]
        
        passed = 0
        total = len(tests)
        
        for test in tests:
            try:
                result = test()
                if result:
                    passed += 1
            except Exception as e:
                print(f"❌ FAIL: {test.__name__} - Unexpected error: {str(e)}")
        
        print("=" * 60)
        print(f"TEST SUMMARY: {passed}/{total} tests passed")
        print("=" * 60)
        
        # Return overall success
        return passed == total, self.test_results

if __name__ == "__main__":
    tester = VisitorTrackingTester()
    success, results = tester.run_all_tests()
    
    if success:
        print("🎉 All visitor tracking tests PASSED!")
    else:
        print("⚠️  Some visitor tracking tests FAILED!")
        
    # Save detailed results
    with open('/app/visitor_test_results.json', 'w') as f:
        json.dump(results, f, indent=2)
    
    print(f"\nDetailed results saved to: /app/visitor_test_results.json")