'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FiShoppingCart, FiHeart, FiArrowLeft, FiCheck, FiTruck, FiShield, FiRotateCcw, FiStar } from 'react-icons/fi';
import { useCart } from '@/context/CartContext';
import gsap from 'gsap';

const products = [
  { id: 1, name: 'Slim Dream - Weight Management', tagline: 'Natural weight loss & fat burn', price: 595, mrp: 699, image: '/products/slimdream.jpg', tag: '15% off', description: 'Slim Dream is a powerful Ayurvedic weight management supplement formulated with natural ingredients that help in fat burning, debloating, and healthy weight loss. Made with pure herbs for effective results.', benefits: ['Natural fat burning', 'Reduces bloating', 'Boosts metabolism', '100% Ayurvedic'] },
  { id: 2, name: 'Liver Booti - Liver Support', tagline: 'Detoxification & liver health', price: 450, mrp: 530, image: '/products/liverBooti.jpg', tag: '15% off', description: 'Liver Booti is specially formulated to support liver detoxification and maintain liver health. It helps cleanse the liver and promotes overall wellness.', benefits: ['Liver detoxification', 'Cleanses liver', 'Improves digestion', 'Natural ingredients'] },
  { id: 3, name: 'Shilajit - Energy & Vitality', tagline: 'Natural energy & stamina booster', price: 850, mrp: 1000, image: '/products/silajeetthumbnail.jpg', tag: '15% off', description: 'Pure Himalayan Shilajit Resin for natural energy, stamina, and vitality. Rich in minerals and fulvic acid for overall wellness.', benefits: ['Boosts energy', 'Increases stamina', 'Rich in minerals', 'Pure Himalayan'] },
  { id: 4, name: 'Lemon Tea - Detox Blend', tagline: 'Natural detox & immunity', price: 299, mrp: 350, image: '/products/lemonthumbnail1.jpg', tag: '15% off', description: 'Refreshing Lemon Tea detox blend for natural detoxification and immunity boost. Perfect for daily wellness routine.', benefits: ['Detoxifies body', 'Boosts immunity', 'Refreshing taste', 'Natural ingredients'] },
  { id: 5, name: 'Purvaj Liver Booti', tagline: 'Liver detoxification support', price: 480, mrp: 565, image: '/products/porvajliverbooti.jpg', tag: '15% off', description: 'Premium Liver Booti for enhanced liver detoxification and support. Formulated with powerful Ayurvedic herbs.', benefits: ['Enhanced detox', 'Liver support', 'Antioxidant', 'Premium formula'] },
  { id: 6, name: 'Shilajit Resin', tagline: 'Pure Himalayan Shilajit', price: 950, mrp: 1118, image: '/products/shilajit.jpg', tag: '15% off', description: 'Authentic Himalayan Shilajit Resin - pure and potent. Known for centuries for its health benefits.', benefits: ['Pure Himalayan', 'Anti-aging', 'Energy booster', 'Mental clarity'] },
  { id: 7, name: 'Slim-Dream', tagline: 'Advanced weight management', price: 650, mrp: 765, image: '/products/silm-dream.jpg', tag: '15% off', description: 'Advanced Slim-Dream formula for effective weight management with natural Ayurvedic ingredients.', benefits: ['Advanced formula', 'Fat reduction', 'Appetite control', 'Energy support'] },
  { id: 8, name: 'Lemon - Fresh', tagline: 'Natural lemon detox', price: 250, mrp: 295, image: '/products/lemon.jpg', tag: '15% off', description: 'Fresh Lemon detox formula for natural cleansing and freshness. Great for daily detox routine.', benefits: ['Natural cleanse', 'Fresh feeling', 'Vitamin C', 'Daily detox'] },
];

export default function ProductDetail() {
  const params = useParams();
  const productId = parseInt(params.id);
  const product = products.find(p => p.id === productId);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !product) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });

      tl.from(".product-image", { x: -50, opacity: 0, scale: 0.95 })
        .from(".product-info > *", { y: 30, opacity: 0, stagger: 0.1 }, "-=0.5")
        .from(".attribute-card", { scale: 0.8, opacity: 0, stagger: 0.1 }, "-=0.3");
    }, containerRef.current);

    return () => ctx.revert();
  }, [product]);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFFAF5]">
        <div className="text-center">
          <p className="text-2xl font-bold mb-4 font-noto tracking-light text-[#1B4332]">Alchemist's Error: Product Not Found</p>
          <Link href="/products" className="text-[#C8963E] hover:underline font-medium">Return to Collections</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== productId).slice(0, 4);

  return (
    <div ref={containerRef} className="bg-white">
      {/* Main Product Section - Strict Viewport Hero */}
      <section className="bg-[#FFFAF5] lg:h-[calc(100vh-80px)] flex items-center py-8 lg:py-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 w-full">
          {/* Inline Breadcrumb */}
          <div className="hidden lg:flex items-center space-x-2 text-[14px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">
            <Link href="/" className="hover:text-[#2D5A27]  transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[#2D5A27]  transition-colors">Products</Link>
            <span>/</span>
            <span className="text-[#C8963E]">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">

            {/* Image Gallery Mockup */}
            <div className="product-image relative flex flex-col items-center">
              <div className="relative w-full max-w-[480px] aspect-[4/5] lg:max-h-[60vh] bg-white rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white p-1 group">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-[1.5rem] transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute top-4 left-4 bg-[#C8963E] text-white text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                  {product.tag}
                </div>
              </div>

              {/* Trust Attributes - Compact */}
              <div className="mt-4 flex gap-3 w-full max-w-[480px]">
                {[
                  { icon: <FiCheck />, label: "100% Organic" },
                  { icon: <FiShield />, label: "Lab Tested" },
                  { icon: <FiRotateCcw />, label: "Pure Extracts" }
                ].map((item, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center p-2 bg-white/30 backdrop-blur-sm rounded-xl border border-white">
                    <div className="text-[#C8963E] text-sm mb-1">{item.icon}</div>
                    <span className="text-[7px] font-black uppercase tracking-widest text-gray-500 whitespace-nowrap">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info - Compacted */}
            <div className="product-info space-y-2 lg:space-y-3">
              <div>
                <span className="text-[#C8963E] font-black uppercase tracking-[0.3em] text-[12px] mb-2 block">Sacred Formulations</span>
                <p className="text-3xl lg:text-4xl font-semibold tracking-light font-noto text-[#1B4332] mb-1 leading-tight">
                  {product.name}
                </p>
                <p className="text-[#C8963E] text-base font-medium italic font-noto">{product.tagline}</p>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[12px] uppercase tracking-widest font-bold mb-1">Energy Exchange</span>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-black text-[#2D5A27]">₹{product.price}</span>
                    <span className="text-lg text-gray-300 line-through font-medium">₹{product.mrp}</span>
                  </div>
                </div>
                <div className="h-8 w-px bg-gray-200 hidden md:block"></div>
                <div className="hidden md:flex flex-col">
                  <span className="text-gray-400 text-[12px] uppercase tracking-widest font-bold mb-1">Purity Rating</span>
                  <div className="flex items-center text-[#F5B916]">
                    {[...Array(5)].map((_, i) => <FiStar key={i} className="fill-current w-3 h-3" />)}
                    <span className="ml-2 text-gray-600 text-[9px] font-bold">(482 Reviews)</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-xs leading-relaxed font-noto border-l-4 border-[#C8963E]/20 pl-4 max-w-lg">
                {product.description}
              </p>

              {/* Action Buttons */}
              <div className="pt-1 space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center bg-white border border-gray-100 rounded-full h-12 px-1 shadow-sm">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-black transition-colors">-</button>
                    <span className="w-10 text-center font-black text-sm">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-black transition-colors">+</button>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    className={`flex-1 min-w-[160px] h-12 rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 shadow-xl active:scale-95 ${added ? 'bg-green-600' : 'bg-[#1B4332] hover:bg-[#122e22]'
                      } text-white`}
                  >
                    <FiShoppingCart className="w-4 h-4" />
                    {added ? 'Blessed & Added' : 'Add to Ritual'}
                  </button>

                  <button className="w-12 h-12 border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:border-[#C8963E] hover:text-[#C8963E] transition-all shadow-sm bg-white">
                    <FiHeart className="w-5 h-5" />
                  </button>
                </div>

                {/* Delivery Note */}
                <div className="flex items-center gap-3 text-[12px] font-bold text-gray-500 uppercase tracking-widest bg-white/50 p-2.5 rounded-xl border border-white max-w-sm">
                  <FiTruck className="text-[#C8963E] w-4 h-4" />
                  <span>Complimentary Shipping on all sacred orders</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ritual Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-xl">
              <Image src="/products/cover3.jpg" alt="Ritual" fill className="object-cover" />
              <div className="absolute inset-0 bg-[#1B4332]/20 mix-blend-multiply"></div>
            </div>
            <div className="space-y-8 ritual-content">
              <span className="text-[#C8963E] font-black uppercase tracking-[0.3em] text-[10px]">The Daily Ritual</span>
              <p className="text-3xl md:text-4xl font-bold tracking-light font-noto text-[#1B4332]">How to Awaken the <br /><span className="text-[#C8963E]">Healing Power</span></p>
              <div className="space-y-6">
                {product.benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-[#FFFAF5] border border-[#C8963E]/20 flex items-center justify-center flex-shrink-0 text-sm font-black text-[#C8963E] group-hover:bg-[#C8963E] group-hover:text-white transition-colors">
                      {i + 1}
                    </div>
                    <p className="text-gray-600 font-noto leading-relaxed">{benefit} — Experience the traditional wisdom in every dose.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wisdom of the Tribe (Reviews) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#C8963E] font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Voices of Wellness</span>
            <p className="text-3xl md:text-5xl font-bold tracking-light font-noto text-[#1B4332] mb-6">Wisdom of the Tribe</p>
            <div className="w-20 h-1 bg-[#C8963E] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Ananya R.", text: "This has completely transformed my morning routine. The energy is clean and the focus is sharp.", rating: 5 },
              { name: "Vikram S.", text: "Authentic taste and visible results within 2 weeks. Purvaj Ayurveda is my go-to for purity.", rating: 5 },
              { name: "Priya M.", text: "Finally found a brand that respects traditional methods. The packaging is as premium as the product.", rating: 5 }
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-gray-100 italic">
                <div className="flex text-[#F5B916] mb-4">
                  {[...Array(review.rating)].map((_, i) => <FiStar key={i} className="fill-current w-4 h-4" />)}
                </div>
                <p className="text-gray-600 mb-6 font-noto leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2D5A27]/10 flex items-center justify-center font-bold text-[#2D5A27] text-xs">
                    {review.name[0]}
                  </div>
                  <span className="font-black text-[10px] uppercase tracking-widest text-[#1B4332]">{review.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-24 bg-white overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-[#C8963E] font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Complete the Ritual</span>
              <p className="text-3xl md:text-4xl font-bold tracking-light font-noto text-[#1B4332]">Recommended For You</p>
            </div>
            <Link href="/products" className="hidden md:block text-xs font-black uppercase tracking-[0.2em] text-[#C8963E] hover:text-[#2D5A27] transition-colors border-b-2 border-[#C8963E]/20 pb-1">View Collection</Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((p) => (
              <Link
                key={p.id}
                href={`/products/${p.id}`}
                className="group bg-[#FFFAF5] rounded-[2.5rem] p-4 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col border border-white"
              >
                <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-6">
                  <Image src={p.image} alt={p.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-black text-[9px] font-black px-3 py-1.5 rounded-lg shadow-sm uppercase tracking-widest">
                    {p.tag}
                  </div>
                </div>
                <div className="px-2 pb-2">
                  <p className="font-noto text-md font-black text-[#1B4332] mb-1 tracking-tight leading-tight group-hover:text-[#C8963E] transition-colors">{p.name}</p>
                  <p className="text-gray-400 text-[10px] mb-4 font-bold uppercase tracking-widest">{p.tagline}</p>
                  <div className="flex items-center gap-2">
                    <span className="font-black text-xl text-[#2D5A27]">₹{p.price}</span>
                    <span className="text-gray-400 line-through text-xs font-bold">₹{p.mrp}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
