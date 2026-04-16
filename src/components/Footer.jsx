"use client";
import { FiMail, FiPhone, FiMapPin, FiMessageCircle } from 'react-icons/fi';
import { FaTwitter, FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#081404] text-white relative overflow-hidden">
      {/* Subtle Background Detail */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="footer-column">
            <h3 className="font-serif text-3xl font-bold mb-6 text-white tracking-tight">
              Purvaj<span className="text-[#C8963E]">Ayurveda</span>
            </h3>
            <p className="text-white/40 mb-8 leading-relaxed max-w-xs italic font-light text-sm">
              Crafting sacred herbal remedies since 1917. We bridge the gap between ancient alchemy and modern purity for your holistic wellness.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FaTwitter />, href: "https://twitter.com/Purvajaayurveda" },
                { icon: <FaYoutube />, href: "https://www.youtube.com/@purvajaayurveda/featured" },
                { icon: <FaInstagram />, href: "https://instagram.com/purvajaayurveda" },
                { icon: <FaPinterest />, href: "https://in.pinterest.com/purvajaayurveda/" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:bg-[#C8963E] hover:text-white hover:border-[#C8963E] transition-all duration-300 shadow-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-column lg:pl-10">
            <h4 className="font-serif text-xl font-bold mb-8 text-[#C8963E]">Sanctuary</h4>
            <ul className="space-y-4">
              {['Shop All Products', 'About Our Legacy', 'The Ayurveda Story', 'Gold Standards', 'Wellness Blog'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/40 hover:text-[#C8963E] transition-colors duration-300 text-sm font-medium tracking-wide">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column lg:pl-5">
            <h4 className="font-serif text-xl font-bold mb-8 text-[#C8963E]">Care</h4>
            <ul className="space-y-4">
              {['Order & Shipping', 'Refund Policy', 'Track Your Ritual', 'Contact Us', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/40 hover:text-[#C8963E] transition-colors duration-300 text-sm font-medium tracking-wide">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="font-serif text-xl font-bold mb-8 text-[#C8963E]">Get in Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start group">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center mr-4 group-hover:bg-[#C8963E]/20 transition-all duration-500">
                  <FiMessageCircle className="w-5 h-5 text-[#C8963E]" />
                </div>
                <span className="text-white/40 text-sm mt-1.5 font-medium">+91 70270 30661</span>
              </li>
              <li className="flex items-start group">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center mr-4 group-hover:bg-[#C8963E]/20 transition-all duration-500">
                  <FiMail className="w-5 h-5 text-[#C8963E]" />
                </div>
                <span className="text-white/40 text-sm mt-2 font-medium break-all">info@purvajaayurveda.com</span>
              </li>
              <li className="flex items-start group">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center mr-4 group-hover:bg-[#C8963E]/20 transition-all duration-500">
                  <FiMapPin className="w-5 h-5 text-[#C8963E]" />
                </div>
                <span className="text-white/40 text-sm mt-1.5 font-medium leading-relaxed">Sonipat, Haryana,<br/>India, 131001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-20 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <p className="text-white/20 text-[10px] font-bold tracking-[0.2em] uppercase">
              © 2026 Purvaj Ayurveda. Ancient wisdom. Modern Purity.
            </p>
            <div className="flex space-x-10">
              <a href="/terms" className="text-white/20 hover:text-white text-[10px] transition-colors tracking-[0.2em] uppercase font-bold">Terms</a>
              <a href="/privacy" className="text-white/20 hover:text-white text-[10px] transition-colors tracking-[0.2em] uppercase font-bold">Privacy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

