'use client';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FiShoppingCart, FiHeart, FiStar, FiPlay, FiChevronRight, FiChevronLeft, FiCheck, FiShield, FiAward } from 'react-icons/fi';
import { useCart } from '@/context/CartContext';
import gsap from 'gsap';

const products = [
  {
    id: 1,
    name: 'Slim Dream - Weight Management',
    tagline: 'Natural weight loss & fat burn',
    price: 595,
    mrp: 699,
    image: '/products/slimdream.jpg',
    gallery: ['/products/slimdream.jpg', '/products/slimdreamDet.jpg', '/products/cover3.jpg'],
    tag: '15% off',
    description: 'Slim Dream is a powerful Ayurvedic weight management supplement formulated with natural ingredients that help in fat burning, debloating, and healthy weight loss. Made with pure herbs for effective results.',
    benefits: ['Natural fat burning', 'Reduces bloating', 'Boosts metabolism', '100% Ayurvedic'],
    videos: [
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F841526701524322%2F&show_text=false&width=267&t=0",
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1170364191008074%2F&show_text=false&width=267&t=0",
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F365649079969916%2F&show_text=false&width=267&t=0",
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1494399981257038%2F&show_text=false&width=267&t=0",
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F567748535965343%2F&show_text=false&width=267&t=0",
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F920491103271860%2F&show_text=false&width=267&t=0"
    ]
  },
  {
    id: 2,
    name: 'Liver Booti - Liver Support',
    tagline: 'Detoxification & liver health',
    price: 450,
    mrp: 530,
    image: '/products/liverBooti.jpg',
    gallery: ['/products/liverBooti.jpg', '/products/porvajliverbooti.jpg', '/products/cover3.jpg'],
    tag: '15% off',
    description: 'Liver Booti is specially formulated to support liver detoxification and maintain liver health. It helps cleanse the liver and promotes overall wellness.',
    benefits: ['Liver detoxification', 'Cleanses liver', 'Improves digestion', 'Natural ingredients'],
    videos: [
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1303408867763896%2F&show_text=false&width=267&t=0",
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F841526701524322%2F&show_text=false&width=267&t=0",
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F832011378847392%2F&show_text=false&width=267&t=0",
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F365649079969916%2F&show_text=false&width=267&t=0",
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1494399981257038%2F&show_text=false&width=267&t=0",
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F567748535965343%2F&show_text=false&width=267&t=0"
    ]
  },
  {
    id: 3,
    name: 'Shilajit - Energy & Vitality',
    tagline: 'Natural energy & stamina booster',
    price: 850,
    mrp: 1000,
    image: '/products/silajeetthumbnail.jpg',
    gallery: ['/products/silajeetthumbnail.jpg', '/products/shilajeetdet.jpg', '/products/shilajit.jpg'],
    tag: '15% off',
    description: 'Pure Himalayan Shilajit Resin for natural energy, stamina, and vitality. Rich in minerals and fulvic acid for overall wellness.',
    benefits: ['Boosts energy', 'Increases stamina', 'Rich in minerals', 'Pure Himalayan'],
    videos: [
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1170364191008074%2F&show_text=false&width=267&t=0",
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F841526701524322%2F&show_text=false&width=267&t=0",
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1303408867763896%2F&show_text=false&width=267&t=0",
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F832011378847392%2F&show_text=false&width=267&t=0",
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F365649079969916%2F&show_text=false&width=267&t=0",
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1494399981257038%2F&show_text=false&width=267&t=0"
    ]
  },
  {
    id: 4,
    name: 'Lemon Tea - Detox Blend',
    tagline: 'Natural detox & immunity',
    price: 299,
    mrp: 350,
    image: '/products/lemonthumbnail1.jpg',
    gallery: ['/products/lemonthumbnail1.jpg', '/products/lemon.jpg', '/products/cover3.jpg'],
    tag: '15% off',
    description: 'Refreshing Lemon Tea detox blend for natural detoxification and immunity boost. Perfect for daily wellness routine.',
    benefits: ['Detoxifies body', 'Boosts immunity', 'Refreshing taste', 'Natural ingredients'],
    videos: [
      "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100095299596542%2Fvideos%2F819790723005522%2F&show_text=false&width=560&t=0",
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F841526701524322%2F&show_text=false&width=267&t=0",
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1170364191008074%2F&show_text=false&width=267&t=0",
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F365649079969916%2F&show_text=false&width=267&t=0",
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1494399981257038%2F&show_text=false&width=267&t=0",
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F567748535965343%2F&show_text=false&width=267&t=0"
    ]
  },
  {
    id: 5,
    name: 'Purvaj Liver Booti',
    tagline: 'Liver detoxification support',
    price: 480,
    mrp: 565,
    image: '/products/porvajliverbooti.jpg',
    gallery: ['/products/porvajliverbooti.jpg', '/products/liverBooti.jpg', '/products/cover3.jpg'],
    tag: '15% off',
    description: 'Premium Liver Booti for enhanced liver detoxification and support. Formulated with powerful Ayurvedic herbs.',
    benefits: ['Enhanced detox', 'Liver support', 'Antioxidant', 'Premium formula'],
    videos: [
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1303408867763896%2F&show_text=false&width=267&t=0",
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F841526701524322%2F&show_text=false&width=267&t=0",
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F832011378847392%2F&show_text=false&width=267&t=0",
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1170364191008074%2F&show_text=false&width=267&t=0",
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F365649079969916%2F&show_text=false&width=267&t=0",
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1494399981257038%2F&show_text=false&width=267&t=0"
    ]
  },
  { id: 6, name: 'Shilajit Resin', tagline: 'Pure Himalayan Shilajit', price: 950, mrp: 1118, image: '/products/shilajit.jpg', gallery: ['/products/shilajit.jpg', '/products/shilajeetdet.jpg', '/products/silajeetthumbnail.jpg'], tag: '15% off', description: 'Authentic Himalayan Shilajit Resin - pure and potent. Known for centuries for its health benefits.', benefits: ['Pure Himalayan', 'Anti-aging', 'Energy booster', 'Mental clarity'], videos: ["https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1170364191008074%2F&show_text=false&width=267&t=0", "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F841526701524322%2F&show_text=false&width=267&t=0", "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1303408867763896%2F&show_text=false&width=267&t=0", "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F832011378847392%2F&show_text=false&width=267&t=0", "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F365649079969916%2F&show_text=false&width=267&t=0", "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1494399981257038%2F&show_text=false&width=267&t=0"] },
  { id: 7, name: 'Slim-Dream', tagline: 'Advanced weight management', price: 650, mrp: 765, image: '/products/silm-dream.jpg', gallery: ['/products/silm-dream.jpg', '/products/slimdream.jpg', '/products/slimdreamDet.jpg'], tag: '15% off', description: 'Advanced Slim-Dream formula for effective weight management with natural Ayurvedic ingredients.', benefits: ['Advanced formula', 'Fat reduction', 'Appetite control', 'Energy support'], videos: ["https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F841526701524322%2F&show_text=false&width=267&t=0", "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1170364191008074%2F&show_text=false&width=267&t=0", "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F365649079969916%2F&show_text=false&width=267&t=0", "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1494399981257038%2F&show_text=false&width=267&t=0", "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F567748535965343%2F&show_text=false&width=267&t=0", "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F920491103271860%2F&show_text=false&width=267&t=0"] },
  { id: 8, name: 'Lemon - Fresh', tagline: 'Natural lemon detox', price: 250, mrp: 295, image: '/products/lemon.jpg', gallery: ['/products/lemon.jpg', '/products/lemonthumbnail1.jpg', '/products/cover3.jpg'], tag: '15% off', description: 'Fresh Lemon detox formula for natural cleansing and freshness. Great for daily detox routine.', benefits: ['Natural cleanse', 'Fresh feeling', 'Vitamin C', 'Daily detox'], videos: ["https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100095299596542%2Fvideos%2F819790723005522%2F&show_text=false&width=560&t=0", "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F841526701524322%2F&show_text=false&width=267&t=0", "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1170364191008074%2F&show_text=false&width=267&t=0", "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F365649079969916%2F&show_text=false&width=267&t=0", "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1494399981257038%2F&show_text=false&width=267&t=0", "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F567748535965343%2F&show_text=false&width=267&t=0"] },
];

export default function ProductDetail() {
  const params = useParams();
  const productId = parseInt(params.id);
  const product = products.find(p => p.id === productId);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product?.image || '');
  const [activeTab, setActiveTab] = useState('DESCRIPTION');
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [gap, setGap] = useState(16);
  const [itemWidth, setItemWidth] = useState(0);
  const [trackOffset, setTrackOffset] = useState(0);
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [added, setAdded] = useState(false);
  const [playingIndex, setPlayingIndex] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
    }
  }, [product]);

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      let count = 1;
      let g = 16;
      if (width >= 1024) { count = 6; g = 20; }
      else if (width >= 768) { count = 4; g = 20; }
      else if (width >= 640) { count = 3; g = 16; }
      else { count = 2; g = 16; }
      setVisibleCount(count);
      setGap(g);
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (containerRef.current && product?.videos) {
      const W = containerRef.current.offsetWidth;
      if (W > 0) {
        const singleItemWidth = (W - (visibleCount - 1) * gap) / visibleCount;
        setItemWidth(singleItemWidth);
        setTrackOffset(activeVideoIndex * (singleItemWidth + gap));
      }
    }
  }, [activeVideoIndex, visibleCount, gap, product?.videos]);

  const maxIndex = product?.videos ? Math.max(0, product.videos.length - visibleCount) : 0;
  
  const videoRefs = useRef([]);

  const handlePlayPause = (idx) => {
    // Pause other videos
    videoRefs.current.forEach((vid, i) => {
      if (i !== idx && vid) {
        vid.pause();
      }
    });

    const video = videoRefs.current[idx];
    if (video) {
      if (video.paused) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            setPlayingIndex(idx);
          }).catch(error => {
            console.warn("Video file missing or play interrupted:", error);
          });
        }
      } else {
        video.pause();
        setPlayingIndex(null);
      }
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const nextVideo = () => {
    if (activeVideoIndex < maxIndex) {
      setActiveVideoIndex((prev) => prev + 1);
    }
  };

  const prevVideo = () => {
    if (activeVideoIndex > 0) {
      setActiveVideoIndex((prev) => prev - 1);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white font-sans">
        <div className="text-center">
          <p className="text-xl font-bold mb-4 text-gray-900">Product Not Found</p>
          <Link href="/products" className="text-primary hover:underline">Return to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== productId).slice(0, 4);

  return (
    <div className="bg-white font-sans pb-20">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <nav className="flex items-center text-[10px] sm:text-xs uppercase tracking-[0.15em] text-gray-400 font-bold">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <FiChevronRight className="mx-2" />
          <Link href="/products" className="hover:text-black transition-colors">Products</Link>
          <FiChevronRight className="mx-2" />
          <span className="text-gray-900">{product.name}</span>
        </nav>
      </div>

      {/* Product Hero Section */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 animate-fade-in">
        {/* Gallery Column */}
        <div className="space-y-6">
          <div className="relative aspect-square bg-[#F8F8F8] rounded-xs overflow-hidden group">
            <Image
              src={activeImage}
              alt={product.name}
              fill
              className="object-contain transition-transform duration-700 group-hover:scale-110"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex gap-4">
            {product.gallery?.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(img)}
                className={`w-20 h-20 relative bg-[#F8F8F8] border transition-all ${activeImage === img ? 'border-primary' : 'border-transparent'}`}
              >
                <Image src={img} alt={`Thumbnail ${i}`} fill className="object-contain p-2" sizes="80px" />
              </button>
            ))}
          </div>
        </div>

        {/* Info Column */}
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 tracking-tight">
              {product.name}
            </h2>
            <p className="text-gray-500 font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-6">
              Pure Ayurvedic Formulation
            </p>

            <p className="text-3xl font-bold text-[#2D5A27] mb-2">
              ₹{product.price}
            </p>
            <p className="text-gray-400 text-[10px] line-through mb-8 font-medium">MRP: ₹{product.mrp}</p>

            <div className="space-y-8 max-w-md">
              {/* Product Key Highlights */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <FiCheck className="w-3 h-3" />, label: "100% Natural" },
                  { icon: <FiCheck className="w-3 h-3" />, label: "Vegan" },
                  { icon: <FiCheck className="w-3 h-3" />, label: "No Side Effects" },
                  { icon: <FiCheck className="w-3 h-3" />, label: "Legacy Brand" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-gray-600 uppercase tracking-wider">
                    <div className="w-5 h-5 rounded-full bg-[#2D5A27]/10 flex items-center justify-center text-[#2D5A27]">
                      {item.icon}
                    </div>
                    {item.label}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6">
                <span className="font-bold text-[10px] uppercase tracking-[0.2em] text-gray-400">Quantity</span>
                <div className="flex items-center bg-gray-50 rounded-full p-1 border border-gray-100">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))} 
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:shadow-sm transition-all text-gray-500"
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-bold text-sm">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)} 
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:shadow-sm transition-all text-gray-500"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <button
                  onClick={handleAddToCart}
                  className={`w-full h-14 text-white text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 active:scale-95 rounded-xl shadow-lg relative overflow-hidden group ${added ? 'bg-green-600' : 'bg-[#1B4332] hover:bg-[#122e22]'}`}
                >
                  <FiShoppingCart className="w-5 h-5" />
                  {added ? 'Added to Cart' : 'Add to Cart'}
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12"></div>
                </button>
                
                <div className="flex gap-3">
                  <button className="flex-1 h-14 border-2 border-[#1B4332] text-[#1B4332] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] transition-all hover:bg-[#1B4332] hover:text-white rounded-xl active:scale-95 font-black">
                    Buy Now
                  </button>
                  <button className="w-14 h-14 border border-gray-200 flex items-center justify-center text-gray-300 hover:text-red-500 transition-all rounded-xl hover:bg-red-50 hover:border-red-100 active:scale-90 bg-white shadow-sm">
                    <FiHeart className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="pt-8 border-t border-gray-100 flex items-center gap-8">
                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-[#2D5A27] transition-all duration-300 group-hover:bg-[#2D5A27] group-hover:text-white group-hover:rotate-12 group-hover:shadow-lg">
                    <FiShield className="w-6 h-6" />
                  </div>
                  <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Govt. Reg</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-[#2D5A27] transition-all duration-300 group-hover:bg-[#2D5A27] group-hover:text-white group-hover:rotate-12 group-hover:shadow-lg">
                    <FiAward className="w-6 h-6" />
                  </div>
                  <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Certified</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-[#2D5A27] transition-all duration-300 group-hover:bg-[#2D5A27] group-hover:text-white group-hover:rotate-12 group-hover:shadow-lg">
                    <FiCheck className="w-6 h-6" />
                  </div>
                  <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Purity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile Buy Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 p-4 z-[45] lg:hidden flex items-center gap-4 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] animate-slide-up">
        <div className="flex-1">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{product.name}</p>
          <p className="font-bold text-[#2D5A27]">₹{product.price}</p>
        </div>
        <button 
          onClick={handleAddToCart}
          className="bg-[#1B4332] text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest"
        >
          {added ? 'Added' : 'Add to Cart'}
        </button>
      </div>

      {/* Tabs Section - Compacted */}
      <section className="max-w-7xl mx-auto px-4 border-t border-gray-100 pt-12 mb-12">
        <div className="flex justify-center space-x-12 mb-12 border-b border-gray-100">
          {['THE EXPERIENCE', 'MORE INFORMATION'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab === 'THE EXPERIENCE' ? 'DESCRIPTION' : tab)}
              className={`pb-4 text-[10px] font-bold tracking-[0.2em] transition-all relative ${(tab === 'THE EXPERIENCE' && activeTab === 'DESCRIPTION') || activeTab === tab ? 'text-black' : 'text-gray-300 hover:text-gray-500'
                }`}
            >
              {tab}
              {((tab === 'THE EXPERIENCE' && activeTab === 'DESCRIPTION') || activeTab === tab) && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black" />
              )}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center">
          {activeTab === 'DESCRIPTION' && (
            <div className="animate-fade-in py-10">
              <span className="text-secondary font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">The Narrative</span>
              <h3 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Ancient Wisdom Refined</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-lg max-w-2xl mx-auto">
                Scroll down to discover the handcrafted journey of {product.name}. A ritual of purity, tradition, and modern efficacy.
              </p>
            </div>
          )}
          {activeTab === 'MORE INFORMATION' && (
            <div className="animate-fade-in text-gray-600 text-sm max-w-2xl mx-auto space-y-8 text-left py-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-black border-b border-gray-100 pb-2 mb-4 uppercase tracking-widest text-[10px]">Usage & Dosage</h4>
                  <p className="leading-relaxed">Take 1-2 capsules twice daily after meals with lukewarm water, or as directed by an Ayurvedic physician.</p>
                </div>
                <div>
                  <h4 className="font-bold text-black border-b border-gray-100 pb-2 mb-4 uppercase tracking-widest text-[10px]">Storage Instructions</h4>
                  <p className="leading-relaxed">Store in a cool, dry place away from direct sunlight. Keep the container tightly closed.</p>
                </div>
                <div>
                  <h4 className="font-bold text-black border-b border-gray-100 pb-2 mb-4 uppercase tracking-widest text-[10px]">Purity Standard</h4>
                  <p className="leading-relaxed">100% Vegetarian capsules. Free from synthetic fillers, preservatives, or artificial colors.</p>
                </div>
                <div>
                  <h4 className="font-bold text-black border-b border-gray-100 pb-2 mb-4 uppercase tracking-widest text-[10px]">Contraindications</h4>
                  <p className="leading-relaxed">Pregnant or nursing mothers, children, and individuals with medical conditions should consult a physician.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Visual Product Narrative Section */}
      {activeTab === 'DESCRIPTION' && (
        <div className="space-y-32 mb-32 overflow-hidden">
          {/* Block 1: The Essence (Image Left, Text Right) */}
          <section className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-[4/5] bg-gray-50 rounded-xs overflow-hidden shadow-xl reveal">
                <Image
                  src={product.gallery[1] || product.image}
                  alt="Essence"
                  fill
                  className="object-cover transition-transform duration-1000 hover:scale-110"
                />
              </div>
              <div className="space-y-6 lg:pl-10">
                <span className="text-primary font-bold text-[10px] uppercase tracking-[0.3em]">The Essence</span>
                <h2 className="text-3xl sm:text-5xl font-bold text-black leading-tight tracking-tighter">
                  Crafted for <br />
                  <span className="text-secondary">True Vibrancy</span>
                </h2>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg">
                  Every ingredient in {product.name} is meticulously sourced from its natural habitat. We believe that true healing begins with the purest vibration of nature, captured at its peak potency.
                </p>
                <div className="flex gap-4 pt-6">
                  <div className="w-px h-16 bg-gray-200" />
                  <div>
                    <p className="font-bold text-black uppercase tracking-widest text-[10px] mb-2">Benefit Focus</p>
                    <p className="text-sm text-gray-500">{product.benefits[0]} - Essential for daily balance.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Block 2: The Ritual (Same to Same with Homepage) */}
          <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16 space-y-4">
                <span className="text-[#C8963E] font-bold text-[10px] uppercase tracking-luxury block mb-2">Visual Wisdom</span>
                <p className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1B4332]">Watch Our Stories</p>
                <div className="w-16 h-0.5 bg-[#C8963E]/30 mx-auto rounded-full mt-4"></div>
                <p className="text-gray-600 mt-6 text-sm sm:text-lg max-w-2xl mx-auto">Experience the ancient wisdom of Ayurveda through our curated lenses.</p>
              </div>

              <div className="relative group/nav px-1">
                <div ref={containerRef} className="overflow-hidden">
                  <div
                    ref={trackRef}
                    className="flex transition-transform duration-500 ease-out"
                    style={{
                      gap: `${gap}px`,
                      transform: `translateX(-${trackOffset}px)`,
                      willChange: 'transform'
                    }}
                  >
                    {product.videos.map((video, idx) => (
                      <div
                        key={idx}
                        className="flex-shrink-0"
                        style={{ width: itemWidth > 0 ? `${itemWidth}px` : `calc((100% - ${(visibleCount - 1) * gap}px) / ${visibleCount})` }}
                      >
                        <div className="w-full">
                          <div
                            className="relative group bg-gray-100 rounded-2xl overflow-hidden shadow-md aspect-[9/16] border-2 border-transparent hover:border-[#C8963E] transition-all duration-300 cursor-pointer"
                            onClick={() => handlePlayPause(idx)}
                          >
                            <video
                              ref={el => videoRefs.current[idx] = el}
                              src={`/videos/video${(idx % 8) + 1}.mp4`}
                              poster={product.gallery[idx % product.gallery.length] || product.image}
                              className="w-full h-full object-cover"
                              playsInline
                              loop
                              onPlay={() => setPlayingIndex(idx)}
                              onPause={() => setPlayingIndex(null)}
                            />
                            
                            {/* Custom Beautiful Play Button Overlay */}
                            <div className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300 ${playingIndex === idx ? 'opacity-0' : 'opacity-100 group-hover:bg-black/40'}`}>
                              <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transform transition-transform group-hover:scale-110">
                                <FiPlay className="w-5 h-5 text-[#1B4332] ml-1" fill="currentColor" />
                              </div>
                            </div>
                          </div>
                          <p className="text-center mt-4 font-semibold text-gray-800 text-sm tracking-tight text-nowrap overflow-hidden text-ellipsis">
                            {idx === 0 ? "Product Showcase" : idx === 1 ? "Ritual Guide" : "Customer Wisdom"}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Slider Controls */}
                {product.videos.length > visibleCount && (
                  <>
                    <button
                      onClick={prevVideo}
                      className={`absolute left-0 top-1/2 -translate-y-1/2 -ml-2 sm:-ml-4 md:-ml-8 w-10 h-10 bg-white border border-gray-100 text-[#C8963E] rounded-full flex items-center justify-center shadow-xl transition-all z-20 ${activeVideoIndex === 0 ? 'opacity-0 pointer-events-none' : 'hover:bg-[#C8963E] hover:text-white'}`}
                      aria-label="Previous Video"
                    >
                      <FiChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextVideo}
                      className={`absolute right-0 top-1/2 -translate-y-1/2 -mr-2 sm:-mr-4 md:-mr-8 w-10 h-10 bg-white border border-gray-100 text-[#C8963E] rounded-full flex items-center justify-center shadow-xl transition-all z-20 ${activeVideoIndex >= maxIndex ? 'opacity-0 pointer-events-none' : 'hover:bg-[#C8963E] hover:text-white'}`}
                      aria-label="Next Video"
                    >
                      <FiChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Synchronized Dots */}
              {maxIndex > 0 && (
                <div className="flex justify-center mt-12 space-x-3">
                  {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveVideoIndex(index)}
                      className={`transition-all duration-300 rounded-full ${index === activeVideoIndex ? 'w-8 h-2.5 bg-[#C8963E]' : 'w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300'}`}
                    />
                  ))}
                </div>
              )}

              <div className="mt-16 text-center text-gray-400 max-w-2xl mx-auto uppercase tracking-[0.2em] text-[10px] font-bold">
                Experience the handcrafted process that defines our legacy of purity.
              </div>
            </div>
          </section>

          {/* Block 3: Handcrafted Purity (Text Left, Image Right) */}
          <section className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 lg:pr-10 order-2 lg:order-1">
                <span className="text-primary font-bold text-[10px] uppercase tracking-[0.3em]">The Purity Check</span>
                <h2 className="text-3xl sm:text-5xl font-bold text-black leading-tight tracking-tighter">
                  Untouched by <br />
                  <span className="text-secondary">Artificiality</span>
                </h2>
                <div className="space-y-8">
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    We reject all forms of chemical processing. From soil to bottle, {product.name} remains a 100% natural elixir, preserving the holistic integrity of the herbs.
                  </p>
                  <div className="grid grid-cols-2 gap-8 pt-6">
                    <div className="space-y-3">
                      <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-secondary">
                        <FiCheck className="w-4 h-4" />
                      </div>
                      <p className="font-bold text-black text-[10px] uppercase tracking-widest">Lab Tested</p>
                    </div>
                    <div className="space-y-3">
                      <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-secondary">
                        <FiCheck className="w-4 h-4" />
                      </div>
                      <p className="font-bold text-black text-[10px] uppercase tracking-widest">Ethically Sourced</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[4/5] bg-gray-50 rounded-xs overflow-hidden shadow-xl reveal order-1 lg:order-2">
                <Image
                  src={product.gallery[2] || product.image}
                  alt="Purity"
                  fill
                  className="object-cover transition-transform duration-1000 hover:scale-110"
                />
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Related Product */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">Related Product</h2>
          <div className="w-20 h-1 bg-black mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedProducts.map((p) => (
            <Link key={p.id} href={`/products/${p.id}`} className="group flex flex-col bg-white border border-gray-100 rounded-[2rem] p-4 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative aspect-square bg-[#F8F8F8] mb-6 overflow-hidden rounded-2xl">
                <Image src={p.image} alt={p.name} fill className="object-contain p-6 group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
              </div>
              <div className="text-center px-2 flex flex-col flex-grow">
                <p className="text-sm font-bold text-gray-900 group-hover:text-[#2D5A27] transition-colors mb-1 line-clamp-1">{p.name}</p>
                <div className="flex justify-center mb-2 text-[#C8963E]">
                  {[...Array(5)].map((_, i) => <FiStar key={i} className="w-3 h-3 fill-current" />)}
                </div>
                <p className="text-sm text-gray-500 font-bold mb-4">₹{p.price}</p>

                {/* Always Visible Add to Cart Button */}
                <div className="mt-auto w-full pt-2">
                  <div className="w-full bg-[#1B4332] hover:bg-[#122e22] text-white py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-sm relative overflow-hidden">
                    <FiShoppingCart className="w-4 h-4" /> Add to Cart
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
