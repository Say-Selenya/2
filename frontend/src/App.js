import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');

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
    <div className="galactic-sanctuary">
      {/* Alien Kawaii - Esquina Superior Izquierda */}
      <div className="alien-corner">
        <img 
          src="https://cdn.pixabay.com/photo/2024/03/09/17/17/alien-8623001_1280.png" 
          alt="Alien Kawaii" 
          className="alien-mascot"
        />
      </div>

      {/* Control de Música */}
      <div className="music-corner">
        <button 
          onClick={toggleMusic} 
          className={`music-btn ${isPlaying ? 'playing' : ''}`}
        >
          {isPlaying ? '⏸️' : '▶️'} Fumeta
        </button>
      </div>

      {/* Sección Principal - Portal Artist */}
      <div className="portal-main">
        <div className="artist-presentation">
          <div className="artist-profile">
            <div className="profile-circle">
              <img 
                src="https://customer-assets.emergentagent.com/job_fcc6c48f-4aa0-419e-8e47-e34d99c0d792/artifacts/v3v2qa9l_foto22.jpeg" 
                alt="Zäe Selenya Profile" 
                className="profile-img"
              />
            </div>
            <h1 className="portal-title">La Artista Detrás del Portal</h1>
            <p className="sanctuary-description">
              Este santuario será mi templo galáctico: luces, cámara, materiales para crear contenido visual, sensual y mágico. 
              Con tu ayuda, podré ofrecer contenido brutal, curaciones energéticas, y vivir de lo que me apasiona. 📸💜💜
            </p>
            
            <div className="artist-features">
              <div className="feature-item">
                <div className="feature-icon">✨</div>
                <span>creando mundos únicos</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎮</div>
                <span>arte desde el corazón y diversidad... múltiples estilos</span>
              </div>
            </div>
          </div>

          <div className="vision-video">
            <div className="video-container">
              <img 
                src="https://customer-assets.emergentagent.com/job_fcc6c48f-4aa0-419e-8e47-e34d99c0d792/artifacts/wzorduw3_B882A8E3-F69E-4774-9EA8-733A40B0EF9A.jpeg" 
                alt="Visión Galáctica" 
                className="vision-bg"
              />
              <div className="video-overlay">
                <p className="vision-text">
                  Sumérgete en el universo creativo de Zäe Selenya<br/>
                  <span className="vision-subtitle">Una presentación íntima de la artista detrás del portal y su visión galáctica.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Entradas Mágicas */}
      <div className="magical-entries">
        <h2 className="section-title">
          Entradas Mágicas
          <span className="magic-sparkle">✨</span>
        </h2>
        
        <div className="entries-grid">
          <div className="entry-card frikilandia">
            <div className="card-icon">💙</div>
            <h3>Frikilandia</h3>
          </div>
          
          <div className="entry-card tragedias">
            <div className="card-icon">🖤</div>
            <h3>Tragedias de<br/>Pesadillas</h3>
          </div>
          
          <div className="entry-card kawaii">
            <div className="card-icon">💚</div>
            <h3>Humor +<br/>Arte +<br/>Kawaii</h3>
          </div>
        </div>
      </div>

      {/* Formulario Escríbeme */}
      <div className="contact-section">
        <div className="contact-form">
          <h3 className="form-title">Escríbeme</h3>
          <div className="form-fields">
            <input type="text" placeholder="Tu nombre" className="form-input" />
            <input type="email" placeholder="Tu correo" className="form-input" />
            <textarea placeholder="Tu mensaje" className="form-textarea"></textarea>
            <button className="send-btn">Enviar</button>
          </div>
        </div>

        {/* Ofrendas */}
        <div className="offerings-section">
          <div className="crystal-orbs">
            <div className="orb orb-purple"></div>
            <div className="orb orb-blue"></div>
          </div>
          
          <h3 className="offerings-title">Ofrendas</h3>
          
          <div className="pokeball-container">
            <div className="pokeball">
              <div className="pokeball-top"></div>
              <div className="pokeball-middle"></div>
              <div className="pokeball-bottom"></div>
              <div className="pokeball-center"></div>
            </div>
          </div>
          
          <p className="offerings-subtitle">Elige tu propina mágica:</p>
          
          <div className="amount-options">
            {[5, 15, 25, 50, 100].map(amount => (
              <button 
                key={amount}
                className={`amount-btn ${selectedAmount === amount ? 'selected' : ''}`}
                onClick={() => handleAmountSelect(amount)}
              >
                {amount}€
              </button>
            ))}
          </div>
          
          <div className="custom-amount">
            <input 
              type="number" 
              placeholder="Cantidad Personalizada"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedAmount(null);
              }}
              className="custom-input"
            />
          </div>
          
          <p className="payment-methods">Métodos de pago disponibles</p>
          <button className="donate-btn">Realizar Ofrenda</button>
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