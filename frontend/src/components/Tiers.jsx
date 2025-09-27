export default function Tiers() {
  const tiers = [
    {
      name: "Portal Básico",
      price: "$15",
      features: [
        "Acceso a contenido básico",
        "Meditaciones guiadas",
        "Arte digital mensual",
        "Comunidad privada"
      ]
    },
    {
      name: "Portal Místico",
      price: "$35",
      features: [
        "Todo del Portal Básico",
        "Sesiones de energía personalizadas",
        "Contenido exclusivo premium",
        "Consultas mensuales",
        "Arte digital premium"
      ]
    },
    {
      name: "Portal Supremo",
      price: "$75",
      features: [
        "Todo del Portal Místico",
        "Sesiones 1:1 semanales",
        "Creaciones artísticas únicas",
        "Rituales personalizados",
        "Acceso VIP completo"
      ]
    }
  ];

  return (
    <div>
      <h2 className="title-glow" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Portales de Acceso ⚡
      </h2>
      <p style={{ textAlign: 'center', marginBottom: '3rem', opacity: 0.9 }}>
        Elige tu nivel de inmersión en este universo mágico
      </p>
      
      <div className="tiers-grid">
        {tiers.map((tier, index) => (
          <div key={index} className="tier-card">
            <h3 className="tier-title">{tier.name}</h3>
            <div className="tier-price">{tier.price}</div>
            <ul className="tier-features">
              {tier.features.map((feature, idx) => (
                <li key={idx}>✦ {feature}</li>
              ))}
            </ul>
            <a href="#contacto" className="btn-magic" style={{ marginTop: '1rem' }}>
              Elegir Portal
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}