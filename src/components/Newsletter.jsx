"use client";
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const sectionRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome to our tribe! Subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <section ref={sectionRef} className="py-24 bg-[#0A1A05] relative overflow-hidden">
      {/* Decorative Orbs for Premium Vibe */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#C8963E]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#2D5A27]/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="newsletter-content max-w-4xl mx-auto px-4 text-center relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-16 rounded-[3rem] shadow-2xl">
        <span className="text-[#C8963E] font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Exclusive Knowledge</span>
        <p className="font-semibold tracking-light font-noto text-3xl md:text-4xl text-white mb-6 leading-tight">Join the <span className="text-[#C8963E] ">Purvaj Tribe</span></p>
        <p className="text-white/60 mb-10 text-lg max-w-xl mx-auto font-noto leading-relaxed">
          Deep Ayurvedic insights, private ritual launches and exclusive wellness secrets. Direct to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-stretch">
          <input
            type="email"
            placeholder="Sacred Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 max-w-md px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:border-[#C8963E] focus:ring-1 focus:ring-[#C8963E] transition-all duration-300"
          />
          <button
            type="submit"
            className="bg-[#C8963E] hover:bg-[#b8860b] text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-[#C8963E]/20 active:scale-95 whitespace-nowrap"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  );
}
