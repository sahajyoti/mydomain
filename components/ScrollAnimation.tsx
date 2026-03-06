'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'zoom-in' | 'fade-up-scale';
  delay?: number;
}

export default function ScrollAnimation({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0 
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-in');
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  const animationClasses = {
    'fade-up': 'scroll-fade-up',
    'fade-in': 'scroll-fade-in',
    'slide-left': 'scroll-slide-left',
    'slide-right': 'scroll-slide-right',
    'zoom-in': 'scroll-zoom-in',
    'fade-up-scale': 'scroll-fade-up-scale',
  };

  return (
    <div
      ref={elementRef}
      className={`${animationClasses[animation]} ${className}`}
    >
      {children}
    </div>
  );
}
