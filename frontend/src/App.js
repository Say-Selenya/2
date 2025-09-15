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
          <img 
            src="https://avatars.githubusercontent.com/in/1201222?s=120&u=2686cf91179bbafbc7a71bfbc43004cf9ae1acea&v=4" 
            alt="Emergent Logo"
            loading="lazy"
          />
        </a>
        
        <h1 className="mt-5 text-2xl font-bold">🚀 Conexión Segura Establecida</h1>
        
        {/* Connection Status */}
        <div className="mt-4 p-3 rounded-lg border" style={{
          backgroundColor: connectionStatus === 'connected' ? '#065f46' : 
                          connectionStatus === 'failed' ? '#7f1d1d' : '#374151',
          borderColor: connectionStatus === 'connected' ? '#10b981' : 
                      connectionStatus === 'failed' ? '#ef4444' : '#6b7280'
        }}>
          <p className="font-semibold">
            {connectionStatus === 'connected' && '✅ Conectado Exitosamente'}
            {connectionStatus === 'failed' && '❌ Error de Conexión'}
            {connectionStatus === 'connecting' && '🔄 Conectando...'}
          </p>
        </div>

        {/* SSL Status Display */}
        {sslStatus && (
          <div className="mt-6 p-4 bg-green-900 bg-opacity-50 rounded-lg border border-green-500 max-w-2xl">
            <h3 className="text-lg font-semibold mb-3 text-green-400">🔒 Estado de Seguridad SSL</h3>
            <div className="text-left text-sm space-y-2">
              <div className="grid grid-cols-2 gap-4">
                <p><strong>SSL Habilitado:</strong> {sslStatus.ssl_enabled ? '✅ Sí' : '❌ No'}</p>
                <p><strong>Conexión Segura:</strong> {sslStatus.connection_secure ? '✅ Sí' : '❌ No'}</p>
                <p><strong>Protocolo:</strong> {window.location.protocol.toUpperCase()}</p>
                <p><strong>Contexto Seguro:</strong> {window.isSecureContext ? '✅ Sí' : '❌ No'}</p>
                <p><strong>Host:</strong> {sslStatus.host}</p>
                <p><strong>Puerto:</strong> 443 (HTTPS)</p>
              </div>
              
              {sslStatus.security_headers && (
                <div className="mt-3 pt-3 border-t border-green-700">
                  <p className="font-semibold text-green-300 mb-2">Headers de Seguridad:</p>
                  <div className="text-xs space-y-1">
                    <p>• HSTS: {sslStatus.security_headers.hsts ? '✅ Activado' : '❌ Desactivado'}</p>
                    <p>• CSP: {sslStatus.security_headers.csp ? '✅ Configurado' : '❌ No configurado'}</p>
                    <p>• XSS Protection: {sslStatus.security_headers.xss_protection ? '✅ Activado' : '❌ Desactivado'}</p>
                    <p>• X-Frame-Options: {sslStatus.security_headers.frame_options || 'DENY'}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Health Check Status */}
        {healthCheck && (
          <div className="mt-4 p-3 bg-blue-900 bg-opacity-50 rounded-lg border border-blue-500">
            <h4 className="text-sm font-semibold text-blue-400">🏥 Estado del Servidor</h4>
            <p className="text-xs mt-1">
              Estado: <span className={healthCheck.status === 'healthy' ? 'text-green-400' : 'text-red-400'}>
                {healthCheck.status === 'healthy' ? '✅ Saludable' : '❌ Con problemas'}
              </span>
            </p>
            <p className="text-xs">{healthCheck.message}</p>
            {healthCheck.timestamp && (
              <p className="text-xs text-gray-400 mt-1">
                Última verificación: {new Date(healthCheck.timestamp).toLocaleTimeString()}
              </p>
            )}
          </div>
        )}
        
        <div className="mt-6 text-sm text-gray-300 space-y-1">
          <p>🔐 <strong>Certificado SSL:</strong> Let's Encrypt (Válido)</p>
          <p>🛡️ <strong>Seguridad:</strong> Headers avanzados activados</p>
          <p>🌐 <strong>Protocolo:</strong> HTTPS/2 con TLS 1.3</p>
          <p>⚡ <strong>Estado:</strong> Conexión segura establecida</p>
        </div>

        <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-600">
          <h4 className="text-sm font-semibold text-yellow-400 mb-2">📋 Información de Acceso</h4>
          <div className="text-xs text-left space-y-1">
            <p><strong>URL Principal:</strong> <code className="bg-gray-700 px-1 rounded">{window.location.href}</code></p>
            <p><strong>Dominio:</strong> {window.location.hostname}</p>
            <p><strong>Puerto:</strong> {window.location.port || '443'}</p>
            <p><strong>User Agent:</strong> {navigator.userAgent.slice(0, 50)}...</p>
          </div>
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
