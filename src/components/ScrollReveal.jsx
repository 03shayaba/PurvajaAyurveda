"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollReveal({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx;
    
    // Function to initialize animations
    const init = () => {
      ctx = gsap.context(() => {
        const sections = containerRef.current.children;
        const scrollSections = Array.from(sections).slice(1);

        scrollSections.forEach((section) => {
          gsap.fromTo(section, 
            { 
              opacity: 0, 
              y: 20, 
            },
            { 
              opacity: 1, 
              y: 0,
              duration: 1.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 90%", // Trigger when section is 90% from top
                toggleActions: "play none none none", 
                once: true,
              }
            }
          );
        });
      }, containerRef);
      
      // Force a refresh after a small tick
      ScrollTrigger.refresh();
    };

    // Run after a small delay to ensure DOM is ready
    const timeout = setTimeout(() => {
      init();
      // Additional refresh for any late-loading content (like images)
      window.addEventListener('load', () => ScrollTrigger.refresh());
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      if (ctx) ctx.revert();
      clearTimeout(timeout);
      window.removeEventListener('load', () => ScrollTrigger.refresh());
    };
  }, []);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
}
