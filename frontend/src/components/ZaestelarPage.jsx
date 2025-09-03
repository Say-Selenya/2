import React from 'react';
import { ArrowLeft } from 'lucide-react';
import BrightYouTubeBanner from './YouTubeBanner';
import AboutSection from './AboutSection';
import CosmicMusicPlayer from './CosmicMusicPlayer';
import VisitorCounter from './VisitorCounter';
import { AudioProvider } from '../contexts/AudioContext';

const ZaestelarPage = () => {
  return (
    <AudioProvider>
      <div className="min-h-screen">
        {/* Vertical Neon Lights - Same as main page */}
        <div className="vertical-neon-lights">
          <div className="neon-light neon-left">
            <div className="neon-strip"></div>
          </div>
          <div className="neon-light neon-right">
            <div className="neon-strip"></div>
          </div>
        </div>
        
        {/* Cosmic Music Player - Top Right */}
        <CosmicMusicPlayer />
        
        {/* Real Visitor Counter - Bottom Right */}
        <VisitorCounter />
        
        {/* Back button */}
        <div className="relative z-50 pt-8 px-6">
          <button 
            onClick={() => window.history.back()}
            className="back-button-inline text-cosmic-blue hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5 inline mr-2" />
            Volver al Portal Principal
          </button>
        </div>
        
        {/* Same YouTube Banner as main page */}
        <BrightYouTubeBanner />
        
        {/* Same About Section as main page */}
        <AboutSection />
        
        {/* Same Footer */}
        <footer className="py-8 bg-black bg-opacity-80 border-t border-cosmic-blue border-opacity-30">
          <div className="container mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-8 h-px bg-cosmic-blue"></div>
              <p className="body-small text-cosmic-mint font-mono uppercase tracking-widest">
                Zäe Selenya Portal
              </p>
              <div className="w-8 h-px bg-cosmic-blue"></div>
            </div>
            <p className="body-small text-gray-400">
              © 2025 - Todos los universos creativos reservados
            </p>
          </div>
        </footer>
      </div>
    </AudioProvider>
  );
};

export default ZaestelarPage;