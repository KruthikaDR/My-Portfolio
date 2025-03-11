import React from "react";
import { cn } from "utils/cn";
import { AnimatedBackground } from "components/AnimatedBackground";

type Props = {
  className?: string;
};

export function HeroSection({ className }: Props) {
  return (
    <div className={cn("relative overflow-hidden min-h-screen flex items-center", className)}>
      {/* Animated background elements */}
      <AnimatedBackground />

      <div className="section-container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Content column */}
        <div className="lg:col-span-7 flex flex-col items-start justify-center text-left">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-xs font-medium text-primary mb-6 animate-fade-in">
            <span className="mr-1 text-primary">✦</span> MCA Student & Developer
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold mb-6 leading-tight animate-fade-in">
            <span>Hello, I'm </span>
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Kruthika D R</span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-accent/20 -z-10 transform -rotate-1"></span>
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-muted-foreground max-w-xl mb-8 animate-slide-up delay-100">
            A results-oriented developer crafting elegant solutions with expertise in cloud computing, algorithms, and full-stack development.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-200">
            <a
              href="#projects"
              className="btn-primary group"
            >
              View My Projects
              <svg className="inline-block ml-2 transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#contact"
              className="btn-secondary"
            >
              Get In Touch
            </a>
          </div>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-2 mt-10 animate-slide-up delay-300">
            <span className="text-xs text-muted-foreground mr-2 self-center">Tech Stack:</span>
            {['React', 'Python', 'AWS', 'Node.js', 'MongoDB'].map((tech, i) => (
              <span
                key={tech}
                className={`px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground animate-fade-in`}
                style={{ animationDelay: `${400 + i * 100}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Image or graphic column */}
        <div className="lg:col-span-5 relative hidden lg:block">
          <div className="relative w-full aspect-square">
            {/* Professional headshot or abstract representation */}
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/30 via-accent/20 to-primary/20 rounded-3xl transform rotate-6 animate-float-slow"></div>
            <div className="absolute inset-4 bg-accent/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-xl overflow-hidden animate-slide-in-right delay-200">
              {/* Profile Image */}
              <img
                src="/profilePic.png"
                alt="Kruthika D R"
                className="w-full h-full object-cover object-center"
              />

              {/* Visual elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-primary/5 rounded-full animate-float"></div>
              <div className="absolute bottom-8 left-8 w-16 h-16 bg-accent/10 rounded-md rotate-12 animate-float-reverse"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent/10 rounded-lg rotate-12 animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border border-primary/10 rounded-full animate-float-slow"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center">
        <span className="text-xs text-muted-foreground mb-2">Scroll to explore</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-muted-foreground"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </div>
  );
}
