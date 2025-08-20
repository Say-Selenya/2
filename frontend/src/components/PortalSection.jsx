import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { useToast } from '../hooks/use-toast';
import { mockSubscriptionsData } from '../mock';
import { Users, CreditCard, Sparkles, Heart, Zap, DollarSign } from 'lucide-react';

const PortalSection = ({ section, index }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const { toast } = useToast();
  
  const handlePaymentSubscribe = async (planType) => {
    setSelectedPlan(planType);
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      toast({
        title: "¡Pago procesado! ✨",
        description: `Suscripción ${planType} activada exitosamente`,
        duration: 3000,
      });
      setIsProcessing(false);
      setSelectedPlan(null);
    }, 2000);
  };

  const subscriptionPlans = [
    { id: 'basic', name: 'Portal Básico', price: 9.99, features: ['Acceso completo', 'Sin anuncios'] },
    { id: 'premium', name: 'Portal Premium', price: 19.99, features: ['Todo lo básico', 'Contenido exclusivo', 'Chat directo'] },
    { id: 'cosmic', name: 'Portal Cósmico', price: 39.99, features: ['Todo lo premium', 'Videos en vivo', 'Contenido personalizado'] }
  ];

  const getIcon = () => {
    switch(section.id) {
      case 'frikilandia': return <Zap className="w-6 h-6" />;
      case 'tragedias': return <Heart className="w-6 h-6" />;
      case 'humor_kawaii': return <Sparkles className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section className={`portal-section min-h-screen flex items-center py-16 ${
      index % 2 === 0 ? 'cosmic-section-even' : 'cosmic-section-odd'
    }`}>
      <div className="container mx-auto px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          index % 2 === 1 ? 'lg:grid-flow-row-dense' : ''
        }`}>
          
          {/* Content side */}
          <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
            <Card 
              className="portal-card p-8 backdrop-blur-sm border-2 border-opacity-30"
              style={{ 
                backgroundColor: `${section.bgColor}20`,
                borderColor: section.bgColor,
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div 
                  className="p-3 rounded-full"
                  style={{ backgroundColor: section.bgColor }}
                >
                  {getIcon()}
                </div>
                <div>
                  <h2 
                    className="section-heading"
                    style={{ color: section.textColor }}
                  >
                    {section.title}
                  </h2>
                  <p className="body-medium opacity-80">
                    {section.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="body-medium font-semibold mb-4">Descubre:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {section.features.map((feature, idx) => (
                    <Badge 
                      key={idx}
                      variant="secondary"
                      className="justify-start p-2 rounded-full"
                      style={{ 
                        backgroundColor: `${section.bgColor}30`,
                        color: section.textColor 
                      }}
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Subscription plans */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5" style={{ color: section.textColor }} />
                  <span className="body-small font-semibold">
                    {mockSubscriptionsData[section.id]?.count || 0} exploradores mágicos
                  </span>
                </div>
                
                <div className="space-y-3">
                  {subscriptionPlans.map((plan) => (
                    <div key={plan.id} className="payment-plan-card">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-white">{plan.name}</h4>
                          <div className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4 text-green-400" />
                            <span className="text-lg font-bold text-green-400">{plan.price}</span>
                            <span className="text-sm text-gray-400">/mes</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {plan.features.map((feature, idx) => (
                          <Badge 
                            key={idx}
                            variant="secondary"
                            className="text-xs px-2 py-1"
                            style={{ 
                              backgroundColor: `${section.bgColor}20`,
                              color: section.textColor 
                            }}
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button
                        onClick={() => handlePaymentSubscribe(plan.name)}
                        disabled={isProcessing}
                        className="w-full payment-subscribe-btn"
                        style={{ 
                          backgroundColor: section.textColor,
                          color: section.bgColor 
                        }}
                      >
                        <CreditCard className="w-4 h-4 mr-2" />
                        {isProcessing && selectedPlan === plan.name ? 
                          'Procesando...' : 
                          `Suscribirse a ${plan.name}`
                        }
                      </Button>
                    </div>
                  ))}
                </div>
                
                {/* Payment methods */}
                <div className="payment-methods-info">
                  <p className="body-small text-gray-400 text-center mb-2">
                    Métodos de pago seguros:
                  </p>
                  <div className="flex justify-center gap-4">
                    <div className="payment-badge">
                      <span className="text-blue-400 font-semibold">PayPal</span>
                    </div>
                    <div className="payment-badge">
                      <span className="text-purple-400 font-semibold">Stripe</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Visual side */}
          <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
            <div 
              className="portal-visual h-96 rounded-2xl shadow-2xl relative overflow-hidden"
              style={{ backgroundColor: section.bgColor }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="text-8xl opacity-20"
                  style={{ color: section.textColor }}
                >
                  {section.emoji}
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div 
                  className="backdrop-blur-sm rounded-lg p-4"
                  style={{ backgroundColor: `${section.textColor}20` }}
                >
                  <p 
                    className="body-small font-semibold"
                    style={{ color: section.textColor }}
                  >
                    "Cada mundo tiene sus propios secretos por descubrir..."
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PortalSection;