import React, { useState, useRef } from 'react';
import { Card } from './ui/card';
import { Star, Palette, Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

const AboutSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <section className="py-16 galactic-about-section relative overflow-hidden">
      {/* Galactic Background Elements */}
      <div className="absolute inset-0 galactic-background"></div>
      <div className="absolute inset-0 stars-field"></div>
      <div className="absolute inset-0 nebula-glow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Main about card */}
          <Card className="backdrop-blur-lg bg-black bg-opacity-40 border-2 border-cosmic-blue border-opacity-50 rounded-2xl p-8 mb-8 galactic-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              {/* Left Column - Profile and Info */}
              <div className="flex flex-col items-center lg:items-start">
                {/* Profile photo */}
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
                
                {/* About content */}
                <div className="text-center lg:text-left">
                  <h2 className="section-heading text-white mb-6 galactic-title">
                    La Artista Detrás del Portal
                  </h2>
                  
                  <div className="space-y-4 mb-6">
                    <p className="body-large text-cosmic-mint leading-relaxed galactic-text">
                      Este santuario será mi templo galáctico: luces, cámara, materiales para crear contenido visual, sensual y mágico. Con tu ayuda, podré ofrecer contenido brutal, curaciones energéticas, y vivir de lo que me apasiona. 🌌🖤💜
                    </p>
                  </div>
                  
                  {/* Creative aspects with new symbols */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col items-center lg:items-start">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cosmic-blue to-cosmic-purple bg-opacity-30 border-2 border-cosmic-blue flex items-center justify-center mb-3 star-circle">
                        <Star className="w-8 h-8 text-cosmic-blue star-icon" fill="currentColor" />
                      </div>
                      <h4 className="body-medium font-semibold text-cosmic-blue mb-1">Mundos Únicos</h4>
                      <p className="body-small text-gray-300 text-center lg:text-left">creando mundos únicos</p>
                    </div>
                    
                    <div className="flex flex-col items-center lg:items-start">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cosmic-mint to-cosmic-purple bg-opacity-30 border-2 border-cosmic-mint flex items-center justify-center mb-3 palette-circle">
                        <Palette className="w-8 h-8 text-cosmic-mint palette-icon" />
                      </div>
                      <h4 className="body-medium font-semibold text-cosmic-mint mb-1">Arte Diverso</h4>
                      <p className="body-small text-gray-300 text-center lg:text-left">arte desde el corazón y diversidad... múltiples estilos</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Video */}
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

                {/* Video Description */}
                <div className="text-center mt-6">
                  <p className="body-medium text-white opacity-80 leading-relaxed">
                    Sumérgete en el universo creativo de Zäe Selenya. Una presentación íntima 
                    de la artista detrás del portal y su visión galáctica. ✨
                  </p>
                </div>
              </div>
            </div>
          </Card>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;