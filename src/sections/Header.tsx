"use client";

import { useState, useEffect } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Check if we're at the bottom of the page
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveSection('Contact');
        return;
      }

      // Simple section detection based on scroll position
      const heroSection = document.querySelector('[data-section="hero"]') as HTMLElement;
      const projectsSection = document.querySelector('[data-section="projects"]') as HTMLElement;
      const aboutSection = document.querySelector('[data-section="about"]') as HTMLElement;
      const contactSection = document.querySelector('[data-section="contact"]') as HTMLElement;

      if (heroSection && projectsSection && aboutSection && contactSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const projectsBottom = projectsSection.offsetTop + projectsSection.offsetHeight;
        const aboutBottom = aboutSection.offsetTop + aboutSection.offsetHeight;
        const contactBottom = contactSection.offsetTop + contactSection.offsetHeight;

        if (scrollPosition < heroBottom - 200) {
          setActiveSection('Home');
        } else if (scrollPosition < projectsBottom - 200) {
          setActiveSection('Projects');
        } else if (scrollPosition < aboutBottom - 200) {
          setActiveSection('About');
        } else {
          setActiveSection('Contact');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionName: string) => {
    const sections = {
      'Home': 'hero',
      'Projects': 'projects', 
      'About': 'about',
      'Contact': 'contact'
    };
    
    const targetSection = sections[sectionName as keyof typeof sections];
    if (targetSection) {
      const element = document.querySelector(`[data-section="${targetSection}"]`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const getNavItemClass = (sectionName: string) => {
    const baseClass = "nav-item transition-colors duration-200";
    if (activeSection === sectionName) {
      return `${baseClass} bg-white text-gray-900`;
    }
    return `${baseClass} hover:bg-white hover:text-gray-900`;
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <button 
          onClick={() => scrollToSection('Home')} 
          className={getNavItemClass('Home')}
        >
          Home
        </button>
        <button 
          onClick={() => scrollToSection('Projects')} 
          className={getNavItemClass('Projects')}
        >
          Projects
        </button>
        <button 
          onClick={() => scrollToSection('About')} 
          className={getNavItemClass('About')}
        >
          About
        </button>
        <button 
          onClick={() => scrollToSection('Contact')} 
          className={getNavItemClass('Contact')}
        >
          Contact
        </button>
      </nav>
    </div>
  );
};
