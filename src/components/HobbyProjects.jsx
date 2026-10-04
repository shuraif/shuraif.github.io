import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import portfolioData from '../data/portfolioData.json';

const ProjectCard = ({ project }) => {
  return (
    <div className="glass-panel flex flex-col h-full rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300">
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
          {project.summary}
        </p>
        <ul className="space-y-1 mb-6">
          {project.highlights.map((highlight, index) => (
            <li key={index} className="text-sm text-slate-500 dark:text-slate-400 flex items-start">
              <span className="text-primary-500 mr-2 flex-shrink-0 mt-0.5">•</span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 pt-0 mt-auto">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map(tech => (
            <span key={tech} className="text-xs font-medium text-slate-500 dark:text-slate-400">
              #{tech}
            </span>
          ))}
        </div>
        {(project.liveUrl && project.liveUrl !== '#' || project.githubUrl && project.githubUrl !== '#') && (
          <div className="flex items-center space-x-4">
            {project.liveUrl && project.liveUrl !== '#' && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium text-slate-700 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400">
                <ExternalLink size={16} className="mr-1" /> View App
              </a>
            )}
            {project.githubUrl && project.githubUrl !== '#' && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium text-slate-700 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400">
                <FaGithub size={16} className="mr-1" /> Source Code
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const HobbyProjects = () => {
  const { hobbyProjects } = portfolioData;
  
  if (!hobbyProjects || hobbyProjects.length === 0) return null;

  return (
    <section id="mobile-apps" className="border-b border-slate-200/50 dark:border-slate-700/50 pb-20">
      <div className="section-container pt-0">
        <div className="text-center mb-16">
          <span className="heading-secondary">Side Projects</span>
          <h2 className="heading-primary">Mobile Apps & More</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbyProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbyProjects;
