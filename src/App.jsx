import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceTimeline from './components/ExperienceTimeline';
import SkillsGrid from './components/SkillsGrid';
import Projects from './components/Projects';
import HobbyProjects from './components/HobbyProjects';
import ContactSection from './components/ContactSection';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference on load
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen relative selection:bg-primary-200 selection:text-primary-900 dark:selection:bg-primary-900/50 dark:selection:text-primary-100">
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      
      <main>
        <Hero />
        <ExperienceTimeline />
        <SkillsGrid />
        <Projects />
        <HobbyProjects />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
