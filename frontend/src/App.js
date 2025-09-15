import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [visitors] = useState(1247);
  const [explorers] = useState(892);

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

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  return (
    <div className="zae-selenya-portal">
      {/* Control de Música - Solo Icono */}
      <div className="music-control">
        <button 
          onClick={toggleMusic} 
          className={`music-btn ${isPlaying ? 'playing' : ''}`}
        >
          {isPlaying ? '⏸️' : '▶️'}
        </button>
      </div>

      {/* Banner Más Grande */}
      <div className="main-banner">
        <div className="banner-background">
          <img 
            src="https://customer-assets.emergentagent.com/job_fcc6c48f-4aa0-419e-8e47-e34d99c0d792/artifacts/wzorduw3_B882A8E3-F69E-4774-9EA8-733A40B0EF9A.jpeg" 
            alt="Banner Zäe Selena" 
            className="banner-img"
          />
          <div className="banner-gradient"></div>
        </div>

        {/* Alien Icono Abajo Izquierda del Banner */}
        <div className="banner-alien">
          <img 
            src="https://cdn.pixabay.com/photo/2024/03/09/17/17/alien-8623001_1280.png" 
            alt="Alien" 
            className="alien-icon"
          />
        </div>

        {/* Emoticono Grande Chica Rubia - Centro del Banner */}
        <div className="banner-emoji">
          <span className="blonde-emoji">👱‍♀️</span>
        </div>

        {/* Suscribirse Abajo Derecha del Banner */}
        <div className="banner-subscribe">
          <button className="subscribe-btn">SUSCRIBIRSE</button>
        </div>

        {/* Firma Abajo del Banner */}
        <div className="banner-signature">
          <h1 className="signature-name">Zäe Selena</h1>
        </div>
      </div>

      {/* Video Primera Fila - Derecha del Banner */}
      <div className="featured-video-section">
        <div className="video-player">
          <video 
            className="main-video"
            controls
            poster="https://customer-assets.emergentagent.com/job_fcc6c48f-4aa0-419e-8e47-e34d99c0d792/artifacts/wzorduw3_B882A8E3-F69E-4774-9EA8-733A40B0EF9A.jpeg"
          >
            <source src="https://customer-assets.emergentagent.com/job_fcc6c48f-4aa0-419e-8e47-e34d99c0d792/artifacts/tfes6x5u_siriii.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento video.
          </video>
        </div>
      </div>

      {/* Stats - Solo Exploradores y Visitas */}
      <div className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-number">{explorers}</span>
            <span className="stat-label">Exploradores</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{visitors}</span>
            <span className="stat-label">Visitas Totales</span>
          </div>
        </div>
      </div>

      {/* Sección Artista - Con Video de Sombra */}
      <div className="artist-section">
        <div className="artist-left">
          <div className="profile-container">
            <img 
              src="https://customer-assets.emergentagent.com/job_fcc6c48f-4aa0-419e-8e47-e34d99c0d792/artifacts/v3v2qa9l_foto22.jpeg" 
              alt="Zäe Selena Profile" 
              className="profile-image"
            />
          </div>
          <h2 className="artist-title">La Artista Detrás del Portal</h2>
          <p className="artist-description">
            Este santuario será mi templo galáctico: luces, cámara, materiales para crear contenido visual, sensual y mágico. 
            Con tu ayuda, podré ofrecer contenido brutal, curaciones energéticas, y vivir de lo que me apasiona. 📸💜💜
          </p>
          
          <div className="artist-features">
            <div className="feature-row">
              <div className="feature-icon">✨</div>
              <span>creando mundos únicos</span>
            </div>
            <div className="feature-row">
              <div className="feature-icon">🎮</div>
              <span>arte desde el corazón y diversidad... múltiples estilos</span>
            </div>
          </div>
        </div>

        <div className="artist-right">
          <div className="shadow-video">
            <img 
              src="https://customer-assets.emergentagent.com/job_fcc6c48f-4aa0-419e-8e47-e34d99c0d792/artifacts/wzorduw3_B882A8E3-F69E-4774-9EA8-733A40B0EF9A.jpeg" 
              alt="Video de Sombra" 
              className="shadow-image"
            />
            <div className="shadow-overlay">
              <p className="shadow-text">
                Sumérgete en el universo creativo de Zäe Selena<br/>
                <span className="shadow-subtitle">Una presentación íntima de la artista detrás del portal y su visión galáctica.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Entradas Mágicas */}
      <div className="magical-entries-section">
        <h2 className="entries-title">
          Entradas Mágicas
          <span className="sparkle">✨</span>
        </h2>
        
        <div className="entries-container">
          <div className="entry-card frikilandia-card">
            <div className="entry-icon">💙</div>
            <h3>Frikilandia</h3>
          </div>
          
          <div className="entry-card tragedias-card">
            <div className="entry-icon">🖤</div>
            <h3>Tragedias de<br/>Pesadillas</h3>
          </div>
          
          <div className="entry-card kawaii-card">
            <div className="entry-icon">💚</div>
            <h3>Humor +<br/>Arte +<br/>Kawaii</h3>
          </div>
        </div>
      </div>

      {/* Sección Inferior - Formulario y Ofrendas */}
      <div className="bottom-section">
        {/* Formulario Escríbeme */}
        <div className="contact-container">
          <div className="contact-form">
            <h3 className="contact-title">Escríbeme</h3>
            <div className="form-group">
              <input type="text" placeholder="Tu nombre" className="form-field" />
              <input type="email" placeholder="Tu correo" className="form-field" />
              <textarea placeholder="Tu mensaje" className="form-message"></textarea>
              <button className="send-button">Enviar</button>
            </div>
          </div>
        </div>

        {/* Ofrendas */}
        <div className="offerings-container">
          <div className="crystal-balls">
            <div className="crystal purple-crystal"></div>
            <div className="crystal blue-crystal"></div>
          </div>
          
          <h3 className="offerings-title">Ofrendas</h3>
          
          <div className="pokeball-center">
            <div className="pokeball">
              <div className="pokeball-upper"></div>
              <div className="pokeball-lower"></div>
              <div className="pokeball-band"></div>
              <div className="pokeball-button"></div>
            </div>
          </div>
          
          <p className="magic-tip">Elige tu propina mágica:</p>
          
          <div className="tip-amounts">
            {[5, 15, 25, 50, 100].map(amount => (
              <button 
                key={amount}
                className={`tip-btn ${selectedAmount === amount ? 'selected' : ''}`}
                onClick={() => handleAmountSelect(amount)}
              >
                {amount}€
              </button>
            ))}
          </div>
          
          <div className="custom-tip">
            <input 
              type="number" 
              placeholder="Cantidad Personalizada"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedAmount(null);
              }}
              className="custom-field"
            />
          </div>
          
          <p className="payment-info">Métodos de pago disponibles</p>
          <button className="donation-btn">Realizar Ofrenda</button>
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
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;