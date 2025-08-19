import React, { useState, useEffect } from 'react';
import { ExternalLink, Users, Bell } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '../hooks/use-toast';
import { mockSubscribe, mockSubscriptionsData } from '../mock';

const BrightYouTubeBanner = () => {
  const [totalSubscribers, setTotalSubscribers] = useState(0);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Calculate total subscribers from all sections
    const total = Object.values(mockSubscriptionsData).reduce((sum, section) => sum + section.count, 0);
    setTotalSubscribers(total);
  }, []);

  const handleSubscribe = async () => {
    if (isSubscribed) {
      toast({
        title: "Ya estás suscrito",
        description: "¡Gracias por ser parte del portal cósmico!",
        duration: 3000,
      });
      return;
    }

    setIsSubscribing(true);
    try {
      // Simulate subscription to main portal
      await mockSubscribe('frikilandia', 'subscriber@portal.com');
      setTotalSubscribers(prev => prev + 1);
      setIsSubscribed(true);
      toast({
        title: "¡Suscripción exitosa!",
        description: "Bienvenido al Portal Cósmico de Zäe Selenya",
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Inténtalo de nuevo",
        variant: "destructive",
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <section className="bright-youtube-banner relative overflow-hidden">
      {/* Bright Starry Space Background */}
      <div className="absolute inset-0 bright-space-bg"></div>
      <div className="absolute inset-0 starry-field"></div>
      <div className="absolute inset-0 cosmic-lights"></div>
      <div className="absolute inset-0 space-nebula-bright"></div>
      
      {/* Ultra-Realistic Alien Cowboy Sticker - Top Left Corner */}
      <div className="ultra-realistic-alien-sticker">
        <div className="realistic-sticker-wrapper">
          {/* High-Detail UFO */}
          <div className="ultra-realistic-ufo">
            <div className="ufo-hull-ultra">
              <div className="hull-main-surface"></div>
              <div className="hull-secondary-surface"></div>
              <div className="hull-edge-lighting"></div>
              <div className="hull-panel-lines"></div>
            </div>
            <div className="ufo-dome-ultra">
              <div className="dome-interior"></div>
              <div className="dome-reflection"></div>
            </div>
            <div className="propulsion-system-ultra">
              <div className="prop-light-ultra"></div>
              <div className="prop-light-ultra"></div>
              <div className="prop-light-ultra"></div>
              <div className="prop-light-ultra"></div>
              <div className="prop-light-ultra"></div>
            </div>
            <div className="energy-field"></div>
          </div>
          
          {/* Ultra-Realistic Green Alien Cowboy */}
          <div className="ultra-realistic-cowboy-alien">
            {/* Detailed Alien Head */}
            <div className="alien-head-ultra">
              <div className="head-skin-texture"></div>
              <div className="head-muscle-definition"></div>
              <div className="facial-highlights"></div>
              
              {/* Realistic Eyes */}
              <div className="alien-eyes-ultra">
                <div className="realistic-eye-ultra left">
                  <div className="eye-iris"></div>
                  <div className="eye-pupil"></div>
                  <div className="eye-reflection-1"></div>
                  <div className="eye-reflection-2"></div>
                </div>
                <div className="realistic-eye-ultra right">
                  <div className="eye-iris"></div>
                  <div className="eye-pupil"></div>
                  <div className="eye-reflection-1"></div>
                  <div className="eye-reflection-2"></div>
                </div>
              </div>
              
              {/* Nose and Mouth */}
              <div className="alien-nose"></div>
              <div className="alien-mouth-ultra"></div>
            </div>
            
            {/* Premium Cowboy Hat */}
            <div className="premium-cowboy-hat">
              <div className="hat-crown-ultra">
                <div className="crown-texture"></div>
                <div className="crown-wear-marks"></div>
              </div>
              <div className="hat-brim-ultra">
                <div className="brim-curve-shadow"></div>
              </div>
              <div className="hat-band-ultra">
                <div className="band-texture"></div>
                <div className="band-buckle"></div>
              </div>
            </div>
            
            {/* Detailed Body */}
            <div className="alien-body-ultra">
              <div className="body-skin-texture"></div>
              <div className="body-muscle-tone"></div>
            </div>
            
            {/* Cowboy Hat Tip Gesture */}
            <div className="cowboy-tip-gesture">
              <div className="tipping-arm">
                <div className="upper-arm"></div>
                <div className="forearm"></div>
              </div>
              <div className="tipping-hand">
                <div className="hand-base"></div>
                <div className="fingers"></div>
                <div className="thumb"></div>
              </div>
            </div>
          </div>
          
          {/* Premium Sticker Border */}
          <div className="premium-sticker-border"></div>
          <div className="sticker-shadow"></div>
        </div>
      </div>

      {/* Website Link - Top Center of Photo */}
      <div className="website-link-top">
        <ExternalLink className="w-5 h-5 inline mr-2" />
        <a href="https://zäestelar.net" className="top-link-text">
          Zäestelar.net
        </a>
      </div>

      {/* Main Banner Container */}
      <div className="bright-banner-container">
        
        {/* Full Bright Shadow Photo Banner */}
        <div className="bright-shadow-banner">
          <img 
            src="https://customer-assets.emergentagent.com/job_mystic-selenya/artifacts/3cyghoul_image.jpeg"
            alt="Zäe Selenya - Bright Shadow Banner"
            className="bright-shadow-image"
          />
          <div className="bright-overlay"></div>
        </div>
        
        {/* Profile Section - Bottom Left */}
        <div className="bright-profile-section">
          <div className="bright-profile-photo-container">
            <img 
              src="https://customer-assets.emergentagent.com/job_mystic-selenya/artifacts/pmtl2agg_foto22.jpeg"
              alt="Zäe Selenya Profile"
              className="bright-profile-photo"
            />
            <div className="bright-profile-glow"></div>
          </div>
          
          {/* Bright Signature Name */}
          <div className="bright-signature-container">
            <h1 className="bright-signature-name">Zäe Selenya</h1>
            <div className="bright-signature-underline"></div>
          </div>
        </div>
        
        {/* Subscription Section - Bottom Right Corner */}
        <div className="subscription-section-bottom">
          <div className="subscriber-count-bottom">
            <Users className="w-5 h-5 mr-2" />
            <span className="count-number-bottom">{totalSubscribers.toLocaleString()}</span>
            <span className="count-label-bottom">Exploradores</span>
          </div>
          
          <Button
            onClick={handleSubscribe}
            disabled={isSubscribing}
            className={`subscribe-button-bottom ${isSubscribed ? 'subscribed' : ''}`}
          >
            <Bell className="w-4 h-4 mr-2" />
            {isSubscribing ? 'Suscribiendo...' : isSubscribed ? 'Suscrito' : 'Suscribirse'}
          </Button>
        </div>
        
        {/* Bright Mystical Particles */}
        <div className="bright-particles">
          <div className="bright-particle particle-1"></div>
          <div className="bright-particle particle-2"></div>
          <div className="bright-particle particle-3"></div>
          <div className="bright-particle particle-4"></div>
        </div>
      </div>
    </section>
  );
};

export default BrightYouTubeBanner;