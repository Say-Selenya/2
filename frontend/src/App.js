import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');

  useEffect(() => {
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
    <div className="original-portal">
      {/* Botón música solo icono - esquina superior derecha */}
      <div className="music-corner">
        <button 
          onClick={toggleMusic} 
          className={`music-only-icon ${isPlaying ? 'playing' : ''}`}
        >
          {isPlaying ? '⏸️' : '▶️'}
        </button>
      </div>

      {/* Banner grande como en las fotos */}
      <div className="photo-banner">
        <img 
          src="https://customer-assets.emergentagent.com/job_fcc6c48f-4aa0-419e-8e47-e34d99c0d792/artifacts/wzorduw3_B882A8E3-F69E-4774-9EA8-733A40B0EF9A.jpeg" 
          alt="Banner" 
          className="photo-banner-img"
        />
        <div className="photo-banner-overlay"></div>
        
        {/* Alien abajo izquierda del banner */}
        <div className="photo-alien-corner">
          <img 
            src="https://cdn.pixabay.com/photo/2024/03/09/17/17/alien-8623001_1280.png" 
            alt="Alien" 
            className="photo-alien"
          />
        </div>

        {/* Emoticono chica rubia grande centro */}
        <div className="photo-center-emoji">
          <span className="photo-blonde">👱‍♀️</span>
        </div>

        {/* Suscribirse abajo derecha del banner */}
        <div className="photo-subscribe-corner">
          <button className="photo-subscribe-btn">SUSCRIBIRSE</button>
        </div>
      </div>

      {/* Firma Zäe Selena debajo del banner */}
      <div className="photo-signature">
        <h1 className="photo-name">Zäe Selena</h1>
      </div>

      {/* Tu video primera fila derecha */}
      <div className="photo-video-row">
        <div className="photo-video-right">
          <video 
            className="photo-your-video"
            controls
            poster="https://customer-assets.emergentagent.com/job_fcc6c48f-4aa0-419e-8e47-e34d99c0d792/artifacts/wzorduw3_B882A8E3-F69E-4774-9EA8-733A40B0EF9A.jpeg"
          >
            <source src="https://customer-assets.emergentagent.com/job_fcc6c48f-4aa0-419e-8e47-e34d99c0d792/artifacts/tfes6x5u_siriii.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Stats solo exploradores y visitas */}
      <div className="photo-stats">
        <div className="photo-stats-grid">
          <div className="photo-stat">
            <span className="photo-stat-num">892</span>
            <span className="photo-stat-label">Exploradores</span>
          </div>
          <div className="photo-stat">
            <span className="photo-stat-num">1,247</span>
            <span className="photo-stat-label">Visitas Totales</span>
          </div>
        </div>  
      </div>

      {/* Layout exacto de las fotos - dos columnas */}
      <div className="photo-main-layout">
        {/* Columna izquierda - perfil y descripción */}
        <div className="photo-left-col">
          <div className="photo-profile-pic">
            <img 
              src="https://customer-assets.emergentagent.com/job_fcc6c48f-4aa0-419e-8e47-e34d99c0d792/artifacts/v3v2qa9l_foto22.jpeg" 
              alt="Profile" 
              className="photo-profile-img"
            />
          </div>
          <h2 className="photo-artist-title">La Artista Detrás del Portal</h2>
          <p className="photo-description">
            Este santuario será mi templo galáctico: luces, cámara, materiales para crear contenido visual, sensual y mágico. 
            Con tu ayuda, podré ofrecer contenido brutal, curaciones energéticas, y vivir de lo que me apasiona. 📸💜💜
          </p>
          
          <div className="photo-features">
            <div className="photo-feature">
              <div className="photo-feature-icon">✨</div>
              <span>creando mundos únicos</span>
            </div>
            <div className="photo-feature">
              <div className="photo-feature-icon">🎮</div>
              <span>arte desde el corazón y diversidad... múltiples estilos</span>
            </div>
          </div>
        </div>

        {/* Columna derecha - video de sombra como en fotos */}
        <div className="photo-right-col">
          <div className="photo-shadow-video">
            <img 
              src="https://customer-assets.emergentagent.com/job_fcc6c48f-4aa0-419e-8e47-e34d99c0d792/artifacts/wzorduw3_B882A8E3-F69E-4774-9EA8-733A40B0EF9A.jpeg" 
              alt="Shadow" 
              className="photo-shadow-img"
            />
            <div className="photo-shadow-text">
              <p>
                Sumérgete en el universo creativo de Zäe Selena<br/>
                <span className="photo-shadow-sub">Una presentación íntima de la artista detrás del portal y su visión galáctica.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Entradas Mágicas exacto como fotos */}
      <div className="photo-entries">
        <h2 className="photo-entries-title">
          Entradas Mágicas
          <span className="photo-sparkle">✨</span>
        </h2>
        
        <div className="photo-entries-grid">
          <div className="photo-entry photo-friki">
            <div className="photo-entry-icon">💙</div>
            <h3>Frikilandia</h3>
          </div>
          
          <div className="photo-entry photo-dark">
            <div className="photo-entry-icon">🖤</div>
            <h3>Tragedias de<br/>Pesadillas</h3>
          </div>
          
          <div className="photo-entry photo-kawaii">
            <div className="photo-entry-icon">💚</div>
            <h3>Humor +<br/>Arte +<br/>Kawaii</h3>
          </div>
        </div>
      </div>

      {/* Layout inferior exacto como fotos */}
      <div className="photo-bottom-layout">
        {/* Formulario izquierda exacto como foto */}
        <div className="photo-form-section">
          <div className="photo-form-blue">
            <h3 className="photo-form-title">Escríbeme</h3>
            <div className="photo-form-fields">
              <input type="text" placeholder="Tu nombre" className="photo-input" />
              <input type="email" placeholder="Tu correo" className="photo-input" />
              <textarea placeholder="Tu mensaje" className="photo-textarea"></textarea>
              <button className="photo-send-btn">Enviar</button>
            </div>
          </div>
        </div>

        {/* Ofrendas derecha exacto como foto */}
        <div className="photo-offerings-section">
          <div className="photo-crystals">
            <div className="photo-crystal photo-purple"></div>
            <div className="photo-crystal photo-blue"></div>
          </div>
          
          <h3 className="photo-offerings-title">Ofrendas</h3>
          
          <div className="photo-pokeball-container">
            <div className="photo-pokeball">
              <div className="photo-pokeball-top"></div>
              <div className="photo-pokeball-bottom"></div>
              <div className="photo-pokeball-line"></div>
              <div className="photo-pokeball-btn"></div>
            </div>
          </div>
          
          <p className="photo-tip-text">Elige tu propina mágica:</p>
          
          <div className="photo-tip-circles">
            {[5, 15, 25, 50, 100].map(amount => (
              <button 
                key={amount}
                className={`photo-tip-circle ${selectedAmount === amount ? 'selected' : ''}`}
                onClick={() => handleAmountSelect(amount)}
              >
                {amount}€
              </button>
            ))}
          </div>
          
          <div className="photo-custom">
            <input 
              type="number" 
              placeholder="Cantidad Personalizada"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedAmount(null);
              }}
              className="photo-custom-input"
            />
          </div>
          
          <p className="photo-payment-text">Métodos de pago disponibles</p>
          <button className="photo-donate-btn">Realizar Ofrenda</button>
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