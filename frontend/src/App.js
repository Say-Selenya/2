import "./Clean.css";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
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

        <section id="intro" className="container">
          <Intro />
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