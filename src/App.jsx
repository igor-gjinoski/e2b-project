import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import LovedFor from './components/LovedFor';
import Features from './components/Features';
import EventTypes from './components/EventTypes';
import About from './components/About';
import Footer from './components/Footer';
import HowItWorks from './components/HowItWorks';

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <LovedFor />
      <Features />
      <EventTypes />
      <About />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 font-sans overflow-x-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-0"></div>
        <div className="relative z-10">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;