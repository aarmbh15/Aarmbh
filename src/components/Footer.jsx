import React from "react";
import { SocialIcon } from "react-social-icons";
import AarambhLogo from '../assets/AarambhLogo.png';
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { motion, useReducedMotion } from "framer-motion";

function Footer() {
  const navigate = useNavigate();

  const socialIconProps = {
    className: "hover:grayscale-0 transition-all duration-300 grayscale opacity-40 hover:opacity-100",
    style: { height: 32, width: 32 },
    target: "_blank",
    rel: "noopener noreferrer",
    bgColor: "transparent",
    fgColor: "currentColor"
  };

  const AnimatedDivider = () => {
    const prefersReducedMotion = useReducedMotion();
    if (prefersReducedMotion) return <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />;
    return (
      <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 1.2, ease: 'easeOut' }}
        className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent origin-left" />
    );
  };

  return (
    <footer className="bg-[#050505] pt-20">
      
      {/* ═══════════════════════════════════════ REFINED CTA ═══════════════════════════════════════ */}
      <section className="py-12 md:py-18 bg-[#050505]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group p-8 md:p-20 rounded-[2rem] md:rounded-[3rem] border border-white/5 bg-[#080808] overflow-hidden text-center"
          >
            {/* 1. Aura Glow (Visible on both) */}
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            {/* 2. Content */}
            <div className="relative z-10">
              <span className="text-[10px] md:text-[12px] uppercase tracking-[0.4em] md:tracking-[0.6em] text-amber-500 font-bold mb-4 md:mb-6 block">
                Next Step
              </span>
              
              <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight md:tracking-tighter mb-6 md:mb-8 leading-tight">
                Ready to bring your <br className="hidden md:block" /> 
                <span className="italic font-serif text-amber-200/90">vision to reality</span>?
              </h2>
              
              <div className="flex flex-col items-center gap-4 mb-10 md:mb-12">
                {/* Mobile: Reduce font size slightly so it doesn't wrap awkwardly */}
                <p className="text-slate-400 text-sm md:text-lg font-light tracking-wide max-w-[280px] md:max-w-none">
                  Custom Architecture • User-Centric Design • Built for Performance
                </p>
                
                <div className="h-px w-8 md:w-12 bg-white/10" />
                
                {/* Mobile: Stack the contact info if needed, or keep it tiny and clean */}
                <div className="text-slate-500 text-[12px] font-mono tracking-widest uppercase flex flex-col md:flex-row gap-2 md:gap-4">
                  <span>Pune, IN</span>
                  <span className="hidden md:inline">•</span>
                  <a href="mailto:contact@aarmbhinfotech.com" className="hover:text-amber-500 transition-colors">contact@aarmbhinfotech.com</a>
                  <span className="hidden md:inline">•</span>
                  <a href="tel:9881033442" className="hover:text-amber-500 transition-colors">+91 98810 33442</a>
                </div>
              </div>
      
              {/* 3. Refined Button Duo: High-Interaction Design */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        
        {/* PRIMARY: The "Liquid Fill" Button */}
        <motion.button
          onClick={() => navigate("/contact")}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="group relative w-full md:w-auto px-10 py-4 md:py-5 rounded-full border border-amber-500/50 overflow-hidden bg-transparent transition-all duration-500"
        >
          {/* The Amber Fill Layer: Floods from the bottom */}
          <div className="absolute inset-0 bg-amber-500 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          
          <span className="relative z-10 flex items-center justify-center gap-2 font-bold text-xs md:text-sm tracking-[0.2em] uppercase text-amber-500 group-hover:text-black transition-colors duration-500">
            Start Your Project
            <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </motion.button>
      
        {/* SECONDARY: The "Glass-Ghost" Button */}
        <motion.button 
          onClick={() => navigate("/contact")}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="group relative w-full md:w-auto px-10 py-4 md:py-5 rounded-full border border-white/10 overflow-hidden bg-white/[0.02] transition-all duration-500 hover:border-white/30"
        >
          {/* Subtle Internal Glow that follows the hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* The "Contact Us" Text */}
          <span className="relative z-10 flex items-center justify-center gap-2 font-medium text-xs md:text-sm tracking-[0.2em] uppercase text-slate-300 group-hover:text-white transition-colors duration-500">
            Contact Us
            <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-amber-500 group-hover:shadow-[0_0_8px_#fbbf24] transition-all duration-500" />
          </span>
      
          {/* Bottom Shine Accent */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:w-2/3 transition-all duration-700" />
        </motion.button>
      </div>
            </div>
      
            {/* 4. Corner Accent */}
            <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-amber-500/5 blur-[60px] md:blur-[80px] rounded-full" />
          </motion.div>
        </div>
      </section>

      <AnimatedDivider />

      {/* ─── MAIN FOOTER GRID (COMMAND CENTER UPGRADE) ─── */}
<div className="max-w-7xl mx-auto px-6 py-24">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 border-t border-white/5 pt-16">
    
    {/* 1. BRAND BLOCK (The Anchor) */}
    <div className="lg:col-span-6 space-y-10 lg:pr-24">
      <div className="space-y-6">
        <img 
          src={AarambhLogo} 
          alt="Logo" 
          className="h-18 w-auto  hover:opacity-100 transition-all duration-700 hover:scale-[1.02]" 
          onClick={() => navigate('/')}
        />
        <h2 className="text-2xl md:text-3xl font-light text-white tracking-tighter leading-tight max-w-sm">
          Architecting <span className="italic font-serif text-amber-200/80">resilient systems</span> for a global digital economy.
        </h2>
      </div>

      {/* Dynamic Social Strip */}
      <div className="flex items-center gap-6">
        <span className="font-mono text-[10px] text-white uppercase tracking-[0.4em]">Connect //</span>
        <div className="flex gap-4">
          {['https://linkedin.com/company/aarmbh', 'https://github.com/aarmbh15', 'https://instagram.com/aarmbh15'].map((url, i) => (
            <div key={i} className="text-white hover:text-amber-500 transition-colors duration-500">
              <SocialIcon url={url} {...socialIconProps} />
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* 2. DATA STRIPS (Navigation & Info) */}
    <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-0">
      
      {/* Navigation Strip */}
      <div className="lg:border-l lg:border-white/5 lg:pl-12 space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-1 h-1 bg-amber-500" />
          <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] text-amber-500/60">Sitemap</h3>
        </div>
        
        <ul className="grid grid-cols-1 gap-y-4">
          {['Services', 'Projects', 'Team', 'Contact'].map((item) => (
            <li key={item} className="overflow-hidden">
              <button 
                onClick={() => navigate(`/${item.toLowerCase()}`)}
                className="group flex items-center justify-between w-full text-slate-400 hover:text-white transition-all py-1"
              >
                <span className="text-sm font-light tracking-wide">{item}</span>
                <span className="text-[10px] font-mono text-white group-hover:text-amber-500/40 transition-colors">
                  0{['Services', 'Projects', 'Team', 'Contact'].indexOf(item) + 1}
                </span>
              </button>
              <div className="h-px w-full bg-white/5 group-hover:bg-white/10" />
            </li>
          ))}
        </ul>
      </div>

      {/* Global Coordinates Strip */}
      <div className="lg:border-l lg:border-white/5 lg:pl-12 space-y-12">
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-1 h-1 bg-amber-500" />
            <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] text-amber-500/60">Coordinates</h3>
          </div>
          
          <div className="space-y-8">
            <div className="group cursor-default">
              <p className="text-[9px] font-mono text-slate-600 uppercase tracking-widest mb-1">Base_Ops</p>
              <p className="text-slate-300 text-sm font-light leading-relaxed">
                Pune, Maharashtra <br />
              </p>
            </div>

            <div className="group cursor-default">
              <p className="text-[9px] font-mono text-slate-600 uppercase tracking-widest mb-1">Direct_Sync</p>
              <a href="mailto:contact@aarmbhinfotech.com" className="text-slate-300 text-sm font-light hover:text-amber-400 transition-colors block break-all">
                contact@aarmbhinfotech.com
              </a>
            </div>
            <div className="group cursor-default">
              <p className="text-[9px] font-mono text-slate-600 uppercase tracking-widest mb-1">Direct_Sync</p>
              <a href="tel:+919881033442" className="text-slate-300 text-sm font-light hover:text-amber-400 transition-colors block break-all">
                +91 98810 33442
              </a>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
  

  {/* ─── SYSTEM STATUS FOOTER (THE TERMINAL STRIP) ─── */}
  <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
  
    <div className="flex items-center gap-8">
      <div className="flex items-center gap-3 group">
        
        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
        <span className="font-mono text-[9px] text-white uppercase tracking-[0.4em]">System_Status: Operational</span>
      </div>
      <div className="hidden md:block h-3 w-px bg-white/10" />
      {/* <span className="font-mono text-[9px] text-slate-800 uppercase tracking-[0.4em]">Latency: 14ms</span> */}
    </div>

    <div className="flex items-center gap-6">
       <span className="font-mono text-[9px] text-white uppercase tracking-[0.2em]">
        &copy; {new Date().getFullYear()} // Aarmbh_V3.0
      </span>
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center text-slate-600 hover:text-amber-500 hover:border-amber-500/30 transition-all group"
      >
        <span className="text-xs group-hover:-translate-y-1 transition-transform">↑</span>
      </button>
    </div>
  </div>
</div>
    </footer>
  );
}

export default Footer;