import React from 'react';
import { PROJECTS_DATA } from '../constants';
import { ExternalLinkIcon, CodeIcon } from './IconComponents';

const ProjectCard: React.FC<{ project: typeof PROJECTS_DATA[0], reverse: boolean }> = ({ project, reverse }) => (
  <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${reverse ? 'md:flex-row-reverse' : ''}`}>
    <div className="md:w-1/2">
        <p className="text-purple-400 mb-2">{project.subtitle}</p>
        <h3 className="text-3xl font-bold mb-4 text-slate-100">{project.title}</h3>
        <div className="bg-black/30 backdrop-blur-lg border border-white/10 rounded-xl p-6 mb-4 transition-transform duration-300 hover:-translate-y-1">
            <p className="text-slate-300 leading-relaxed">{project.description}</p>
        </div>
        <div className="flex items-center space-x-4">
            {project.liveLink && project.liveLink !== "#" && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-black/20 rounded-full border border-white/10 hover:bg-black/40 transition-all duration-300 transform hover:scale-110" aria-label={`View live project for ${project.title}`}>
                  <ExternalLinkIcon className="w-6 h-6 text-slate-400"/>
              </a>
            )}
        </div>
    </div>
    <div className="md:w-1/2 w-full mt-8 md:mt-0">
        <div className="relative">
            <div className={`absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg blur opacity-25 ${reverse ? 'animate-float' : 'animate-float animation-delay-3000'}`}></div>
            <div className="rounded-lg shadow-2xl relative z-10 w-full aspect-[16/10] bg-black/30 flex items-center justify-center border border-white/10 overflow-hidden">
              <div className="relative w-24 h-24 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-purple-500/10 animate-pulse-loader" style={{ animationDelay: '0s' }}></div>
                  <div className="absolute inset-0 rounded-full bg-purple-500/10 animate-pulse-loader" style={{ animationDelay: '0.4s' }}></div>
                  <div className="absolute inset-0 rounded-full bg-purple-500/10 animate-pulse-loader" style={{ animationDelay: '0.8s' }}></div>
                  <CodeIcon className="w-10 h-10 text-purple-400/50 z-10"/>
              </div>
            </div>
        </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 text-slate-100">Featured Work & Concepts</h2>
      <div className="space-y-32">
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard key={index} project={project} reverse={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
};

export default Projects;