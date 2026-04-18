'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Background Zoom
      gsap.from(".hero-bg", {
        scale: 1.1,
        duration: 2,
        ease: "power2.out",
      });

      // Hero Content Animations
      gsap.from(".hero-content > *", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2
      });

      // Section Reveal Animations
      const sections = gsap.utils.toArray(".reveal-section");
      sections.forEach((section) => {
        gsap.from(section, {
          y: 60,
          opacity: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true
          }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#FFFAF5]">
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
            sizes="100vw"
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

      {/* 2. THE AYURVEDA STORY (RESTORED FROM SCREENSHOT) */}
      <section className="py-24 bg-[#FFFAF5] relative z-20 -mt-20 overflow-hidden reveal-section">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-[4rem] p-10 md:p-20 shadow-2xl border border-gray-100/50">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1B4332] text-center mb-16 underline-offset-8">The Ayurveda Story</h2>
            
            <div className="space-y-10 text-gray-600">
              <p className="text-lg md:text-xl leading-relaxed">
                <span className="text-6xl font-serif text-[#C8963E] float-left mr-4 mt-2 leading-none">A</span>
                t Purvaj Ayurveda, we believe in the power of nature to heal and rejuvenate. Our 
                journey began with a simple mission – to bring authentic Ayurvedic remedies to 
                modern households while maintaining the highest standards of quality and purity.
              </p>

              <p className="text-lg md:text-xl leading-relaxed">
                Rooted in ancient Ayurvedic traditions and backed by modern research, our products 
                are crafted with carefully selected herbs and natural ingredients. We ensure that 
                every product that leaves our facility is pure, effective, and safe for your family.
              </p>

              <div className="p-10 bg-gray-50 border-l-[6px] border-[#C8963E] rounded-r-[2rem]">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                  "Our commitment to quality goes beyond just ingredients. From sourcing to 
                  packaging, every step is carefully monitored to ensure we deliver nothing but 
                  the best."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE ALCHEMY (PROCESS) */}
      <section className="py-24 bg-[#0f1f06] text-white reveal-section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#C8963E] font-bold uppercase tracking-[0.3em] text-[10px] block mb-4">The Standard</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">The Mastery of<br />Purvaja Alchemy</h2>
              <p className="text-white/60 mb-12 text-lg font-light leading-relaxed">
                From the moment a seed is planted to the final infusion, we maintain a sacred protocol of purity that honors the laws of nature.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { label: "01", title: "Ethical Harvest", desc: "Wild-crafted herbs sourced during peak lunar cycles for maximum potency." },
                  { label: "02", title: "Pure Extraction", desc: "Traditional water-based processes to preserve the delicate bio-active compounds." },
                  { label: "03", title: "Precision Blend", desc: "Apothecary mixing by experts following ancient Vedic proportions." },
                  { label: "04", title: "Modern Validation", desc: "Every batch is lab-tested for purity, heavy metals, and consistent potency." }
                ].map((step, idx) => (
                  <div key={idx} className="group">
                    <span className="text-[#C8963E] font-bold text-xl block mb-2">{step.label}</span>
                    <h4 className="text-lg font-bold mb-2 group-hover:text-[#C8963E] transition-colors">{step.title}</h4>
                    <p className="text-white/40 text-[13px] leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image src="/products/cover2.jpg" alt="Apothecary Process" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-[#C8963E]/10" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOUNDER'S VISION */}
      <section className="py-24 reveal-section">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="relative mb-16 inline-block">
            <div className="w-32 h-32 rounded-full border-2 border-[#C8963E]/30 p-2 mx-auto overflow-hidden">
               <Image src="/products/profile.jpg" alt="Founder" width={128} height={128} className="rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-700 h-full w-full" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-[#C8963E] w-8 h-8 rounded-full flex items-center justify-center text-white font-bold font-serif">P</div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-[#1B4332] mb-10 leading-snug">
            "My vision was simple: To restore the bridge between ancestors and descendants, through the medium of pure healing."
          </h2>
          <p className="text-[#C8963E] font-bold tracking-[0.4em] uppercase text-xs mb-2">Our Founder's Philosophy</p>
          <div className="w-12 h-px bg-gray-200 mx-auto" />
        </div>
      </section>

      {/* 5. THE HERB SANCTUARY (MATCHING GOLD STANDARDS CONTENT & STYLE) */}
      <section className="py-24 bg-white reveal-section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#C8963E] font-bold uppercase tracking-widest text-xs mb-3 block">Pure Foundations</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1B4332]">Gold Standards</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                title: "100% Natural", 
                emoji: "🌿", 
                desc: "Pure herbal ingredients sourced from the soul of Indian forests, free from synthetic additives." 
              },
              { 
                title: "Scientifically Backed", 
                emoji: "🔬", 
                desc: "Marrying ancient Vedic alchemy with modern lab-tested clinical standards for proven efficacy." 
              },
              { 
                title: "Boutique Quality", 
                emoji: "✨", 
                desc: "Every blend is small-batch crafted to Ensure a premium, high-potency experience for our discerning tribe." 
              }
            ].map((item, idx) => (
              <div key={idx} className="group text-center p-12 bg-[#FFFAF5] rounded-[3rem] hover:bg-[#0f1f06] transition-all duration-700 shadow-xl hover:shadow-[#0f1f06]/20 relative overflow-hidden">
                <div className="w-20 h-20 bg-[#C8963E]/10 rounded-2xl flex items-center justify-center mx-auto mb-10 group-hover:bg-[#C8963E] group-hover:rotate-12 transition-all duration-500">
                  <span className="text-4xl">{item.emoji}</span>
                </div>
                <h3 className="font-semibold tracking-tight font-sans text-2xl mb-6 text-gray-900 group-hover:text-white transition-colors">{item.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed group-hover:text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR CERTIFICATIONS */}
      <section className="py-24 bg-[#FFFAF5] reveal-section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#C8963E] font-bold uppercase tracking-widest text-xs mb-3 block">Trusted & Verified</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1B4332]">Our Certifications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto px-4 items-stretch">
            {/* Udyam Certificate */}
            <div className="flex flex-col items-center group max-w-xs mx-auto w-full">
              <div className="relative w-full aspect-[1/1.4] mb-6 overflow-hidden rounded-2xl shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 bg-white">
                <Image 
                  src="/products/udyamcertificate.webp" 
                  alt="Udyam Certificate" 
                  fill 
                  className="object-contain p-2"
                />
              </div>
              <h3 className="text-xl font-sans font-semibold text-gray-900 text-center mb-1">Udyam Registration</h3>
              <p className="text-center text-[#C8963E] text-[10px] uppercase tracking-wider font-bold">Government of India</p>
            </div>

            {/* Registration Certificate */}
            <div className="flex flex-col items-center group max-w-xs mx-auto w-full">
              <div className="relative w-full aspect-[1/1.4] mb-6 overflow-hidden rounded-2xl shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 bg-white">
                <Image 
                  src="/products/RegisterCertificate.webp" 
                  alt="Registration Certificate" 
                  fill 
                  className="object-contain p-2"
                />
              </div>
              <h3 className="text-xl font-sans font-semibold text-gray-900 text-center mb-1">Registration Certificate</h3>
              <p className="text-center text-[#C8963E] text-[10px] uppercase tracking-wider font-bold">Official Recognition</p>
            </div>

            {/* Quality Certificate */}
            <div className="flex flex-col items-center group max-w-xs mx-auto w-full">
              <div className="relative w-full aspect-[1/1.4] mb-6 overflow-hidden rounded-2xl shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 bg-white">
                <Image 
                  src="/products/certificate.webp" 
                  alt="Quality Certificate" 
                  fill 
                  className="object-contain p-2"
                />
              </div>
              <h3 className="text-xl font-sans font-semibold text-gray-900 text-center mb-1">Quality Certificate</h3>
              <p className="text-center text-[#C8963E] text-[10px] uppercase tracking-wider font-bold">Quality Assured</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 text-center reveal-section">
        <h2 className="text-3xl font-serif text-[#1B4332] mb-8">Ready to start your ritual?</h2>
        <Link href="/products" className="inline-block bg-[#C8963E] text-white px-10 py-4 rounded-full font-bold uppercase tracking-luxury hover:bg-[#1B4332] transition-all shadow-xl hover:shadow-gold/20">
          Explore Our Blends
        </Link>
      </section>
    </div>
  );
}
