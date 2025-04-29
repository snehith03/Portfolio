import React, { useState, useEffect } from 'react';
import { Menu, X, Video, Youtube } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <img
              src="C:\Users\narla\Downloads\project-bolt-sb1-djaknovg (1)\project"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover border-2 border-indigo-400"
            />
            <span className="text-white text-xl font-bold">Snehith</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="https://drive.google.com/file/d/1Uu-scS_tTONf-7SL8M2at8virXCQwG5t/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-indigo-400 transition-colors px-4 py-2 rounded-full border border-indigo-400 hover:bg-indigo-400/10"
            >
              <Video className="w-4 h-4" />
              <span>Watch Video</span>
            </a>
            <a 
              href="https://www.instagram.com/k_snehithh?igsh=MWJ6YjdoNDRibjk2Ng=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-indigo-400 transition-colors px-4 py-2 rounded-full border border-indigo-400 hover:bg-indigo-400/10"
            >
              <Youtube className="w-4 h-4" />
              <span>My Channel</span>
            </a>
            <button 
              onClick={() => scrollTo('home')} 
              className="text-white hover:text-indigo-400 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollTo('skills')} 
              className="text-white hover:text-indigo-400 transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollTo('contact')} 
              className="text-white hover:text-indigo-400 transition-colors"
            >
              Contact
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-1"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900">
          <a
            href="https://drive.google.com/file/d/1Uu-scS_tTONf-7SL8M2at8virXCQwG5t/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-3 py-2 text-white w-full hover:bg-gray-800 rounded-md"
          >
            <Video className="w-4 h-4" />
            <span>Watch Video</span>
          </a>
          <a
            href="https://www.instagram.com/k_snehithh?igsh=MWJ6YjdoNDRibjk2Ng=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-3 py-2 text-white w-full hover:bg-gray-800 rounded-md"
          >
            <Youtube className="w-4 h-4" />
            <span>My Channel</span>
          </a>
          <button
            onClick={() => scrollTo('home')}
            className="block px-3 py-2 text-white w-full text-left hover:bg-gray-800 rounded-md"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo('skills')}
            className="block px-3 py-2 text-white w-full text-left hover:bg-gray-800 rounded-md"
          >
            Skills
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="block px-3 py-2 text-white w-full text-left hover:bg-gray-800 rounded-md"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;