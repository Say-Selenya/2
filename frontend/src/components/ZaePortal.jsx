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

      {/* PRIMERA PÁGINA - CONTENIDO PRINCIPAL */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          {/* Grid de dos columnas iguales */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 min-h-[600px]">
            
            {/* COLUMNA IZQUIERDA - Artista + Perfil */}
            <div className="flex flex-col justify-center space-y-8 p-6 lg:p-8">
              {/* Título */}
              <h1 className="text-3xl lg:text-5xl font-bold text-white text-center lg:text-left leading-tight">
                La artista detrás del portal
              </h1>
              
              {/* Foto de perfil */}
              <div className="flex justify-center lg:justify-start">
                <div className="w-40 h-40 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-purple-400/40 shadow-2xl hover:border-purple-400/60 transition-all duration-300">
                  <img
                    src="https://customer-assets.emergentagent.com/job_6d890d5b-566e-4269-8a6d-68191d008ad7/artifacts/d3sl9sgd_Imagen%20de%20WhatsApp%202025-09-21%20a%20las%2000.04.21_bc7ecbd9.jpg"
                    alt="Zäe Selenya Profile"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              
              {/* Descripción */}
              <div className="text-gray-200 text-base lg:text-lg leading-relaxed text-center lg:text-left space-y-4">
                <p>
                  Este santuario será mi templo galáctico: luces, cámara, materiales para crear contenido visual, sensual y mágico.
                </p>
                <p className="text-purple-300">
                  Con tu ayuda, podré ofrecer contenido brutal, curaciones energéticas, y vivir de lo que me apasiona. 📸💜
                </p>
              </div>
            </div>

            {/* COLUMNA DERECHA - Video Principal */}
            <div className="flex flex-col justify-center p-6 lg:p-8">
              <div className="bg-gradient-to-br from-gray-800/60 to-purple-900/20 rounded-2xl p-4 lg:p-6 shadow-2xl border border-purple-400/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300">
                <video 
                  className="w-full h-auto rounded-xl shadow-xl"
                  controls
                  preload="metadata"
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 675'%3E%3Crect width='1200' height='675' fill='%23111827'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='48' fill='%23a855f7' text-anchor='middle' dy='0.3em'%3EZäe Selenya%3C/text%3E%3C/svg%3E"
                >
                  <source 
                    src="https://customer-assets.emergentagent.com/job_6d890d5b-566e-4269-8a6d-68191d008ad7/artifacts/sn5hsdr4_Video%20de%20WhatsApp%202025-09-20%20a%20las%2023.49.00_b803edeb.mp4" 
                    type="video/mp4" 
                  />
                  Tu navegador no soporta el elemento de video.
                </video>
                
                {/* Texto descriptivo del video */}
                <div className="mt-4 text-center">
                  <p className="text-gray-300 text-sm lg:text-base">
                    ✨ Descubre mi universo creativo
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default ZaePortal;