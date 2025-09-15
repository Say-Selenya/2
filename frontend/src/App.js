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
    <div className="main-container">
      {/* Alien Vaquero - Esquina Superior Izquierda */}
      <div className="alien-cowboy">
        <img 
          src="https://cdn.pixabay.com/photo/2024/03/09/17/17/alien-8623001_1280.png" 
          alt="Alien Vaquero Saludando" 
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
          <span>{isPlaying ? 'Pausar Fumeta' : 'Play Fumeta'}</span>
        </button>
        {isPlaying && (
          <div className="sound-waves">
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
          </div>
        )}
      </div>

      {/* Banner Principal Tipo YouTube */}
      <div className="hero-banner">
        <div className="banner-image">
          <img 
            src="https://customer-assets.emergentagent.com/job_fcc6c48f-4aa0-419e-8e47-e34d99c0d792/artifacts/wzorduw3_B882A8E3-F69E-4774-9EA8-733A40B0EF9A.jpeg" 
            alt="Banner Artístico" 
            className="main-banner-img"
          />
          <div className="banner-overlay">
            <div className="banner-content">
              <h1 className="main-title">ZAESTELAR</h1>
              <p className="main-subtitle">COSMIC VIBES & ALIEN BEATS</p>
              <div className="subtitle-extra">~ Where space meets sound ~</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido Inferior */}
      <div className="bottom-content">
        <div className="info-cards">
          <div className="info-card">
            <div className="card-icon">🛸</div>
            <h3>Alien Territory</h3>
            <p>Bienvenido al espacio intergaláctico donde los aliens vaqueros dominan</p>
          </div>
          
          <div className="info-card">
            <div className="card-icon">🎵</div>
            <h3>Fumeta Beats</h3>
            <p>Música cósmica y ritmos espaciales para elevar tu consciencia</p>
          </div>
          
          <div className="info-card">
            <div className="card-icon">🤠</div>
            <h3>Cowboy Style</h3>
            <p>La fusión perfecta entre el salvaje oeste y el espacio exterior</p>
          </div>
        </div>
      </div>

      {/* Partículas flotantes */}
      <div className="particles">
        <div className="particle"></div>
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