import React, { createContext, useContext, useState, useRef } from 'react';

const AudioContext = createContext();

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};

export const AudioProvider = ({ children }) => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [musicWasPaused, setMusicWasPaused] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const musicPlayerRef = useRef(null);

  const pauseMusicForVideo = () => {
    if (isMusicPlaying && musicPlayerRef.current) {
      setMusicWasPaused(true);
      musicPlayerRef.current.pause();
      console.log('🎵 Music paused for video');
    }
  };

  const resumeMusicAfterVideo = () => {
    if (musicWasPaused && musicPlayerRef.current) {
      setTimeout(() => {
        musicPlayerRef.current.play();
        setMusicWasPaused(false);
        console.log('🎵 Music resumed after video');
      }, 500); // Small delay to ensure video has fully stopped
    }
  };

  const setMusicPlayerRef = (ref) => {
    musicPlayerRef.current = ref;
  };

  const updateMusicState = (playing, track) => {
    setIsMusicPlaying(playing);
    setCurrentTrack(track);
  };

  const value = {
    isMusicPlaying,
    musicWasPaused,
    currentTrack,
    pauseMusicForVideo,
    resumeMusicAfterVideo,
    setMusicPlayerRef,
    updateMusicState
  };

  return (
    <AudioContext.Provider value={value}>
      {children}
    </AudioContext.Provider>
  );
};

export default AudioContext;