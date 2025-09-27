import "./Clean.css";
import Hero from "./components/Hero";
import Ofrendas from "./components/Ofrendas";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="content-section" className="container">
          <div className="main-content">
            {/* Foto pequeña en burbuja arriba */}
            <div className="top-photo-section">
              <div className="bubble-photo-container">
                <img 
                  src="https://customer-assets.emergentagent.com/job_pagina-view/artifacts/86xpvka5_sexy.jpg" 
                  alt="Sexy" 
                  className="bubble-image"
                />
              </div>
            </div>

            {/* Descripción del templo galáctico */}
            <div className="description-section">
              <h2 className="title-glow">Bienvenida ✨</h2>
              <p>
                Este santuario será mi templo galáctico: luces, cámara, materiales para crear contenido visual, sensual y mágico.
              </p>
              <p>
                Con tu ayuda, podré ofrecer contenido brutal, curaciones energéticas, y vivir de lo que me apasiona. 📸💜
              </p>
            </div>

            {/* Video centrado */}
            <div className="video-section-centered">
              <video 
                className="entrada-video"
                controls 
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  borderRadius: '12px',
                  boxShadow: '0 8px 25px rgba(108, 99, 255, 0.3)'
                }}
              >
                <source src="https://customer-assets.emergentagent.com/job_pagina-view/artifacts/1ff13rjc_videoprincipal.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
          </div>
        </section>

        <section id="ofrendas" className="container">
          <Ofrendas />
        </section>

        <section id="contacto" className="container">
          <Contacto />
        </section>
      </main>
      <Footer />
    </>
  );
}