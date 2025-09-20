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
        {/* Minimal cosmic particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            <div 
              className="rounded-full bg-white/15"
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                opacity: Math.random() * 0.3 + 0.1
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
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/15 via-yellow-900/8 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-orange-950/8"></div>
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
              <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 bg-clip-text text-transparent font-mystical">
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

        {/* NAVIGATION - More breathing space */}
        <section className="bg-orange-900/40 border-b border-orange-500/15 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-6">
            <nav className="flex space-x-12">
              <a href="#inicio" className="text-cyan-400 font-semibold border-b-2 border-cyan-400 pb-3 hover:text-cyan-300 transition-colors font-minimal text-sm uppercase tracking-wide">✨ INICIO</a>
              <a href="#entradas" className="text-orange-200 hover:text-cyan-400 transition-colors pb-3 font-minimal text-sm uppercase tracking-wide">💫 ENTRADAS MÁGICAS</a>
              <a href="#ofrendas" className="text-orange-200 hover:text-cyan-400 transition-colors pb-3 font-minimal text-sm uppercase tracking-wide">🔮 OFRENDAS</a>
              <a href="#contacto" className="text-orange-200 hover:text-cyan-400 transition-colors pb-3 font-minimal text-sm uppercase tracking-wide">💌 CONTACTO</a>
            </nav>
          </div>
        </section>

        {/* BREATHING SPACE 1 */}
        <div className="h-16 bg-gradient-to-b from-orange-900/20 via-transparent to-purple-950/20"></div>

        {/* FEATURED VIDEO SECTION with Artist Description - Hook for audience */}
        <section className="py-24 px-6 bg-gradient-to-br from-gray-900 via-purple-950/20 to-gray-900 relative">
          <div className="container mx-auto max-w-7xl">
            {/* Mystical particles around section */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(15)].map((_, i) => (
                <div
                  key={`video-${i}`}
                  className="absolute animate-twinkle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 8}s`
                  }}
                >
                  <div className="w-1 h-1 bg-cyan-400/25 rounded-full"></div>
                </div>
              ))}
            </div>

            <div className="text-center mb-16 relative">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-mystical">
                Bienvenidos a Mi Universo ✨
              </h2>
              <p className="text-gray-300 text-xl font-minimal">
                Descubre la magia que te espera en este templo galáctico
              </p>
            </div>

            {/* Two Column Layout: Artist Description + Video */}
            <div className="grid lg:grid-cols-2 gap-16 items-center relative">
              
            {/* Two Column Layout: Profile Photo + Description | Video */}
            <div className="grid lg:grid-cols-2 gap-16 items-start relative">
              
              {/* Left Column - Profile Photo + Artist Description */}
              <div className="space-y-8">
                {/* Large Profile Photo */}
                <div className="flex justify-center mb-10">
                  <div className="relative">
                    <div className="w-80 h-80 bg-gradient-to-br from-purple-500/20 via-pink-500/15 to-cyan-500/20 rounded-full p-4 backdrop-blur-sm border-2 border-cyan-400/40 shadow-2xl">
                      <img
                        src="https://customer-assets.emergentagent.com/job_6d890d5b-566e-4269-8a6d-68191d008ad7/artifacts/cycju4fh_Imagen%20de%20WhatsApp%202025-09-21%20a%20las%2000.04.22_17f509e4.jpg"
                        alt="Zäe Selenya Profile"
                        className="w-full h-full rounded-full object-cover shadow-2xl"
                      />
                    </div>
                    {/* Glowing effect around photo */}
                    <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-2xl -z-10 animate-pulse"></div>
                    
                    {/* Floating elements around photo */}
                    <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-r from-cyan-400 to-turquoise-400 rounded-full flex items-center justify-center animate-pulse shadow-xl">
                      <Sparkles className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center animate-pulse shadow-xl">
                      <Heart className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>

                {/* Artist Description */}
                <div className="text-center lg:text-left space-y-6">
                  <h3 className="text-4xl font-bold text-purple-200 font-mystical">
                    La Artista Detrás del Portal
                  </h3>
                  
                  <p className="text-purple-100/90 text-lg leading-relaxed font-minimal">
                    {mockData.artistDescription}
                  </p>
                  
                  <blockquote className="text-cyan-300 italic text-xl font-mystical border-l-4 border-cyan-400/50 pl-6 py-4 bg-cyan-400/5 rounded-r-lg">
                    "Donde la magia se encuentra con la tecnología, nace un universo de infinitas posibilidades"
                  </blockquote>

                  {/* Decorative line */}
                  <div className="flex items-center justify-center lg:justify-start space-x-4 pt-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 via-pink-500/15 to-cyan-500/20 rounded-full flex items-center justify-center border border-purple-400/30 backdrop-blur-sm">
                      <Moon className="w-6 h-6 text-purple-300" />
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-purple-400/50 to-transparent max-w-32"></div>
                  </div>
                </div>
              </div>

              {/* Right Column - Featured Video */}
              <div className="relative">
                {/* Glowing border effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
                
                <div className="relative bg-gradient-to-br from-purple-900/30 to-gray-900/50 rounded-2xl p-3 backdrop-blur-sm border border-cyan-400/30">
                  <video 
                    className="w-full h-auto rounded-xl shadow-2xl"
                    controls
                    preload="metadata"
                    poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 675'%3E%3Crect width='1200' height='675' fill='%23111827'/%3E%3Ctext x='50%25' y='50%25' font-family='Playfair Display, serif' font-size='48' fill='%2306b6d4' text-anchor='middle' dy='0.3em'%3EZäe Selenya%3C/text%3E%3C/svg%3E"
                  >
                    <source 
                      src="https://customer-assets.emergentagent.com/job_6d890d5b-566e-4269-8a6d-68191d008ad7/artifacts/rehezllt_Video%20de%20WhatsApp%202025-09-20%20a%20las%2023.49.01_81753841.mp4" 
                      type="video/mp4" 
                    />
                    Tu navegador no soporta el elemento de video.
                  </video>
                </div>

                {/* Floating elements around video */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-cyan-400 to-turquoise-400 rounded-full flex items-center justify-center animate-pulse">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center animate-pulse">
                  <Heart className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Call to action below both columns */}
            <div className="text-center mt-16">
              <p className="text-purple-300 font-minimal text-xl mb-8">
                ¿Listo para formar parte de esta experiencia única?
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Button 
                  className="bg-gradient-to-r from-cyan-500 to-turquoise-500 hover:from-cyan-400 hover:to-turquoise-400 text-gray-900 font-bold px-10 py-4 text-lg transition-all duration-300 hover:scale-105 shadow-xl font-minimal uppercase tracking-wide"
                  onClick={() => document.getElementById('entradas').scrollIntoView({ behavior: 'smooth' })}
                >
                  <Sparkles className="w-6 h-6 mr-3" />
                  Explorar Ahora
                </Button>
                <Button 
                  variant="outline"
                  className="border-purple-400/50 text-purple-300 hover:border-cyan-400/60 hover:text-cyan-300 px-10 py-4 text-lg font-minimal uppercase tracking-wide"
                  onClick={() => document.getElementById('ofrendas').scrollIntoView({ behavior: 'smooth' })}
                >
                  <Heart className="w-6 h-6 mr-3" />
                  Unirse al Templo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* BREATHING SPACE 3 */}
        <div className="h-32 bg-gradient-to-b from-purple-950/20 via-transparent to-pink-950/20"></div>

        {/* MAGICAL ENTRIES - Pink/Rose theme with better spacing */}
        <section id="entradas" className="py-24 px-6 bg-gradient-to-br from-pink-950/25 to-rose-950/20 relative">
          {/* Minimal pink particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={`pink-${i}`}
                className="absolute animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 6}s`
                }}
              >
                <div className="w-1 h-1 bg-pink-400/15 rounded-full"></div>
              </div>
            ))}
          </div>

          <div className="container mx-auto max-w-7xl relative">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6 flex items-center justify-center space-x-6 font-mystical">
                <Heart className="w-12 h-12 text-pink-400/60" />
                <span className="text-pink-200">
                  Entradas Mágicas
                </span>
                <Heart className="w-12 h-12 text-pink-400/60" />
              </h2>
              <p className="text-pink-300/80 text-lg font-minimal mt-4">Explora mis universos creativos</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              {mockData.magicalEntries.map((entry, index) => (
                <Card key={index} className="bg-gradient-to-br from-pink-900/25 to-rose-900/20 border border-pink-400/15 hover:border-pink-400/30 transition-all duration-500 group hover:shadow-xl hover:shadow-pink-400/10 overflow-hidden backdrop-blur-sm">
                  <div className="relative h-56 bg-gradient-to-br from-pink-800/15 to-rose-800/10">
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-12"
                      style={{
                        backgroundImage: `url('https://customer-assets.emergentagent.com/job_6d890d5b-566e-4269-8a6d-68191d008ad7/artifacts/solnv0sw_PHOTO-2025-09-18-21-30-44.jpg')`
                      }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full flex items-center justify-center bg-pink-500/15 border border-pink-400/25 backdrop-blur-sm">
                        <Heart className="w-12 h-12 text-pink-400/80 group-hover:animate-pulse" />
                      </div>
                    </div>
                    <div className="absolute top-6 right-6">
                      <Badge className="bg-pink-900/30 text-pink-300 border border-pink-400/25 font-minimal">
                        {entry.emoji}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-8 space-y-6">
                    <h3 className="text-2xl font-bold text-pink-100 group-hover:text-pink-300 transition-colors font-mystical">
                      {entry.title}
                    </h3>
                    <p className="text-pink-200/70 leading-relaxed font-minimal">
                      {entry.description}
                    </p>
                    <Button 
                      className="w-full bg-gradient-to-r from-cyan-500 to-turquoise-500 hover:from-cyan-400 hover:to-turquoise-400 text-gray-900 hover:scale-105 transition-all duration-300 font-semibold py-3 font-minimal uppercase tracking-wide"
                      size="lg"
                    >
                      <Heart className="w-5 h-5 mr-2" />
                      Explorar {entry.emoji}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* BREATHING SPACE 3 */}
        <div className="h-32 bg-gradient-to-b from-pink-950/20 via-transparent to-purple-950/25"></div>

        {/* OFFERINGS SECTION - Purple/Violet theme with luxury spacing */}
        <section id="ofrendas" className="py-24 px-6 bg-gradient-to-br from-purple-950/30 to-violet-950/25 relative">
          {/* Minimal purple particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div
                key={`purple-${i}`}
                className="absolute animate-twinkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 8}s`
                }}
              >
                <div className="w-1 h-1 bg-purple-400/20 rounded-full"></div>
              </div>
            ))}
          </div>

          <div className="container mx-auto max-w-5xl relative">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-8 flex items-center justify-center space-x-6 font-mystical">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500/60 to-violet-500/60 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <span className="text-purple-200">
                  Ofrendas Místicas
                </span>
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500/60 to-purple-500/60 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
              </h2>
              <p className="text-purple-300/80 text-xl font-minimal">Apoya mi templo galáctico y desbloquea magia exclusiva</p>
            </div>

            <Card className="bg-gradient-to-br from-purple-950/40 to-violet-950/35 border border-purple-400/20 max-w-lg mx-auto shadow-2xl backdrop-blur-sm">
              <CardContent className="p-12 text-center space-y-8">
                <div className="flex justify-center relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-500/60 to-violet-600/60 rounded-full flex items-center justify-center border-4 border-white shadow-xl relative">
                    <div className="w-28 h-28 bg-gradient-to-br from-purple-500/60 to-violet-600/60 rounded-full flex items-center justify-center">
                      <div className="w-10 h-10 bg-white rounded-full border-4 border-gray-800 flex items-center justify-center">
                        <Heart className="w-4 h-4 text-purple-500" />
                      </div>
                    </div>
                    <div className="absolute inset-x-0 top-1/2 h-1 bg-gray-800 transform -translate-y-0.5"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent font-mystical">
                    Membresía del Templo
                  </h3>
                  <p className="text-purple-200/80 text-lg font-minimal">Únete a la familia galáctica</p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {mockData.tipAmounts.map((amount) => (
                    <Button
                      key={amount}
                      variant={selectedTip === amount ? "default" : "outline"}
                      className={`${
                        selectedTip === amount 
                          ? "bg-gradient-to-r from-cyan-500 to-turquoise-500 text-gray-900 shadow-lg" 
                          : "border-purple-400/30 text-purple-300 hover:border-cyan-400/50 hover:text-cyan-300"
                      } transition-all font-semibold py-3 font-minimal`}
                      onClick={() => handleTipSelect(amount)}
                    >
                      ${amount}
                    </Button>
                  ))}
                </div>

                <div>
                  <Input
                    type="number"
                    placeholder="Cantidad personalizada ✨"
                    value={customTip}
                    onChange={(e) => handleCustomTip(e.target.value)}
                    className="bg-purple-900/30 border-purple-400/30 text-white placeholder:text-purple-300 focus:border-cyan-400 text-center py-3 font-minimal"
                  />
                </div>

                <div className="space-y-3">
                  <Badge variant="outline" className="text-purple-200 border-purple-400/30 block py-2 font-minimal">
                    💜 Acceso a contenido exclusivo y sensual
                  </Badge>
                  <Badge variant="outline" className="text-violet-200 border-violet-400/30 block py-2 font-minimal">
                    🔮 Curaciones energéticas personalizadas
                  </Badge>
                  <Badge variant="outline" className="text-purple-200 border-purple-400/30 block py-2 font-minimal">
                    ✨ Contenido brutal y mágico
                  </Badge>
                </div>

                <Button className="w-full bg-gradient-to-r from-cyan-500 via-turquoise-500 to-cyan-400 hover:from-cyan-400 hover:via-turquoise-400 hover:to-cyan-300 text-gray-900 font-bold py-4 text-lg transition-all duration-300 hover:scale-105 shadow-lg font-minimal uppercase tracking-wide">
                  <Heart className="w-6 h-6 mr-3 animate-pulse" />
                  Unirse al Templo
                  <Sparkles className="w-6 h-6 ml-3" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* BREATHING SPACE 4 */}
        <div className="h-32 bg-gradient-to-b from-purple-950/25 via-transparent to-pink-950/20"></div>

        {/* CONTACT FORM - Pink/Rose theme with elegant spacing */}
        <section id="contacto" className="py-24 px-6 bg-gradient-to-br from-pink-950/25 to-rose-950/20 relative">
          {/* Minimal particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(4)].map((_, i) => (
              <div
                key={`contact-${i}`}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 8}s`
                }}
              >
                <div className="w-1 h-1 bg-pink-400/15 rounded-full"></div>
              </div>
            ))}
          </div>

          <div className="container mx-auto max-w-lg relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-pink-200 font-mystical">
                Escríbeme
              </h2>
              <p className="text-pink-300/80 text-lg font-minimal">Conecta conmigo a través del cosmos místico</p>
            </div>

            <Card className="bg-gradient-to-br from-pink-950/40 to-rose-950/35 border border-pink-400/20 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-10">
                <form onSubmit={handleContactSubmit} className="space-y-8">
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Tu nombre mágico ✨"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      className="bg-pink-900/30 border-pink-400/30 text-white placeholder:text-pink-300 focus:border-cyan-400 h-14 pl-12 font-minimal"
                      required
                    />
                    <Heart className="absolute left-4 top-4 w-6 h-6 text-pink-400" />
                  </div>
                  
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="Tu correo cósmico 💫"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      className="bg-pink-900/30 border-pink-400/30 text-white placeholder:text-pink-300 focus:border-cyan-400 h-14 pl-12 font-minimal"
                      required
                    />
                    <Sparkles className="absolute left-4 top-4 w-6 h-6 text-pink-400" />
                  </div>
                  
                  <div className="relative">
                    <Textarea
                      placeholder="Tu mensaje desde las estrellas... 🌟"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      className="bg-pink-900/30 border-pink-400/30 text-white placeholder:text-pink-300 focus:border-cyan-400 min-h-[140px] resize-none pl-12 pt-4 font-minimal"
                      required
                    />
                    <Star className="absolute left-4 top-4 w-6 h-6 text-pink-400" />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-cyan-500 to-turquoise-500 hover:from-cyan-400 hover:to-turquoise-400 text-gray-900 font-bold py-4 text-lg flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-105 shadow-lg font-minimal uppercase tracking-wide"
                  >
                    <Send className="w-6 h-6" />
                    <span>Enviar al Cosmos</span>
                    <Sparkles className="w-6 h-6" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* BREATHING SPACE 5 */}
        <div className="h-24 bg-gradient-to-b from-pink-950/20 via-transparent to-gray-900"></div>

        {/* FOOTER - Minimalist with breathing */}
        <footer className="py-16 px-6 border-t border-gray-600/20 bg-gray-900/60 backdrop-blur-sm">
          <div className="container mx-auto text-center space-y-6">
            <p className="text-gray-300 font-minimal">
              © 2025 <span className="font-mystical text-purple-300">Zäe Selenya</span> - Portal Místico Galáctico ✨
            </p>
            <p className="text-sm text-gray-400 font-minimal italic">
              Donde los sueños se convierten en magia digital
            </p>
            <div className="flex justify-center space-x-8 mt-8">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors font-minimal text-sm">💜 YouTube</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors font-minimal text-sm">✨ Instagram</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors font-minimal text-sm">🔮 Twitter</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors font-minimal text-sm">💫 Discord</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ZaePortal;