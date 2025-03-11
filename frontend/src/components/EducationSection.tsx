import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

type Education = {
  degree: string;
  institution: string;
  duration: string;
  description: string;
  achievements?: string[];
};

const educationHistory: Education[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Acharya Institute of Technology, Bangalore, India",
    duration: "Jan 2024 - Present",
    description: "Pursuing advanced studies in computer applications with focus on cloud computing and software development.",
    achievements: [
      "Maintaining a CGPA of 7.65",
      "Specializing in cloud computing and web technologies",
      "Active participation in technical workshops and projects"
    ]
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Government Science College (Autonomous), Hassan, India",
    duration: "Sept 2020 - Sept 2023",
    description: "Completed undergraduate studies with strong foundation in computer science fundamentals.",
    achievements: [
      "Achieved a CGPA of 7.83",
      "Developed practical skills in programming and software development",
      "Participated in various technical events and projects"
    ]
  }
];

export function EducationSection({ className }: Props) {
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
      className={cn("relative py-12 md:py-20", className)}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 relative inline-block">
            Education Journey
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-accent/30 -z-10 transform -rotate-1"></span>
          </h2>
          <p className="text-lg text-muted-foreground">
            My academic path in technology and computer science
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border" />

          {/* Education items */}
          {educationHistory.map((education, index) => (
            <div
              key={education.degree}
              className={cn(
                "relative mb-8 last:mb-0",
                index % 2 === 0 ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12 md:text-right",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ 
                transitionDelay: `${index * 200}ms`,
                transitionDuration: "500ms",
                transitionProperty: "all",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)"
              }}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full border-4 border-background bg-primary/10 z-10" />

              {/* Content card */}
              <div className="relative bg-card rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow border border-border/50">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                  {education.duration}
                </span>
                <h3 className="text-xl font-semibold mb-2">{education.degree}</h3>
                <h4 className="text-lg text-muted-foreground mb-3">{education.institution}</h4>
                <p className="text-muted-foreground mb-3">{education.description}</p>
                
                {education.achievements && (
                  <ul className="space-y-2">
                    {education.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className={cn(
                          "flex items-center gap-2 text-sm text-muted-foreground",
                          index % 2 === 0 ? "" : "flex-row-reverse"
                        )}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}