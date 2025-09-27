export default function Footer() {
  return (
    <footer>
      {/* Navegación al final de la página */}
      <nav className="footer-nav">
        <a href="#hero">Inicio</a>
        <a href="#intro">Sobre Mí</a>
        <a href="#planes">Planes</a>
        <a href="#ofrendas">Ofrendas</a>
        <a href="#contacto">Contacto</a>
      </nav>
      
      <div className="container" style={{ textAlign: "center", marginTop: "2rem" }}>
        <p>© 2025 Zäe Selenya ✦ Todos los derechos reservados</p>
      </div>
    </footer>
  );
}