import React from 'react';
import { ArrowLeft, ExternalLink, Star, Heart, Palette } from 'lucide-react';
import { Card } from './ui/card';
import CosmicMusicPlayer from './CosmicMusicPlayer';

const ZaestelarPage = () => {
  return (
    <div className="min-h-screen zaestelar-page">
      {/* Cosmic Music Player - Top Right */}
      <CosmicMusicPlayer />
      
      {/* Background Effects */}
      <div className="absolute inset-0 zaestelar-cosmic-bg"></div>
      <div className="absolute inset-0 zaestelar-stars-field"></div>
      
      {/* Header */}
      <header className="relative z-10 pt-8 pb-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <button 
              onClick={() => window.history.back()}
              className="back-button flex items-center gap-2 text-white hover:text-cosmic-blue transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Volver al Portal</span>
            </button>
            
            <div className="zaestelar-logo">
              <ExternalLink className="w-6 h-6 inline mr-2 text-cosmic-blue" />
              <span className="zaestelar-title">Zäestelar.net</span>
            </div>
          </div>
          
          {/* Main Title */}
          <div className="text-center">
            <h1 className="zaestelar-main-title text-white mb-4">
              Bienvenido a Zäestelar.net
            </h1>
            <div className="zaestelar-divider mx-auto mb-6"></div>
            <p className="text-xl text-cosmic-mint opacity-90 max-w-2xl mx-auto">
              El universo digital donde la creatividad cósmica cobra vida ✨
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction Card */}
            <Card className="zaestelar-card mb-8">
              <div className="p-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-6">
                  🌌 Portal Estelar de Creación 🌌
                </h2>
                <p className="text-lg text-white opacity-90 leading-relaxed mb-6">
                  Zäestelar.net es mi espacio digital personal donde convergen todas mis 
                  creaciones artísticas, desde contenido visual hasta experiencias interactivas. 
                  Un templo galáctico dedicado a la expresión creativa en todas sus formas.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="zaestelar-feature">
                    <Star className="w-8 h-8 text-cosmic-blue mx-auto mb-3" fill="currentColor" />
                    <h3 className="text-white font-semibold mb-2">Contenido Exclusivo</h3>
                    <p className="text-gray-300 text-sm">
                      Acceso a creaciones únicas y contenido premium
                    </p>
                  </div>
                  
                  <div className="zaestelar-feature">
                    <Heart className="w-8 h-8 text-cosmic-purple mx-auto mb-3" fill="currentColor" />
                    <h3 className="text-white font-semibold mb-2">Experiencias Visuales</h3>
                    <p className="text-gray-300 text-sm">
                      Contenido visual, sensual y mágico
                    </p>
                  </div>
                  
                  <div className="zaestelar-feature">
                    <Palette className="w-8 h-8 text-cosmic-mint mx-auto mb-3" />
                    <h3 className="text-white font-semibold mb-2">Arte Multidimensional</h3>
                    <p className="text-gray-300 text-sm">
                      Diversidad creativa en múltiples estilos
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Coming Soon Section */}
            <Card className="zaestelar-card">
              <div className="p-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">
                  🚀 Próximamente 🚀
                </h2>
                <p className="text-lg text-cosmic-mint opacity-90 leading-relaxed mb-6">
                  El sitio web completo está en construcción. Mientras tanto, 
                  puedes explorar mi portal cósmico principal y suscribirte para 
                  recibir actualizaciones cuando Zäestelar.net esté completamente listo.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button 
                    onClick={() => window.history.back()}
                    className="zaestelar-cta-button"
                  >
                    ← Explorar Portal Cósmico
                  </button>
                  <a 
                    href="mailto:contact@zaestelar.net" 
                    className="zaestelar-contact-button"
                  >
                    📧 Contacto
                  </a>
                </div>
              </div>
            </Card>
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default ZaestelarPage;