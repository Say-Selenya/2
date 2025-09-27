export default function Hero() {
  return (
    <section className="hero">
      {/* Reproductor de música en esquina superior derecha */}
      <div className="music-player">
        <audio controls preload="metadata">
          <source src="#" type="audio/mpeg" />
          {/* Aquí irá tu archivo de música cuando lo subas */}
          Tu navegador no soporta el elemento de audio.
        </audio>
      </div>

      {/* Nombre como firma */}
      <h1 className="hero-title title-glow">Zäe Selenya ✦</h1>
    </section>
  );
}