import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { XCircle, ArrowLeft, RefreshCw } from 'lucide-react';

const TipCancelled = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 flex items-center justify-center p-6">
      
      {/* Vertical Neon Lights */}
      <div className="vertical-neon-lights">
        <div className="neon-light neon-left">
          <div className="neon-strip"></div>
        </div>
        <div className="neon-light neon-right">
          <div className="neon-strip"></div>
        </div>
      </div>

      <Card className="backdrop-blur-lg bg-black bg-opacity-40 border-2 border-cosmic-blue border-opacity-50 rounded-2xl p-6 sm:p-8 max-w-md w-full mx-4 text-center">
        
        <XCircle className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-500 mx-auto mb-4" />
        
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
          Pago Cancelado
        </h2>
        
        <p className="text-cosmic-mint mb-6 text-sm sm:text-base">
          Has cancelado la propina. No se ha realizado ningún cargo. El portal cósmico te espera cuando estés listo para hacer una ofrenda. ✨
        </p>
        
        <div className="flex flex-col gap-3 sm:gap-4 justify-center">
          <Button
            onClick={() => navigate('/')}
            className="bg-cosmic-blue hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 w-full"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Portal
          </Button>
          
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="border-cosmic-mint text-cosmic-mint hover:bg-cosmic-mint hover:text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 w-full"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Intentar de Nuevo
          </Button>
        </div>

        {/* Mystical particles */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="particle-float particle-1">🌌</div>
          <div className="particle-float particle-2">✨</div>
          <div className="particle-float particle-3">🔮</div>
        </div>
      </Card>
    </div>
  );
};

export default TipCancelled;