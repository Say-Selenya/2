import React, { useState, useEffect } from 'react';
import { Users, Bell } from 'lucide-react';
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
      
      {/* Custom Alien Cowboy Sticker - Top Left Corner */}
      <div className="custom-alien-sticker">
        <div className="custom-sticker-wrapper">
          <img 
            src="/assets/alien_transparent.png"
            alt="Alien Cowboy Saludando a la Derecha"
            className="custom-alien-image"
          />
          <div className="custom-sticker-border"></div>
          <div className="custom-sticker-shadow"></div>
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
        </div>
        
        {/* Subscription Section - Bottom Right Corner */}
        <div className="subscription-section-bottom">
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