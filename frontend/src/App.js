import { useEffect, useState } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Home = () => {
  const [backendStatus, setBackendStatus] = useState("Connecting...");
  
  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log(response.data.message);
      setBackendStatus("✅ Backend Connected: " + response.data.message);
    } catch (e) {
      console.error(e, `errored out requesting / api`);
      setBackendStatus("❌ Backend Connection Failed");
    }
  };

  useEffect(() => {
    helloWorldApi();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
      <div className="text-center space-y-8 p-8">
        {/* Main Title */}
        <h1 className="text-6xl font-bold text-white mb-4">
          ¡Página Visible! 👀
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-3xl text-blue-300 mb-8">
          La aplicación está funcionando correctamente
        </h2>
        
        {/* Status Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
          <div className="text-xl text-white mb-4">Estado de la aplicación:</div>
          <div className="text-lg text-green-300 font-mono">{backendStatus}</div>
        </div>
        
        {/* Visual Elements */}
        <div className="flex justify-center items-center space-x-4 mt-8">
          <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-white text-lg">Sistema Online</span>
          <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
        </div>
        
        {/* Emergent Logo */}
        <div className="mt-12">
          <a
            href="https://emergent.sh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform hover:scale-105"
          >
            <img 
              src="https://avatars.githubusercontent.com/in/1201222?s=120&u=2686cf91179bbafbc7a71bfbc43004cf9ae1acea&v=4" 
              alt="Emergent"
              className="w-20 h-20 rounded-lg mx-auto"
            />
          </a>
          <p className="text-blue-200 mt-4">Powered by Emergent</p>
        </div>
        
        {/* Big Success Message */}
        <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-6 mt-8">
          <div className="text-2xl text-green-300 font-bold">
            🎉 ¡SUCCESS! La página se ve correctamente
          </div>
          <div className="text-green-200 mt-2">
            URL: https://pagina-view.preview.emergentagent.com
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;