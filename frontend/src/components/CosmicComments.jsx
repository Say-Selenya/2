import React, { useState } from 'react';
import { useToast } from '../hooks/use-toast';

const CosmicComments = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [isLaunching, setIsLaunching] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!message.trim()) {
      toast({
        title: "🌌 Mensaje vacío",
        description: "¡Escribe algo antes de enviarlo al cosmos!",
        duration: 3000,
      });
      return;
    }

    setIsLaunching(true);

    try {
      // Send message to backend
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL || ''}/api/cosmic-comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message.trim(),
          email: email.trim() || 'anonymous@cosmos.space',
          timestamp: new Date().toISOString()
        })
      });

      if (response.ok) {
        toast({
          title: "🚀 ¡Mensaje enviado al cosmos!",
          description: "Tu mensaje ha viajado a través de las estrellas ✨",
          duration: 4000,
        });
        
        setMessage('');
        setEmail('');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "🌠 Error cósmico",
        description: "No se pudo enviar el mensaje. ¡Inténtalo de nuevo!",
        duration: 4000,
      });
    }

    // Reset launching state after animation
    setTimeout(() => {
      setIsLaunching(false);
    }, 2000);
  };

  return (
    <div style={{
      margin: '40px 0',
      padding: '40px 20px',
      background: 'linear-gradient(135deg, rgba(13, 27, 42, 1) 0%, rgba(27, 38, 59, 1) 50%, rgba(20, 30, 48, 1) 100%)',
      borderRadius: '20px',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '500px'
    }}>
      
      {/* Simple Planet Sphere */}
      <div style={{
        position: 'absolute',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle at 30% 30%, #40E0D0 0%, #20B2AA 50%, #1976D2 100%)',
        boxShadow: '0 0 60px rgba(64, 224, 208, 0.5), inset -20px -20px 40px rgba(0,0,0,0.3)',
        zIndex: '1'
      }}></div>
      
      {/* Form Content */}
      <div style={{
        position: 'relative',
        zIndex: '10',
        maxWidth: '350px',
        width: '100%',
        textAlign: 'center',
        padding: '40px 20px'
      }}>
        
        <h3 style={{
          color: 'white',
          fontSize: '2rem',
          marginBottom: '30px',
          textShadow: '0 0 20px rgba(64, 224, 208, 0.6)'
        }}>
          Escríbeme
        </h3>
        
        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
          
          <input
            type="text"
            placeholder="Tu nombre"
            style={{
              padding: '15px 20px',
              borderRadius: '25px',
              border: 'none',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              fontSize: '1rem',
              color: '#2c3e50'
            }}
          />
          
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Tu correo"
            style={{
              padding: '15px 20px',
              borderRadius: '25px',
              border: 'none',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              fontSize: '1rem',
              color: '#2c3e50'
            }}
          />
          
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tu mensaje..."
            rows="3"
            style={{
              padding: '15px 20px',
              borderRadius: '25px',
              border: 'none',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              fontSize: '1rem',
              color: '#2c3e50',
              resize: 'vertical',
              minHeight: '80px'
            }}
          />
          
          <button
            type="submit"
            disabled={isLaunching}
            style={{
              padding: '15px 30px',
              borderRadius: '25px',
              border: 'none',
              background: 'linear-gradient(135deg, #40E0D0 0%, #20B2AA 50%, #1976D2 100%)',
              color: 'white',
              fontSize: '1rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '10px'
            }}
          >
            <span>🚀</span>
            <span>{isLaunching ? 'Enviando...' : 'Enviar al cosmos'}</span>
          </button>
          
        </form>
        
      </div>
      
    </div>
  );
};

export default CosmicComments;