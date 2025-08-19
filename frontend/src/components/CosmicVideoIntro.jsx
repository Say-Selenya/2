import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

const CosmicVideoIntro = () => {
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
    <section className="cosmic-video-intro relative overflow-hidden">
      {/* Cosmic Background Effects */}
      <div className="absolute inset-0 video-cosmic-bg"></div>
      <div className="absolute inset-0 video-stars-field"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Video Container */}
          <div 
            className="cosmic-video-container relative"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
          >
            
            {/* Video Element */}
            <video
              ref={videoRef}
              className="cosmic-video"
              onEnded={handleVideoEnd}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              poster="" // You can add a poster image here if needed
              preload="metadata"
            >
              <source 
                src="https://customer-assets.emergentagent.com/job_zae-selenya/artifacts/7siwsx5k_siriii.mp4" 
                type="video/mp4" 
              />
              Tu navegador no soporta el elemento video.
            </video>

            {/* Video Overlay Effects */}
            <div className="video-cosmic-overlay"></div>
            
            {/* Custom Video Controls */}
            <div className={`video-controls ${showControls ? 'visible' : 'hidden'}`}>
              <div className="controls-background"></div>
              
              <div className="controls-buttons">
                <button 
                  className="video-control-btn play-pause"
                  onClick={togglePlay}
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </button>
                
                <button 
                  className="video-control-btn volume"
                  onClick={toggleMute}
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
                
                <button 
                  className="video-control-btn fullscreen"
                  onClick={toggleFullscreen}
                >
                  <Maximize size={20} />
                </button>
              </div>
            </div>

            {/* Play Button Overlay (when paused) */}
            {!isPlaying && (
              <div className="play-overlay" onClick={togglePlay}>
                <div className="cosmic-play-button">
                  <Play size={60} />
                </div>
              </div>
            )}
          </div>

          {/* Video Description */}
          <div className="text-center mt-8">
            <p className="body-medium text-white opacity-80 max-w-3xl mx-auto leading-relaxed">
              Sumérgete en el universo creativo de Zäe Selenya. Una presentación íntima 
              de la artista detrás del portal, sus pasiones, su visión y el templo galáctico 
              que está construyendo para compartir contenido visual, sensual y mágico. ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CosmicVideoIntro;