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
      <section className="py-12 px-6 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* LADO IZQUIERDO - Artista + Perfil */}
            <div className="space-y-6">
              {/* Título */}
              <h1 className="text-4xl font-bold text-white mb-8">
                La artista detrás del portal
              </h1>
              
              {/* Foto de perfil */}
              <div className="flex justify-center lg:justify-start mb-6">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-400/30 shadow-xl">
                  <img
                    src="https://customer-assets.emergentagent.com/job_6d890d5b-566e-4269-8a6d-68191d008ad7/artifacts/d3sl9sgd_Imagen%20de%20WhatsApp%202025-09-21%20a%20las%2000.04.21_bc7ecbd9.jpg"
                    alt="Zäe Selenya Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Descripción */}
              <div className="text-gray-200 text-lg leading-relaxed">
                <p>
                  Este santuario será mi templo galáctico: luces, cámara, materiales para crear contenido visual, sensual y mágico.
                </p>
                <p className="mt-4">
                  Con tu ayuda, podré ofrecer contenido brutal, curaciones energéticas, y vivir de lo que me apasiona. 📸💜
                </p>
              </div>
            </div>

            {/* LADO DERECHO - Video Principal */}
            <div className="relative">
              <div className="bg-gray-800/50 rounded-lg p-4 shadow-xl border border-purple-400/20">
                <video 
                  className="w-full h-auto rounded-lg shadow-lg"
                  controls
                  preload="metadata"
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