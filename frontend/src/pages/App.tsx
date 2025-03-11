import React, { useEffect, useState } from "react";
import { NavMenu } from "../components/NavMenu";
import { HeroSection } from "../components/HeroSection";
import { AnimatedBackground } from "../components/AnimatedBackground";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { EducationSection } from "../components/EducationSection";
import { CertificationsSection } from "../components/CertificationsSection";
import { ContactSection } from "../components/ContactSection";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Add scroll detection for header styling
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Add fade-in animation for the entire page
  useEffect(() => {
    const timeout = setTimeout(() => {
      document.body.classList.add("animate-in");
    }, 100);
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden font-sans">
      {/* Header with navigation */}
      <header 
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.04)]' : 'bg-transparent'}`}
      >
        <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-4 md:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-primary/90 flex items-center justify-center text-primary-foreground font-bold shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md">
              <span className="font-serif text-xl">K</span>
            </div>
            <span className="font-serif font-medium text-lg">Kruthika</span>
          </div>
          
          <NavMenu 
            className="hidden md:flex" 
            variant={scrolled ? "light" : "light"} 
          />
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md hover:bg-accent/50 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" x2="20" y1="12" y2="12"/>
                  <line x1="4" x2="20" y1="6" y2="6"/>
                  <line x1="4" x2="20" y1="18" y2="18"/>
                </>
              )}
            </svg>
          </button>
          
          {/* Mobile menu */}
          <div className={`fixed inset-0 z-40 bg-background bg-opacity-95 backdrop-blur-md transition-transform duration-300 md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="h-20 flex items-center justify-end px-4 md:px-6">
              <button 
                className="p-2 rounded-md hover:bg-accent/50 transition-colors"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center h-[calc(100vh-5rem)]">
              <ul className="flex flex-col items-center gap-8">
                <li>
                  <a href="#" onClick={() => setMenuOpen(false)} className="text-xl font-medium relative group">
                    Home
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={() => setMenuOpen(false)} className="text-xl font-medium relative group">
                    About
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a href="#skills" onClick={() => setMenuOpen(false)} className="text-xl font-medium relative group">
                    Skills
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a href="#projects" onClick={() => setMenuOpen(false)} className="text-xl font-medium relative group">
                    Projects
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a href="#education" onClick={() => setMenuOpen(false)} className="text-xl font-medium relative group">
                    Education
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a href="#certifications" onClick={() => setMenuOpen(false)} className="text-xl font-medium relative group">
                    Certifications
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={() => setMenuOpen(false)} className="text-xl font-medium relative group">
                    Contact
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex flex-col">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Placeholders for other sections - will be implemented in separate tasks */}
        <section id="about" className="min-h-screen flex items-center relative">
          <AnimatedBackground />
          <AboutSection />
        </section>
        
        <section
  id="skills"
  className="w-full min-h-screen flex flex-col items-center justify-center bg-accent/5 dark:bg-accent/10 px-4"
>

          <AnimatedBackground />
          <SkillsSection />
        </section>
        
        <section id="projects" className="w-full min-h-screen flex items-center justify-center relative bg-background px-4">
          <AnimatedBackground />
          <ProjectsSection className="w-full" />
        </section>
        
        <section id="education" className="w-full min-h-screen flex items-center justify-center relative bg-background dark:bg-background/95 backdrop-blur-sm px-4">
          <AnimatedBackground />
          <EducationSection />
        </section>
        
        <section id="certifications" className="w-full min-h-screen flex items-center justify-center relative bg-background px-4">
          <AnimatedBackground />
          <CertificationsSection />
        </section>
        
        <section id="contact" className="min-h-screen flex items-center relative bg-accent/5">
          <AnimatedBackground />
          <ContactSection />
        </section>
        
        {/* Footer */}
        <footer className="border-t py-12 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-2 mb-4 md:mb-0">
                <div className="w-10 h-10 rounded-xl bg-primary/90 flex items-center justify-center text-primary-foreground font-bold shadow-sm">
                  <span className="font-serif">K</span>
                </div>
                <span className="font-serif font-medium">Kruthika D R</span>
              </div>
              
              <div className="flex gap-6">
                <a href="https://github.com/KruthikaDR" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  <span className="sr-only">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/kruthika-d-r-371b0b28a/" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>
            
            <div className="border-t border-border/40 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Kruthika D R. All rights reserved.</p>
              <p className="text-sm text-muted-foreground mt-2 md:mt-0">Designed with ❤️ for excellence</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
