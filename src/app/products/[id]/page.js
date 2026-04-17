'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FiShoppingCart, FiHeart, FiArrowLeft, FiCheck } from 'react-icons/fi';
import { useCart } from '@/context/CartContext';

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

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link href="/products" className="text-primary hover:underline">Back to Products</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== productId).slice(0, 4);

  return (
    <div>
      {/* Header - Minimized */}
      <section className="bg-gradient-to-r from-[#0f1f06] via-[#1a3009] to-[#0f1f06] py-3 shadow-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/products" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#C8963E] hover:text-white transition-colors">
            <FiArrowLeft className="mr-2" /> Back to Collections
          </Link>
        </div>
      </section>

      {/* Product Detail - Reduced top padding */}
      <section className="pt-6 pb-12 bg-[#FFFAF5]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Image */}
            <div className="relative h-[400px] md:h-[500px] bg-white rounded-2xl overflow-hidden shadow-lg">
              <Image src={product.image} alt={product.name} fill className="object-cover" />
              <span className="absolute top-4 left-4 bg-[#C8963E] text-white px-3 py-1 rounded-full font-medium">
                {product.tag}
              </span>
            </div>

            {/* Info */}
            <div>
              <p className="font-semibold tracking-light font-noto  text-[#1B4332] text-3xl md:text-4xl font-bold  mb-2">{product.name}</p>
              <p className="text-gray-600 text-lg mb-4">{product.tagline}</p>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-[#2D5A27]">₹{product.price}</span>
                <span className="text-xl text-gray-400 line-through">₹{product.mrp}</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">{product.tag}</span>
              </div>

              <p className="text-gray-600 font-noto font-semibold mb-6">{product.description}</p>

              <div className="mb-6">
                <p className="font-semibold tracking-light font-noto  text-[#1B4332] text-xl md:text-2xl   mb-2">Key Benefits:</p>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <FiCheck className="text-green-500 mr-2" /> {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border rounded-full">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 text-gray-600 hover:text-gray-800">-</button>
                  <span className="px-4 font-medium">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 text-gray-600 hover:text-gray-800">+</button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 bg-[#2D5A27] hover:bg-[#1E3D1A] text-white px-8 py-3 rounded-full font-medium flex items-center justify-center transition-colors ${added ? 'bg-green-500' : ''}`}
                >
                  <FiShoppingCart className="mr-2" /> {added ? 'Added!' : 'Add to Cart'}
                </button>
                <button className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-[#C8963E] hover:text-[#C8963E] transition-colors">
                  <FiHeart />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-2xl md:text-3xl font-semibold tracking-light font-noto  text-[#1B4332]  text-center mb-8">Related Products</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((relProduct) => (
              <Link href={`/products/${relProduct.id}`} key={relProduct.id} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                  <div className="relative h-40 md:h-48">
                    <Image src={relProduct.image} alt={relProduct.name} fill className="object-cover" />
                    <span className="absolute top-2 left-2 bg-[#C8963E] text-white text-xs px-2 py-1 rounded font-medium">
                      {relProduct.tag}
                    </span>
                  </div>
                  <div className="p-3">
                    <p className="font-semibold tracking-light font-noto  text-[#1B4332] text-sm mb-1 line-clamp-1">{relProduct.name}</p>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-[#2D5A27]">₹{relProduct.price}</span>
                      <span className="text-gray-400 line-through text-xs">₹{relProduct.mrp}</span>
                    </div>
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
