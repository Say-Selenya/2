import React from 'react';
import { Sparkles, Stars, Moon } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="hero-cosmic min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 cosmic-bg"></div>
      <div className="absolute top-20 left-20 animate-pulse">
        <Stars className="w-6 h-6 text-cosmic-blue opacity-60" />
      </div>
      <div className="absolute top-40 right-32 animate-bounce slow">
        <Sparkles className="w-8 h-8 text-cosmic-pink opacity-50" />
      </div>
      <div className="absolute bottom-32 left-32 animate-pulse">
        <Moon className="w-10 h-10 text-cosmic-purple opacity-40" />
      </div>
      
      {/* Main content */}
      <div className="text-center z-10 px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="brand-display text-white mb-4 drop-shadow-2xl">
            Zäe Selenya
          </h1>
          <div className="cosmic-line w-32 h-1 mx-auto mb-6"></div>
          <p className="body-large text-cosmic-mint font-medium tracking-wide">
            "Un portal entre lo friki, lo oscuro y lo mágico"
          </p>
        </div>
        
        {/* Mystical subtitle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-cosmic-blue"></div>
          <Sparkles className="w-5 h-5 text-cosmic-blue animate-spin-slow" />
          <p className="body-medium text-cosmic-blue font-mono uppercase tracking-widest">
            Explora mis universos creativos
          </p>
          <Sparkles className="w-5 h-5 text-cosmic-blue animate-spin-slow" />
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-cosmic-blue"></div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cosmic-mint rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cosmic-mint rounded-full mt-2 animate-pulse"></div>
          </div>
          <p className="text-cosmic-mint text-xs mt-2 font-mono">SCROLL</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;