import React from 'react';
import portfolioData from '../data/portfolioData.json';

const SkillsGrid = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="section-container">
      <div className="text-center mb-16">
        <span className="heading-secondary">My Specialty</span>
        <h2 className="heading-primary">Technical Skills</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skillGroup, index) => (
          <div key={index} className="glass-panel p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-700 pb-2">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1.5 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-lg text-sm font-medium border border-primary-100 dark:border-primary-800/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsGrid;
