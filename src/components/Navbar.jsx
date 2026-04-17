'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiShoppingCart, FiPhone } from 'react-icons/fi';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import CartSidebar from './CartSidebar';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/50">
        {/* <div className="bg-[#2D5A27] text-white text-center py-2.5 text-sm font-medium tracking-wide">
          Summer Sale: Buy 1 @ 15% Off, Buy 2 @ 25% Off &nbsp;|&nbsp; FREE PROTEIN SAMPLE on orders above ₹1200
        </div> */}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="w-12 h-12 relative mr-3">
                  <Image src="/logo.jpeg" alt="Purvaj Ayurveda" fill className="object-contain" />
                </div>
                <span className="font-sans text-xl sm:text-2xl font-bold tracking-tight">
                  <span className="text-[#2D5A27]">Purvaj</span>
                  <span className="text-[#C8963E]">Ayurveda</span>
                </span>
              </Link>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              {['Home', 'Products', 'About', 'Contact'].map((item) => (
                <Link 
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                  className="text-gray-600 hover:text-[#2D5A27] font-medium transition-colors text-sm"
                >
                  {item}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-5">
              <div className="hidden md:flex items-center text-gray-700">
                <FiPhone className="w-4 h-4 mr-2" />
                <span className="font-medium text-sm">090539 15050</span>
              </div>
              <button 
                className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => setIsCartOpen(true)}
              >
                <FiShoppingCart className="w-5 h-5 text-gray-700" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-[#C8963E] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                    {cartCount}
                  </span>
                )}
              </button>
              <button 
                className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <FiX className="w-6 h-6 text-gray-700" /> : <FiMenu className="w-6 h-6 text-gray-700" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <nav className="px-4 py-4 space-y-2">
              {['Home', 'Products', 'About', 'Contact'].map((item) => (
                <Link 
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gray-50"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
