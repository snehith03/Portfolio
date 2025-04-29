import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Snehith</h3>
            <p className="text-gray-400 mt-2">Portfolio &copy; {new Date().getFullYear()}</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://x.com/r_e_d_d_y_03?t=H1kI3c6lBUb73BzSr4hwRA&s=09" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/snehith-reddy-konuganti" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/snehith03" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>Designed and built with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;