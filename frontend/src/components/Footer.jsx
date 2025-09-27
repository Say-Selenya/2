export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <a href="#hero">Inicio</a>
          <a href="#intro">Sobre Mí</a>
          <a href="#planes">Servicios</a>
          <a href="#contacto">Contacto</a>
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <span style={{ color: '#ff6ec7', fontSize: '1.2rem' }}>✦ Zäe Selenya ✦</span>
        </div>
        
        <div style={{ opacity: 0.7, fontSize: '0.9rem' }}>
          <p>Portal Mágico de Arte, Energía y Creación</p>
          <p>© 2024 - Creado con amor y magia ✨</p>
        </div>
        
        <div style={{ marginTop: '1rem', fontSize: '0.8rem', opacity: 0.5 }}>
          <p>Powered by Emergent | Made with 💜</p>
        </div>
      </div>
    </footer>
  );
}