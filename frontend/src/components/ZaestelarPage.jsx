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
        {/* Cosmic Music Player - Top Right */}
        <CosmicMusicPlayer />
        
        {/* Same YouTube Banner as main page */}
        <BrightYouTubeBanner />
        
        {/* Zäestelar Specific Content - replaces about section */}
        <section className="py-16 galactic-about-section relative overflow-hidden">
          {/* Same background effects */}
          <div className="absolute inset-0 galactic-background"></div>
          <div className="absolute inset-0 stars-field"></div>
          <div className="absolute inset-0 nebula-glow"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              
              {/* Back button */}
              <div className="text-center mb-8">
                <button 
                  onClick={() => window.history.back()}
                  className="back-button-inline text-cosmic-blue hover:text-white transition-colors mb-6"
                >
                  <ArrowLeft className="w-5 h-5 inline mr-2" />
                  Volver al Portal Principal
                </button>
              </div>
              
              {/* Main Zäestelar card */}
              <Card className="backdrop-blur-lg bg-black bg-opacity-40 border-none rounded-2xl p-8 mb-8 galactic-card">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  
                  {/* Left Column - Profile and Zäestelar Info */}
                  <div className="flex flex-col items-center lg:items-start">
                    {/* Profile photo - same as main page */}
                    <div className="flex justify-center mb-8">
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
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cosmic-blue via-cosmic-purple to-cosmic-pink opacity-30 animate-pulse"></div>
                        <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-cosmic-blue via-cosmic-purple to-cosmic-pink opacity-15 animate-pulse" style={{animationDelay: '1.5s'}}></div>
                      </div>
                    </div>
                    
                    {/* Zäestelar content */}
                    <div className="text-center lg:text-left">
                      <h2 className="section-heading text-white mb-6 galactic-title">
                        🌌 Bienvenido a Zäestelar.net 🌌
                      </h2>
                      
                      <div className="space-y-4 mb-6">
                        <p className="body-large text-cosmic-mint leading-relaxed galactic-text">
                          Zäestelar.net es mi universo digital personal donde convergen todas mis creaciones artísticas. 
                          Un espacio dedicado al contenido visual, sensual y mágico, donde la creatividad cósmica cobra vida. ✨
                        </p>
                        
                        <p className="body-medium text-white opacity-90 leading-relaxed">
                          Aquí encontrarás acceso exclusivo a mis creaciones más íntimas, experiencias interactivas 
                          y contenido premium que no está disponible en ningún otro lugar del universo.
                        </p>
                      </div>
                      
                      {/* Features with same symbols as main page */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col items-center lg:items-start">
                          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cosmic-blue to-cosmic-purple bg-opacity-30 border-2 border-cosmic-blue flex items-center justify-center mb-3 star-circle">
                            <Star className="w-8 h-8 text-cosmic-blue star-icon" fill="currentColor" />
                          </div>
                          <h4 className="body-medium font-semibold text-cosmic-blue mb-1">Contenido Exclusivo</h4>
                          <p className="body-small text-gray-300 text-center lg:text-left">acceso premium a creaciones únicas</p>
                        </div>
                        
                        <div className="flex flex-col items-center lg:items-start">
                          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cosmic-mint to-cosmic-purple bg-opacity-30 border-2 border-cosmic-mint flex items-center justify-center mb-3 palette-circle">
                            <Heart className="w-8 h-8 text-cosmic-mint palette-icon" fill="currentColor" />
                          </div>
                          <h4 className="body-medium font-semibold text-cosmic-mint mb-1">Experiencias Íntimas</h4>
                          <p className="body-small text-gray-300 text-center lg:text-left">contenido personal y auténtico</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Same video as main page with full functionality */}
                  <div className="flex flex-col justify-center">
                    <div 
                      className="profile-video-container relative"
                      onMouseEnter={() => setShowControls(true)}
                      onMouseLeave={() => setShowControls(false)}
                    >
                      
                      {/* Video Element */}
                      <video
                        ref={videoRef}
                        className="profile-video"
                        onEnded={handleVideoEnd}
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        poster="https://images.unsplash.com/photo-1640367169401-534dec442631?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxyb2JvdCUyMG5hdHVyZXxlbnwwfHx8fDE3NTU2NDczNDf8MA&ixlib=rb-4.1.0&q=85"
                        preload="metadata"
                      >
                        <source 
                          src="https://customer-assets.emergentagent.com/job_zae-selenya/artifacts/7siwsx5k_siriii.mp4" 
                          type="video/mp4" 
                        />
                        Tu navegador no soporta el elemento video.
                      </video>

                      {/* Video Overlay Effects */}
                      <div className="profile-video-overlay"></div>
                      
                      {/* Custom Video Controls */}
                      <div className={`profile-video-controls ${showControls ? 'visible' : 'hidden'}`}>
                        <div className="profile-controls-background"></div>
                        
                        <div className="profile-controls-buttons">
                          <button 
                            className="profile-control-btn play-pause"
                            onClick={togglePlay}
                          >
                            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                          </button>
                          
                          <button 
                            className="profile-control-btn volume"
                            onClick={toggleMute}
                          >
                            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                          </button>
                          
                          <button 
                            className="profile-control-btn fullscreen"
                            onClick={toggleFullscreen}
                          >
                            <Maximize size={16} />
                          </button>
                        </div>
                      </div>

                      {/* Play Button Overlay (when paused) */}
                      {!isPlaying && (
                        <div className="profile-play-overlay" onClick={togglePlay}>
                          <div className="profile-play-button">
                            <Play size={40} />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Coming soon info */}
                    <div className="text-center mt-6 elegant-video-description">
                      <div className="elegant-description-content">
                        <p className="body-medium text-white opacity-90 leading-relaxed mb-2">
                          🚀 Sitio web completo en construcción 🚀
                        </p>
                        <p className="body-small text-gray-300 opacity-80 italic">
                          Mientras tanto, explora mi portal cósmico y suscríbete para actualizaciones
                        </p>
                        <div className="elegant-divider mt-4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              
            </div>
          </div>
        </section>
        
        {/* Same Portal Sections as main page */}
        {mockPortalSections.map((section, index) => (
          <PortalSection 
            key={section.id} 
            section={section} 
            index={index}
          />
        ))}
        
        {/* Same Stats Section */}
        <StatsSection />
        
        {/* Same Footer */}
        <footer className="py-8 bg-black bg-opacity-80 border-t border-cosmic-blue border-opacity-30">
          <div className="container mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-8 h-px bg-cosmic-blue"></div>
              <p className="body-small text-cosmic-mint font-mono uppercase tracking-widest">
                Zäestelar.net - Portal Estelar
              </p>
              <div className="w-8 h-px bg-cosmic-blue"></div>
            </div>
            <p className="body-small text-gray-400">
              © 2025 - Universo digital de Zäe Selenya
            </p>
          </div>
        </footer>
      </div>
    </AudioProvider>
  );
};

export default ZaestelarPage;