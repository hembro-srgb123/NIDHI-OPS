import React from 'react';
import { GithubIcon, TwitterIcon, LinkedinIcon } from './IconComponents';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="py-24 text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-slate-100">Ready to build the future?</h2>
        <p className="text-slate-400 mb-6 leading-relaxed">
          I am more than a freelancer; I am a creative partner dedicated to bringing your vision to life. If you're ready to build something special, let's connect.
        </p>
        <a href="mailto:prothikhoho@gmail.com" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-100">
          prothikhoho@gmail.com
        </a>

        <p className="text-slate-400 mt-6">
          Or call: <a href="tel:+919063575708" className="text-purple-400 hover:text-purple-300 transition-colors">+91 9063575708</a>
        </p>

        <div className="flex justify-center space-x-6 mt-8">
          <a href="#" className="text-slate-400 hover:text-purple-400 transition-all duration-300 transform hover:-translate-y-1">
            <TwitterIcon className="w-6 h-6" />
          </a>
          <a href="#" className="text-slate-400 hover:text-purple-400 transition-all duration-300 transform hover:-translate-y-1">
            <GithubIcon className="w-6 h-6" />
          </a>
          <a href="#" className="text-slate-400 hover:text-purple-400 transition-all duration-300 transform hover:-translate-y-1">
            <LinkedinIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;