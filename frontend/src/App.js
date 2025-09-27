import "./Clean.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Ofrendas from "./components/Ofrendas";
import Tiers from "./components/Tiers";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="hero" className="container">
          <Hero />
        </section>

        <section id="intro" className="container">
          <Intro />
        </section>

        <section id="planes" className="container">
          <Tiers />
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