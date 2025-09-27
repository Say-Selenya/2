export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-avatar">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" alt="Zäe Selenya" />
      </div>

      <h1 className="hero-title title-glow">Zäe Selenya ✦</h1>
      <p className="hero-sub">Portal mágico de arte, energía y creación.</p>

      <div>
        <a className="btn-magic" href="#planes">Entrar al Portal</a>
        <a className="btn-magic" href="#intro">Ver Presentación</a>
      </div>
    </section>
  );
}