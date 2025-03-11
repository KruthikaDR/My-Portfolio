import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

type Skill = {
  name: string;
  icon: string;
  category: string;
  proficiency: number;
};

const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "⚛️", category: "Frontend", proficiency: 90 },
  { name: "TypeScript", icon: "📘", category: "Frontend", proficiency: 85 },
  { name: "JavaScript", icon: "💛", category: "Frontend", proficiency: 90 },
  { name: "HTML5/CSS3", icon: "🎨", category: "Frontend", proficiency: 95 },
  { name: "Next.js", icon: "▲", category: "Frontend", proficiency: 85 },

  // Backend
  { name: "Node.js", icon: "🟢", category: "Backend", proficiency: 85 },
  { name: "Python", icon: "🐍", category: "Backend", proficiency: 90 },
  { name: "MongoDB", icon: "🍃", category: "Backend", proficiency: 80 },
  { name: "PostgreSQL", icon: "🐘", category: "Backend", proficiency: 80 },
  { name: "RESTful APIs", icon: "🔌", category: "Backend", proficiency: 90 },

  // Cloud & DevOps
  { name: "AWS", icon: "☁️", category: "Cloud & DevOps", proficiency: 85 },
  { name: "Docker", icon: "🐳", category: "Cloud & DevOps", proficiency: 80 },
  { name: "Git", icon: "📚", category: "Cloud & DevOps", proficiency: 90 },

  // Tools & Software
  { name: "VS Code", icon: "💻", category: "Tools & Software", proficiency: 90 },
  { name: "MySQL", icon: "🐬", category: "Tools & Software", proficiency: 85 },
  { name: "Oracle SQL", icon: "🗄️", category: "Tools & Software", proficiency: 85 },

  // Technical Skills
  { name: "Data Structures & Algorithms", icon: "🔧", category: "Technical Skills", proficiency: 85 },
  { name: "Object-Oriented Programming", icon: "🎯", category: "Technical Skills", proficiency: 85 },
  { name: "Web Technologies", icon: "🌐", category: "Technical Skills", proficiency: 90 },

  // Soft Skills
  { name: "Communication", icon: "💬", category: "Soft Skills", proficiency: 90 },
  { name: "Teamwork", icon: "👥", category: "Soft Skills", proficiency: 90 },
  { name: "Problem-Solving", icon: "🧩", category: "Soft Skills", proficiency: 90 }
];

export function SkillsSection({ className }: Props) {
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

  const categories = Array.from(new Set(skills.map((skill) => skill.category)));

  return (
    <div
      ref={sectionRef}
      className={cn("relative min-h-screen flex items-center justify-center py-16 md:py-24", className)}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-8 lg:px-12 w-full">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 relative inline-block">
              Skills & Expertise
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-accent/30 -z-10 transform -rotate-1"></span>
            </h2>
            <p className="text-lg text-muted-foreground px-4">
              A comprehensive overview of my technical expertise, programming languages, tools, and soft skills
            </p>
          </div>

          <div className="grid gap-12 w-full">
            {categories.map((category, categoryIndex) => (
              <div
                key={category}
                className={cn(
                  "transition-all duration-1000",
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                )}
                style={{ transitionDelay: `${categoryIndex * 200}ms` }}
              >
                <h3 className="text-2xl font-serif font-semibold mb-6 border-b pb-2 border-border/30">{category}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className={cn(
                          "p-4 rounded-lg border border-border/50 bg-card shadow-sm hover:shadow-md group hover:border-primary/50 transition-all duration-300",
                          isInView
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                        )}
                        style={{
                          transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`,
                        }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="text-2xl group-hover:scale-110 transition-transform">
                            {skill.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium mb-2">{skill.name}</h4>
                            <div className="h-2 bg-secondary rounded-full overflow-hidden">
                              <div
                                className="h-full bg-primary transition-all duration-1000 ease-out"
                                style={{
                                  width: isInView ? `${skill.proficiency}%` : "0%",
                                  transitionDelay: `${categoryIndex * 200 + skillIndex * 100 + 500}ms`,
                                }}
                              />
                            </div>
                            <p className="text-xs text-muted-foreground mt-2">
                              Proficiency: {skill.proficiency}%
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>


  );
}