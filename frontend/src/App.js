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

        <section id="sexy-photo" className="container">
          <div className="sexy-photo-section">
            <img 
              src="https://customer-assets.emergentagent.com/job_pagina-view/artifacts/86xpvka5_sexy.jpg" 
              alt="Sexy" 
              className="sexy-image"
            />
            <div className="bubble-symbol">💬</div>
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