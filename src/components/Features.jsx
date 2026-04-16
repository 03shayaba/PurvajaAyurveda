"use client";
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".feature-header", {
        scrollTrigger: {
          trigger: ".feature-header",
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      // Left Image Card Animation
      gsap.from(".feature-img-card", {
        scrollTrigger: {
          trigger: ".feature-img-card",
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
        x: -200,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // Right Text Card Animation
      gsap.from(".feature-text-card", {
        scrollTrigger: {
          trigger: ".feature-text-card",
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
        x: 200,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="feature-header text-center mb-12">
          <h1 className="text-4xl font-bold mt-2 text-[#C8963E] font-serif">Carefully Crafted Remedies</h1>
          <h1 className="text-2xl font-bold mt-2 text-gray-900 font-serif">Clean, Green & Sustainable</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Image Card - Slides from Left */}
          <div className="feature-img-card bg-white rounded-2xl overflow-hidden shadow-lg relative min-h-[400px]">
            <Image src="/products/cover2.jpg" alt="Plant based formulations" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white p-6">
                <h3 className="font-serif text-2xl lg:text-3xl font-bold mb-3">Plant-based Formulations.<br/>We Promise. We deliver.</h3>
                <Link href="/about" className="bg-[#C8963E] text-white px-6 py-2 rounded-full font-medium">
                  Know More
                </Link>
              </div>
            </div>
          </div>
          
          {/* Text Card - Slides from Right */}
          <div className="feature-text-card p-6 lg:p-10 flex flex-col justify-center">
            <p className="text-gray-600 mb-4">
              Our knowledge & use of premium botanicals & phyto-ingredients is unparalleled. 
              The alchemy of herbs requires precision, years of practice and a perfect understanding 
              of interaction & synergy among ingredients.
            </p>
            <p className="text-gray-600 mb-6">
              We provide safe, researched therapies and solutions – no side effects, 
              no habit forming formulas and no short cuts.
            </p>
            <ul className="space-y-3 text-gray-700">
              {['100% Natural Ingredients', 'Scientifically Formulated', 'GMP Certified Manufacturing', 'Trusted by Thousands'].map((item) => (
                <li key={item} className="flex items-center">
                  <span className="w-2 h-2 bg-[#2D5A27] rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}