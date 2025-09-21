import React from 'react';
import { SKILLS_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <div className="text-center max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">The Visionary Edge</h2>
        <p className="text-lg text-slate-300 mb-8">Why partner with me?</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl p-6 h-full transform hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
            <h3 className="text-xl font-bold text-purple-400 mb-2">Next-Gen Perspective</h3>
            <p className="text-slate-300">I see the digital landscape not just for what it is, but for what it can become.</p>
          </div>
          <div className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl p-6 h-full transform hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
            <h3 className="text-xl font-bold text-purple-400 mb-2">Uncompromising Quality</h3>
            <p className="text-slate-300">My work is a reflection of my ambition—clean, robust, and executed to the highest standard.</p>
          </div>
          <div className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl p-6 h-full transform hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
            <h3 className="text-xl font-bold text-purple-400 mb-2">A True Collaborator</h3>
            <p className="text-slate-300">I am more than a freelancer; I am a creative partner dedicated to bringing your vision to life.</p>
          </div>
        </div>
      </div>

      <div className="text-center max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12">My Arsenal of Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS_CATEGORIES.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl p-6 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 flex flex-col">
                <div className="flex flex-col items-center text-center mb-4">
                  <IconComponent className="w-10 h-10 mb-3 text-purple-400" />
                  <h3 className="text-xl font-bold text-slate-200">{category.title}</h3>
                </div>
                <div className="flex-grow flex flex-wrap justify-center items-center gap-2 mt-4">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-slate-800/50 text-slate-300 text-sm font-medium px-3 py-1 rounded-full transition-all duration-300 hover:bg-purple-500/40 hover:text-white hover:scale-105 cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;