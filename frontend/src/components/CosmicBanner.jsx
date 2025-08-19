import React from 'react';
import { Sparkles, Stars } from 'lucide-react';

const CosmicBanner = () => {
  return (
    <section className="cosmic-banner min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Cosmic Background Layers */}
      <div className="absolute inset-0 cosmic-bg-animated"></div>
      <div className="absolute inset-0 cosmic-stars"></div>
      <div className="absolute inset-0 cosmic-nebula"></div>
      
      {/* Floating cosmic elements */}
      <div className="absolute top-10 left-10 animate-float">
        <Stars className="w-8 h-8 text-cosmic-blue opacity-70" />
      </div>
      <div className="absolute top-32 right-20 animate-float-delayed">
        <Sparkles className="w-6 h-6 text-cosmic-pink opacity-60" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float">
        <Stars className="w-10 h-10 text-cosmic-purple opacity-50" />
      </div>
      <div className="absolute top-40 right-40 animate-float-delayed">
        <Sparkles className="w-8 h-8 text-cosmic-mint opacity-60" />
      </div>
      
      {/* Main Banner Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Artistic content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <h1 className="brand-display text-white mb-6 drop-shadow-2xl leading-none">
                Zäe Selenya
              </h1>
              <div className="cosmic-gradient-line w-48 h-2 mb-8 mx-auto lg:mx-0"></div>
              <p className="body-large text-cosmic-mint font-medium tracking-wide mb-6">
                "Un portal entre lo friki, lo oscuro y lo mágico"
              </p>
              
              {/* Mystical description */}
              <div className="space-y-4 mb-8">
                <p className="body-medium text-gray-300 leading-relaxed">
                  Creadora de universos multidimensionales donde convergen los fandoms, 
                  el arte melancólico y la ternura kawaii.
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <div className="w-12 h-px bg-cosmic-blue"></div>
                  <Sparkles className="w-4 h-4 text-cosmic-blue animate-spin-slow" />
                  <p className="body-small text-cosmic-blue font-mono uppercase tracking-widest">
                    Artista Cósmica
                  </p>
                  <Sparkles className="w-4 h-4 text-cosmic-blue animate-spin-slow" />
                  <div className="w-12 h-px bg-cosmic-blue"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Cosmic image banner */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main image container with cosmic effects */}
              <div className="cosmic-image-frame relative">
                <div className="cosmic-border-glow"></div>
                <div className="cosmic-image-container">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_mystic-selenya/artifacts/3cyghoul_image.jpeg"
                    alt="Zäe Selenya - Banner Cósmico"
                    className="cosmic-main-image"
                  />
                  {/* Overlay effects */}
                  <div className="cosmic-overlay"></div>
                  <div className="cosmic-shimmer"></div>
                </div>
                
                {/* Floating elements around image */}
                <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-cosmic-blue rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 border-2 border-cosmic-pink rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute -top-6 right-8 w-4 h-4 bg-cosmic-purple rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
                <div className="absolute bottom-8 -left-6 w-5 h-5 bg-cosmic-mint rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
              </div>
              
              {/* Cosmic aura effect */}
              <div className="absolute inset-0 cosmic-aura animate-pulse" style={{animationDelay: '1.5s'}}></div>
            </div>
          </div>
          
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="cosmic-scroll-indicator">
            <div className="scroll-dot"></div>
          </div>
          <p className="text-cosmic-mint text-xs mt-2 font-mono uppercase tracking-widest">
            Explora mis universos
          </p>
        </div>
      </div>
    </section>
  );
};

export default CosmicBanner;