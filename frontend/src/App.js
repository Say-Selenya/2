import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ZaePortal from "./components/ZaePortal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ZaePortal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;