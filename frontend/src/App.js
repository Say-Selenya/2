import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Home = () => {
  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log(response.data.message);
    } catch (e) {
      console.error(e, `errored out requesting / api`);
    }
  };

  useEffect(() => {
    helloWorldApi();
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-black rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-900 rounded-full opacity-30 blur-2xl"></div>
      </div>
      
      {/* Header */}
      <header className="relative z-10 text-white">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full border-4 border-white/30 overflow-hidden">
                <img 
                  src="https://customer-assets.emergentagent.com/job_fcc6c48f-4aa0-419e-8e47-e34d99c0d792/artifacts/6dvg2vp9_PHOTO-2025-09-15-17-18-41.jpg" 
                  alt="Zae Selena"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-4xl font-bold tracking-wide">Zae Selena</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-sm">👥 1,050 Exploradores</span>
              </span>
              <button className="bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded-full font-semibold text-sm transition-colors">
                SUSCRIBIRSE
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Artist Section */}
          <div className="mb-12">
            <div className="flex items-center space-x-6 mb-8">
              <div className="w-32 h-32 rounded-full border-4 border-white/50 overflow-hidden shadow-2xl">
                <img 
                  src="https://customer-assets.emergentagent.com/job_fcc6c48f-4aa0-419e-8e47-e34d99c0d792/artifacts/6dvg2vp9_PHOTO-2025-09-15-17-18-41.jpg" 
                  alt="Zae Selena"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">La Artista Detrás del Portal</h2>
                <p className="text-lg text-white/90 leading-relaxed">
                  Este santuario será mi templo galáctico: luces, cámara.
                </p>
              </div>
            </div>
          </div>

          {/* Video Portal Section */}
          <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="aspect-video bg-gradient-to-br from-orange-600 to-red-700 rounded-xl relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors group">
                  <svg className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
              
              {/* Video Controls */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button className="text-white hover:text-orange-300 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                  <button className="text-white hover:text-orange-300 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                    </svg>
                  </button>
                  <button className="text-white hover:text-orange-300 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7z"/>
                    </svg>
                  </button>
                </div>
                
                <div className="flex-1 mx-4">
                  <div className="w-full bg-white/20 rounded-full h-1">
                    <div className="bg-white w-1/3 h-1 rounded-full"></div>
                  </div>
                </div>
                
                <button className="text-white hover:text-orange-300 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Cosmic Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-white/50 rounded-full"></div>
            <div className="w-3 h-3 bg-white/30 rounded-full"></div>
          </div>
          
        </div>
      </main>
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
