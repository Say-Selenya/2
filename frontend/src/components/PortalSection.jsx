import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { useToast } from '../hooks/use-toast';
import { mockSubscribe, mockSubscriptionsData } from '../mock';
import { Users, Mail, Sparkles, Heart, Zap } from 'lucide-react';

const PortalSection = ({ section, index }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email requerido",
        description: "Por favor ingresa tu email mágico",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const result = await mockSubscribe(section.id, email);
      toast({
        title: "¡Éxito!",
        description: result.message,
        duration: 3000,
      });
      setEmail('');
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

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

              {/* Subscription form */}
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5" style={{ color: section.textColor }} />
                  <span className="body-small font-semibold">
                    {mockSubscriptionsData[section.id]?.count || 0} exploradores mágicos
                  </span>
                </div>
                
                <div className="flex gap-3">
                  <Input
                    type="email"
                    placeholder="tu-email@mágico.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 rounded-full border-2 focus:ring-2"
                    style={{ 
                      borderColor: section.bgColor,
                      focusRingColor: section.textColor 
                    }}
                  />
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="cta-button px-6 rounded-full"
                    style={{ 
                      backgroundColor: section.textColor,
                      color: section.bgColor 
                    }}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    {isLoading ? 'Enviando...' : 'Entrar'}
                  </Button>
                </div>
              </form>
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