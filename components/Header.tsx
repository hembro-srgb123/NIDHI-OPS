import React from 'react';
import { SigmaIcon } from './IconComponents';

const Header: React.FC = () => {
  return (
    <header className="py-6 px-6 md:px-12 fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white transform hover:scale-110 transition-transform duration-300">
          <SigmaIcon className="h-8 w-8 text-purple-400" />
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-slate-400 hover:text-purple-400 transition-all duration-300 transform hover:-translate-y-0.5">Home</a>
          <a href="#about" className="text-slate-400 hover:text-purple-400 transition-all duration-300 transform hover:-translate-y-0.5">About</a>
          <a href="#projects" className="text-slate-400 hover:text-purple-400 transition-all duration-300 transform hover:-translate-y-0.5">Projects</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;