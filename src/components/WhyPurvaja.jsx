'use client';
import { FiWind, FiShield, FiHeart, FiClock, FiStar, FiAward, FiUsers } from 'react-icons/fi';

const reasons = [
  { icon: <FiWind className="w-8 h-8" />, title: "100% Natural", desc: "Pure herbal ingredients, no chemicals" },
  { icon: <FiShield className="w-8 h-8" />, title: "Scientifically Proven", desc: "Research-backed formulations" },
  { icon: <FiClock className="w-8 h-8" />, title: "Since 1917", desc: "Legacy of Ayurvedic expertise" },
  { icon: <FiHeart className="w-8 h-8" />, title: "Quality Certified", desc: "GMP certified manufacturing" },
];

export default function WhyPurvaja() {
  return (
    <section className="py-24 bg-[#0A1A05] relative overflow-hidden">
      {/* Premium Background Atmosphere */}
      <div className="bg-orb absolute top-20 left-10 w-64 h-64 bg-[#C8963E]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="bg-orb absolute bottom-20 right-10 w-80 h-80 bg-[#2D5A27]/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="why-header text-center mb-16">
          <span className="text-[#C8963E] font-extrabold uppercase tracking-[0.3em] text-xs mb-3 block">Boutique Ayurveda</span>
          <h2 className="text-4xl md:text-5xl  font-bold tracking-light font-noto  text-white mb-4 ">
            Why Choose <span className="text-[#C8963E] ">Purvaj Ayurveda</span>?
          </h2>
          <div className="w-16 h-1 bg-[#C8963E] mx-auto mb-6 rounded-full"></div>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">Experience a rare synergy of ancient Vedic chemistry and modern clinical precision.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="why-card h-full">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full text-center transition-all duration-500 hover:bg-white/10 hover:border-white/20 group shadow-2xl">
                <div className="text-[#C8963E] mb-6 inline-flex p-4 bg-white/5 rounded-2xl group-hover:scale-110 group-hover:bg-[#C8963E] group-hover:text-white transition-all duration-500 shadow-inner">
                  {reason.icon}
                </div>
                <p className=" font-medium tracking-light font-noto  text-white text-xl mb-4 group-hover:text-[#C8963E] transition-colors">{reason.title}</p>
                <p className="text-white/50 text-sm leading-relaxed">{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Stats Bar */}
        <div className="stats-bar mt-20 flex flex-wrap justify-center gap-6 md:gap-12">
          <div className="flex items-center bg-white/5 border border-white/10 rounded-3xl px-8 py-5 group hover:border-[#C8963E]/40 transition-all shadow-xl">
            <div className="text-[#C8963E] w-10 h-10 mr-4 flex items-center justify-center p-2 bg-white/5 rounded-xl group-hover:rotate-12 transition-all">
              <FiUsers className="w-full h-full" />
            </div>
            <div>
              <div className="text-[#C8963E] font-black text-2xl tracking-tight">10K+</div>
              <div className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Happy Tribe</div>
            </div>
          </div>

          <div className="flex items-center bg-white/5 border border-white/10 rounded-3xl px-8 py-5 group hover:border-[#C8963E]/40 transition-all shadow-xl">
            <div className="text-[#C8963E] w-10 h-10 mr-4 flex items-center justify-center p-2 bg-white/5 rounded-xl group-hover:rotate-12 transition-all">
              <FiAward className="w-full h-full" />
            </div>
            <div>
              <div className="text-[#C8963E] font-black text-2xl tracking-tight">50+</div>
              <div className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Master Recipes</div>
            </div>
          </div>

          <div className="flex items-center bg-white/5 border border-white/10 rounded-3xl px-8 py-5 group hover:border-[#C8963E]/40 transition-all shadow-xl">
            <div className="text-[#C8963E] w-10 h-10 mr-4 flex items-center justify-center p-2 bg-white/5 rounded-xl group-hover:rotate-12 transition-all">
              <FiStar className="w-full h-full" />
            </div>
            <div>
              <div className="text-[#C8963E] font-black text-2xl tracking-tight">4.8</div>
              <div className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Global Stars</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}