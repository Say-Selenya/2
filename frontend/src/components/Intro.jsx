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
        
        {/* Espacio para video a la derecha */}
        <div className="intro-video">
          <div className="video-placeholder">
            <p>🎬 Video de Entrada</p>
            <p>(Próximamente)</p>
          </div>
        </div>
      </div>
    </div>
  );
}