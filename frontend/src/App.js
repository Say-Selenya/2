import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import PortalSection from "./components/PortalSection";
import StatsSection from "./components/StatsSection";
import { mockPortalSections } from "./mock";
import { Toaster } from "./components/ui/toaster";

import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PortalSection from "./components/PortalSection";
import StatsSection from "./components/StatsSection";
import { mockPortalSections } from "./mock";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;