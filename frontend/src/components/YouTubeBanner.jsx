import React from 'react';
import { Sparkles, Zap } from 'lucide-react';

const RealisticSpaceBanner = () => {
  return (
    <section className="realistic-space-banner relative overflow-hidden">
      {/* Photorealistic Space Background */}
      <div className="absolute inset-0 deep-space-bg"></div>
      <div className="absolute inset-0 starfield-realistic"></div>
      <div className="absolute inset-0 nebula-photorealistic"></div>
      <div className="absolute inset-0 cosmic-dust"></div>
      
      {/* Realistic UFO Fleet */}
      <div className="ufo-realistic ufo-primary">
        <div className="ufo-hull">
          <div className="hull-top"></div>
          <div className="hull-bottom"></div>
          <div className="cockpit-dome"></div>
          <div className="propulsion-ring">
            <div className="propulsion-light prop-1"></div>
            <div className="propulsion-light prop-2"></div>
            <div className="propulsion-light prop-3"></div>
            <div className="propulsion-light prop-4"></div>
            <div className="propulsion-light prop-5"></div>
            <div className="propulsion-light prop-6"></div>
          </div>
          <div className="energy-beam"></div>
        </div>
      </div>
      
      <div className="ufo-realistic ufo-secondary">
        <div className="ufo-hull">
          <div className="hull-top"></div>
          <div className="hull-bottom"></div>
          <div className="cockpit-dome"></div>
          <div className="propulsion-ring">
            <div className="propulsion-light prop-1"></div>
            <div className="propulsion-light prop-2"></div>
            <div className="propulsion-light prop-3"></div>
            <div className="propulsion-light prop-4"></div>
          </div>
        </div>
      </div>
      
      <div className="ufo-realistic ufo-distant">
        <div className="ufo-hull">
          <div className="hull-top"></div>
          <div className="hull-bottom"></div>
          <div className="cockpit-dome"></div>
          <div className="propulsion-ring">
            <div className="propulsion-light prop-1"></div>
            <div className="propulsion-light prop-2"></div>
            <div className="propulsion-light prop-3"></div>
          </div>
        </div>
      </div>
      
      {/* Atmospheric Entry Effects */}
      <div className="atmospheric-entry entry-1"></div>
      <div className="atmospheric-entry entry-2"></div>
      
      {/* Space Debris and Asteroids */}
      <div className="space-debris debris-1"></div>
      <div className="space-debris debris-2"></div>
      <div className="space-debris debris-3"></div>
      
      {/* YouTube Banner Content Container */}
      <div className="realistic-banner-content">
        
        {/* Shadow Banner Image with Cinematic Effects */}
        <div className="cinematic-banner-container">
          <img 
            src="https://customer-assets.emergentagent.com/job_mystic-selenya/artifacts/3cyghoul_image.jpeg"
            alt="Zäe Selenya - Cinematic Space Banner"
            className="cinematic-banner-image"
          />
          <div className="cinematic-overlay"></div>
          <div className="film-grain"></div>
          <div className="lens-flare"></div>
          <div className="edge-lighting"></div>
        </div>
        
        {/* Photorealistic Golden Name */}
        <div className="artist-name-realistic">
          <h1 className="name-photorealistic">
            <span className="name-metallic">Zäe</span>
            <span className="name-metallic">Selenya</span>
          </h1>
          <div className="metallic-underline-realistic"></div>
          <p className="space-explorer-tagline">
            <Sparkles className="w-4 h-4 inline mr-2 text-blue-300" />
            Exploradora del Cosmos Infinito
            <Zap className="w-4 h-4 inline ml-2 text-yellow-300" />
          </p>
        </div>
        
        {/* Realistic Cosmic Particles */}
        <div className="cosmic-matter">
          <div className="matter-particle particle-1"></div>
          <div className="matter-particle particle-2"></div>
          <div className="matter-particle particle-3"></div>
          <div className="matter-particle particle-4"></div>
          <div className="matter-particle particle-5"></div>
          <div className="matter-particle particle-6"></div>
        </div>
        
        {/* Distant Stars and Galaxies */}
        <div className="distant-galaxy galaxy-1"></div>
        <div className="distant-galaxy galaxy-2"></div>
      </div>
    </section>
  );
};

export default RealisticSpaceBanner;