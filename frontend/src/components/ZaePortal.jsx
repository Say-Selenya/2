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
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0">
        {/* Reduced cosmic particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          >
            <div 
              className="rounded-full bg-white/20"
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                opacity: Math.random() * 0.4 + 0.1
              }}
            ></div>
          </div>
        ))}
      </div>

      <div className="relative z-10">
        {/* BANNER SECTION - Orange/Warm tones */}
        <section className="relative h-[70vh] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat enhanced-contrast"
            style={{
              backgroundImage: `url('https://customer-assets.emergentagent.com/job_6d890d5b-566e-4269-8a6d-68191d008ad7/artifacts/solnv0sw_PHOTO-2025-09-18-21-30-44.jpg')`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 via-yellow-900/10 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-orange-950/10"></div>
          </div>

          <div className="absolute top-6 left-6 z-10">
            <img 
              src="https://customer-assets.emergentagent.com/job_6d890d5b-566e-4269-8a6d-68191d008ad7/artifacts/2x7tp5h4_Imagen%20de%20WhatsApp%202025-09-20%20a%20las%2023.42.09_3a9dc102.jpg"
              alt="Alien saludando"
              className="w-32 h-32 object-contain alien-transparent"
            />
          </div>

          <div className="absolute bottom-8 left-8 z-10 flex items-end space-x-4">
            <div className="signature-text">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 bg-clip-text text-transparent font-signature">
                Zäe Selenya
              </h1>
            </div>
            <div className="w-16 h-16 rounded-full border-2 border-orange-400/40 p-1 shadow-lg shadow-orange-400/30 profile-photo-warm">
              <img
                src="https://customer-assets.emergentagent.com/job_6d890d5b-566e-4269-8a6d-68191d008ad7/artifacts/olceu8nm_Imagen%20de%20WhatsApp%202025-09-21%20a%20las%2000.04.22_b5169f09.jpg"
                alt="Zäe Selenya Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* NAVIGATION - Orange theme */}
        <section className="bg-orange-900/60 border-b border-orange-500/20 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex space-x-8">
              <a href="#inicio" className="text-orange-400 font-semibold border-b-2 border-orange-400 pb-2 hover:text-orange-300 transition-colors">✨ INICIO</a>
              <a href="#entradas" className="text-orange-200 hover:text-orange-400 transition-colors pb-2">💫 ENTRADAS MÁGICAS</a>
              <a href="#ofrendas" className="text-orange-200 hover:text-orange-400 transition-colors pb-2">🔮 OFRENDAS</a>
              <a href="#contacto" className="text-orange-200 hover:text-orange-400 transition-colors pb-2">💌 CONTACTO</a>
            </nav>
          </div>
        </section>

        {/* ABOUT SECTION - Blue/Cyan theme */}
        <section className="py-16 px-6 bg-gradient-to-br from-blue-950/60 to-cyan-950/40">
          <div className="container mx-auto max-w-4xl">
            {/* Blue particles for this section */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(15)].map((_, i) => (
                <div
                  key={`blue-${i}`}
                  className="absolute animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 6}s`
                  }}
                >
                  <div className="w-1 h-1 bg-cyan-400/30 rounded-full"></div>
                </div>
              ))}
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center relative">
              <div>
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  La Artista Detrás del Portal ✨
                </h3>
                <p className="text-blue-100 text-lg leading-relaxed mb-6">
                  {mockData.artistDescription}
                </p>
                <p className="text-cyan-300 italic text-lg">
                  "Donde la magia se encuentra con la tecnología, nace un universo de infinitas posibilidades" 💜
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-transparent rounded-full flex items-center justify-center border-2 border-cyan-400/20 backdrop-blur-sm">
                    <div className="w-48 h-48 bg-gradient-to-br from-blue-800/40 to-cyan-800/30 rounded-full flex items-center justify-center shadow-inner relative overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-20"
                        style={{
                          backgroundImage: `url('https://customer-assets.emergentagent.com/job_6d890d5b-566e-4269-8a6d-68191d008ad7/artifacts/solnv0sw_PHOTO-2025-09-18-21-30-44.jpg')`
                        }}
                      ></div>
                      <Moon className="w-16 h-16 text-cyan-400 relative z-10" />
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center animate-pulse">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAGICAL ENTRIES - Pink/Magenta theme */}
        <section id="entradas" className="py-16 px-6 bg-gradient-to-br from-pink-950/50 to-rose-950/40 relative">
          {/* Pink particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <div
                key={`pink-${i}`}
                className="absolute animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`
                }}
              >
                <div className="w-1 h-1 bg-pink-400/25 rounded-full"></div>
              </div>
            ))}
          </div>

          <div className="container mx-auto max-w-6xl relative">
            <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center space-x-4">
              <Heart className="w-10 h-10 text-pink-400/80" />
              <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Entradas Mágicas
              </span>
              <Heart className="w-10 h-10 text-pink-400/80" />
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {mockData.magicalEntries.map((entry, index) => (
                <Card key={index} className="bg-gradient-to-br from-pink-900/40 to-rose-900/30 border border-pink-400/20 hover:border-pink-400/40 transition-all duration-300 group hover:shadow-lg hover:shadow-pink-400/10 overflow-hidden backdrop-blur-sm">
                  <div className="relative h-48 bg-gradient-to-br from-pink-800/20 to-rose-800/15">
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-15"
                      style={{
                        backgroundImage: `url('https://customer-assets.emergentagent.com/job_6d890d5b-566e-4269-8a6d-68191d008ad7/artifacts/solnv0sw_PHOTO-2025-09-18-21-30-44.jpg')`
                      }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full flex items-center justify-center bg-pink-500/20 border border-pink-400/30 backdrop-blur-sm">
                        <Heart className="w-10 h-10 text-pink-400 group-hover:animate-pulse" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-pink-900/40 text-pink-300 border border-pink-400/30">
                        {entry.emoji}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-pink-100 group-hover:text-pink-300 transition-colors">
                      {entry.title}
                    </h3>
                    <p className="text-pink-200/80 text-sm mb-4 leading-relaxed">
                      {entry.description}
                    </p>
                    <Button 
                      className="w-full bg-gradient-to-r from-pink-600/80 to-rose-600/80 hover:from-pink-500 hover:to-rose-500 text-white hover:scale-105 transition-transform font-semibold"
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

        {/* OFFERINGS SECTION - Purple/Violet theme */}
        <section id="ofrendas" className="py-16 px-6 bg-gradient-to-br from-purple-950/50 to-violet-950/40 relative">
          {/* Purple particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <div
                key={`purple-${i}`}
                className="absolute animate-twinkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              >
                <div className="w-1 h-1 bg-purple-400/30 rounded-full"></div>
              </div>
            ))}
          </div>

          <div className="container mx-auto max-w-4xl relative">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 flex items-center justify-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500/80 to-violet-500/80 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                  Ofrendas Mágicas
                </span>
                <div className="w-10 h-10 bg-gradient-to-r from-violet-500/80 to-purple-500/80 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
              </h2>
              <p className="text-purple-200 text-lg">Apoya mi templo galáctico y desbloquea magia exclusiva 💜</p>
            </div>

            <Card className="bg-gradient-to-br from-purple-950/60 to-violet-950/50 border border-purple-400/25 max-w-md mx-auto shadow-xl backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500/80 to-violet-600/80 rounded-full flex items-center justify-center border-4 border-white shadow-lg relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500/80 to-violet-600/80 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-full border-4 border-gray-800 flex items-center justify-center">
                        <Heart className="w-3 h-3 text-purple-500" />
                      </div>
                    </div>
                    <div className="absolute inset-x-0 top-1/2 h-1 bg-gray-800 transform -translate-y-0.5"></div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                  Membresía del Templo ✨
                </h3>
                <p className="text-purple-200 mb-6">Únete a la familia galáctica</p>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {mockData.tipAmounts.map((amount) => (
                    <Button
                      key={amount}
                      variant={selectedTip === amount ? "default" : "outline"}
                      className={`${
                        selectedTip === amount 
                          ? "bg-gradient-to-r from-purple-500/80 to-violet-500/80 hover:from-purple-400 hover:to-violet-400 text-white" 
                          : "border-purple-400/40 text-purple-300 hover:border-purple-400/60 hover:bg-purple-400/10"
                      } transition-all font-semibold`}
                      onClick={() => handleTipSelect(amount)}
                    >
                      ${amount}
                    </Button>
                  ))}
                </div>

                <div className="mb-6">
                  <Input
                    type="number"
                    placeholder="Cantidad personalizada ✨"
                    value={customTip}
                    onChange={(e) => handleCustomTip(e.target.value)}
                    className="bg-purple-900/40 border-purple-400/40 text-white placeholder:text-purple-300 focus:border-purple-400 text-center"
                  />
                </div>

                <div className="mb-6 space-y-2">
                  <Badge variant="outline" className="text-purple-200 border-purple-400/40 block">
                    💜 Acceso a contenido exclusivo y sensual
                  </Badge>
                  <Badge variant="outline" className="text-violet-200 border-violet-400/40 block">
                    🔮 Curaciones energéticas personalizadas
                  </Badge>
                  <Badge variant="outline" className="text-purple-200 border-purple-400/40 block">
                    ✨ Contenido brutal y mágico
                  </Badge>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-500/80 via-violet-500/80 to-purple-500/80 hover:from-purple-400 hover:via-violet-400 hover:to-purple-400 text-white font-semibold py-3 text-lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Unirse al Templo 💜✨
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CONTACT FORM - Green/Emerald theme */}
        <section id="contacto" className="py-16 px-6 bg-gradient-to-br from-emerald-950/50 to-green-950/40 relative">
          {/* Green particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={`green-${i}`}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 6}s`
                }}
              >
                <div className="w-1 h-1 bg-emerald-400/25 rounded-full"></div>
              </div>
            ))}
          </div>

          <div className="container mx-auto max-w-md relative">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                Escríbeme 💌
              </h2>
              <p className="text-emerald-200">Conecta conmigo a través del cosmos místico</p>
            </div>

            <Card className="bg-gradient-to-br from-emerald-950/60 to-green-950/50 border border-emerald-400/25 backdrop-blur-sm shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Tu nombre mágico ✨"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      className="bg-emerald-900/40 border-emerald-400/40 text-white placeholder:text-emerald-300 focus:border-emerald-400 h-12 pl-10"
                      required
                    />
                    <Heart className="absolute left-3 top-3 w-5 h-5 text-emerald-400" />
                  </div>
                  
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="Tu correo cósmico 💫"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      className="bg-emerald-900/40 border-emerald-400/40 text-white placeholder:text-emerald-300 focus:border-emerald-400 h-12 pl-10"
                      required
                    />
                    <Sparkles className="absolute left-3 top-3 w-5 h-5 text-emerald-400" />
                  </div>
                  
                  <div className="relative">
                    <Textarea
                      placeholder="Tu mensaje desde las estrellas... 🌟"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      className="bg-emerald-900/40 border-emerald-400/40 text-white placeholder:text-emerald-300 focus:border-emerald-400 min-h-[120px] resize-none pl-10 pt-3"
                      required
                    />
                    <Star className="absolute left-3 top-3 w-5 h-5 text-emerald-400" />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-emerald-500/80 to-green-500/80 hover:from-emerald-400 hover:to-green-400 text-white font-bold py-3 text-lg flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Enviar al Cosmos</span>
                    <Sparkles className="w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FOOTER - Gray/Silver theme */}
        <footer className="py-8 px-6 border-t border-gray-600/30 bg-gradient-to-r from-gray-900/80 to-slate-900/80 backdrop-blur-sm">
          <div className="container mx-auto text-center">
            <p className="text-gray-300 text-sm mb-2">
              © 2025 Zäe Selenya - Portal Místico Galáctico ✨💜
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Donde los sueños se convierten en magia digital
            </p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">💜 YouTube</a>
              <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">✨ Instagram</a>
              <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">🔮 Twitter</a>
              <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">💫 Discord</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ZaePortal;