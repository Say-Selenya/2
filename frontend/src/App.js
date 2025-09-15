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
    <div className="cosmic-container">
      {/* Alien Vaquero - Esquina Superior Izquierda */}
      <div className="alien-cowboy">
        <img 
          src="https://cdn.pixabay.com/photo/2024/03/09/17/17/alien-8623001_1280.png" 
          alt="Alien Vaquero Saludando" 
          className="alien-waving"
        />
      </div>

      {/* Banner Principal */}
      <div className="main-banner">
        <h1 className="cosmic-title">🌌 ZAESTELAR.COM 🌌</h1>
        <p className="cosmic-subtitle">~ Tu portal hacia las estrellas ~</p>
      </div>

      {/* Control de Música */}
      <div className="music-control">
        <button 
          onClick={toggleMusic} 
          className={`play-btn ${isPlaying ? 'playing' : ''}`}
        >
          {isPlaying ? '⏸️' : '▶️'} 
          <span>{isPlaying ? 'Pausar' : 'Música Fumeta'}</span>
        </button>
        <div className="sound-waves">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </div>

      {/* Contenido Central */}
      <div className="cosmic-content">
        <div className="space-card">
          <h2>🛸 Bienvenido al Espacio Intergaláctico</h2>
          <p>Donde los aliens vaqueros y la música fumeta se encuentran</p>
          
          <div className="features">
            <div className="feature">
              <span className="icon">👽</span>
              <span>Alien Friendly</span>
            </div>
            <div className="feature">
              <span className="icon">🤠</span>
              <span>Estilo Vaquero</span>
            </div>
            <div className="feature">
              <span className="icon">🎵</span>
              <span>Beats Cósmicos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Estrellas de Fondo */}
      <div className="stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
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