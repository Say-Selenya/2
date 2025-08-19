import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX } from 'lucide-react';

const CosmicMusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef(null);

  // Playlist inicial (se irá expandiendo)
  const [playlist, setPlaylist] = useState([
    {
      id: 1,
      title: "Alien fumeta",
      artist: "Portal Cósmico (Demo)",
      src: "", // Demo visual - no hay archivo real
      duration: "3:42"
    }
  ]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    // Simulación de reproducción sin audio real
    if (currentSong.src === "" || !currentSong.src) {
      // No hay archivo real, solo simular
      setIsPlaying(!isPlaying);
      
      // Mostrar mensaje informativo
      const message = isPlaying ? "⏸️ Pausado (Demo)" : "▶️ Reproduciendo (Demo)";
      
      // Crear un toast/notification temporal
      const notification = document.createElement('div');
      notification.innerHTML = `
        <div style="
          position: fixed;
          top: 100px;
          right: 20px;
          background: rgba(10, 10, 10, 0.9);
          color: #87ceeb;
          padding: 10px 15px;
          border-radius: 10px;
          border: 1px solid rgba(135, 206, 235, 0.3);
          z-index: 1000;
          font-size: 12px;
          backdrop-filter: blur(10px);
        ">
          ${message}<br>
          <span style="font-size: 10px; opacity: 0.7;">
            🎵 Demo visual - Necesitas archivos MP3 para audio real
          </span>
        </div>
      `;
      document.body.appendChild(notification);
      
      // Remover después de 3 segundos
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 3000);
      
      return;
    }

    // Código original para archivos reales
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % playlist.length);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const currentSong = playlist[currentTrack];

  return (
    <div className="cosmic-music-player">
      <div 
        className={`music-player-container ${isExpanded ? 'expanded' : ''}`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        
        {/* Header - only visible when expanded */}
        {isExpanded && (
          <div className="player-header">
            <div className="cosmic-logo">🎵</div>
            <button 
              className="minimize-btn"
              onClick={() => setIsExpanded(false)}
            >
              🔽
            </button>
          </div>
        )}

        {/* Track Info - always visible but compact when not expanded */}
        <div className="track-info">
          <div className="track-title">{currentSong.title}</div>
          <div className="track-artist">{currentSong.artist}</div>
        </div>

        {/* Controls - play button always visible, others only when expanded */}
        <div className="player-controls">
          {isExpanded && (
            <button className="control-btn" onClick={prevTrack}>
              <SkipBack size={14} />
            </button>
          )}
          
          <button className="play-pause-btn" onClick={togglePlay}>
            {isPlaying ? <Pause size={isExpanded ? 16 : 12} /> : <Play size={isExpanded ? 16 : 12} />}
          </button>
          
          {isExpanded && (
            <button className="control-btn" onClick={nextTrack}>
              <SkipForward size={14} />
            </button>
          )}
        </div>

        {/* Volume Control - only when expanded */}
        {isExpanded && (
          <div className="volume-control">
            <button className="volume-btn" onClick={toggleMute}>
              {isMuted ? <VolumeX size={12} /> : <Volume2 size={12} />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={isMuted ? 0 : volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="volume-slider"
            />
          </div>
        )}

        {/* Playlist indicator */}
        <div className="playlist-info">
          {currentTrack + 1}/{playlist.length}
        </div>
      </div>

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={currentSong.src}
        onEnded={nextTrack}
        preload="metadata"
      />
    </div>
  );
};

export default CosmicMusicPlayer;