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
    const ctx = gsap.context(() => {
      // Select all direct children except the first one (usually Hero)
      const sections = containerRef.current.children;
      
      // Skip the first section (Hero) so it loads immediately
      const scrollSections = Array.from(sections).slice(1);

      scrollSections.forEach((section) => {
        gsap.fromTo(section, 
          { 
            opacity: 0, 
            y: 40,
          },
          { 
            opacity: 1, 
            y: 0,
            duration: 1.0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 92%", // Trigger earlier when section is 92% from top
              toggleActions: "play none none none", 
              once: true
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
}
