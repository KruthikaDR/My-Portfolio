import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills: string[];
  badgeUrl: string;
};

const certificates: Certificate[] = [
  {
    title: "AWS Academy - Cloud Foundations",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-CF-2023",
    skills: ["Cloud Computing", "AWS Services", "Cloud Architecture"],
    badgeUrl: "/cert1.png"
  },
  {
    title: "Introduction to Cryptography for Beginners",
    issuer: "Simplilearn",
    date: "2023",
    credentialId: "SL-CRYPTO-2023",
    skills: ["Cryptography", "Security", "Encryption"],
    badgeUrl: "/cert2.png"
  }
];

export function CertificationsSection({ className }: Props) {
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
      className={cn("relative py-16 md:py-24", className)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 relative inline-block">
            Certifications
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-accent/30 -z-10 transform -rotate-1"></span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Professional certifications and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={cert.title}
              className={cn(
                "group bg-card rounded-xl p-6 border border-border/50 shadow-sm hover:shadow-md transition-all duration-300",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Badge Image */}
              <div className="mb-6 flex justify-center">
                <div className="relative w-32 h-32 transform transition-transform duration-500 group-hover:scale-110">
                  <div className="absolute inset-0 rounded-full bg-primary/5 animate-pulse"></div>
                  <img
                    src={cert.badgeUrl}
                    alt={`${cert.title} Badge`}
                    className="relative w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Certificate Details */}
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {cert.issuer} • {cert.date}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs font-medium bg-secondary rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {cert.credentialId && (
                  <p className="text-xs text-muted-foreground">
                    Credential ID: {cert.credentialId}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}