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
      
      {/* Realistic Alien Cowboy Sticker - Left Side */}
      <div className="alien-sticker-container">
        <div className="alien-sticker-wrapper">
          {/* UFO Base */}
          <div className="realistic-ufo-sticker">
            <div className="ufo-hull-realistic">
              <div className="hull-surface"></div>
              <div className="hull-reflection"></div>
            </div>
            <div className="ufo-dome-realistic"></div>
            <div className="propulsion-lights-realistic">
              <div className="prop-light"></div>
              <div className="prop-light"></div>
              <div className="prop-light"></div>
              <div className="prop-light"></div>
            </div>
          </div>
          
          {/* Realistic Green Alien Cowboy */}
          <div className="realistic-alien-cowboy">
            <div className="alien-realistic-head">
              <div className="head-highlights"></div>
              <div className="alien-realistic-eyes">
                <div className="realistic-eye left"></div>
                <div className="realistic-eye right"></div>
              </div>
              <div className="alien-mouth"></div>
            </div>
            
            {/* Cowboy Hat with tip gesture */}
            <div className="realistic-cowboy-hat">
              <div className="hat-crown"></div>
              <div className="hat-brim"></div>
              <div className="hat-band"></div>
            </div>
            
            <div className="alien-realistic-body">
              <div className="body-texture"></div>
            </div>
            
            {/* Waving hand with hat */}
            <div className="hat-tipping-arm">
              <div className="alien-arm"></div>
              <div className="alien-hand"></div>
            </div>
          </div>
          
          {/* Sticker border effect */}
          <div className="sticker-border"></div>
        </div>
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
          
          {/* Website Link */}
          <div className="bright-website-link">
            <ExternalLink className="w-4 h-4 inline mr-2" />
            <a href="https://zäestelar.net" className="bright-link-text">
              Zäestelar.net
            </a>
          </div>
        </div>
        
        {/* Subscription Button - Right Side */}
        <div className="subscription-section">
          <div className="subscriber-count">
            <Users className="w-5 h-5 mr-2" />
            <span className="count-number">{totalSubscribers.toLocaleString()}</span>
            <span className="count-label">Exploradores</span>
          </div>
          
          <Button
            onClick={handleSubscribe}
            disabled={isSubscribing}
            className={`subscribe-button ${isSubscribed ? 'subscribed' : ''}`}
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