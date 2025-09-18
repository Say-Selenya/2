import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Heart, Zap, Sparkles, Send, Star, Moon, Rocket } from 'lucide-react';
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
    // Reset form
    setContactForm({ name: '', email: '', message: '' });
    alert('¡Mensaje enviado a través del cosmos! ✨');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Cosmic Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"></div>
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.8 + 0.2
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-cyan-400/30 bg-gray-800/50 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-6">
            <div className="flex justify-between items-center">
              {/* Left side - Avatar and Name */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full border-2 border-cyan-400 p-1 shadow-lg shadow-cyan-400/50">
                    <img
                      src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face"
                      alt="Zäe Selenya"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <Sparkles className="w-6 h-6 text-yellow-400 animate-spin" />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Zäe Selenya
                  </h1>
                  <p className="text-sm text-gray-300">Portal Místico Galáctico</p>
                </div>
              </div>

              {/* Right side - Artistic Profile */}
              <div className="hidden md:flex items-center space-x-4">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg p-2 shadow-lg">
                  <div className="w-full h-full bg-gray-900/80 rounded flex items-center justify-center">
                    <Rocket className="w-8 h-8 text-yellow-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative alien graphic */}
            <div className="mt-4 flex justify-center">
              <div className="flex items-center space-x-2 text-green-400">
                <Zap className="w-6 h-6" />
                <span className="text-sm font-mono">ALIEN_MODE_ACTIVATED</span>
                <Zap className="w-6 h-6" />
              </div>
            </div>
          </div>
        </header>

        {/* Presentation Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                La Artista Detrás del Portal
              </h2>
              <div className="flex justify-center mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full flex items-center justify-center border border-cyan-400/30">
                  <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center shadow-inner">
                    <Moon className="w-12 h-12 text-purple-400" />
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
                {mockData.artistDescription}
              </p>
              <p className="text-sm italic text-cyan-300 mt-4">
                "Donde la magia se encuentra con la tecnología, nace un universo de infinitas posibilidades"
              </p>
            </div>
          </div>
        </section>

        {/* Magical Entries */}
        <section className="py-16 px-6 bg-gray-800/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center space-x-4">
              <Sparkles className="w-8 h-8 text-yellow-400" />
              <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                Entradas Mágicas
              </span>
              <Sparkles className="w-8 h-8 text-yellow-400" />
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {mockData.magicalEntries.map((entry, index) => (
                <Card key={index} className="bg-gray-800/80 border-2 border-transparent hover:border-cyan-400/50 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-400/20">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${entry.bgColor} border-2 ${entry.borderColor}`}>
                        <Heart className={`w-8 h-8 ${entry.iconColor} group-hover:animate-pulse`} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">
                      {entry.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {entry.description}
                    </p>
                    <Button 
                      className={`mt-4 ${entry.buttonClass} hover:scale-105 transition-transform`}
                      size="sm"
                    >
                      Explorar {entry.emoji}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Offerings Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center justify-center space-x-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Ofrendas
                </span>
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-white" />
                </div>
              </h2>
            </div>

            <Card className="bg-gray-800/80 border-2 border-purple-400/30 max-w-md mx-auto">
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

                <h3 className="text-xl font-bold mb-6 text-purple-300">
                  Propina Mágica
                </h3>

                {/* Tip Options */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {mockData.tipAmounts.map((amount) => (
                    <Button
                      key={amount}
                      variant={selectedTip === amount ? "default" : "outline"}
                      className={`${
                        selectedTip === amount 
                          ? "bg-purple-500 hover:bg-purple-600 text-white" 
                          : "border-purple-400/50 text-purple-300 hover:border-purple-400"
                      } transition-all`}
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
                    className="bg-gray-700 border-purple-400/50 text-white placeholder:text-gray-400"
                  />
                </div>

                <Badge variant="outline" className="text-cyan-300 border-cyan-400/50 mb-4">
                  Métodos disponibles: PayPal • Stripe • Cosmic Credits
                </Badge>

                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold">
                  Enviar Ofrenda ✨
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 px-6 bg-gray-800/30">
          <div className="container mx-auto max-w-md">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Escríbeme
              </h2>
            </div>

            <Card className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border-2 border-cyan-400/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      placeholder="Tu nombre"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      className="bg-gray-700/50 border-cyan-400/50 text-white placeholder:text-gray-400 focus:border-cyan-400"
                      required
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="email"
                      placeholder="Tu correo"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      className="bg-gray-700/50 border-cyan-400/50 text-white placeholder:text-gray-400 focus:border-cyan-400"
                      required
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      placeholder="Tu mensaje"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      className="bg-gray-700/50 border-cyan-400/50 text-white placeholder:text-gray-400 focus:border-cyan-400 min-h-[120px]"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar al Cosmos</span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-cyan-400/30 bg-gray-800/50">
          <div className="container mx-auto text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Zäe Selenya - Portal Místico Galáctico ✨
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Donde los sueños se convierten en realidad digital
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ZaePortal;