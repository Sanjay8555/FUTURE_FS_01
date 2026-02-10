import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  return (
    <div className="relative bg-white dark:bg-[#050816] text-slate-900 dark:text-white selection:bg-blue-100 dark:selection:bg-blue-900 selection:text-blue-700 dark:selection:text-blue-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      
      <footer className="py-12 border-t border-slate-100 dark:border-gray-900 px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 dark:text-gray-500 text-sm">
            © 2026 Sanjay S. Built with React & Tailwind CSS.
          </p>
          <div className="flex gap-8">
            <a href="https://github.com/Sanjay8555" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/sanjay-s-b57531317" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

      <AIChat />
    </div>
  );
};

export default App;