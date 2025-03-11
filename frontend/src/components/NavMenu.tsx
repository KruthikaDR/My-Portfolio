import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "utils/cn";

type NavItem = {
  name: string;
  href: string;
};

type Props = {
  className?: string;
  variant?: "light" | "dark";
};

export function NavMenu({ className, variant = "light" }: Props) {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");
  
  // Monitor scroll position to highlight the active section in nav
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentActiveSection = "";
      
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < 100) {
          currentActiveSection = section.id;
        }
      });
      
      if (window.scrollY < 100) {
        // At the top of the page, highlight Home
        currentActiveSection = "";
      }
      
      setActiveSection(currentActiveSection);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initialize on mount
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={cn("flex items-center", className)}>
      <ul className="flex items-center space-x-8">
        {navItems.map((item, index) => {
          const isHome = item.href === "#";
          const isActive = isHome 
            ? activeSection === "" 
            : activeSection === item.href.substring(1);
            
          return (
            <li key={item.name}>
              <a
                href={item.href}
                className={cn(
                  "px-2 py-2 text-sm font-medium transition-all duration-300 relative group",
                  isActive
                    ? "text-primary font-semibold"
                    : `${variant === "light" ? "text-muted-foreground" : "text-primary-foreground/70"} hover:text-primary`
                )}
              >
                <span className="relative z-10">{item.name}</span>
                
                {/* Animated underline effect */}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full",
                    isActive && "w-full"
                  )}
                ></span>
                
                {/* Subtle hover animation */}
                <span className="absolute inset-0 bg-primary/5 rounded-md scale-0 transition-transform duration-200 group-hover:scale-100"></span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
