'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';
import { useCart } from '@/context/CartContext';

const products = [
  { id: 1, name: 'Slim Dream - Weight Management', tagline: 'Natural weight loss & fat burn', price: 595, mrp: 699, image: '/products/slimdream.jpg', hoverImage: '/products/slimdreamDet.jpg', tag: '15% off', category: 'Weight Loss' },
  { id: 2, name: 'Liver Booti - Liver Support', tagline: 'Detoxification & liver health', price: 450, mrp: 530, image: '/products/porvajliverbooti.jpg', hoverImage: '/products/liverBooti.jpg', tag: '15% off', category: 'Liver Care' },
  { id: 3, name: 'Shilajit - Energy & Vitality', tagline: 'Natural energy & stamina booster', price: 850, mrp: 1000, image: '/products/silajeetthumbnail.jpg', hoverImage: '/products/shilajeetdet.jpg', tag: '15% off', category: 'Energy' },
  { id: 4, name: 'Lemon Tea - Detox Blend', tagline: 'Natural detox & immunity', price: 299, mrp: 350, image: '/products/lemon.jpg', hoverImage: '/products/lemonthumbnail1.jpg', tag: '15% off', category: 'Detox' },
  { id: 5, name: 'Purvaj Liver Booti', tagline: 'Liver detoxification support', price: 480, mrp: 565, image: '/products/porvajliverbooti.jpg', hoverImage: '/products/liverBooti.jpg', tag: '15% off', category: 'Liver Care' },
  { id: 6, name: 'Shilajit Resin', tagline: 'Pure Himalayan Shilajit', price: 950, mrp: 1118, image: '/products/shilajit.jpg', hoverImage: '/products/shilajeetdet.jpg', tag: '15% off', category: 'Energy' },
  { id: 7, name: 'Slim-Dream', tagline: 'Advanced weight management', price: 650, mrp: 765, image: '/products/silm-dream.jpg', hoverImage: '/products/slimdream.jpg', tag: '15% off', category: 'Weight Loss' },
  { id: 8, name: 'Lemon - Fresh', tagline: 'Natural lemon detox', price: 250, mrp: 295, image: '/products/lemon.jpg', hoverImage: '/products/lemonthumbnail1.jpg', tag: '15% off', category: 'Detox' },
];

const categories = ['All', 'Energy', 'Detox', 'Weight Loss', 'Liver Care'];

export default function ProductList() {
  const [addedId, setAddedId] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const { addToCart } = useCart();

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section className="py-12 bg-[#FFFAF5]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-semibold tracking-light font-sans text-2xl md:text-3xl  text-[#1B4332] text-center mb-2">All Products</h2>

        <p className="text-center text-gray-600 mb-6">Shop by Category</p>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat
                  ? 'bg-primary-dark text-white'
                  : 'bg-white text-gray-600 hover:bg-primary/10'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group bg-white rounded-[2rem] p-4 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col border border-gray-50/50"
            >
              {/* Image Section with Hover Effect */}
              <div className="relative aspect-square rounded-[1.5rem] overflow-hidden mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-opacity duration-700 group-hover:opacity-0"
                />
                <Image
                  src={product.hoverImage || product.image}
                  alt={`${product.name} detail`}
                  fill
                  className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-110 group-hover:scale-100"
                />
                <div className="absolute top-4 left-4 bg-[#F5B916] text-black text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-sm">
                  {product.tag}
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-grow px-2">
                <p className=" text-md font-semibold  tracking-light font-sans text-gray-900 mb-1 leading-tight group-hover:text-[#2D5A27] transition-colors line-clamp-2 min-h-[3rem] flex items-center">
                  {product.name}
                </p>
                <p className="text-gray-400 text-[10px] mb-4 font-medium uppercase tracking-wider">
                  {product.tagline}
                </p>

                <div className="flex items-center gap-2 mb-4">
                  <span className="font-bold text-[#2D5A27]">₹{product.price}</span>
                  <span className="text-gray-300 line-through text-xs font-medium">₹{product.mrp}</span>
                </div>
              </div>

              {/* Action Section */}
              <button
                onClick={(e) => handleAddToCart(e, product)}
                className="w-full bg-[#1B4332] hover:bg-[#122e22] text-white py-3.5 rounded-2xl text-[10px] sm:text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm relative overflow-hidden group/btn"
              >
                {addedId === product.id ? (
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
