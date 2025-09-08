import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { CheckCircle, Star, Sparkles, ArrowLeft } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const TipSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [paymentStatus, setPaymentStatus] = useState('checking');
  const [paymentData, setPaymentData] = useState(null);
  const { toast } = useToast();
  
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    if (sessionId) {
      pollPaymentStatus(sessionId);
    } else {
      setPaymentStatus('error');
    }
  }, [sessionId]);

  const pollPaymentStatus = async (sessionId, attempts = 0) => {
    const maxAttempts = 5;
    const pollInterval = 2000; // 2 seconds

    if (attempts >= maxAttempts) {
      setPaymentStatus('timeout');
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL || ''}/api/payments/checkout/status/${sessionId}`);
      
      if (!response.ok) {
        throw new Error('Failed to check payment status');
      }

      const data = await response.json();
      setPaymentData(data);
      
      if (data.payment_status === 'paid') {
        setPaymentStatus('success');
        
        toast({
          title: "🎉 ¡Propina recibida!",
          description: `¡Gracias por tu ofrenda cósmica de $${(data.amount_total / 100).toFixed(2)}!`,
          duration: 5000,
        });
        return;
      } else if (data.status === 'expired') {
        setPaymentStatus('expired');
        return;
      }

      // If payment is still pending, continue polling
      setTimeout(() => pollPaymentStatus(sessionId, attempts + 1), pollInterval);
    } catch (error) {
      console.error('Error checking payment status:', error);
      setPaymentStatus('error');
    }
  };

  const renderStatus = () => {
    switch (paymentStatus) {
      case 'checking':
        return (
          <div className="text-center">
            <div className="animate-spin w-10 h-10 sm:w-12 sm:h-12 border-4 border-cosmic-blue border-t-transparent rounded-full mx-auto mb-4"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Verificando tu ofrenda cósmica...
            </h2>
            <p className="text-cosmic-mint text-sm sm:text-base">
              Estamos confirmando que tu propina llegó al portal mágico ✨
            </p>
          </div>
        );
        
      case 'success':
        return (
          <div className="text-center">
            <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-400 mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              ¡Ofrenda Recibida! 🎉
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" fill="currentColor" />
              <span className="text-xl sm:text-2xl font-bold text-yellow-400">
                ${paymentData ? (paymentData.amount_total / 100).toFixed(2) : '0.00'}
              </span>
              <Star className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" fill="currentColor" />
            </div>
            <p className="text-cosmic-mint mb-6 text-sm sm:text-base px-2">
              Tu propina ha sido recibida con gratitud infinita. El universo cósmico de Zäe Selenya se expande gracias a tu apoyo. ¡Que la magia te acompañe! 🌌✨
            </p>
            <div className="flex items-center justify-center gap-2 text-cosmic-blue text-sm sm:text-base">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-center">Transacción completada exitosamente</span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>
        );
        
      case 'timeout':
        return (
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⏰</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Verificación en proceso
            </h2>
            <p className="text-cosmic-mint">
              Tu pago puede estar procesándose. Revisa tu email para confirmación o contacta soporte si tienes dudas.
            </p>
          </div>
        );
        
      case 'expired':
        return (
          <div className="text-center">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">❌</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Sesión expirada
            </h2>
            <p className="text-cosmic-mint">
              La sesión de pago ha expirado. Por favor intenta realizar la propina nuevamente.
            </p>
          </div>
        );
        
      default:
        return (
          <div className="text-center">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚠️</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Error en la verificación
            </h2>
            <p className="text-cosmic-mint">
              Hubo un error al verificar tu pago. Por favor contacta soporte si ya realizaste el pago.
            </p>
          </div>
        );
    }
  };

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

      <Card className="backdrop-blur-lg bg-black bg-opacity-40 border-2 border-cosmic-blue border-opacity-50 rounded-2xl p-6 sm:p-8 max-w-md w-full mx-4">
        
        {renderStatus()}
        
        <div className="mt-6 sm:mt-8 flex justify-center">
          <Button
            onClick={() => navigate('/')}
            className="bg-cosmic-blue hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 w-full sm:w-auto"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Portal Cósmico
          </Button>
        </div>

        {/* Sparkle Effects */}
        {paymentStatus === 'success' && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="sparkle-effect sparkle-1">✨</div>
            <div className="sparkle-effect sparkle-2">🌟</div>
            <div className="sparkle-effect sparkle-3">✨</div>
            <div className="sparkle-effect sparkle-4">💫</div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default TipSuccess;