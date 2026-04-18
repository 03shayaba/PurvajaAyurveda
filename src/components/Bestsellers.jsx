'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useCart } from '@/context/CartContext';
import { FiShoppingCart } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const products = [
  { id: 1, name: 'Slim Dream', tagline: 'Weight Management', price: 595, mrp: 699, image: '/products/slimdream.jpg', hoverImage: '/products/slimdreamDet.jpg', tag: '15% off' },
  { id: 2, name: 'Liver Booti', tagline: 'Liver Support', price: 450, mrp: 530, image: '/products/porvajliverbooti.jpg', hoverImage: '/products/liverBooti.jpg', tag: '15% off' },
  { id: 3, name: 'Shilajit', tagline: 'Energy & Vitality', price: 850, mrp: 1000, image: '/products/shilajit.jpg', hoverImage: '/products/shilajeetdet.jpg', tag: '15% off' },
  { id: 4, name: 'Lemon Tea', tagline: 'Detox Blend', price: 299, mrp: 350, image: '/products/lemon.jpg', hoverImage: '/products/lemonthumbnail1.jpg', tag: '15% off' },
];

export default function Bestsellers() {
  const [addedId, setAddedId] = useState(null);
  const { addToCart } = useCart();
  const sectionRef = useRef(null);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    addToCart(product, 1);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".bestseller-header", {
        scrollTrigger: {
          trigger: ".bestseller-header",
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      // Product Cards Floating Animation
      const cards = gsap.utils.toArray(".bestseller-card");
      cards.forEach((card, index) => {
        const direction = index < 2 ? -200 : 200; // First two from Left, Last two from Right
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
          x: direction,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: (index % 2) * 0.1, // Small stagger for same-side cards
        });
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#C8963E] font-bold tracking-luxury uppercase text-[10px] block mb-2">Our Pride</span>
          <p className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-[#1B4332]">Our Bestsellers</p>
          <div className="w-16 h-0.5 bg-[#C8963E]/30 mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((p, index) => (
            <Link
              key={p.id}
              href={`/products/${p.id}`}
              className="bestseller-card group bg-white rounded-[2rem] p-4 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col border border-gray-50/50"
            >
              {/* Image Section */}
              <div className="relative aspect-square rounded-[1.5rem] overflow-hidden mb-4">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover transition-opacity duration-700 group-hover:opacity-0"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <Image
                  src={p.hoverImage}
                  alt={`${p.name} detail`}
                  fill
                  className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-110 group-hover:scale-100"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute top-4 left-4 bg-[#F5B916] text-black text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-sm">
                  {p.tag}
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-grow px-2">
                <p className="text-md font-semibold  tracking-light font-sans text-gray-900 mb-1 leading-tight group-hover:text-[#2D5A27] transition-colors line-clamp-2 min-h-[3rem] flex items-center">{p.name}</p>
                <p className="text-[#C8963E] text-[8px] mb-4 font-bold uppercase tracking-luxury">{p.tagline}</p>

                <div className="flex items-center gap-2 mb-6">
                  <span className="font-bold text-xl text-[#2D5A27]">₹{p.price}</span>
                  <span className="text-gray-400 line-through text-xs font-medium">₹{p.mrp}</span>
                </div>
              </div>

              {/* Action Section */}
              <button
                onClick={(e) => handleAddToCart(e, p)}
                className="w-full bg-[#1B4332] hover:bg-[#122e22] text-white py-4 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-sm relative overflow-hidden group/btn mb-2"
              >
                {addedId === p.id ? (
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                    Added!
                  </span>
                ) : (
                  <>
                    <FiShoppingCart className="group-hover:translate-x-1 transition-transform" />
                    Add to Cart
                  </>
                )}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
