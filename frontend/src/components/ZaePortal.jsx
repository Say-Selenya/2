import React from 'react';

const ZaePortal = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      
      {/* BANNER ESTILO YOUTUBE */}
      <section className="relative h-[40vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://customer-assets.emergentagent.com/job_6d890d5b-566e-4269-8a6d-68191d008ad7/artifacts/solnv0sw_PHOTO-2025-09-18-21-30-44.jpg')`
          }}
        >
          {/* Overlay sutil */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-gray-900/20"></div>
        </div>
      </section>

      {/* SECCIÓN "LA ARTISTA DETRÁS DEL PORTAL" */}
      <section 
        className="py-16 px-6 relative overflow-hidden"
        style={{ 
          backgroundColor: '#0B0F1A',
          backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(42, 31, 92, 0.15) 0%, transparent 50%)'
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Layout 60% / 40% */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-8 items-start">
            
            {/* COLUMNA IZQUIERDA - 60% (3/5) */}
            <div className="md:col-span-3 space-y-4">
              {/* Foto circular con borde degradado */}
              <div className="flex justify-center md:justify-start mb-4">
                <div 
                  className="w-32 h-32 rounded-full p-1 shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #7D5CFF 0%, #00F5FF 100%)'
                  }}
                >
                  <img
                    src="https://customer-assets.emergentagent.com/job_6d890d5b-566e-4269-8a6d-68191d008ad7/artifacts/d3sl9sgd_Imagen%20de%20WhatsApp%202025-09-21%20a%20las%2000.04.21_bc7ecbd9.jpg"
                    alt="Zäe Selenya Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              
              {/* Título grande - semiserif elegante */}
              <h1 
                className="text-4xl md:text-5xl font-bold text-white text-center md:text-left leading-tight mb-4"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                La artista detrás del portal
              </h1>
              
              {/* Párrafo corto - máximo 3 líneas */}
              <p 
                className="text-gray-200 text-lg leading-relaxed text-center md:text-left mb-4"
                style={{ fontFamily: 'system-ui, sans-serif' }}
              >
                Este santuario será mi templo galáctico: luces, cámara, materiales para crear contenido visual, sensual y mágico. Con tu ayuda, podré vivir de lo que me apasiona. 📸💜
              </p>
              
              {/* Dos botones */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                {/* Botón primario */}
                <button 
                  className="px-6 py-3 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  style={{ 
                    background: 'linear-gradient(135deg, #7D5CFF 0%, #FF4D8D 100%)',
                    fontFamily: 'system-ui, sans-serif'
                  }}
                >
                  Descubrir mi universo ✦
                </button>
                
                {/* Botón secundario */}
                <button 
                  className="px-6 py-3 rounded-lg font-semibold text-white border-2 hover:bg-white/10 transition-all duration-300"
                  style={{ 
                    borderColor: '#00F5FF',
                    color: '#00F5FF',
                    fontFamily: 'system-ui, sans-serif'
                  }}
                >
                  Ver presentación
                </button>
              </div>
            </div>

            {/* COLUMNA DERECHA - 40% (2/5) */}
            <div className="md:col-span-2">
              {/* Mini título sobre el video */}
              <p 
                className="text-center mb-3 text-sm font-medium"
                style={{ 
                  color: '#00F5FF',
                  fontFamily: 'system-ui, sans-serif'
                }}
              >
                ✨ Mi presentación personal
              </p>
              
              {/* Video sin marco grueso */}
              <div className="relative">
                <video 
                  className="w-full h-auto shadow-2xl"
                  style={{ 
                    borderRadius: '14px',
                    aspectRatio: '16/9'
                  }}
                  controls
                  preload="metadata"
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 675'%3E%3Crect width='1200' height='675' fill='%230B0F1A'/%3E%3Ctext x='50%25' y='50%25' font-family='serif' font-size='48' fill='%237D5CFF' text-anchor='middle' dy='0.3em'%3EZäe Selenya%3C/text%3E%3C/svg%3E"
                >
                  <source 
                    src="https://customer-assets.emergentagent.com/job_6d890d5b-566e-4269-8a6d-68191d008ad7/artifacts/sn5hsdr4_Video%20de%20WhatsApp%202025-09-20%20a%20las%2023.49.00_b803edeb.mp4" 
                    type="video/mp4" 
                  />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default ZaePortal;