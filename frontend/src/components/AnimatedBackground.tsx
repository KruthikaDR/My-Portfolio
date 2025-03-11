import React from "react";

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Gradient orbs with animation */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-gradient-to-br from-primary/10 to-accent/5 rounded-full blur-[80px] animate-float-slow"></div>
      <div className="absolute bottom-[-15%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-tr from-secondary/10 to-primary/5 rounded-full blur-[100px] animate-float-slower"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]"></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-[15%] right-[10%] w-20 h-20 border border-primary/20 rounded-lg rotate-12 animate-float hidden lg:block"></div>
      <div className="absolute top-[35%] left-[8%] w-12 h-12 border border-accent/30 rounded-full animate-float-reverse hidden lg:block"></div>
      <div className="absolute bottom-[20%] right-[12%] w-16 h-16 bg-accent/5 rounded-md rotate-45 animate-float-slow hidden lg:block"></div>
    </div>
  );
}
