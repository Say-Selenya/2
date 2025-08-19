import React, { useEffect, useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { mockGetSubscriptionStats } from '../mock';
import { TrendingUp, Users, Sparkles } from 'lucide-react';

const StatsSection = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await mockGetSubscriptionStats();
        setStats(data);
      } catch (error) {
        console.error('Error loading stats:', error);
      } finally {
        setLoading(false);
      }
    };

    loadStats();
    // Refresh stats every 30 seconds
    const interval = setInterval(loadStats, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading || !stats) {
    return (
      <section className="py-16 cosmic-section-stats">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-pulse">
            <Sparkles className="w-8 h-8 mx-auto text-cosmic-blue mb-4 animate-spin" />
            <p className="text-cosmic-mint">Cargando estadísticas mágicas...</p>
          </div>
        </div>
      </section>
    );
  }

  const totalSubscribers = Object.values(stats).reduce((sum, section) => sum + section.count, 0);

  return (
    <section className="py-16 cosmic-section-stats">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading text-white mb-4">
            Portal Mágico en Números
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5 text-cosmic-blue" />
            <p className="body-large text-cosmic-mint">
              Comunidad en crecimiento constante
            </p>
          </div>
        </div>

        {/* Total stats */}
        <Card className="mb-8 p-6 bg-black bg-opacity-50 border-cosmic-blue border-2 backdrop-blur-sm">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-8 h-8 text-cosmic-blue" />
              <div>
                <h3 className="text-4xl font-bold text-white">{totalSubscribers}</h3>
                <p className="text-cosmic-mint">Exploradores totales</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Individual section stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(stats).map(([sectionId, data]) => {
            const sectionNames = {
              frikilandia: { name: 'Frikilandia', color: '#b7fbff', textColor: '#1f47e6', emoji: '💙' },
              tragedias: { name: 'Tragedias', color: '#d987ff', textColor: '#470024', emoji: '🖤' },
              humor_kawaii: { name: 'Humor Kawaii', color: '#78d692', textColor: '#a1a500', emoji: '💚' }
            };
            
            const section = sectionNames[sectionId];
            
            return (
              <Card 
                key={sectionId}
                className="p-6 backdrop-blur-sm border-2 border-opacity-50"
                style={{ 
                  backgroundColor: `${section.color}20`,
                  borderColor: section.color 
                }}
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{section.emoji}</div>
                  <h3 
                    className="card-heading"
                    style={{ color: section.textColor }}
                  >
                    {section.name}
                  </h3>
                </div>
                
                <div className="text-center mb-4">
                  <div 
                    className="text-3xl font-bold mb-1"
                    style={{ color: section.textColor }}
                  >
                    {data.count}
                  </div>
                  <p className="body-small text-gray-300">suscriptores</p>
                </div>

                {/* Recent activity */}
                <div>
                  <p className="body-small font-semibold mb-2 text-gray-300">
                    Actividad reciente:
                  </p>
                  <div className="space-y-1">
                    {data.recentSubscribers.slice(0, 2).map((sub, idx) => (
                      <Badge 
                        key={idx}
                        variant="outline"
                        className="text-xs w-full justify-start"
                        style={{ 
                          borderColor: section.color,
                          color: section.textColor 
                        }}
                      >
                        {sub.email.split('@')[0]}...
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;