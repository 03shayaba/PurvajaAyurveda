'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { FiPhone, FiMail, FiMapPin, FiSend, FiMessageCircle } from 'react-icons/fi';

export default function Contact() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.from(".hero-bg", {
        scale: 1.1,
        duration: 2,
        ease: "power2.out",
      });
    }, heroRef.current);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will get back to you soon.');
  };

  return (
    <div className="bg-[#FFFAF5]">
      {/* Premium Hero Section - Synchronized with Home/Products/About */}
      <section ref={heroRef} className="relative h-[80vh] min-h-[550px] flex items-center justify-center overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/products/image.png"
            alt="Contact Deep Roots"
            fill
            className="hero-bg object-cover"
            priority
          />
          {/* Brand Dual Gradient System */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1f06]/96 via-[#1a3009]/88 to-[#1a3009]/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0f1f06]/90" />
        </div>

        {/* Content Layer */}
        <div className="hero-content relative z-10 text-center text-white px-4 max-w-4xl pt-16 flex flex-col items-center">
          <nav className="flex items-center justify-center space-x-2 text-[10px] font-medium uppercase tracking-[0.3em] text-[#C8963E] mb-8 hero-nav">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/20">/</span>
            <span className="text-white">Contact Us</span>
          </nav>

          <p className="font-semibold tracking-light font-noto  text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
            Connect <span className="text-[#C8963E]">With Us</span>
          </p>

          <div className="w-32 h-1 bg-[#C8963E] mx-auto mb-10 rounded-full" />

          <p className="text-lg md:text-xl lg:text-xl text-white/90 font-nato max-w-3xl mx-auto leading-relaxed ">
            "Your journey to timeless wellness begins with a single conversation. Our expert team is here to guide you back to nature."
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="font-bold tracking-light font-noto text-3xl mb-6">Get in Touch</p>
              <p className="text-gray-600 mb-8">Have questions about our products? Need consultation? Reach out to us and our team will assist you.</p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <FiMessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-xl tracking-light font-noto">WhatsApp</p>
                    <p className="text-gray-600">+91 70270 30661</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <FiPhone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-xl tracking-light font-noto">Mobile</p>
                    <p className="text-gray-600">090539 15050</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <FiMail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-xl tracking-light font-noto">Email</p>
                    <p className="text-gray-600">info@purvajaayurveda.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <FiMapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-xl tracking-light font-noto">Address</p>
                    <p className="text-gray-600">Sonipat, Sonipat, India, 131001</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="font-semibold text-xl tracking-light font-noto mb-4">Our Location</p>
                <div className="h-64 w-full rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448983.8505092273!2d76.8!3d29.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dac74bc91f3d5%3A0x46c5d1e2c7b2e020!2sSonipat%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="font-bold tracking-light font-noto text-3xl mb-6">Send us a Message</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input type="tel" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea required rows={4} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary" />
                </div>
                <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors flex items-center justify-center">
                  <FiSend className="mr-2" /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
