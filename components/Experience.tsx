import React from 'react';
import { AwardIcon } from './IconComponents';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-100">Award & Recognition</h2>
      <div className="max-w-4xl mx-auto">
        <div className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl p-8 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-purple-600/10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="text-purple-400">
              <AwardIcon className="w-20 h-20" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-100 mb-2">Civic-Minded Innovation: Automated ID Card System</h3>
              <p className="text-purple-400 mb-4">Recognition for Community Impact</p>
              <p className="text-slate-300">
                I was deeply honored to be recognized for developing a fully automated ID card generation system for our local police department. Using Python, I engineered a solution that streamlined a critical workflow, drastically reducing processing time and enhancing accuracy. This project is a testament to my belief that technology's greatest purpose is to serve and uplift our communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;