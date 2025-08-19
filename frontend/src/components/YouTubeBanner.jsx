import React from 'react';
import { Sparkles, Zap } from 'lucide-react';

const YouTubeBanner = () => {
  return (
    <section className="youtube-banner relative overflow-hidden">
      {/* Cosmic Background with enhanced space theme */}
      <div className="absolute inset-0 cosmic-space-bg"></div>
      <div className="absolute inset-0 cosmic-stars-enhanced"></div>
      <div className="absolute inset-0 cosmic-nebula-deep"></div>
      
      {/* Floating Alien UFOs */}
      <div className="alien-ufo ufo-1">
        <div className="ufo-body">
          <div className="ufo-dome"></div>
          <div className="ufo-lights">
            <div className="light"></div>
            <div className="light"></div>
            <div className="light"></div>
          </div>
        </div>
        <div className="alien-pilot">👽</div>
      </div>
      
      <div className="alien-ufo ufo-2">
        <div className="ufo-body">
          <div className="ufo-dome"></div>
          <div className="ufo-lights">
            <div className="light"></div>
            <div className="light"></div>
            <div className="light"></div>
          </div>
        </div>
        <div className="alien-pilot">🛸</div>
      </div>
      
      <div className="alien-ufo ufo-3">
        <div className="ufo-body">
          <div className="ufo-dome"></div>
          <div className="ufo-lights">
            <div className="light"></div>
            <div className="light"></div>
            <div className="light"></div>
          </div>
        </div>
        <div className="alien-pilot">👽</div>
      </div>
      
      {/* Additional floating alien stickers */}
      <div className="alien-sticker alien-1">👽</div>
      <div className="alien-sticker alien-2">🛸</div>
      <div className="alien-sticker alien-3">👽</div>
      <div className="alien-sticker alien-4">🛸</div>
      
      {/* YouTube Banner Content Container */}
      <div className="youtube-banner-content">
        
        {/* Shadow Banner Image */}
        <div className="shadow-banner-container">
          <img 
            src="https://customer-assets.emergentagent.com/job_mystic-selenya/artifacts/3cyghoul_image.jpeg"
            alt="Zäe Selenya - Cosmic Shadow Banner"
            className="shadow-banner-image"
          />
          <div className="banner-overlay"></div>
          <div className="banner-glow-effect"></div>
        </div>
        
        {/* Golden Metallic Name - Bottom Left */}
        <div className="artist-name-container">
          <h1 className="artist-name-golden">
            <span className="name-glow">Zäe</span>
            <span className="name-glow">Selenya</span>
          </h1>
          <div className="golden-underline"></div>
          <p className="cosmic-tagline">
            <Sparkles className="w-4 h-4 inline mr-2" />
            Portal Cósmico Multidimensional
            <Zap className="w-4 h-4 inline ml-2" />
          </p>
        </div>
        
        {/* Floating cosmic particles */}
        <div className="cosmic-particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeBanner;