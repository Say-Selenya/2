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
      <div className="planet-visual-container">
        
        {/* Visible Planet */}
        <div className="planet-sphere">
          <div className="planet-surface"></div>
          <div className="planet-clouds"></div>
        </div>
        
        {/* Content Over Planet */}
        <div className="planet-content-overlay">
          
          {/* Planet Header */}
          <div className="planet-header-elegant">
            <h3 className="cosmic-title-elegant">Escríbeme</h3>
          </div>

          {/* Comment Form */}
          <form onSubmit={handleSubmit} className="cosmic-form">
          
          {/* Name Input */}
          <div className="cosmic-input-group">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu estrella (nombre)"
              className="cosmic-input-elegant name-input"
            />
          </div>

          {/* Email Input */}
          <div className="cosmic-input-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu órbita (correo)"
              className="cosmic-input-elegant email-input"
            />
          </div>

          {/* Message Textarea */}
          <div className="cosmic-input-group">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tu mensaje desde el universo..."
              rows="3"
              className="cosmic-textarea-elegant"
              maxLength={500}
            />
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

        </div> {/* Close planet-content-overlay */}
        
      </div>
    </div>
  );
};

export default CosmicComments;