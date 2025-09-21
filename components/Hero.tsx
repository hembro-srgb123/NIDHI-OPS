import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center relative pt-20">
      <div className="absolute inset-0 -z-10 flex justify-center items-center">
          <div className="w-[400px] h-[400px] bg-purple-600/20 rounded-full filter blur-[150px]"></div>
      </div>
      
      <div className="relative mb-6">
        <img 
          src="https://api.dicebear.com/8.x/pixel-art/svg?seed=Nidheesh&backgroundType=gradientLinear&backgroundColor=c0aede,b6e3f4" 
          alt="Avatar of Nidheesh" 
          className="w-40 h-40 rounded-full border-4 border-purple-500/50 transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute bottom-4 right-0 w-4 h-4 rounded-full bg-green-400 border-2 border-slate-900"></div>
      </div>

      <p className="text-slate-400 mb-2">Hello! I'm Nidheesh.</p>
      
      <h1 className="text-4xl md:text-6xl font-bold text-slate-100 leading-tight">
        Architecting Tomorrow's <br /> Digital Experiences,{' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
          Today.
        </span>
      </h1>
      <p className="text-slate-300 mt-4 text-lg max-w-2xl mx-auto">A 15-year-old digital architect and freelance innovator, driven to transform complex challenges into seamless, elegant, and intuitive digital solutions.</p>
      
      <div className="absolute top-1/2 right-[10%] md:right-[20%] w-3 h-3 bg-purple-500 rounded-full animate-pulse-glow"></div>
    </section>
  );
};

export default Hero;