"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

const slides = [
  {
    image: "/products/cover2.jpg",
    badge: " Trusted by 10,000+ Customers",
    heading: "Nature's Best",
    highlight: "Formulations.",
    sub: "Pure, lab-tested Ayurvedic products that bring the wisdom of ancient India to your everyday wellness routine.",
  },
  {
    image: "/products/image.png",
    badge: " Pan India Delivery",
    heading: "Your Wellness",
    highlight: "Journey Starts Here.",
    sub: "From liver health to weight management — Purvaja has a natural Ayurvedic solution crafted just for you.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const heroRef = useRef(null);

  const goTo = useCallback(
    (index) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 600);
    },
    [isAnimating]
  );

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  // GSAP Animation Logic
  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      // Reset and animate badge
      gsap.fromTo(".hero-badge", 
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );

      // Heading
      gsap.fromTo(".hero-heading", 
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, delay: 0.2, ease: "power3.out" }
      );

      // Subtext
      gsap.fromTo(".hero-sub", 
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, delay: 0.4, ease: "power3.out" }
      );

      // Buttons
      gsap.fromTo(".hero-btn", 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.6, stagger: 0.15, ease: "power2.out" }
      );
    }, heroRef.current);

    return () => ctx.revert();
  }, [current]);

  const slide = slides[current];

  return (
    <div className="h-full" ref={heroRef}>
      <section className="relative h-[92vh] min-h-[600px] overflow-hidden">
        {slides.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
          >
            <Image src={s.image} alt={`Slide ${i + 1}`} fill className="object-cover" priority={i === 0} />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f1f06]/96 via-[#1a3009]/88 to-[#1a3009]/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
          </div>
        ))}

        <div className="relative z-10 h-full flex items-center">
          <div className="w-full px-8 sm:px-12 md:px-16 lg:px-20">
            <div className="max-w-xl lg:max-w-2xl flex flex-col justify-center items-center">
              <div className="hero-badge inline-flex justify-center items-center bg-[#C8963E]/20 border border-[#C8963E]/50 text-[#C8963E] text-xs font-semibold px-4 py-1.5 rounded-full mb-5 sm:mb-7 tracking-wider uppercase">
                {slide.badge}
              </div>

              <h1 className="hero-heading text-4xl text-center sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 sm:mb-4 leading-tight font-serif">
                {slide.heading}
                <br />
                <span className="text-[#C8963E]">{slide.highlight}</span>
              </h1>

              <p className="hero-sub text-sm text-center sm:text-base md:text-lg text-white/80 mb-8 sm:mb-10 leading-relaxed">
                {slide.sub}
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap items-center mt-4 sm:mt-6 justify-center gap-4 sm:gap-6">
                <Link href="/products" className="hero-btn w-full sm:w-auto min-w-[200px] h-[50px] flex items-center justify-center bg-[#C8963E] hover:bg-[#b08030] text-white rounded-full text-base font-semibold px-8 transition-colors shadow-lg">
                  Explore Products
                </Link>
                <a href="https://wa.me/917027030661" target="_blank" rel="noopener noreferrer" className="hero-btn w-full sm:w-auto min-w-[200px] h-[50px] flex items-center justify-center border-2 border-white/50 hover:border-white text-white rounded-full font-semibold text-base transition-all hover:bg-white/10 px-8">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <button onClick={prev} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 bg-white/10 hover:bg-[#C8963E] border border-white/20 hover:border-[#C8963E] rounded-full flex items-center justify-center text-white transition-all" aria-label="Previous slide">
          <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
        </button>

        <button onClick={next} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 bg-white/10 hover:bg-[#C8963E] border border-white/20 hover:border-[#C8963E] rounded-full flex items-center justify-center text-white transition-all" aria-label="Next slide">
          <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
        </button>

        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} className={`transition-all duration-300 rounded-full ${i === current ? "w-7 sm:w-8 h-2.5 bg-[#C8963E]" : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"}`} />
          ))}
        </div>
      </section>
    </div>
  );
}