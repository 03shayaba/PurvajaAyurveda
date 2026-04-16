"use client";
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { name: 'Weight Loss', image: '/products/slimdream.jpg' },
  { name: 'Liver Support', image: '/products/liverBooti.jpg' },
  { name: 'Shilajit', image: '/products/shilajit.jpg' },
  { name: 'Detox', image: '/products/lemon.jpg' },
  { name: 'Immunity', image: '/products/img1.jpg' },
  { name: 'Energy', image: '/products/silajeetthumbnail.jpg' },
];

export default function ProductCategories() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".section-header", {
        scrollTrigger: {
          trigger: ".section-header",
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      // Category Items Animation
      const items = gsap.utils.toArray(".category-item");
      items.forEach((item, index) => {
        const direction = index < 3 ? -150 : 150; // First 3 from Left, Last 3 from Right
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
          },
          x: direction,
          opacity: 0,
          duration: 1.2,
          delay: (index % 3) * 0.15, // Stagger same-side items
          ease: "power3.out",
        });
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header text-center mb-12">
          <span className="text-[#C8963E] font-semibold tracking-widest uppercase text-sm">Discover Our Range</span>
          <h2 className="text-4xl font-bold mt-2 text-gray-900 font-serif">Shop by Category</h2>
          <div className="w-24 h-1 bg-[#C8963E] mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-10">
          {categories.map((cat, index) => (
            <Link 
              key={cat.name} 
              href={`/products?category=${cat.name.toLowerCase().replace(/\s+/g, '-')}`} 
              className="category-item group flex flex-col items-center"
            >
              <div className="relative w-32 h-32 md:w-36 md:h-36 mb-4 rounded-full overflow-hidden border-4 border-gray-50 shadow-md group-hover:border-[#C8963E] group-hover:shadow-xl transition-all duration-300 ease-in-out">
                <Image 
                  src={cat.image} 
                  alt={cat.name} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <p className="font-semibold text-gray-800 group-hover:text-[#C8963E] transition-colors font-serif text-lg tracking-wide text-center">
                {cat.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}