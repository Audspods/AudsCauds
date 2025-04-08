import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './css/App.css';
import Home from './pages/Home';
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  
  return (
    <div className="page">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;