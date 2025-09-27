export default function Ofrendas() {
  const ofrendas = [
    {
      title: "Arte Energético Digital",
      description: "Creaciones únicas canalizadas especialmente para ti",
      price: "Desde $25",
      emoji: "🎨"
    },
    {
      title: "Sesiones de Sanación",
      description: "Trabajo energético personalizado y transformador",
      price: "Desde $60",
      emoji: "✨"
    },
    {
      title: "Rituales Personalizados",
      description: "Ceremonias mágicas diseñadas para tus intenciones",
      price: "Desde $40",
      emoji: "🌙"
    },
    {
      title: "Consultas Místicas",
      description: "Orientación espiritual y lecturas intuitivas",
      price: "Desde $35",
      emoji: "🔮"
    }
  ];

  return (
    <div>
      <h2 className="title-glow" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Ofrendas Sagradas 🌟
      </h2>
      <p style={{ textAlign: 'center', marginBottom: '3rem', opacity: 0.9 }}>
        Servicios únicos para tu crecimiento espiritual y creativo
      </p>
      
      <div className="tiers-grid">
        {ofrendas.map((ofrenda, index) => (
          <div key={index} className="tier-card">
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{ofrenda.emoji}</div>
            <h3 className="tier-title">{ofrenda.title}</h3>
            <p style={{ marginBottom: '1rem', opacity: 0.8, minHeight: '3rem' }}>
              {ofrenda.description}
            </p>
            <div className="tier-price" style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>
              {ofrenda.price}
            </div>
            <a href="#contacto" className="btn-magic">
              Solicitar
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}