'use client';

import React from 'react';

type MotionProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  delay?: number;
};

// Simple CSS-based animation components
export const FadeIn = ({ children, delay = 0, style, ...props }: MotionProps) => {
  return (
    <div
      className="animate-fade-in"
      style={{ 
        animationDelay: `${delay}s`,
        animationFillMode: 'both',
        ...(style || {})
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export const SlideUp = ({ children, delay = 0, style, ...props }: MotionProps) => {
  return (
    <div
      className="animate-slide-up"
      style={{ 
        animationDelay: `${delay}s`,
        animationFillMode: 'both',
        ...(style || {})
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export const ScaleIn = ({ children, delay = 0, style, ...props }: MotionProps) => {
  return (
    <div
      className="animate-scale-in"
      style={{ 
        animationDelay: `${delay}s`,
        animationFillMode: 'both',
        ...(style || {})
      }}
      {...props}
    >
      {children}
    </div>
  );
};
