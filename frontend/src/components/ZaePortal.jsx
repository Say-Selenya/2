import React from 'react';

const ZaePortal = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Solo tu foto de fondo */}
      <section className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://customer-assets.emergentagent.com/job_6d890d5b-566e-4269-8a6d-68191d008ad7/artifacts/solnv0sw_PHOTO-2025-09-18-21-30-44.jpg')`
          }}
        >
          {/* Overlay sutil para mejor legibilidad cuando agregues contenido */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-gray-900/20"></div>
        </div>
      </section>
    </div>
  );
};

export default ZaePortal;