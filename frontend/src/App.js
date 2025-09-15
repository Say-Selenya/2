import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    // Crear el objeto de audio con música fumeta
    const audioObj = new Audio('https://cdn.pixabay.com/audio/2023/09/05/audio_3a41cefd3b.mp3');
    audioObj.loop = true;
    audioObj.volume = 0.3;
    setAudio(audioObj);

    return () => {
      if (audioObj) {
        audioObj.pause();
        audioObj.src = '';
      }
    };
  }, []);

  const toggleMusic = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="cosmic-portal">
      {/* Partículas Cósmicas de Fondo */}
      <div className="cosmic-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Alien Vaquero - Sello Personal */}
      <div className="alien-signature">
        <img 
          src="https://cdn.pixabay.com/photo/2024/03/09/17/17/alien-8623001_1280.png" 
          alt="Alien Kawaii" 
          className="alien-kawaii"
        />
      </div>

      {/* Control de Música Fumeta */}
      <div className="music-portal">
        <button 
          onClick={toggleMusic} 
          className={`cosmic-btn ${isPlaying ? 'playing' : ''}`}
        >
          <span className="btn-icon">{isPlaying ? '⏸️' : '▶️'}</span>
          <span className="btn-text">{isPlaying ? 'Pausar' : 'Fumeta'}</span>
        </button>
        {isPlaying && (
          <div className="cosmic-waves">
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
          </div>
        )}
      </div>

      {/* Banner Cósmico Principal */}
      <div className="cosmic-banner">
        <div className="mystical-overlay">
          <img 
            src="https://customer-assets.emergentagent.com/job_fcc6c48f-4aa0-419e-8e47-e34d99c0d792/artifacts/wzorduw3_B882A8E3-F69E-4774-9EA8-733A40B0EF9A.jpeg" 
            alt="Portal Místico" 
            className="portal-bg"
          />
          <div className="cosmic-gradient-overlay"></div>
        </div>
        
        {/* Contenido del Portal */}
        <div className="portal-content">
          <h1 className="cosmic-name">Zäe Selenya</h1>
          <p className="cosmic-tagline">~ Portal de Vibes Cósmicas ~</p>
          <div className="mystical-subtitle">Donde el misticismo se encuentra con beats alienígenas</div>
        </div>
      </div>

      {/* Perfil Cósmico */}
      <div className="cosmic-profile">
        <div className="profile-container">
          <div className="mystical-avatar">
            <img 
              src="https://customer-assets.emergentagent.com/job_fcc6c48f-4aa0-419e-8e47-e34d99c0d792/artifacts/v3v2qa9l_foto22.jpeg" 
              alt="Zäe Selenya" 
              className="avatar-image"
            />
            <div className="avatar-glow"></div>
          </div>
          
          <div className="profile-info">
            <h2 className="artist-name">Zäe Selenya</h2>
            <div className="cosmic-stats">
              <span className="stat">@zaeselenyea • 1.5K exploradores cósmicos</span>
            </div>
            <p className="cosmic-bio">
              🌌 Creadora de portales sonoros | 👽 Comunicadora intergaláctica | ✨ Guía de viajes astrales
            </p>
            
            <div className="cosmic-actions">
              <button className="subscribe-portal">SUSCRIBIRSE</button>
              <button className="join-dimension">UNIRSE</button>
              <button className="notification-crystal">🔔</button>
            </div>
          </div>
        </div>
      </div>

      {/* Portal de Contenido */}
      <div className="content-portal">
        <div className="portal-tabs">
          <div className="tab active">PORTAL</div>
          <div className="tab">DIMENSIONES</div>
          <div className="tab">CRISTALES</div>
          <div className="tab">MISTICISMO</div>
        </div>

        <div className="mystical-content">
          <h2 className="section-title">🌟 Últimas Transmisiones Cósmicas</h2>
          
          <div className="cosmic-grid">
            <div className="mystical-card">
              <div className="card-portal">
                <div className="portal-thumbnail">🛸</div>
                <div className="duration-crystal">15:33</div>
              </div>
              <div className="card-essence">
                <h3>Portal Alienígena #1</h3>
                <p>42K vibraciones • hace 3 lunas</p>
              </div>
            </div>

            <div className="mystical-card">
              <div className="card-portal">
                <div className="portal-thumbnail">🌌</div>
                <div className="duration-crystal">22:11</div>
              </div>
              <div className="card-essence">
                <h3>Meditación Galáctica</h3>
                <p>28K vibraciones • hace 1 semana</p>
              </div>
            </div>

            <div className="mystical-card">
              <div className="card-portal">
                <div className="portal-thumbnail">✨</div>
                <div className="duration-crystal">11:11</div>
              </div>
              <div className="card-essence">
                <h3>Código Estelar</h3>
                <p>69K vibraciones • hace 2 semanas</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Orbes Flotantes */}
      <div className="floating-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="orb orb-4"></div>
      </div>
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