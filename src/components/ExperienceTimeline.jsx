import React from 'react';
import portfolioData from '../data/portfolioData.json';
import { Briefcase } from 'lucide-react';

const ExperienceTimeline = () => {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="bg-slate-100/50 dark:bg-slate-800/20 border-y border-slate-200/50 dark:border-slate-700/50">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <span className="heading-secondary">Experience</span>
          <h2 className="heading-primary">Work History</h2>
        </div>

        <div className="relative w-full mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:-ml-0.5 top-0 bottom-0 w-1 bg-slate-200 dark:bg-slate-700 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-4 border-primary-500 shadow-sm z-10 mt-1.5 md:mt-0">
                  <Briefcase size={16} className="text-primary-500" />
                </div>

                {/* Content */}
                <div className="ml-12 md:ml-0 md:w-1/2 w-full pt-1.5">
                  <div className={`glass-panel p-6 md:p-8 rounded-2xl ${index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                      <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-sm font-semibold rounded-full mt-2 sm:mt-0">
                        {exp.duration}
                      </span>
                    </div>
                    
                    <div className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-4 flex items-center gap-2">
                      <span className="text-primary-600 dark:text-primary-400">@</span>{exp.company}
                      <span className="text-sm text-slate-500 dark:text-slate-400 font-normal ml-2">• {exp.location}</span>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="flex items-start text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                          <span className="text-primary-500 mr-3 mt-0.5 font-bold flex-shrink-0">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-md border border-slate-200 dark:border-slate-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
