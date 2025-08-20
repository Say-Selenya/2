import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ArrowLeft, Sparkles, Palette, Smile } from 'lucide-react';

const KawaiiPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-400 to-purple-400">
      {/* Header with back button */}
      <div className="container mx-auto px-6 py-8">
        <Button
          onClick={() => navigate('/')}
          className="mb-6 bg-green-600 hover:bg-green-700 text-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al Portal Principal
        </Button>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">💚</div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent mb-4">
            Humor + Arte + Kawaii
          </h1>
          <p className="text-xl text-green-800 max-w-2xl mx-auto font-semibold">
            ¡Bienvenido al rincón más colorido y tierno! Donde la creatividad no tiene límites.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Kawaii Art */}
          <Card className="bg-white bg-opacity-90 border-2 border-green-400 p-6 hover:transform hover:scale-105 transition-all shadow-lg">
            <div className="text-center">
              <div className="text-4xl mb-4">🌸</div>
              <h3 className="text-xl font-bold text-green-600 mb-3">Arte Kawaii</h3>
              <p className="text-green-700 mb-4">
                Ilustraciones adorables que llenan el corazón de ternura
              </p>
              <div className="flex items-center justify-center gap-2 text-green-600">
                <Sparkles className="w-4 h-4 fill-current" />
                <span>Pura magia</span>
              </div>
            </div>
          </Card>

          {/* Comics */}
          <Card className="bg-white bg-opacity-90 border-2 border-yellow-400 p-6 hover:transform hover:scale-105 transition-all shadow-lg">
            <div className="text-center">
              <div className="text-4xl mb-4">😂</div>
              <h3 className="text-xl font-bold text-yellow-600 mb-3">Cómics Divertidos</h3>
              <p className="text-yellow-700 mb-4">
                Historias que te harán reír y alegrarán tu día
              </p>
              <div className="flex items-center justify-center gap-2 text-yellow-600">
                <Smile className="w-4 h-4" />
                <span>Risas garantizadas</span>
              </div>
            </div>
          </Card>

          {/* Watercolor */}
          <Card className="bg-white bg-opacity-90 border-2 border-blue-400 p-6 hover:transform hover:scale-105 transition-all shadow-lg">
            <div className="text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">Acuarelas</h3>
              <p className="text-blue-700 mb-4">
                Técnicas suaves y colores vibrantes que cobran vida
              </p>
              <div className="flex items-center justify-center gap-2 text-blue-600">
                <Palette className="w-4 h-4" />
                <span>Arte fluido</span>
              </div>
            </div>
          </Card>

        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-pink-400 via-purple-400 to-green-400 p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">
              ¡Únete a la diversión kawaii!
            </h2>
            <p className="text-white mb-6">
              Descubre un mundo lleno de colores, sonrisas y creatividad sin límites
            </p>
            <Button className="bg-white text-pink-600 hover:bg-pink-50 font-bold px-8 py-3">
              ¡Quiero ser kawaii! 🌈
            </Button>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default KawaiiPage;