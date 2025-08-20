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

  // Auto-open pokeball on hover
  useEffect(() => {
    if (isHovering && !isAnimating) {
      setIsOpen(true);
    } else if (!isHovering && !isAnimating) {
      setIsOpen(false);
    }
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
    
    // Simulate payment process
    setTimeout(() => {
      setTotalTips(prev => prev + amount);
      
      // Trigger pokeball glow when coin "arrives"
      setIsGlowing(true);
      setTimeout(() => setIsGlowing(false), 1500);
      
      toast({
        title: "¡Propina recibida! ✨",
        description: `¡La moneda de $${amount} llegó al portal mágico!`,
        duration: 3000,
      });
      
      // Reset states
      setTimeout(() => {
        setIsAnimating(false);
        setSelectedAmount(null);
      }, 1000);
    }, 1500); // Timing to match coin flight
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

  return (
    <div 
      className="pokeball-tips-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card className="pokeball-card backdrop-blur-lg bg-black bg-opacity-60 border-2 border-cosmic-blue border-opacity-50 rounded-2xl p-6">
        
        {/* Mystical Eyes in Corners */}
        <div className="mystical-eyes">
          <div className="eye eye-top-left">
            <div className="eyeball">
              <div className="pupil"></div>
            </div>
          </div>
          <div className="eye eye-top-right">
            <div className="eyeball">
              <div className="pupil"></div>
            </div>
          </div>
        </div>
        
        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="section-heading text-white mb-2 galactic-title">
            🔮Ofrendas🔮
          </h3>
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
        <div className="pokeball-container">
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
          
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-4">
            {tipAmounts.map((amount) => (
              <Button
                key={amount}
                onClick={(e) => handleTipClick(amount, e)}
                disabled={isAnimating}
                className="tip-button cosmic-tip-btn"
              >
                <DollarSign className="w-3 h-3 mr-1" />
                {amount}
              </Button>
            ))}
          </div>

          <Button
            onClick={handleCustomTip}
            disabled={isAnimating}
            className="custom-tip-button w-full"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Cantidad Personalizada
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