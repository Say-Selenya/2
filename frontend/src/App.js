import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Home = () => {
  const [sslStatus, setSslStatus] = useState(null);
  const [connectionStatus, setConnectionStatus] = useState('connecting');
  const [healthCheck, setHealthCheck] = useState(null);
  
  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`, {
        timeout: 10000,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      console.log("✅ Backend Connected:", response.data.message);
      setConnectionStatus('connected');
    } catch (e) {
      console.error("❌ Backend Connection Failed:", e);
      setConnectionStatus('failed');
    }
  };

  const checkSSLStatus = async () => {
    try {
      const response = await axios.get(`${API}/ssl-status`, {
        timeout: 10000,
        headers: {
          'Accept': 'application/json'
        }
      });
      setSslStatus(response.data);
      console.log("🔒 SSL Status:", response.data);
    } catch (e) {
      console.error("❌ SSL Status Check Failed:", e);
    }
  };

  const performHealthCheck = async () => {
    try {
      const response = await axios.get(`${API}/health`, {
        timeout: 5000
      });
      setHealthCheck(response.data);
      console.log("💚 Health Check:", response.data);
    } catch (e) {
      console.error("❌ Health Check Failed:", e);
      setHealthCheck({ status: 'unhealthy', message: 'Connection failed' });
    }
  };

  useEffect(() => {
    const initializeApp = async () => {
      setConnectionStatus('connecting');
      await Promise.all([
        helloWorldApi(),
        checkSSLStatus(), 
        performHealthCheck()
      ]);
    };
    
    initializeApp();
    
    // Periodic health checks
    const healthInterval = setInterval(performHealthCheck, 30000);
    
    return () => clearInterval(healthInterval);
  }, []);

  return (
    <div>
      <header className="App-header">
        <a
          className="App-link"
          href="https://emergent.sh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://avatars.githubusercontent.com/in/1201222?s=120&u=2686cf91179bbafbc7a71bfbc43004cf9ae1acea&v=4" />
        </a>
        <p className="mt-5">Building something incredible ~!</p>
        
        {/* SSL Status Display */}
        {sslStatus && (
          <div className="mt-8 p-4 bg-green-900 bg-opacity-50 rounded-lg border border-green-500">
            <h3 className="text-lg font-semibold mb-2 text-green-400">🔒 SSL Status</h3>
            <div className="text-left text-sm space-y-1">
              <p><strong>SSL Enabled:</strong> {sslStatus.ssl_enabled ? '✅ Yes' : '❌ No'}</p>
              <p><strong>Protocol:</strong> {sslStatus.scheme?.toUpperCase()}</p>
              <p><strong>Host:</strong> {sslStatus.host}</p>
              <p><strong>URL:</strong> {window.location.href}</p>
              <p><strong>Secure Context:</strong> {window.isSecureContext ? '✅ Yes' : '❌ No'}</p>
            </div>
          </div>
        )}
        
        <div className="mt-4 text-sm text-gray-300">
          <p>🔐 Certificado SSL configurado con Let's Encrypt</p>
          <p>🛡️ Headers de seguridad activados</p>
        </div>
      </header>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
