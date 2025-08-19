import React from 'react';
import { ExternalLink } from 'lucide-react';

const CleanYouTubeBanner = () => {
  return (
    <section className="clean-youtube-banner relative overflow-hidden">
      {/* Clean Galactic Mystical Background */}
      <div className="absolute inset-0 mystical-galaxy-bg"></div>
      <div className="absolute inset-0 subtle-starfield"></div>
      <div className="absolute inset-0 mystical-nebula"></div>
      
      {/* Main YouTube Banner Container */}
      <div className="banner-container">
        
        {/* Full Shadow Photo Banner */}
        <div className="shadow-photo-banner">
          <img 
            src="https://customer-assets.emergentagent.com/job_mystic-selenya/artifacts/3cyghoul_image.jpeg"
            alt="Zäe Selenya - Shadow Banner"
            className="shadow-banner-full"
          />
          <div className="shadow-overlay"></div>
        </div>
        
        {/* Cowboy Alien with UFO */}
        <div className="alien-cowboy-container">
          <div className="cowboy-ufo">
            <div className="ufo-clean">
              <div className="ufo-hull-clean"></div>
              <div className="ufo-dome-clean"></div>
              <div className="ufo-lights-clean">
                <div className="clean-light"></div>
                <div className="clean-light"></div>
                <div className="clean-light"></div>
              </div>
            </div>
            
            {/* Realistic Green Alien Cowboy */}
            <div className="alien-cowboy">
              <div className="alien-head">
                <div className="alien-eyes">
                  <div className="alien-eye left-eye"></div>
                  <div className="alien-eye right-eye"></div>
                </div>
              </div>
              <div className="cowboy-hat"></div>
              <div className="alien-body"></div>
              <div className="waving-arm"></div>
            </div>
          </div>
        </div>
        
        {/* Profile Photo Bottom Left */}
        <div className="profile-section">
          <div className="profile-photo-container">
            <img 
              src="https://customer-assets.emergentagent.com/job_mystic-selenya/artifacts/pmtl2agg_foto22.jpeg"
              alt="Zäe Selenya Profile"
              className="profile-photo"
            />
            <div className="profile-glow-ring"></div>
          </div>
          
          {/* Signature Name */}
          <div className="signature-container">
            <h1 className="signature-name">Zäe Selenya</h1>
            <div className="signature-underline"></div>
          </div>
          
          {/* Website Link */}
          <div className="website-link">
            <ExternalLink className="w-4 h-4 inline mr-2" />
            <a href="https://zäestelar.net" className="link-text">
              Zäestelar.net
            </a>
          </div>
        </div>
        
        {/* Subtle Mystical Particles */}
        <div className="mystical-particles">
          <div className="particle mystical-1"></div>
          <div className="particle mystical-2"></div>
          <div className="particle mystical-3"></div>
        </div>
      </div>
    </section>
  );
};

export default CleanYouTubeBanner;