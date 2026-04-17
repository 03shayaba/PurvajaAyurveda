'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiShoppingCart, FiArrowRight } from 'react-icons/fi';
import { useCart } from '@/context/CartContext';

const products = [
  { id: 1, name: 'Slim Dream - Weight Management', tagline: 'Natural weight loss & fat burn', price: 595, mrp: 699, image: '/products/slimdream.jpg', tag: '15% off', category: 'Weight Loss' },
  { id: 2, name: 'Liver Booti - Liver Support', tagline: 'Detoxification & liver health', price: 450, mrp: 530, image: '/products/liverBooti.jpg', tag: '15% off', category: 'Liver Care' },
  { id: 3, name: 'Shilajit - Energy & Vitality', tagline: 'Natural energy & stamina booster', price: 850, mrp: 1000, image: '/products/silajeetthumbnail.jpg', tag: '15% off', category: 'Energy' },
  { id: 4, name: 'Lemon Tea - Detox Blend', tagline: 'Natural detox & immunity', price: 299, mrp: 350, image: '/products/lemonthumbnail1.jpg', tag: '15% off', category: 'Detox' },
  { id: 5, name: 'Purvaj Liver Booti', tagline: 'Liver detoxification support', price: 480, mrp: 565, image: '/products/porvajliverbooti.jpg', tag: '15% off', category: 'Liver Care' },
  { id: 6, name: 'Shilajit Resin', tagline: 'Pure Himalayan Shilajit', price: 950, mrp: 1118, image: '/products/shilajit.jpg', tag: '15% off', category: 'Energy' },
  { id: 7, name: 'Slim-Dream', tagline: 'Advanced weight management', price: 650, mrp: 765, image: '/products/silm-dream.jpg', tag: '15% off', category: 'Weight Loss' },
  { id: 8, name: 'Lemon - Fresh', tagline: 'Natural lemon detox', price: 250, mrp: 295, image: '/products/lemon.jpg', tag: '15% off', category: 'Detox' },
];

const categories = ['All', 'Energy', 'Detox', 'Weight Loss', 'Liver Care'];

export default function ShopByCategory() {
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
        <h2 className="font-sans text-2xl md:text-3xl font-bold text-center mb-2">Shop by Category</h2>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat 
                  ? 'bg-primary-dark text-white' 
                  : 'bg-white text-gray-600 hover:bg-primary/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-44 md:h-48 w-full">
                <Image src={product.image} alt={product.name} fill className="object-cover" />
                <span className="absolute top-2 left-2 bg-[#C8963E] text-white text-xs px-2 py-1 rounded font-medium">
                  {product.tag}
                </span>
              </div>
              <div className="p-3">
                <h3 className="font-medium text-gray-800 text-sm mb-1 line-clamp-1">{product.name}</h3>
                <p className="text-xs text-gray-500 mb-2 line-clamp-1">{product.tagline}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-[#2D5A27]">₹{product.price}</span>
                    <span className="text-gray-400 line-through text-xs">₹{product.mrp}</span>
                  </div>
                </div>
                <button onClick={(e) => handleAddToCart(e, product)} className="w-full bg-[#2D5A27] hover:bg-[#1E3D1A] text-white py-2 rounded-full mt-3 text-sm font-medium flex items-center justify-center transition-colors">
                  <FiShoppingCart className="w-4 h-4 mr-1" /> {addedId === product.id ? 'Added!' : 'Add to Cart'}
                </button>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link href="/products" className="inline-flex items-center text-primary hover:text-primary-dark font-medium">
            View All Products <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
