'use client';

import React from 'react';

// Simple CSS-based animation components
export const FadeIn = ({ children, delay = 0, ...props }: { children: React.ReactNode; delay?: number; [key: string]: any }) => {
  return (
    <div
      className="animate-fade-in"
      style={{ 
        animationDelay: `${delay}s`,
        animationFillMode: 'both'
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export const SlideUp = ({ children, delay = 0, ...props }: { children: React.ReactNode; delay?: number; [key: string]: any }) => {
  return (
    <div
      className="animate-slide-up"
      style={{ 
        animationDelay: `${delay}s`,
        animationFillMode: 'both'
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export const ScaleIn = ({ children, delay = 0, ...props }: { children: React.ReactNode; delay?: number; [key: string]: any }) => {
  return (
    <div
      className="animate-scale-in"
      style={{ 
        animationDelay: `${delay}s`,
        animationFillMode: 'both'
      }}
      {...props}
    >
      {children}
    </div>
  );
};
