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
    <div className="cosmic-comments-container">
      <div className="planet-comment-box">
        
        {/* Planet Header */}
        <div className="planet-header">
          <h4 className="cosmic-title">¡Escríbeme!</h4>
          <div className="planet-rings"></div>
        </div>

        {/* Comment Form */}
        <form onSubmit={handleSubmit} className="cosmic-form">
          
          {/* Email Input (Optional) */}
          <div className="cosmic-input-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu email (opcional) 📧"
              className="cosmic-input email-input"
            />
          </div>

          {/* Message Textarea */}
          <div className="cosmic-input-group">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Comparte tus pensamientos cósmicos... ✨"
              rows="4"
              className="cosmic-textarea"
              maxLength={500}
            />
            <div className="character-count">
              {message.length}/500 caracteres
            </div>
          </div>

          {/* Launch Button */}
          <div className="launch-button-container">
            <button
              type="submit"
              disabled={isLaunching}
              className={`cosmic-launch-button ${isLaunching ? 'launching' : ''}`}
            >
              <span className="rocket-emoji">🚀</span>
              <span className="button-text">
                {isLaunching ? 'Enviando al cosmos...' : 'Enviar al cosmos'}
              </span>
              {isLaunching && (
                <div className="rocket-trail">
                  <span>✨</span>
                  <span>⭐</span>
                  <span>🌟</span>
                </div>
              )}
            </button>
          </div>

        </form>

        {/* Planet Atmosphere Effect */}
        <div className="planet-atmosphere"></div>
        
      </div>
    </div>
  );
};

export default CosmicComments;