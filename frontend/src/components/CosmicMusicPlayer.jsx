import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '../contexts/AudioContext';

const CosmicMusicPlayer = () => {
  const { setMusicPlayerRef, updateMusicState } = useAudio();
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef(null);

  // Set up the audio ref for global control
  useEffect(() => {
    if (audioRef.current) {
      setMusicPlayerRef(audioRef.current);
    }
  }, [setMusicPlayerRef]);

  // Playlist con audio real
  const [playlist, setPlaylist] = useState([
    {
      id: 1,
      title: "Alien fumeta",
      artist: "Portal Cósmico",
      src: "https://customer-assets.emergentagent.com/job_zae-selenya/artifacts/o664ku0u_ALIEN%20FUMETA.mp3",
      duration: "3:42"
    },
    {
      id: 2,
      title: "Saca, Prende y Sorprende",
      artist: "Cultura Profética",
      src: "https://customer-assets.emergentagent.com/job_zae-selenya/artifacts/oxc4teuc_Cultura%20Prof%C3%A9tica%20-%20Saca%2C%20Prende%20y%20Sorprende%20%28Video%20Oficial%29.mp3",
      duration: "4:15"
    },
    {
      id: 3,
      title: "El Sueño de una Noche de Verano",
      artist: "Delahoja",
      src: "https://customer-assets.emergentagent.com/job_cosmic-portal-2/artifacts/ij56ru9u_el-sueno-de-una-noche-de-verano-delahoja-letra-128-ytshorts.savetube.me.mp3",
      duration: "3:28"
    },
    {
      id: 4,
      title: "María Marihuana",
      artist: "Green Valley",
      src: "https://customer-assets.emergentagent.com/job_cosmic-portal-2/artifacts/v2f9duu3_maria-marihuana-la-voz-del-pueblo-green-valley-128-ytshorts.savetube.me.mp3",
      duration: "3:45"
    }
  ]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = isMuted ? 0 : volume;
      
      // Event listeners para manejar el estado
      const handlePlay = () => {
        setIsPlaying(true);
        updateMusicState(true, playlist[currentTrack]);
      };
      const handlePause = () => {
        setIsPlaying(false);
        updateMusicState(false, playlist[currentTrack]);
      };
      const handleEnded = () => {
        // Continuous playback: go to next track and keep playing
        const nextIndex = (currentTrack + 1) % playlist.length;
        setCurrentTrack(nextIndex);
        // Keep playing state true for continuous playback
        setIsPlaying(true);
        updateMusicState(true, playlist[nextIndex]);
        // Auto-play next track after a short delay
        setTimeout(() => {
          if (audioRef.current) {
            audioRef.current.play().catch(console.log);
          }
        }, 200);
      };
      
      audio.addEventListener('play', handlePlay);
      audio.addEventListener('pause', handlePause);
      audio.addEventListener('ended', handleEnded);
      
      return () => {
        audio.removeEventListener('play', handlePlay);
        audio.removeEventListener('pause', handlePause);
        audio.removeEventListener('ended', handleEnded);
      };
    }
  }, [volume, isMuted, currentTrack]);

  // Handle automatic playback when track changes during playing
  useEffect(() => {
    if (isPlaying && audioRef.current) {
      const audio = audioRef.current;
      // Small delay to ensure audio source has loaded
      const timer = setTimeout(() => {
        audio.play().catch(error => {
          console.log("Auto-play prevented:", error);
        });
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [currentTrack, isPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Intentar reproducir el audio
        audioRef.current.play().catch(error => {
          console.log("Audio play failed:", error);
          // Mostrar mensaje si falla
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
              🎵 Click en el reproductor para iniciar<br>
              <span style="font-size: 10px; opacity: 0.7;">
                Los navegadores requieren interacción del usuario
              </span>
            </div>
          `;
          document.body.appendChild(notification);
          
          setTimeout(() => {
            if (document.body.contains(notification)) {
              document.body.removeChild(notification);
            }
          }, 3000);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextTrack = () => {
    const nextIndex = (currentTrack + 1) % playlist.length;
    setCurrentTrack(nextIndex);
    // Maintain playing state for continuous playback
    if (isPlaying) {
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play();
        }
      }, 100);
    }
  };

  const prevTrack = () => {
    const prevIndex = (currentTrack - 1 + playlist.length) % playlist.length;
    setCurrentTrack(prevIndex);
    // Maintain playing state for continuous playback
    if (isPlaying) {
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play();
        }
      }, 100);
    }
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
            <div className="cosmic-logo">
              <img 
                src="https://customer-assets.emergentagent.com/job_zae-selenya/artifacts/cbh4awaa_image.png"
                alt="Music Logo"
                className="custom-music-icon"
              />
              <span className="treble-clef">♪</span>
            </div>
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