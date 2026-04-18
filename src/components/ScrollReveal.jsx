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
      const sections = containerRef.current.children;
      const scrollSections = Array.from(sections).slice(1);

      scrollSections.forEach((section) => {
        // Animation for the section itself - with subtle zoom
        gsap.fromTo(section, 
          { 
            opacity: 0, 
            y: 60,
            scale: 0.98
          },
          { 
            opacity: 1, 
            y: 0,
            scale: 1,
            duration: 1.5,
            ease: "power4.out",
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              toggleActions: "play none none none", 
              once: true
            }
          }
        );

        // Staggered animation for titles and items within the section
        const innerItems = section.querySelectorAll('h2, .grid > div, .stagger-item, p');
        if (innerItems.length > 0) {
          gsap.from(innerItems, {
            y: 20,
            opacity: 0,
            duration: 1.2,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              once: true
            }
          });
        }

        // Parallax effect for images - refined for boutique feel
        const images = section.querySelectorAll('img');
        images.forEach(img => {
          gsap.to(img, {
            y: -30,
            scale: 1.05,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1 // Adding scrub smoothness
            }
          });
        });
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
