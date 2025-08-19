import React from 'react';
import { Card } from './ui/card';
import { Sparkles, Heart, Palette } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 cosmic-section-about relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 animate-pulse">
        <Sparkles className="w-6 h-6 text-cosmic-purple opacity-30" />
      </div>
      <div className="absolute bottom-20 right-20 animate-bounce slow">
        <Heart className="w-8 h-8 text-cosmic-pink opacity-40" />
      </div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Main about card */}
          <Card className="backdrop-blur-lg bg-black bg-opacity-30 border-2 border-cosmic-blue border-opacity-30 rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              
              {/* Profile photo - larger version */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gradient-to-r from-cosmic-blue via-cosmic-purple to-cosmic-pink p-2">
                    <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-cosmic-blue to-cosmic-purple">
                      <img 
                        src="https://customer-assets.emergentagent.com/job_mystic-selenya/artifacts/pmtl2agg_foto22.jpeg"
                        alt="Zäe Selenya - Artista Cósmica"
                        className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  {/* Enhanced magical effects */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cosmic-blue via-cosmic-purple to-cosmic-pink opacity-20 animate-pulse"></div>
                  <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-cosmic-blue via-cosmic-purple to-cosmic-pink opacity-10 animate-pulse" style={{animationDelay: '1.5s'}}></div>
                </div>
              </div>
              
              {/* About content */}
              <div className="lg:col-span-2 text-center lg:text-left">
                <h2 className="section-heading text-white mb-6">
                  La Artista Detrás del Portal
                </h2>
                
                <div className="space-y-4 mb-6">
                  <p className="body-large text-cosmic-mint leading-relaxed">
                    Soy Zäe Selenya, una creadora multidimensional que navega entre diferentes mundos artísticos. 
                    Mi trabajo explora la intersección entre la cultura pop, el arte oscuro y la ternura kawaii.
                  </p>
                  
                  <p className="body-medium text-gray-300 leading-relaxed">
                    Cada universo que creo representa una faceta de mi alma creativa: la pasión friki que me conecta 
                    con fandoms y culturas pop, la profundidad melancólica que encuentra belleza en lo oscuro, 
                    y la alegría pura que surge del arte colorido y tierno.
                  </p>
                </div>
                
                {/* Creative aspects */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex flex-col items-center lg:items-start">
                    <div className="w-12 h-12 rounded-full bg-cosmic-blue bg-opacity-20 border border-cosmic-blue flex items-center justify-center mb-3">
                      <Sparkles className="w-6 h-6 text-cosmic-blue" />
                    </div>
                    <h4 className="body-medium font-semibold text-cosmic-blue mb-1">Imaginación</h4>
                    <p className="body-small text-gray-400 text-center lg:text-left">Creando mundos únicos</p>
                  </div>
                  
                  <div className="flex flex-col items-center lg:items-start">
                    <div className="w-12 h-12 rounded-full bg-cosmic-purple bg-opacity-20 border border-cosmic-purple flex items-center justify-center mb-3">
                      <Heart className="w-6 h-6 text-cosmic-purple" />
                    </div>
                    <h4 className="body-medium font-semibold text-cosmic-purple mb-1">Pasión</h4>
                    <p className="body-small text-gray-400 text-center lg:text-left">Arte desde el corazón</p>
                  </div>
                  
                  <div className="flex flex-col items-center lg:items-start">
                    <div className="w-12 h-12 rounded-full bg-cosmic-mint bg-opacity-20 border border-cosmic-mint flex items-center justify-center mb-3">
                      <Palette className="w-6 h-6 text-cosmic-mint" />
                    </div>
                    <h4 className="body-medium font-semibold text-cosmic-mint mb-1">Diversidad</h4>
                    <p className="body-small text-gray-400 text-center lg:text-left">Múltiples estilos</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Quote section */}
          <div className="text-center">
            <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-cosmic-blue via-cosmic-purple to-cosmic-pink bg-opacity-10 border border-cosmic-blue border-opacity-20 backdrop-blur-sm">
              <p className="body-large text-white font-medium italic mb-2">
                "Creo que el arte verdadero nace cuando dejamos que nuestras múltiples personalidades 
                creativas se expresen sin límites ni etiquetas."
              </p>
              <p className="body-small text-cosmic-mint">- Zäe Selenya</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;