import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ArrowLeft, Heart, Star, Gamepad2 } from 'lucide-react';
import CosmicMusicPlayer from './CosmicMusicPlayer';
import VisitorCounter from './VisitorCounter';
import { AudioProvider } from '../contexts/AudioContext';

const FrikilandiaPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Header with back button */}
      <div className="container mx-auto px-6 py-8">
        <Button
          onClick={() => navigate('/')}
          className="mb-6 bg-blue-600 hover:bg-blue-700 text-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al Portal Principal
        </Button>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">💙</div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4">
            Frikilandia
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Bienvenido al universo friki de Zäe Selenya. Fandom, cultura pop y diversión sin límites.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Anime & Manga */}
          <Card className="bg-blue-900 bg-opacity-50 border-2 border-blue-400 border-opacity-50 p-6 hover:transform hover:scale-105 transition-all">
            <div className="text-center">
              <div className="text-4xl mb-4">🎌</div>
              <h3 className="text-xl font-bold text-blue-300 mb-3">Anime & Manga</h3>
              <p className="text-blue-100 mb-4">
                Análisis profundos, reviews y teorías sobre tus series favoritas
              </p>
              <div className="flex items-center justify-center gap-2 text-blue-200">
                <Star className="w-4 h-4 fill-current" />
                <span>Contenido exclusivo</span>
              </div>
            </div>
          </Card>

          {/* Gaming */}
          <Card className="bg-blue-900 bg-opacity-50 border-2 border-blue-400 border-opacity-50 p-6 hover:transform hover:scale-105 transition-all">
            <div className="text-center">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-bold text-blue-300 mb-3">Gaming</h3>
              <p className="text-blue-100 mb-4">
                Reviews, gameplays y secretos de los videojuegos más épicos
              </p>
              <div className="flex items-center justify-center gap-2 text-blue-200">
                <Gamepad2 className="w-4 h-4" />
                <span>Gameplay exclusivo</span>
              </div>
            </div>
          </Card>

          {/* Fan Art */}
          <Card className="bg-blue-900 bg-opacity-50 border-2 border-blue-400 border-opacity-50 p-6 hover:transform hover:scale-105 transition-all">
            <div className="text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-blue-300 mb-3">Fan Art</h3>
              <p className="text-blue-100 mb-4">
                Creaciones artísticas inspiradas en nuestros fandoms favoritos
              </p>
              <div className="flex items-center justify-center gap-2 text-blue-200">
                <Heart className="w-4 h-4 fill-current" />
                <span>Arte original</span>
              </div>
            </div>
          </Card>

        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-cyan-500 p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">
              ¡Únete a la comunidad friki!
            </h2>
            <p className="text-blue-100 mb-6">
              Accede a contenido exclusivo, participa en discusiones y forma parte de nuestra familia otaku
            </p>
            <Button className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-3">
              Suscribirse Ahora
            </Button>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default FrikilandiaPage;