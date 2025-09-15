import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [subscribers] = useState("1.2K");

  useEffect(() => {
    // Crear el objeto de audio con música fumeta
    const audioObj = new Audio('https://cdn.pixabay.com/audio/2023/09/05/audio_3a41cefd3b.mp3');
    audioObj.loop = true;
    audioObj.volume = 0.25;
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
    <div className="youtube-container">
      {/* Alien Vaquero - Esquina Superior Izquierda */}
      <div className="alien-cowboy">
        <img 
          src="https://cdn.pixabay.com/photo/2024/03/09/17/17/alien-8623001_1280.png" 
          alt="Alien Vaquero" 
          className="alien-waving"
        />
      </div>

      {/* Control de Música Fumeta */}
      <div className="music-control">
        <button 
          onClick={toggleMusic} 
          className={`play-btn ${isPlaying ? 'playing' : ''}`}
        >
          {isPlaying ? '⏸️' : '▶️'} 
          <span>{isPlaying ? 'Pausar' : 'Fumeta'}</span>
        </button>
        {isPlaying && (
          <div className="sound-waves">
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
          </div>
        )}
      </div>

      {/* Banner de Canal YouTuber */}
      <div className="channel-banner">
        <div className="banner-bg">
          <img 
            src="https://customer-assets.emergentagent.com/job_fcc6c48f-4aa0-419e-8e47-e34d99c0d792/artifacts/wzorduw3_B882A8E3-F69E-4774-9EA8-733A40B0EF9A.jpeg" 
            alt="Canal Banner" 
            className="banner-image"
          />
          <div className="banner-overlay"></div>
          <div className="banner-text">
            <div className="banner-title">ZAESTELAR</div>
            <div className="banner-subtitle">Cosmic Vibes & Alien Beats</div>
          </div>
        </div>
      </div>

      {/* Información del Canal */}
      <div className="channel-info">
        <div className="channel-content">
          {/* Foto de Perfil */}
          <div className="profile-section">
            <div className="profile-pic">
              <img 
                src="https://customer-assets.emergentagent.com/job_fcc6c48f-4aa0-419e-8e47-e34d99c0d792/artifacts/v3v2qa9l_foto22.jpeg" 
                alt="ZaestelaR Profile" 
                className="profile-image"
              />
            </div>
          </div>

          {/* Info del Canal */}
          <div className="channel-details">
            <h1 className="channel-name">ZaestelaR</h1>
            <div className="channel-stats">
              <span className="subscriber-count">@zaestelar • {subscribers} suscriptores</span>
            </div>
            <p className="channel-description">
              🌌 Cosmic Vibes & Alien Beats | 🛸 Space Cowboy Content | 🎵 Fumeta Music & Chill Sessions
            </p>
            
            {/* Botones de Acción */}
            <div className="action-buttons">
              <button className="subscribe-btn">SUSCRIBIRSE</button>
              <button className="join-btn">UNIRSE</button>
              <button className="notification-btn">🔔</button>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Videos/Contenido */}
      <div className="content-section">
        <div className="content-tabs">
          <div className="tab active">INICIO</div>
          <div className="tab">VIDEOS</div>
          <div className="tab">PLAYLISTS</div>
          <div className="tab">ACERCA DE</div>
        </div>

        {/* Videos Destacados */}
        <div className="featured-content">
          <h2>🎵 Latest Fumeta Sessions</h2>
          <div className="video-grid">
            
            <div className="video-card">
              <div className="video-thumbnail">
                <div className="thumbnail-bg">🛸</div>
                <div className="duration">12:34</div>
              </div>
              <div className="video-info">
                <h3>Alien Cowboy Vibes #1</h3>
                <p>45K visualizaciones • hace 2 días</p>
              </div>
            </div>

            <div className="video-card">
              <div className="video-thumbnail">
                <div className="thumbnail-bg">🎵</div>
                <div className="duration">8:45</div>
              </div>
              <div className="video-info">
                <h3>Cosmic Chill Session</h3>
                <p>23K visualizaciones • hace 5 días</p>
              </div>
            </div>

            <div className="video-card">
              <div className="video-thumbnail">
                <div className="thumbnail-bg">🤠</div>
                <div className="duration">15:22</div>
              </div>
              <div className="video-info">
                <h3>Space Western Mix</h3>
                <p>67K visualizaciones • hace 1 semana</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Partículas de Fondo */}
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
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