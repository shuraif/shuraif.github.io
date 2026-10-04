import React, { useState } from 'react';
import { Mail, Copy, Check, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import portfolioData from '../data/portfolioData.json';

const ContactSection = () => {
  const { contact } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(contact.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="section-container">
      <div className="max-w-3xl mx-auto text-center">
        <span className="heading-secondary">{contact.messageIntro}</span>
        <h2 className="heading-primary mb-8">Get In Touch</h2>
        
        <p className="text-slate-600 dark:text-slate-400 mb-12 text-lg">
          I'm currently looking for new opportunities, my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="glass-panel p-8 rounded-3xl max-w-xl mx-auto mb-16 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            
            <div className="flex flex-col md:flex-row gap-8 justify-center w-full">
              {/* Email Block */}
              <div className="flex flex-col items-center flex-1">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4 text-primary-600 dark:text-primary-400">
                  <Mail size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Email</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">{contact.email}</p>
                <div className="flex flex-col gap-3 w-full max-w-[200px]">
                  <a 
                    href={`mailto:${contact.email}`}
                    className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-colors inline-flex justify-center items-center text-sm"
                  >
                    Say Hello
                  </a>
                  <button 
                    onClick={handleCopyEmail}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full font-medium transition-colors inline-flex justify-center items-center text-sm border border-slate-200 dark:border-slate-700"
                  >
                    {copiedEmail ? <Check size={16} className="mr-2 text-green-500" /> : <Copy size={16} className="mr-2" />}
                    {copiedEmail ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              {/* Phone Block */}
              {contact.phone && (
                <div className="flex flex-col items-center flex-1 mt-8 md:mt-0 pt-8 md:pt-0 border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-700">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4 text-primary-600 dark:text-primary-400">
                    <Phone size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Phone</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">{contact.phone}</p>
                  <div className="flex flex-col gap-3 w-full max-w-[200px]">
                    <a 
                      href={`tel:${contact.phone}`}
                      className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-colors inline-flex justify-center items-center text-sm"
                    >
                      Call Me
                    </a>
                    <button 
                      onClick={handleCopyPhone}
                      className="px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full font-medium transition-colors inline-flex justify-center items-center text-sm border border-slate-200 dark:border-slate-700"
                    >
                      {copiedPhone ? <Check size={16} className="mr-2 text-green-500" /> : <Copy size={16} className="mr-2" />}
                      {copiedPhone ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer Socials */}
        <div className="flex justify-center items-center space-x-6 mb-8">
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            <FaGithub size={24} />
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            <FaLinkedin size={24} />
          </a>
          {contact.Instagram && (
            <a href={contact.Instagram} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
              <FaInstagram size={24} />
            </a>
          )}
        </div>
        
        <p className="text-slate-500 dark:text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Built with React & Tailwind CSS
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
