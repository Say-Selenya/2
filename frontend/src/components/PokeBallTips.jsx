import React, { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { useToast } from '../hooks/use-toast';
import { Heart, Sparkles, Star, DollarSign } from 'lucide-react';

const PokeBallTips = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [totalTips, setTotalTips] = useState(0);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const { toast } = useToast();

  // Predefined tip amounts
  const tipAmounts = [5, 10, 25, 50, 100];

  const handleTipClick = async (amount) => {
    setSelectedAmount(amount);
    setIsAnimating(true);
    
    // Open pokeball animation
    setIsOpen(true);
    
    // Simulate payment process
    setTimeout(() => {
      setTotalTips(prev => prev + amount);
      toast({
        title: "¡Propina enviada! ✨",
        description: `Gracias por tu generosidad de $${amount}`,
        duration: 3000,
      });
      
      // Close pokeball after a moment
      setTimeout(() => {
        setIsOpen(false);
        setIsAnimating(false);
        setSelectedAmount(null);
      }, 2000);
    }, 1500);
  };

  const handleCustomTip = () => {
    // This will be implemented with payment integration
    toast({
      title: "Próximamente",
      description: "Cantidad personalizada estará disponible pronto",
      duration: 2000,
    });
  };

  return (
    <div className="pokeball-tips-container">
      <Card className="pokeball-card backdrop-blur-lg bg-black bg-opacity-60 border-2 border-cosmic-blue border-opacity-50 rounded-2xl p-6">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="section-heading text-white mb-2 galactic-title">
            Portal de Propinas ✨
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
          <div className={`pokeball ${isOpen ? 'open' : 'closed'} ${isAnimating ? 'animating' : ''}`}>
            
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

        {/* Tip Buttons */}
        <div className="tip-buttons-grid">
          <h4 className="body-medium font-semibold text-white mb-4 text-center">
            Elige tu propina mágica:
          </h4>
          
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-4">
            {tipAmounts.map((amount) => (
              <Button
                key={amount}
                onClick={() => handleTipClick(amount)}
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
            <div className="payment-method">
              <span className="text-blue-400 font-semibold">PayPal</span>
            </div>
            <div className="payment-method">
              <span className="text-purple-400 font-semibold">Stripe</span>
            </div>
          </div>
        </div>

      </Card>
    </div>
  );
};

export default PokeBallTips;