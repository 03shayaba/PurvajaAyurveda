'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';

export default function About() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.from(".hero-bg", {
        scale: 1.1,
        duration: 2,
        ease: "power2.out",
      });
    }, heroRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#FFFAF5]">
      {/* Premium Hero Section - Matching Product Hero Style */}
      <section ref={heroRef} className="relative h-[80vh] min-h-[550px] flex items-center justify-center overflow-hidden">
        {/* Background Layer - Match Home/Product Hero Style */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/products/cover.jpg"
            alt="Ayurvedic Heritage"
            fill
            className="hero-bg object-cover"
            priority
          />
          {/* Exact Brand Dual Gradient System */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1f06]/96 via-[#1a3009]/88 to-[#1a3009]/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0f1f06]/90" />
        </div>

        {/* Content Layer */}
        <div className="hero-content relative z-10 text-center text-white px-4 max-w-4xl pt-16 flex flex-col items-center">
          <nav className="flex items-center justify-center space-x-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#C8963E] mb-8 hero-nav">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/20">/</span>
            <span className="text-white">Our Story</span>
          </nav>

          <p className="text-4xl md:text-5xl font-sans font-semibold tracking-tight mb-6 leading-tight">
            About Our <span className="text-[#C8963E]">Legacy</span>
          </p>

          <div className="w-32 h-1 bg-[#C8963E] mx-auto mb-10 rounded-full" />

          <p className="text-lg md:text-xl lg:text-xl text-white/90 font-sans max-w-3xl mx-auto leading-relaxed  ">
            "Weaving ancient Ayurvedic wisdom with modern clinical precision to deliver a boutique wellness experience like no other."
          </p>
        </div>
      </section>

      {/* Narrative Section - Premium Blend */}
      <section className="py-24 bg-[#FFFAF5] relative z-20 -mt-10 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl border border-gray-100/50">
            <p className="text-4xl font-semibold font-sans text-gray-900 text-center mb-10 tracking-tight ">The Ayurveda Story</p>
            <div className="prose max-w-none text-gray-600 space-y-8">
              <p className="text-md md:text-lg leading-relaxed first-letter:text-5xl first-letter:font-sans first-letter:float-left first-letter:mr-3 first-letter:text-[#C8963E]">
                At Purvaj Ayurveda, we believe in the power of nature to heal and rejuvenate.
                Our journey began with a simple mission - to bring authentic Ayurvedic remedies
                to modern households while maintaining the highest standards of quality and purity.
              </p>
              <p className="text-md md:text-lg leading-relaxed">
                Rooted in ancient Ayurvedic traditions and backed by modern research, our products
                are crafted with carefully selected herbs and natural ingredients. We ensure that
                every product that leaves our facility is pure, effective, and safe for your family.
              </p>
              <div className="p-8 bg-[#0f1f06]/5 border-l-4 border-[#C8963E] rounded-r-2xl  text-gray-700 text-lg">
                "Our commitment to quality goes beyond just ingredients. From sourcing to packaging,
                every step is carefully monitored to ensure we deliver nothing but the best."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Premium Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#C8963E] font-bold uppercase tracking-widest text-xs mb-3 block">Pure Foundations</span>
            <p className="text-4xl font-semibold tracking-tight font-sans text-gray-900  ">Gold Standards</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center p-10 bg-[#FFFAF5] rounded-[2.5rem] hover:bg-[#0f1f06] transition-all duration-500 shadow-xl hover:shadow-[#0f1f06]/20 relative overflow-hidden">
              <div className="w-20 h-20 bg-[#C8963E]/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-[#C8963E] group-hover:rotate-12 transition-all duration-500">
                <span className="text-4xl">🌿</span>
              </div>
              <p className="font-semibold tracking-light font-sans  text-xl mb-4 text-gray-900 group-hover:text-white transition-colors">100% Natural</p>
              <p className="text-gray-500 text-base leading-relaxed group-hover:text-white/70">Pure herbal ingredients sourced from the soul of Indian forests, free from synthetic additives.</p>
            </div>

            <div className="group text-center p-10 bg-[#FFFAF5] rounded-[2.5rem] hover:bg-[#0f1f06] transition-all duration-500 shadow-xl hover:shadow-[#0f1f06]/20 relative overflow-hidden">
              <div className="w-20 h-20 bg-[#C8963E]/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-[#C8963E] group-hover:rotate-12 transition-all duration-500">
                <span className="text-4xl">🔬</span>
              </div>
              <p className="font-semibold tracking-light font-sans  text-xl mb-4 text-gray-900 group-hover:text-white transition-colors">Scientifically Backed</p>
              <p className="text-gray-500 text-base leading-relaxed group-hover:text-white/70">Marrying ancient Vedic alchemy with modern lab-tested clinical standards for proven efficacy.</p>
            </div>

            <div className="group text-center p-10 bg-[#FFFAF5] rounded-[2.5rem] hover:bg-[#0f1f06] transition-all duration-500 shadow-xl hover:shadow-[#0f1f06]/20 relative overflow-hidden">
              <div className="w-20 h-20 bg-[#C8963E]/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-[#C8963E] group-hover:rotate-12 transition-all duration-500">
                <span className="text-4xl">✨</span>
              </div>
              <p className="font-semibold tracking-light font-sans  text-xl mb-4 text-gray-900 group-hover:text-white transition-colors">Boutique Quality</p>
              <p className="text-gray-500 text-base leading-relaxed group-hover:text-white/70">Every blend is small-batch crafted to Ensure a premium, high-potency experience for our discerning tribe.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
