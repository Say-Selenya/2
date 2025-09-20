import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Heart, Zap, Sparkles, Send, Star, Moon, Rocket, Play, Users, Eye } from 'lucide-react';
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
    <div className="min-h-screen bg-black text-white">
      {/* YouTube-Style Banner Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Background Image with Enhanced Contrast */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat enhanced-contrast"
          style={{
            backgroundImage: `url('https://customer-assets.emergentagent.com/job_6d890d5b-566e-4269-8a6d-68191d008ad7/artifacts/solnv0sw_PHOTO-2025-09-18-21-30-44.jpg')`
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30"></div>
        </div>

        {/* Alien Greeting - Top Left */}
        <div className="absolute top-6 left-6 z-10">
          <img 
            src="https://customer-assets.emergentagent.com/job_6d890d5b-566e-4269-8a6d-68191d008ad7/artifacts/2x7tp5h4_Imagen%20de%20WhatsApp%202025-09-20%20a%20las%2023.42.09_3a9dc102.jpg"
            alt="Alien saludando"
            className="w-20 h-20 object-contain alien-greeting"
            style={{
              filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.8))'
            }}
          />
        </div>

        {/* Signature Overlay - Bottom Left */}
        <div className="absolute bottom-8 left-8 z-10">
          <div className="signature-text">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 bg-clip-text text-transparent font-signature">
              Zäe Selenya
            </h1>
          </div>
        </div>


      </section>

      {/* Navigation/Menu Section */}
      <section className="bg-gray-900 border-b border-gray-700">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex space-x-8">
            <a href="#inicio" className="text-orange-400 font-semibold border-b-2 border-orange-400 pb-2">INICIO</a>
            <a href="#entradas" className="text-gray-300 hover:text-orange-400 transition-colors pb-2">ENTRADAS MÁGICAS</a>
            <a href="#ofrendas" className="text-gray-300 hover:text-orange-400 transition-colors pb-2">OFRENDAS</a>
            <a href="#contacto" className="text-gray-300 hover:text-orange-400 transition-colors pb-2">CONTACTO</a>
          </nav>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-orange-400">
                La Artista Detrás del Portal
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {mockData.artistDescription}
              </p>
              <p className="text-orange-200 italic text-lg">
                "Donde la magia se encuentra con la tecnología, nace un universo de infinitas posibilidades"
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full flex items-center justify-center border-2 border-orange-400/30 backdrop-blur-sm">
                  <div className="w-48 h-48 bg-gray-800 rounded-full flex items-center justify-center shadow-inner relative overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-30"
                      style={{
                        backgroundImage: `url('https://customer-assets.emergentagent.com/job_6d890d5b-566e-4269-8a6d-68191d008ad7/artifacts/solnv0sw_PHOTO-2025-09-18-21-30-44.jpg')`
                      }}
                    ></div>
                    <Moon className="w-16 h-16 text-orange-400 relative z-10" />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                  <Sparkles className="w-4 h-4 text-gray-900" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Magical Entries - YouTube Playlist Style */}
      <section id="entradas" className="py-16 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center space-x-4">
            <Sparkles className="w-10 h-10 text-yellow-400" />
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Entradas Mágicas
            </span>
            <Sparkles className="w-10 h-10 text-yellow-400" />
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {mockData.magicalEntries.map((entry, index) => (
              <Card key={index} className="bg-gray-900 border border-gray-700 hover:border-orange-400/50 transition-all duration-300 group hover:shadow-lg hover:shadow-orange-400/20 overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900">
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
                    <Badge className="bg-black/50 text-orange-400 border border-orange-400/50">
                      {entry.emoji}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors">
                    {entry.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {entry.description}
                  </p>
                  <Button 
                    className={`w-full ${entry.buttonClass} hover:scale-105 transition-transform font-semibold`}
                    size="sm"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Explorar {entry.emoji}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings Section - YouTube Channel Membership Style */}
      <section id="ofrendas" className="py-16 px-6 bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 flex items-center justify-center space-x-4">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Ofrendas Mágicas
              </span>
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
            </h2>
            <p className="text-gray-400 text-lg">Apoya el canal y desbloquea contenido exclusivo</p>
          </div>

          <Card className="bg-black border-2 border-orange-400/30 max-w-md mx-auto shadow-2xl">
            <CardContent className="p-8 text-center">
              {/* Pokeball Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full border-4 border-gray-800"></div>
                  </div>
                  <div className="absolute inset-x-0 top-1/2 h-1 bg-gray-800 transform -translate-y-0.5"></div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-2 text-orange-400">
                Membresía del Canal
              </h3>
              <p className="text-gray-400 mb-6">Únete a la comunidad galáctica</p>

              {/* Tip Options */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {mockData.tipAmounts.map((amount) => (
                  <Button
                    key={amount}
                    variant={selectedTip === amount ? "default" : "outline"}
                    className={`${
                      selectedTip === amount 
                        ? "bg-orange-500 hover:bg-orange-600 text-white" 
                        : "border-orange-400/50 text-orange-400 hover:border-orange-400 hover:bg-orange-400/10"
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
                  placeholder="Cantidad personalizada"
                  value={customTip}
                  onChange={(e) => handleCustomTip(e.target.value)}
                  className="bg-gray-800 border-orange-400/50 text-white placeholder:text-gray-500 focus:border-orange-400"
                />
              </div>

              <div className="mb-6 space-y-2">
                <Badge variant="outline" className="text-orange-300 border-orange-400/50 block">
                  ✨ Acceso a contenido exclusivo
                </Badge>
                <Badge variant="outline" className="text-orange-300 border-orange-400/50 block">
                  🎮 Streaming en vivo prioritario
                </Badge>
                <Badge variant="outline" className="text-orange-300 border-orange-400/50 block">
                  💫 Badges personalizados
                </Badge>
              </div>

              <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 text-lg">
                <Heart className="w-5 h-5 mr-2" />
                Unirse Ahora ✨
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contacto" className="py-16 px-6 bg-black">
        <div className="container mx-auto max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Escríbeme
            </h2>
            <p className="text-gray-400">Conecta conmigo a través del cosmos</p>
          </div>

          <Card className="bg-gray-900 border-2 border-orange-400/30 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Tu nombre"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="bg-gray-800 border-orange-400/50 text-white placeholder:text-gray-500 focus:border-orange-400 h-12"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    placeholder="Tu correo"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="bg-gray-800 border-orange-400/50 text-white placeholder:text-gray-500 focus:border-orange-400 h-12"
                    required
                  />
                </div>
                
                <div>
                  <Textarea
                    placeholder="Tu mensaje"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    className="bg-gray-800 border-orange-400/50 text-white placeholder:text-gray-500 focus:border-orange-400 min-h-[120px] resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold py-3 text-lg flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar al Cosmos</span>
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-700 bg-gray-900">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 text-sm mb-2">
            © 2025 Zäe Selenya - Portal Místico Galáctico ✨
          </p>
          <p className="text-xs text-gray-500">
            Donde los sueños se convierten en realidad digital
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">YouTube</a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Discord</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ZaePortal;