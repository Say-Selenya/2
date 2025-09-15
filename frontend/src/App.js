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
    <div className="portal-original">
      {/* Control de Música - Solo Icono (esquina) */}
      <div className="music-control">
        <button 
          onClick={toggleMusic} 
          className={`music-icon ${isPlaying ? 'playing' : ''}`}
        >
          {isPlaying ? '⏸️' : '▶️'}
        </button>
      </div>

      {/* Banner Grande con todos los elementos */}
      <div className="main-banner-large">
        <div className="banner-bg">
          <img 
            src="https://customer-assets.emergentagent.com/job_fcc6c48f-4aa0-419e-8e47-e34d99c0d792/artifacts/wzorduw3_B882A8E3-F69E-4774-9EA8-733A40B0EF9A.jpeg" 
            alt="Banner" 
            className="banner-background-img"
          />
          <div className="banner-dark-overlay"></div>
        </div>

        {/* Alien - Abajo Izquierda del Banner */}
        <div className="banner-alien-pos">
          <img 
            src="https://cdn.pixabay.com/photo/2024/03/09/17/17/alien-8623001_1280.png" 
            alt="Alien" 
            className="banner-alien-icon"
          />
        </div>

        {/* Emoticono Chica Rubia Grande - Centro */}
        <div className="banner-center-emoji">
          <span className="big-blonde-emoji">👱‍♀️</span>
        </div>

        {/* Suscribirse - Abajo Derecha */}
        <div className="banner-subscribe-pos">
          <button className="subscribe-button-banner">SUSCRIBIRSE</button>
        </div>
      </div>

      {/* Firma debajo del banner */}
      <div className="signature-below-banner">
        <h1 className="zae-selena-signature">Zäe Selena</h1>
      </div>

      {/* Video Primera Fila - Derecha */}
      <div className="first-row-video">
        <div className="video-container-right">
          <video 
            className="featured-video"
            controls
            poster="https://customer-assets.emergentagent.com/job_fcc6c48f-4aa0-419e-8e47-e34d99c0d792/artifacts/wzorduw3_B882A8E3-F69E-4774-9EA8-733A40B0EF9A.jpeg"
          >
            <source src="https://customer-assets.emergentagent.com/job_fcc6c48f-4aa0-419e-8e47-e34d99c0d792/artifacts/tfes6x5u_siriii.mp4" type="video/mp4" />
            Tu navegador no soporta video.
          </video>
        </div>
      </div>

      {/* Stats Personales */}
      <div className="personal-stats">
        <div className="stats-row">
          <div className="stat-box">
            <span className="stat-num">{explorers}</span>
            <span className="stat-text">Exploradores</span>
          </div>
          <div className="stat-box">
            <span className="stat-num">{visitors}</span>
            <span className="stat-text">Visitas Totales</span>
          </div>
        </div>
      </div>

      {/* Sección Artista Original (como en las fotos) */}
      <div className="artist-original-layout">
        <div className="artist-left-side">
          <div className="circular-profile">
            <img 
              src="https://customer-assets.emergentagent.com/job_fcc6c48f-4aa0-419e-8e47-e34d99c0d792/artifacts/v3v2qa9l_foto22.jpeg" 
              alt="Zäe Selena" 
              className="profile-circle-img"
            />
          </div>
          <h2 className="original-title">La Artista Detrás del Portal</h2>
          <p className="original-description">
            Este santuario será mi templo galáctico: luces, cámara, materiales para crear contenido visual, sensual y mágico. 
            Con tu ayuda, podré ofrecer contenido brutal, curaciones energéticas, y vivir de lo que me apasiona. 📸💜💜
          </p>
          
          <div className="original-features">
            <div className="feature-item-orig">
              <div className="feature-circle">✨</div>
              <span>creando mundos únicos</span>
            </div>
            <div className="feature-item-orig">
              <div className="feature-circle">🎮</div>
              <span>arte desde el corazón y diversidad... múltiples estilos</span>
            </div>
          </div>
        </div>

        {/* Video de Sombra - Derecha (como en las fotos) */}
        <div className="artist-right-side">
          <div className="shadow-video-container">
            <img 
              src="https://customer-assets.emergentagent.com/job_fcc6c48f-4aa0-419e-8e47-e34d99c0d792/artifacts/wzorduw3_B882A8E3-F69E-4774-9EA8-733A40B0EF9A.jpeg" 
              alt="Sombra Video" 
              className="shadow-video-img"
            />
            <div className="shadow-text-overlay">
              <p className="shadow-video-text">
                Sumérgete en el universo creativo de Zäe Selena<br/>
                <span className="shadow-video-sub">Una presentación íntima de la artista detrás del portal y su visión galáctica.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Entradas Mágicas (exacto como fotos) */}
      <div className="magical-entries-original">
        <h2 className="original-entries-title">
          Entradas Mágicas
          <span className="star-sparkle">✨</span>
        </h2>
        
        <div className="entries-grid-original">
          <div className="entry-frikilandia">
            <div className="entry-heart">💙</div>
            <h3>Frikilandia</h3>
          </div>
          
          <div className="entry-tragedias">
            <div className="entry-heart">🖤</div>
            <h3>Tragedias de<br/>Pesadillas</h3>
          </div>
          
          <div className="entry-kawaii">
            <div className="entry-heart">💚</div>
            <h3>Humor +<br/>Arte +<br/>Kawaii</h3>
          </div>
        </div>
      </div>

      {/* Sección Inferior Original (como fotos) */}
      <div className="bottom-original-layout">
        {/* Formulario Escríbeme - Izquierda */}
        <div className="escribeme-original">
          <div className="form-blue-container">
            <h3 className="escribeme-title">Escríbeme</h3>
            <div className="form-inputs-orig">
              <input type="text" placeholder="Tu nombre" className="input-orig" />
              <input type="email" placeholder="Tu correo" className="input-orig" />
              <textarea placeholder="Tu mensaje" className="textarea-orig"></textarea>
              <button className="send-orig">Enviar</button>
            </div>
          </div>
        </div>

        {/* Ofrendas - Derecha (exacto como fotos) */}
        <div className="ofrendas-original">
          <div className="crystal-orbs-top">
            <div className="purple-orb"></div>
            <div className="blue-orb"></div>
          </div>
          
          <h3 className="ofrendas-title-orig">Ofrendas</h3>
          
          <div className="pokeball-original">
            <div className="pokeball-orig">
              <div className="pokeball-red"></div>
              <div className="pokeball-white"></div>
              <div className="pokeball-middle-line"></div>
              <div className="pokeball-center-btn"></div>
            </div>
          </div>
          
          <p className="propina-text">Elige tu propina mágica:</p>
          
          <div className="amounts-original">
            {[5, 15, 25, 50, 100].map(amount => (
              <button 
                key={amount}
                className={`amount-circle ${selectedAmount === amount ? 'selected' : ''}`}
                onClick={() => handleAmountSelect(amount)}
              >
                {amount}€
              </button>
            ))}
          </div>
          
          <div className="custom-amount-orig">
            <input 
              type="number" 
              placeholder="Cantidad Personalizada"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedAmount(null);
              }}
              className="custom-input-orig"
            />
          </div>
          
          <p className="payment-methods-orig">Métodos de pago disponibles</p>
          <button className="donation-button-orig">Realizar Ofrenda</button>
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