import React from 'react';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './utils/animations.css';

function App() {
  return (
    <div className="font-sans text-gray-900">
      <div id="home">
        <Navbar />
        <Welcome />
      </div>
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;