import { useState, useRef } from 'react';

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="hero">
      {/* Reproductor de vinilo en esquina superior derecha */}
      <div className="music-player">
        <div className={`vinyl-record ${isPlaying ? 'playing' : 'paused'}`}>
          <div className="vinyl-center"></div>
          <button className="play-button" onClick={togglePlay}>
            {isPlaying ? '⏸' : '▶'}
          </button>
        </div>
        <audio ref={audioRef} loop>
          <source src="#" type="audio/mpeg" />
          {/* Aquí irá tu archivo de música cuando lo subas */}
          Tu navegador no soporta el elemento de audio.
        </audio>
      </div>

      {/* Nombre como firma */}
      <h1 className="hero-title title-glow">Zäe Selenya ✦</h1>
    </section>
  );
}