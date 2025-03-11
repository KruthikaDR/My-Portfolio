import React, { useEffect, useRef, useState } from "react";
import { cn } from "utils/cn";

type Props = {
  className?: string;
};

export function AboutSection({ className }: Props) {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className={cn("relative py-16 md:py-24 overflow-hidden bg-background", className)}
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Photo and decorative elements */}
          <div className={cn(
            "lg:col-span-5 relative transition-all duration-1000",
            isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          )}>
            <div className="relative mx-auto max-w-md">
              {/* Main photo container */}
              <div className="relative z-10 bg-card rounded-xl shadow-xl overflow-hidden border border-border">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src="/aboutPic.png" 
                    alt="Kruthika D R" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Badge overlay - education */}
                <div className="absolute top-4 left-4 bg-muted shadow-md rounded-lg py-2 px-3 border border-border">
                  <div className="text-xs font-medium text-foreground">MCA Student</div>
                </div>
                
                {/* Badge overlay - profession */}
                <div className="absolute bottom-4 right-4 bg-blue-600 text-white shadow-md rounded-lg py-2 px-3">
                  <div className="text-xs font-medium">Full-Stack Developer</div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-accent/20 -z-10 animate-float-slower"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full border border-border -z-10 animate-float-slow"></div>
            </div>
          </div>
          
          {/* About content */}
          <div className={cn(
            "lg:col-span-7 space-y-6 transition-all duration-1000 delay-300",
            isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          )}>
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-serif font-bold relative inline-block text-foreground">
                About Me
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-accent/30 -z-10 transform -rotate-1"></span>
              </h2>
              <p className="text-lg text-muted-foreground">
                A passionate technologist with a drive for excellence
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none text-foreground dark:prose-invert">
              <p>
                Hello! I'm <span className="font-medium text-blue-600">Kruthika D R</span>, an MCA student with a strong foundation in cloud computing, data structures, algorithms, and web development.
              </p>
              
              <p>
                I specialize in building scalable applications with expertise in frontend and backend technologies. Passionate about solving complex problems and learning new technologies.
              </p>
            </div>
            
            {/* Key qualities/highlights section */}
            <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Problem Solver", description: "Strong analytical and problem-solving skills" },
                { title: "Tech Enthusiast", description: "Always exploring new technologies" },
                { title: "Detail-Oriented", description: "Meticulous attention to detail" },
                { title: "Collaborative", description: "Strong team player and communicator" }
              ].map((item, index) => (
                <div 
                  key={item.title}
                  className={cn(
                    "flex items-start gap-3 p-4 rounded-xl border border-border bg-card hover:bg-card/80 hover:shadow-sm transition-all",
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                  style={{ transitionDelay: `${400 + index * 100}ms`, transitionDuration: "500ms" }}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 text-accent-foreground flex items-center justify-center">
                    ✔
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA button */}
            <div className="pt-4">
              <a 
                href="#skills" 
                className="btn-primary inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition-all"
              >
                View My Skills
                <svg className="ml-2 transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

