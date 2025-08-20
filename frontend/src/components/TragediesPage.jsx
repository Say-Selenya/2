import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ArrowLeft, Moon, Skull, Eye } from 'lucide-react';

const TragediesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-gray-900">
      {/* Header with back button */}
      <div className="container mx-auto px-6 py-8">
        <Button
          onClick={() => navigate('/')}
          className="mb-6 bg-purple-600 hover:bg-purple-700 text-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al Portal Principal
        </Button>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🖤</div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent mb-4">
            Tragedias de Pesadillas
          </h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Sumérgete en el lado oscuro del arte. Donde las sombras cobran vida y los misterios esperan.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Dark Art */}
          <Card className="bg-purple-900 bg-opacity-50 border-2 border-purple-400 border-opacity-50 p-6 hover:transform hover:scale-105 transition-all">
            <div className="text-center">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-xl font-bold text-purple-300 mb-3">Arte Gótico</h3>
              <p className="text-purple-100 mb-4">
                Ilustraciones oscuras que exploran la belleza en las sombras
              </p>
              <div className="flex items-center justify-center gap-2 text-purple-200">
                <Moon className="w-4 h-4 fill-current" />
                <span>Creaciones nocturnas</span>
              </div>
            </div>
          </Card>

          {/* Poetry */}
          <Card className="bg-purple-900 bg-opacity-50 border-2 border-purple-400 border-opacity-50 p-6 hover:transform hover:scale-105 transition-all">
            <div className="text-center">
              <div className="text-4xl mb-4">📜</div>
              <h3 className="text-xl font-bold text-purple-300 mb-3">Poesía Melancólica</h3>
              <p className="text-purple-100 mb-4">
                Versos que abrazan la melancolía y la profundidad emocional
              </p>
              <div className="flex items-center justify-center gap-2 text-purple-200">
                <Eye className="w-4 h-4" />
                <span>Miradas al alma</span>
              </div>
            </div>
          </Card>

          {/* Photography */}
          <Card className="bg-purple-900 bg-opacity-50 border-2 border-purple-400 border-opacity-50 p-6 hover:transform hover:scale-105 transition-all">
            <div className="text-center">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-xl font-bold text-purple-300 mb-3">Fotografía Conceptual</h3>
              <p className="text-purple-100 mb-4">
                Imágenes que capturan emociones y conceptos abstractos
              </p>
              <div className="flex items-center justify-center gap-2 text-purple-200">
                <Skull className="w-4 h-4" />
                <span>Estética dark</span>
              </div>
            </div>
          </Card>

        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-purple-600 to-pink-500 p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">
              Abraza tu lado oscuro
            </h2>
            <p className="text-purple-100 mb-6">
              Descubre la belleza en las tinieblas y explora los rincones más profundos del arte
            </p>
            <Button className="bg-white text-purple-600 hover:bg-purple-50 font-bold px-8 py-3">
              Entrar a las Sombras
            </Button>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default TragediesPage;