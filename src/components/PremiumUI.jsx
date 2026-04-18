'use client';
import { useState, useEffect } from 'react';
import { FiMessageCircle } from 'react-icons/fi';

export default function PremiumUI() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update Scroll Progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Show/Hide WhatsApp button and potential Navbar effects
      if (window.scrollY > 300) {
        setShowWhatsApp(true);
      } else {
        setShowWhatsApp(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Gold Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[4px] z-[9999] pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-[#C8963E] via-[#FFD700] to-[#C8963E] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%`, boxShadow: '0 0 10px rgba(200, 150, 62, 0.4)' }}
        />
      </div>

      {/* Floating WhatsApp Concierge */}
      <a
        href="https://wa.me/917027030661?text=Hello! I would like some expert guidance on Purvaj Ayurveda remedies."
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-[#25D366] text-white p-3 pr-5 rounded-full shadow-2xl transition-all duration-500 hover:scale-105 active:scale-95 group ${
          showWhatsApp ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20 group-hover:hidden"></div>
          <FiMessageCircle className="w-6 h-6 relative z-10" />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-wider leading-none mb-0.5">Concierge</span>
          <span className="text-xs font-medium whitespace-nowrap">Expert Guidance</span>
        </div>
      </a>
    </>
  );
}
