export default function Intro() {
  return (
    <div className="intro-section">
      <h2 className="title-glow">Bienvenida ✨</h2>
      
      <div className="intro-content">
        {/* Texto a la izquierda */}
        <div className="intro-text">
          <p>
            Este santuario será mi templo galáctico: luces, cámara, materiales para crear contenido visual, sensual y mágico.
          </p>
          <p>
            Con tu ayuda, podré ofrecer contenido brutal, curaciones energéticas, y vivir de lo que me apasiona. 📸💜
          </p>
        </div>
        
        {/* Video de entrada a la derecha */}
        <div className="intro-video">
          <video 
            className="entrada-video"
            controls 
            poster=""
            style={{
              width: '100%',
              maxWidth: '400px',
              borderRadius: '12px',
              boxShadow: '0 8px 25px rgba(108, 99, 255, 0.3)'
            }}
          >
            <source src="https://customer-assets.emergentagent.com/job_pagina-view/artifacts/1ff13rjc_videoprincipal.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      </div>
    </div>
  );
}