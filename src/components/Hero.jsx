import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import portfolioData from '../data/portfolioData.json';

const iconMap = {
  github: <FaGithub size={20} />,
  linkedin: <FaLinkedin size={20} />,
  instagram: <FaInstagram size={20} />
};

const Hero = () => {
  const { personal, socials } = portfolioData;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl -z-10"></div>

      <div className="section-container text-center relative z-10">
        <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur border border-slate-200 dark:border-slate-700 rounded-full px-4 py-2 mb-8 animate-fade-in-up">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium">{personal.status}</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-indigo-600 dark:from-primary-400 dark:to-indigo-400">{personal.name}</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-medium text-slate-600 dark:text-slate-300 mb-8">
          {personal.role}
        </h2>
        
        <p className="max-w-2xl mx-auto text-lg text-slate-500 dark:text-slate-400 mb-10 leading-relaxed">
          {personal.bio}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a href="#projects" className="group inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-full transition-all duration-300 shadow-lg shadow-primary-600/30">
            View My Work
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <div className="flex items-center space-x-4">
            {socials.map((social) => (
              <a 
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-slate-600 hover:text-primary-600 bg-white dark:bg-slate-800 dark:text-slate-400 dark:hover:text-primary-400 rounded-full shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 dark:border-slate-700"
                title={social.platform}
              >
                {iconMap[social.icon]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
