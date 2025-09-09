import React, { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { useToast } from '../hooks/use-toast';
import { Heart, Sparkles, Star, DollarSign, Coins } from 'lucide-react';

const PokeBallTips = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [totalTips, setTotalTips] = useState(0);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [coinAnimations, setCoinAnimations] = useState([]);
  const [isGlowing, setIsGlowing] = useState(false);
  const { toast } = useToast();

  // Predefined tip amounts
  const tipAmounts = [5, 10, 25, 50, 100];

  // Natural rhythm auto-open pokeball on hover
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isHovering && !isAnimating) {
        setIsOpen(true);
      } else if (!isHovering && !isAnimating) {
        setIsOpen(false);
      }
    }, 100); // Natural rhythm delay

    return () => clearTimeout(timer);
  }, [isHovering, isAnimating]);

  const createCoinAnimation = (amount, buttonRect) => {
    const coinId = Date.now() + Math.random();
    const coin = {
      id: coinId,
      amount: amount,
      startX: buttonRect.left + buttonRect.width / 2,
      startY: buttonRect.top + buttonRect.height / 2,
    };
    
    setCoinAnimations(prev => [...prev, coin]);
    
    // Remove coin after animation completes
    setTimeout(() => {
      setCoinAnimations(prev => prev.filter(c => c.id !== coinId));
    }, 2000);
  };

  const handleTipClick = async (amount, event) => {
    setSelectedAmount(amount);
    setIsAnimating(true);
    
    // Get button position for coin animation
    const buttonRect = event.target.getBoundingClientRect();
    
    // Create flying coin animation
    createCoinAnimation(amount, buttonRect);
    
    // Keep pokeball open during animation
    setIsOpen(true);
    
    try {
      // Determine package ID based on amount
      let packageId;
      switch(amount) {
        case 5: packageId = 'small'; break;
        case 10: packageId = 'medium'; break;
        case 25: packageId = 'large'; break;
        case 50: packageId = 'xl'; break;
        case 100: packageId = 'cosmic'; break;
        default: packageId = 'medium'; break;
      }
      
      // Get current origin for success/cancel URLs
      const originUrl = window.location.origin;
      
      // Call backend to create checkout session
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL || ''}/api/payments/checkout/session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          package_id: packageId,
          origin_url: originUrl
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to create payment session');
      }
      
      const data = await response.json();
      
      // Show success toast and redirect to Stripe
      toast({
        title: "🚀 Redirigiendo a pago seguro",
        description: `Procesando propina de $${amount} - Stripe Checkout`,
        duration: 2000,
      });
      
      // Small delay for user to see the animation, then redirect
      setTimeout(() => {
        window.location.href = data.url;
      }, 2000);
      
    } catch (error) {
      console.error('Payment error:', error);
      
      toast({
        title: "❌ Error al procesar pago",
        description: "Hubo un problema. Por favor intenta nuevamente.",
        duration: 4000,
      });
      
      // Reset states on error
      setIsAnimating(false);
      setSelectedAmount(null);
    }
  };

  const handlePaymentMethod = (method) => {
    if (method === 'paypal') {
      toast({
        title: "PayPal activado 💰",
        description: "Redirigiendo a PayPal para procesar tu propina...",
        duration: 3000,
      });
      // Aquí se integraría la redirección real a PayPal
      window.open('https://paypal.me', '_blank');
    } else if (method === 'stripe') {
      toast({
        title: "Stripe activado 💳",
        description: "Abriendo procesador de tarjetas seguro...",
        duration: 3000,
      });
      // Aquí se integraría Stripe Checkout
      console.log('Stripe payment initiated');
    }
  };

  const handleCustomTip = () => {
    toast({
      title: "Próximamente",
      description: "Cantidad personalizada estará disponible pronto",
      duration: 2000,
    });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // Instant hover detection - no delays
  const handleContainerMouseEnter = () => {
    setIsHovering(true);
  };

  const handleContainerMouseLeave = () => {
    setIsHovering(false);
  };

  // Optimized hover handlers with immediate response
  const handleQuickMouseEnter = () => {
    setIsHovering(true);
  };

  const handleQuickMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div 
      className="pokeball-tips-container sensitive-hover-area"
      onMouseEnter={handleContainerMouseEnter}
      onMouseLeave={handleContainerMouseLeave}
    >
      {/* Mystical Artistic Eyes OUTSIDE the card - Only Top Corners */}
      <div className="mystical-artistic-eyes">
        <div className="artistic-eye eye-corner-top-left">
          <img 
            src="https://customer-assets.emergentagent.com/job_cosmic-portal-2/artifacts/ocplx6tx_image.jpeg"
            alt="Mystical Eye"
            className="mystical-eye-image"
          />
        </div>
        <div className="artistic-eye eye-corner-top-right">
          <img 
            src="https://customer-assets.emergentagent.com/job_cosmic-portal-2/artifacts/ocplx6tx_image.jpeg"
            alt="Mystical Eye"
            className="mystical-eye-image"
          />
        </div>
      </div>

      <Card className="pokeball-card backdrop-blur-lg bg-black bg-opacity-20 border-2 border-cosmic-blue border-opacity-30 rounded-2xl p-6">
        
        
        {/* Header */}
        <div style={{
          textAlign: 'center', 
          marginBottom: '24px', 
          padding: '40px 20px', 
          overflow: 'visible',
          minHeight: '120px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            padding: '20px 0',
            overflow: 'visible'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '4rem',
              overflow: 'visible',
              fontFamily: 'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif'
            }}>
              🔮
            </div>
            <div style={{
              fontSize: '2.5rem',
              color: 'white',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '600',
              padding: '0 20px'
            }}>
              Ofrendas
            </div>
            <div style={{
              width: '80px',
              height: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '4rem',
              overflow: 'visible',
              fontFamily: 'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif'
            }}>
              🔮
            </div>
          </div>
          <p className="body-medium text-cosmic-mint opacity-90">
            Apoya el universo creativo de Zäe Selenya
          </p>
          {totalTips > 0 && (
            <div className="mt-3 flex items-center justify-center gap-2">
              <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
              <span className="body-small text-yellow-400 font-semibold">
                Total recaudado: ${totalTips}
              </span>
              <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
            </div>
          )}
        </div>

        {/* Pokeball Container */}
        <div 
          className="pokeball-container sensitive-pokeball-area"
          onMouseEnter={handleQuickMouseEnter}
          onMouseLeave={handleQuickMouseLeave}
        >
          <div className={`pokeball ${isOpen ? 'open' : 'closed'} ${isAnimating ? 'animating' : ''} ${isGlowing ? 'glowing' : ''}`}>
            
            {/* Top Half */}
            <div className="pokeball-top">
              <div className="pokeball-top-inner">
                <div className="pokeball-highlight"></div>
              </div>
            </div>
            
            {/* Bottom Half */}
            <div className="pokeball-bottom">
              <div className="pokeball-bottom-inner">
                <div className="pokeball-shadow"></div>
              </div>
            </div>
            
            {/* Center Band */}
            <div className="pokeball-band">
              <div className="pokeball-button">
                {isAnimating && (
                  <div className="pokeball-sparkles">
                    <Sparkles className="sparkle sparkle-1" />
                    <Sparkles className="sparkle sparkle-2" />
                    <Sparkles className="sparkle sparkle-3" />
                  </div>
                )}
              </div>
            </div>
            
            {/* Inner Content when Open */}
            {isOpen && (
              <div className="pokeball-inner-content">
                <div className="cosmic-energy">
                  <Heart className="w-8 h-8 text-pink-400" fill="currentColor" />
                  <div className="energy-waves">
                    <div className="wave wave-1"></div>
                    <div className="wave wave-2"></div>
                    <div className="wave wave-3"></div>
                  </div>
                </div>
                {selectedAmount && (
                  <div className="tip-amount-display">
                    <span className="amount-text">${selectedAmount}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Flying Coins Animation */}
        {coinAnimations.map(coin => (
          <div
            key={coin.id}
            className="flying-coin"
            style={{
              '--start-x': `${coin.startX}px`,
              '--start-y': `${coin.startY}px`,
            }}
          >
            <Coins className="w-6 h-6 text-yellow-400" />
            <span className="coin-amount">${coin.amount}</span>
          </div>
        ))}

        {/* Tip Buttons */}
        <div className="tip-buttons-grid">
          <h4 className="body-medium font-semibold text-white mb-4 text-center">
            Elige tu propina mágica:
          </h4>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-4">
            {tipAmounts.map((amount) => (
              <Button
                key={amount}
                onClick={(e) => handleTipClick(amount, e)}
                disabled={isAnimating}
                className="tip-button cosmic-tip-btn flex items-center justify-center"
              >
                <DollarSign className="w-3 h-3 mr-1 flex-shrink-0" />
                <span className="font-semibold">{amount}</span>
              </Button>
            ))}
          </div>

          <Button
            onClick={handleCustomTip}
            disabled={isAnimating}
            className="custom-tip-button w-full flex items-center justify-center"
          >
            <Sparkles className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>Cantidad Personalizada</span>
          </Button>
        </div>

        {/* Payment Methods Preview */}
        <div className="payment-methods-preview">
          <p className="body-small text-gray-400 text-center mb-2">
            Métodos de pago disponibles:
          </p>
          <div className="flex justify-center gap-4">
            <button 
              className="payment-method clickable-payment"
              onClick={() => handlePaymentMethod('paypal')}
            >
              <span className="text-blue-400 font-semibold">PayPal</span>
            </button>
            <button 
              className="payment-method clickable-payment"
              onClick={() => handlePaymentMethod('stripe')}
            >
              <span className="text-purple-400 font-semibold">Stripe</span>
            </button>
          </div>
        </div>

      </Card>
    </div>
  );
};

export default PokeBallTips;