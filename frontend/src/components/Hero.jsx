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
      {/* Pegatina de alien arriba izquierda */}
      <div className="alien-sticker"></div>

      {/* Reproductor de vinilo en esquina superior derecha */}
      <div className="music-player">
        <div className={`vinyl-record ${isPlaying ? 'playing' : 'paused'}`}>
          <div className="vinyl-center"></div>
          <button className="play-button" onClick={togglePlay}>
            {isPlaying ? '⏸' : '▶'}
          </button>
        </div>
        <audio ref={audioRef} loop>
          <source src="https://customer-assets.emergentagent.com/job_pagina-view/artifacts/iopf850v_ssvid.net--ALIEN-FUMETA.mp3" type="audio/mpeg" />
          Tu navegador no soporta el elemento de audio.
        </audio>
      </div>

      {/* Nombre como firma */}
      <h1 className="hero-title title-glow">Zäe Selenya ✦</h1>
    </section>
  );
}