import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-slate-300 font-sans overflow-x-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl opacity-30 animate-float animation-delay-3000"></div>
       <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl opacity-30 animate-float animation-delay-6000"></div>

      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-6 md:px-12">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;
