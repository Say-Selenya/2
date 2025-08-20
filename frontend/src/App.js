import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BrightYouTubeBanner from "./components/YouTubeBanner";
import AboutSection from "./components/AboutSection";
import PortalSection from "./components/PortalSection";
import StatsSection from "./components/StatsSection";
import CosmicMusicPlayer from "./components/CosmicMusicPlayer";
import ZaestelarPage from "./components/ZaestelarPage";
import { mockPortalSections } from "./mock";
import { Toaster } from "./components/ui/toaster";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Cosmic Music Player - Top Right */}
      <CosmicMusicPlayer />
      
      {/* Bright YouTube Banner */}
      <BrightYouTubeBanner />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Portal Sections */}
      {mockPortalSections.map((section, index) => (
        <PortalSection 
          key={section.id} 
          section={section} 
          index={index}
        />
      ))}
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Footer */}
      <footer className="py-8 bg-black bg-opacity-80 border-t border-cosmic-blue border-opacity-30">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-px bg-cosmic-blue"></div>
            <p className="body-small text-cosmic-mint font-mono uppercase tracking-widest">
              Zäe Selenya Portal
            </p>
            <div className="w-8 h-px bg-cosmic-blue"></div>
          </div>
          <p className="body-small text-gray-400">
            © 2025 - Todos los universos creativos reservados
          </p>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/zaestelar" element={<ZaestelarPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;