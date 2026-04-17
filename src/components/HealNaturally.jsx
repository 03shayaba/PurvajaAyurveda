"use client";
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HealNaturally() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".heal-content > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-white relative overflow-hidden">
      {/* Premium Background Layers */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(200,150,62,0.03)_100%)] pointer-events-none"></div>
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2D5A27 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}></div>
      
      {/* Soft Glow Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-[#2D5A27]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-[#C8963E]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="heal-content max-w-4xl mx-auto px-4 text-center relative z-10">
        <span className="text-[#C8963E] font-bold tracking-luxury text-[10px] uppercase mb-4 block">Holistic Recovery</span>
        <h2 className="text-4xl md:text-6xl font-sans font-semibold tracking-tight text-[#2D5A27] mb-8 leading-tight">
          Heal Naturally with <br /> <span className="font-sans font-semibold tracking-tight text-[#C8963E] ">Purvaj Ayurveda</span>
        </h2>
        <p className="text-gray-600 text-xl mb-12 leading-relaxed max-w-2xl mx-auto font-sans ">
          Discover a rare sanctuary where ancient Vedic wisdom meets clinical precision. 
          Our 100% natural rituals are crafted to restore your sacred balance.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/products" className="bg-[#2D5A27] hover:bg-[#1e3a1a] text-white px-12 py-5 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-[#2D5A27]/20 active:scale-95">
            Shop Now
          </Link>
          <Link href="/about" className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-100 px-12 py-5 rounded-full font-bold text-lg transition-all shadow-md active:scale-95">
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
