'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import ProductList from '@/components/ProductList';

export default function Products() {
  const heroRef = useRef(null);

  return (
    <div className="bg-[#FFFAF5]">
      {/* Premium Hero Section */}
      <section ref={heroRef} className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Layer - Exact Match of Homepage Hero Gradient Effect */}
        <div className="absolute inset-0 z-0 text-center">
          <Image 
            src="/products/cover4.png" 
            alt="Ayurvedic Background" 
            fill 
            className="hero-bg object-cover"
            priority 
          />
          {/* Dual Gradient System from Home Page */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1f06]/96 via-[#1a3009]/88 to-[#1a3009]/80" />
          {/* Dark Green Bottom Shadow instead of White Fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0f1f06]/90" />
        </div>

        {/* Content Layer */}
        <div className="hero-content relative z-10 text-center text-white px-4 max-w-4xl pt-16 flex flex-col items-center">
          <nav className="flex items-center justify-center space-x-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#C8963E] mb-8 hero-nav">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/20">/</span>
            <span className="text-white">Shop All</span>
          </nav>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Our <span className="text-[#C8963E]">Healing</span>
            <br />
            Collections
          </h1>
          
          <div className="w-32 h-1 bg-[#C8963E] mx-auto mb-10 rounded-full" />
          
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed ">
            "Ancient wisdom meets modern purity. Discover formulations crafted to restore your natural balance and vitality."
          </p>
        </div>
      </section>

      <div className="relative z-20 -mt-10">
        <ProductList />
      </div>
    </div>
  );
}