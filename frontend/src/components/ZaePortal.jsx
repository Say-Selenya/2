import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Heart, Sparkles, Send, Star, Moon, Rocket, Play, Users, Eye, Zap } from 'lucide-react';
import { mockData } from '../data/mock';

const ZaePortal = () => {
  const [selectedTip, setSelectedTip] = useState(15);
  const [customTip, setCustomTip] = useState('');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleTipSelect = (amount) => {
    setSelectedTip(amount);
    setCustomTip('');
  };

  const handleCustomTip = (value) => {
    setCustomTip(value);
    setSelectedTip(null);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Mensaje enviado:', contactForm);
    setContactForm({ name: '', email: '', message: '' });
    alert('¡Mensaje enviado a través del cosmos! ✨');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950 text-white relative overflow-hidden">
      {/* Galactic Background Effects */}
      <div className="absolute inset-0">
        {/* Nebula effects */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-cyan-500/15 via-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-pink-500/10 via-purple-500/15 to-transparent rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Cosmic particles */}
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            <div 
              className={`rounded-full ${Math.random() > 0.5 ? 'bg-pink-400' : Math.random() > 0.5 ? 'bg-purple-400' : 'bg-cyan-400'}`}
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                opacity: Math.random() * 0.8 + 0.2
              }}
            ></div>
          </div>
        ))}

        {/* Shooting stars */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-gradient-to-r from-pink-400 to-transparent animate-shooting-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: '3s'
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10">
        {/* YouTube-Style Banner Hero Section */}
        <section className="relative h-[70vh] overflow-hidden">
          {/* Background Image with Enhanced Contrast */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat enhanced-contrast"
            style={{
              backgroundImage: `url('https://customer-assets.emergentagent.com/job_6d890d5b-566e-4269-8a6d-68191d008ad7/artifacts/solnv0sw_PHOTO-2025-09-18-21-30-44.jpg')`
            }}
          >
            {/* Feminine galactic overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-pink-900/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 via-transparent to-purple-950/30"></div>
            
            {/* Magical sparkles overlay */}
            <div className="absolute inset-0">
              {[...Array(15)].map((_, i) => (
                <div
                  key={`sparkle-${i}`}
                  className="absolute animate-float-sparkle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 4}s`
                  }}
                >
                  <Sparkles className="w-4 h-4 text-pink-300 animate-pulse" />
                </div>
              ))}
            </div>
          </div>

          {/* Alien Greeting - Top Left */}
          <div className="absolute top-6 left-6 z-10">
            <img 
              src="https://customer-assets.emergentagent.com/job_6d890d5b-566e-4269-8a6d-68191d008ad7/artifacts/2x7tp5h4_Imagen%20de%20WhatsApp%202025-09-20%20a%20las%2023.42.09_3a9dc102.jpg"
              alt="Alien saludando"
              className="w-32 h-32 object-contain alien-transparent"
            />
          </div>

          {/* Signature and Profile Photo - Bottom Left */}
          <div className="absolute bottom-8 left-8 z-10 flex items-end space-x-4">
            <div className="signature-text">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-signature">
                Zäe Selenya
              </h1>
            </div>
            <div className="w-16 h-16 rounded-full border-2 border-pink-400/60 p-1 shadow-lg shadow-pink-400/50 profile-photo-feminine">
              <img
                src="https://customer-assets.emergentagent.com/job_6d890d5b-566e-4269-8a6d-68191d008ad7/artifacts/olceu8nm_Imagen%20de%20WhatsApp%202025-09-21%20a%20las%2000.04.22_b5169f09.jpg"
                alt="Zäe Selenya Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Navigation/Menu Section */}
        <section className="bg-gradient-to-r from-purple-900/80 to-indigo-900/80 border-b border-pink-500/30 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex space-x-8">
              <a href="#inicio" className="text-pink-400 font-semibold border-b-2 border-pink-400 pb-2 hover:text-pink-300 transition-colors">✨ INICIO</a>
              <a href="#entradas" className="text-purple-300 hover:text-pink-400 transition-colors pb-2">💫 ENTRADAS MÁGICAS</a>
              <a href="#ofrendas" className="text-purple-300 hover:text-pink-400 transition-colors pb-2">🔮 OFRENDAS</a>
              <a href="#contacto" className="text-purple-300 hover:text-pink-400 transition-colors pb-2">💌 CONTACTO</a>
            </nav>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-purple-900/50 to-indigo-900/50 backdrop-blur-sm">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  La Artista Detrás del Portal ✨
                </h3>
                <p className="text-purple-200 text-lg leading-relaxed mb-6">
                  {mockData.artistDescription}
                </p>
                <p className="text-pink-300 italic text-lg">
                  "Donde la magia se encuentra con la tecnología, nace un universo de infinitas posibilidades" 💜
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-cyan-500/20 rounded-full flex items-center justify-center border-2 border-pink-400/30 backdrop-blur-sm cosmic-circle">
                    <div className="w-48 h-48 bg-gradient-to-br from-purple-800/60 to-indigo-800/60 rounded-full flex items-center justify-center shadow-inner relative overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-30"
                        style={{
                          backgroundImage: `url('https://customer-assets.emergentagent.com/job_6d890d5b-566e-4269-8a6d-68191d008ad7/artifacts/solnv0sw_PHOTO-2025-09-18-21-30-44.jpg')`
                        }}
                      ></div>
                      <Moon className="w-16 h-16 text-pink-400 relative z-10" />
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center animate-pulse">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Magical Entries - Enhanced Feminine Design */}
        <section id="entradas" className="py-16 px-6 bg-gradient-to-br from-indigo-950/80 to-purple-950/80">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center space-x-4">
              <Heart className="w-10 h-10 text-pink-400 animate-pulse" />
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Entradas Mágicas
              </span>
              <Heart className="w-10 h-10 text-pink-400 animate-pulse" />
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {mockData.magicalEntries.map((entry, index) => (
                <Card key={index} className="bg-gradient-to-br from-purple-900/60 to-indigo-900/60 border-2 border-pink-400/30 hover:border-pink-400/60 transition-all duration-300 group hover:shadow-lg hover:shadow-pink-400/20 overflow-hidden cosmic-card backdrop-blur-sm">
                  <div className="relative h-48 bg-gradient-to-br from-purple-800/40 to-indigo-800/40">
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-20"
                      style={{
                        backgroundImage: `url('https://customer-assets.emergentagent.com/job_6d890d5b-566e-4269-8a6d-68191d008ad7/artifacts/solnv0sw_PHOTO-2025-09-18-21-30-44.jpg')`
                      }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-20 h-20 rounded-full flex items-center justify-center ${entry.bgColor} border-2 ${entry.borderColor} backdrop-blur-sm`}>
                        <Heart className={`w-10 h-10 ${entry.iconColor} group-hover:animate-pulse`} />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-purple-900/50 text-pink-400 border border-pink-400/50">
                        {entry.emoji}
                      </Badge>
                    </div>
                    {/* Floating hearts */}
                    <div className="absolute top-2 left-2 animate-float">
                      <Heart className="w-3 h-3 text-pink-300/50" />
                    </div>
                    <div className="absolute bottom-2 right-8 animate-float delay-1000">
                      <Sparkles className="w-3 h-3 text-purple-300/50" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-pink-200 group-hover:text-pink-400 transition-colors">
                      {entry.title}
                    </h3>
                    <p className="text-purple-300 text-sm mb-4 leading-relaxed">
                      {entry.description}
                    </p>
                    <Button 
                      className={`w-full ${entry.buttonClass} hover:scale-105 transition-transform font-semibold shadow-lg`}
                      size="sm"
                    >
                      <Heart className="w-4 h-4 mr-2" />
                      Explorar {entry.emoji}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Offerings Section - Feminine Mystical Design */}
        <section id="ofrendas" className="py-16 px-6 bg-gradient-to-r from-purple-900/50 to-indigo-900/50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 flex items-center justify-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Ofrendas Mágicas
                </span>
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
              </h2>
              <p className="text-purple-300 text-lg">Apoya mi templo galáctico y desbloquea magia exclusiva 💜</p>
            </div>

            <Card className="bg-gradient-to-br from-purple-950/80 to-indigo-950/80 border-2 border-pink-400/40 max-w-md mx-auto shadow-2xl backdrop-blur-sm cosmic-card">
              <CardContent className="p-8 text-center">
                {/* Pokeball Icon with feminine touch */}
                <div className="mb-6 flex justify-center relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg relative cosmic-pokeball">
                    <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-full border-4 border-gray-800 flex items-center justify-center">
                        <Heart className="w-3 h-3 text-pink-500" />
                      </div>
                    </div>
                    <div className="absolute inset-x-0 top-1/2 h-1 bg-gray-800 transform -translate-y-0.5"></div>
                  </div>
                  {/* Floating sparkles around pokeball */}
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute animate-orbit"
                      style={{
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: '3s'
                      }}
                    >
                      <Sparkles className="w-3 h-3 text-pink-400" />
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Membresía del Templo ✨
                </h3>
                <p className="text-purple-300 mb-6">Únete a la familia galáctica</p>

                {/* Tip Options */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {mockData.tipAmounts.map((amount) => (
                    <Button
                      key={amount}
                      variant={selectedTip === amount ? "default" : "outline"}
                      className={`${
                        selectedTip === amount 
                          ? "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white" 
                          : "border-pink-400/50 text-pink-400 hover:border-pink-400 hover:bg-pink-400/10"
                      } transition-all font-semibold`}
                      onClick={() => handleTipSelect(amount)}
                    >
                      ${amount}
                    </Button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="mb-6">
                  <Input
                    type="number"
                    placeholder="Cantidad personalizada ✨"
                    value={customTip}
                    onChange={(e) => handleCustomTip(e.target.value)}
                    className="bg-purple-900/50 border-pink-400/50 text-white placeholder:text-purple-400 focus:border-pink-400 text-center"
                  />
                </div>

                <div className="mb-6 space-y-2">
                  <Badge variant="outline" className="text-pink-300 border-pink-400/50 block">
                    💜 Acceso a contenido exclusivo y sensual
                  </Badge>
                  <Badge variant="outline" className="text-purple-300 border-purple-400/50 block">
                    🔮 Curaciones energéticas personalizadas
                  </Badge>
                  <Badge variant="outline" className="text-cyan-300 border-cyan-400/50 block">
                    ✨ Contenido brutal y mágico
                  </Badge>
                </div>

                <Button className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:from-pink-600 hover:via-purple-600 hover:to-cyan-600 text-white font-semibold py-3 text-lg cosmic-button">
                  <Heart className="w-5 h-5 mr-2 animate-pulse" />
                  Unirse al Templo 💜✨
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Form - Mystical Feminine Design */}
        <section id="contacto" className="py-16 px-6 bg-gradient-to-br from-indigo-950/80 to-purple-950/80">
          <div className="container mx-auto max-w-md">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Escríbeme 💌
              </h2>
              <p className="text-purple-300">Conecta conmigo a través del cosmos místico</p>
            </div>

            <Card className="bg-gradient-to-br from-purple-900/60 to-indigo-900/60 border-2 border-pink-400/40 backdrop-blur-sm shadow-2xl cosmic-card">
              <CardContent className="p-8">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Tu nombre mágico ✨"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      className="bg-purple-800/50 border-pink-400/50 text-white placeholder:text-purple-400 focus:border-pink-400 h-12 pl-10"
                      required
                    />
                    <Heart className="absolute left-3 top-3 w-5 h-5 text-pink-400" />
                  </div>
                  
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="Tu correo cósmico 💫"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      className="bg-purple-800/50 border-pink-400/50 text-white placeholder:text-purple-400 focus:border-pink-400 h-12 pl-10"
                      required
                    />
                    <Sparkles className="absolute left-3 top-3 w-5 h-5 text-purple-400" />
                  </div>
                  
                  <div className="relative">
                    <Textarea
                      placeholder="Tu mensaje desde las estrellas... 🌟"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      className="bg-purple-800/50 border-pink-400/50 text-white placeholder:text-purple-400 focus:border-pink-400 min-h-[120px] resize-none pl-10 pt-3"
                      required
                    />
                    <Star className="absolute left-3 top-3 w-5 h-5 text-cyan-400" />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:from-pink-600 hover:via-purple-600 hover:to-cyan-600 text-white font-bold py-3 text-lg flex items-center justify-center space-x-2 cosmic-button"
                  >
                    <Send className="w-5 h-5" />
                    <span>Enviar al Cosmos</span>
                    <Heart className="w-5 h-5 animate-pulse" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-pink-500/30 bg-gradient-to-r from-purple-950/80 to-indigo-950/80 backdrop-blur-sm">
          <div className="container mx-auto text-center">
            <p className="text-purple-300 text-sm mb-2">
              © 2025 Zäe Selenya - Portal Místico Galáctico ✨💜
            </p>
            <p className="text-xs text-purple-400 mt-2">
              Donde los sueños se convierten en magia digital
            </p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="#" className="text-purple-400 hover:text-pink-400 transition-colors">💜 YouTube</a>
              <a href="#" className="text-purple-400 hover:text-pink-400 transition-colors">✨ Instagram</a>
              <a href="#" className="text-purple-400 hover:text-pink-400 transition-colors">🔮 Twitter</a>
              <a href="#" className="text-purple-400 hover:text-pink-400 transition-colors">💫 Discord</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ZaePortal;