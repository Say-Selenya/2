import requests
import sys
from datetime import datetime
import json

class APITester:
    def __init__(self, base_url="https://support-contact-1.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.errors_found = []

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            print(f"Status Code: {response.status_code}")
            print(f"Response Headers: {dict(response.headers)}")
            
            # Check for any error messages in response
            try:
                response_data = response.json()
                print(f"Response Data: {response_data}")
                
                # Look for Spanish error messages or error codes
                response_text = json.dumps(response_data).lower()
                if "11s" in response_text or "soporte" in response_text or "error" in response_text:
                    self.errors_found.append(f"Found potential error in {name}: {response_data}")
                    print(f"⚠️ Potential error found: {response_data}")
                    
            except:
                print(f"Response Text: {response.text}")
                response_text = response.text.lower()
                if "11s" in response_text or "soporte" in response_text:
                    self.errors_found.append(f"Found error text in {name}: {response.text}")
                    print(f"⚠️ Error text found: {response.text}")

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                self.errors_found.append(f"{name}: Expected {expected_status}, got {response.status_code}")

            return success, response

        except requests.exceptions.RequestException as e:
            print(f"❌ Failed - Network Error: {str(e)}")
            self.errors_found.append(f"{name}: Network Error - {str(e)}")
            return False, None
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.errors_found.append(f"{name}: Error - {str(e)}")
            return False, None

    def test_root_endpoint(self):
        """Test the root API endpoint"""
        return self.run_test("Root API Endpoint", "GET", "api/", 200)

    def test_create_status_check(self):
        """Test creating a status check"""
        test_data = {
            "client_name": f"test_client_{datetime.now().strftime('%H%M%S')}"
        }
        success, response = self.run_test("Create Status Check", "POST", "api/status", 200, test_data)
        if success and response:
            try:
                data = response.json()
                return data.get('id')
            except:
                return None
        return None

    def test_get_status_checks(self):
        """Test getting all status checks"""
        return self.run_test("Get Status Checks", "GET", "api/status", 200)

    def test_cors_preflight(self):
        """Test CORS preflight request"""
        url = f"{self.base_url}/api/"
        headers = {
            'Origin': 'http://localhost:3000',
            'Access-Control-Request-Method': 'GET',
            'Access-Control-Request-Headers': 'Content-Type'
        }
        
        print(f"\n🔍 Testing CORS Preflight...")
        try:
            response = requests.options(url, headers=headers, timeout=10)
            print(f"CORS Status: {response.status_code}")
            print(f"CORS Headers: {dict(response.headers)}")
            
            if response.status_code in [200, 204]:
                self.tests_passed += 1
                print("✅ CORS Preflight Passed")
                return True
            else:
                print(f"❌ CORS Preflight Failed - Status: {response.status_code}")
                self.errors_found.append(f"CORS Preflight: Status {response.status_code}")
                return False
        except Exception as e:
            print(f"❌ CORS Preflight Failed - Error: {str(e)}")
            self.errors_found.append(f"CORS Preflight: Error - {str(e)}")
            return False

def main():
    print("🚀 Starting API Testing...")
    print("=" * 50)
    
    # Test production URL
    print("\n📡 Testing Production URL: https://support-contact-1.preview.emergentagent.com")
    tester = APITester("https://support-contact-1.preview.emergentagent.com")
    
    # Run all tests
    tester.test_root_endpoint()
    tester.test_cors_preflight()
    status_id = tester.test_create_status_check()
    tester.test_get_status_checks()
    
    # Test localhost as well
    print("\n" + "=" * 50)
    print("\n📡 Testing Local URL: http://localhost:8001")
    local_tester = APITester("http://localhost:8001")
    
    local_tester.test_root_endpoint()
    local_tester.test_cors_preflight()
    local_status_id = local_tester.test_create_status_check()
    local_tester.test_get_status_checks()
    
    # Combine results
    total_tests = tester.tests_run + local_tester.tests_run
    total_passed = tester.tests_passed + local_tester.tests_passed
    all_errors = tester.errors_found + local_tester.errors_found
    
    # Print final results
    print("\n" + "=" * 50)
    print("📊 FINAL TEST RESULTS")
    print("=" * 50)
    print(f"Total Tests Run: {total_tests}")
    print(f"Tests Passed: {total_passed}")
    print(f"Tests Failed: {total_tests - total_passed}")
    
    if all_errors:
        print("\n❌ ERRORS FOUND:")
        for error in all_errors:
            print(f"  - {error}")
    else:
        print("\n✅ No errors found in API testing")
    
    print("\n🔍 Looking for Error 11S or Spanish error messages...")
    error_11s_found = any("11s" in error.lower() for error in all_errors)
    spanish_errors_found = any("soporte" in error.lower() for error in all_errors)
    
    if error_11s_found:
        print("⚠️ ERROR 11S DETECTED!")
    if spanish_errors_found:
        print("⚠️ SPANISH ERROR MESSAGES DETECTED!")
    
    if not error_11s_found and not spanish_errors_found:
        print("ℹ️ No Error 11S or Spanish error messages found in API responses")
    
    return 0 if total_passed == total_tests else 1

if __name__ == "__main__":
    sys.exit(main())