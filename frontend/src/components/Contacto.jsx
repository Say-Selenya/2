import { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    servicio: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    alert('¡Gracias por tu mensaje! Te responderé pronto ✨');
    setFormData({ nombre: '', email: '', servicio: '', mensaje: '' });
  };

  return (
    <div>
      <h2 className="title-glow" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Conecta Conmigo 💫
      </h2>
      <p style={{ textAlign: 'center', marginBottom: '3rem', opacity: 0.9 }}>
        ¿Listo para comenzar tu viaje mágico? Envíame un mensaje
      </p>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre Mágico</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            placeholder="¿Cómo te llamas?"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Sagrado</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="tu@email.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="servicio">Servicio de Interés</label>
          <select
            id="servicio"
            name="servicio"
            value={formData.servicio}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.8rem',
              borderRadius: '8px',
              border: '1px solid rgba(108, 99, 255, 0.3)',
              background: 'rgba(255, 255, 255, 0.05)',
              color: '#fff',
              fontSize: '1rem'
            }}
          >
            <option value="">Selecciona un servicio</option>
            <option value="portal-basico">Portal Básico</option>
            <option value="portal-mistico">Portal Místico</option>
            <option value="portal-supremo">Portal Supremo</option>
            <option value="arte-energetico">Arte Energético</option>
            <option value="sesion-sanacion">Sesión de Sanación</option>
            <option value="ritual-personalizado">Ritual Personalizado</option>
            <option value="consulta-mistica">Consulta Mística</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Mensaje del Alma</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
            rows="5"
            placeholder="Cuéntame sobre tu búsqueda espiritual..."
          />
        </div>

        <div style={{ textAlign: 'center' }}>
          <button type="submit" className="btn-magic" style={{ fontSize: '1.1rem' }}>
            Enviar Energía ✨
          </button>
        </div>
      </form>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <h3 style={{ color: '#ff6ec7', marginBottom: '1rem' }}>Otras Formas de Conectar</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="mailto:zae@selenya.com" className="btn-magic" style={{ textDecoration: 'none' }}>
            📧 Email
          </a>
          <a href="#" className="btn-magic" style={{ textDecoration: 'none' }}>
            📱 Instagram
          </a>
          <a href="#" className="btn-magic" style={{ textDecoration: 'none' }}>
            💜 Discord
          </a>
        </div>
      </div>
    </div>
  );
}