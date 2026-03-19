import React, { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReducedMotion, motion,useScroll,useTransform } from 'framer-motion';
import {
  FiGlobe, FiTrendingUp, FiUsers, FiLayers, FiShield, FiTarget,
  FiBriefcase, FiAward, FiHeart, FiCode, FiDollarSign, FiBarChart2, FiCheckCircle,FiShoppingCart,FiCpu,
  FiTruck,FiMapPin,FiBookOpen,FiSettings,FiPlay,FiSunrise,FiZap,FiClock
} from 'react-icons/fi';

// ─── Inline SVG icons ───────────────────────────────────────────────
function FiCloud({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
    </svg>
  );
}
function FiBook({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
    </svg>
  );
}
function FiHome({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  );
}

// ─── Constants ───────────────────────────────────────────────────────
const HERO_IMAGE = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2940&auto=format&fit=crop';
const STORY_IMAGE = 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80';

// const D_DATA = [
//   { label: 'Projects Delivered', value: '20+', icon: <FiLayers className="w-8 h-8" /> },
//   { label: 'Average ROI Improvement', value: '45%', icon: <FiTrendingUp className="w-8 h-8" /> },
//   { label: 'Combined Expertise', value: '4 Domains', icon: <FiCode className="w-8 h-8" /> },
// ];

const D_DATA = [
  // { 
  //   label: 'Precision Architecture', 
  //   value: '100%', 
  //   icon: <FiCpu className="w-8 h-8" /> 
  // },
  // { 
  //   label: 'Avg. Launch Velocity', 
  //   value: '4-6 wks', 
  //   icon: <FiZap className="w-8 h-8" /> 
  // },
  { 
    label: 'Systems Delivered', 
    value: '20+', 
    icon: <FiLayers className="w-8 h-8" /> 
  },
  { 
    label: 'Deployment Stability', 
    value: '99.9%', 
    icon: <FiShield className="w-8 h-8" /> 
  },
  { 
    label: 'ROI Transformation', 
    value: '45%', 
    icon: <FiTrendingUp className="w-8 h-8" /> 
  },
  // { 
  //   label: 'Tuning & Support', 
  //   value: '60 Days', 
  //   icon: <FiClock className="w-8 h-8" /> 
  // },
];

const V_DATA = [
  { title: 'Innovation-Driven', description: 'We embrace new technologies and creative problem-solving to deliver future-ready solutions.', icon: <FiCode className="w-6 h-6" /> },
  { title: 'Client-Centric', description: 'Every project begins and ends with your success. We focus on measurable outcomes and long-term value.', icon: <FiHeart className="w-6 h-6" /> },
  { title: 'Integrity', description: 'We uphold transparency, honesty, and accountability in every partnership and project.', icon: <FiShield className="w-6 h-6" /> },
  { title: 'Collaboration', description: 'We value teamwork and open communication — building strong relationships with clients and within our team.', icon: <FiUsers className="w-6 h-6" /> },
  { title: 'Excellence', description: 'We are dedicated to achieving the highest standards in design, development, and user experience.', icon: <FiAward className="w-6 h-6" /> },
  { title: 'Growth Mindset', description: 'We continuously evolve, learn, and innovate — ensuring sustainable success for both our team and our clients.', icon: <FiBarChart2 className="w-6 h-6" /> },
];

// const I_DATA = [
//   { name: 'E-commerce', icon: <FiDollarSign className="w-5 h-5" /> },
//   { name: 'Healthcare', icon: <FiHeart className="w-5 h-5" /> },
//   { name: 'Finance', icon: <FiBarChart2 className="w-5 h-5" /> },
//   { name: 'SaaS', icon: <FiCloud className="w-5 h-5" /> },
//   { name: 'Education', icon: <FiBook className="w-5 h-5" /> },
//   { name: 'Real Estate', icon: <FiHome className="w-5 h-5" /> },
// ];

const I_DATA = [
  { name: 'E-commerce', icon: <FiShoppingCart className="w-5 h-5" /> }, // Swapped to ShoppingCart for better UX
  { name: 'FinTech', icon: <FiCpu className="w-5 h-5" /> },           // Use Cpu to imply "Tech" focus
  { name: 'SaaS Platforms', icon: <FiCloud className="w-5 h-5" /> },
  { name: 'Logistics', icon: <FiTruck className="w-5 h-5" /> },
  { name: 'Healthcare', icon: <FiHeart className="w-5 h-5" /> },
  { name: 'Real Estate', icon: <FiMapPin className="w-5 h-5" /> },     // MapPin looks more "Architectural"
  { name: 'EdTech', icon: <FiBookOpen className="w-5 h-5" /> },
  { name: 'Manufacturing', icon: <FiSettings className="w-5 h-5" /> },
  { name: 'Media', icon: <FiPlay className="w-5 h-5" /> },
  { name: 'Hospitality', icon: <FiSunrise className="w-5 h-5" /> },
];

// ─── Animated Divider ────────────────────────────────────────────────
const AnimatedDivider = () => {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) return <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />;
  return (
    <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 1.2, ease: 'easeOut' }}
      className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent origin-left" />
  );
};

const AboutPageComponent = () => {
  const navigate = useNavigate();
  const differentiators = useMemo(() => D_DATA, []);
  const values = useMemo(() => V_DATA, []);
  const industries = useMemo(() => I_DATA, []);

  useEffect(() => {
    document.title = 'About Aarmbh InfoTech | Vision, Mission & Team – Pune';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta); }
    meta.setAttribute('content', 'Learn about Aarmbh InfoTech — our vision, mission, values & team. Expert developers in Pune building innovative web, mobile & AI solutions for businesses worldwide.');
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans overflow-x-hidden">

      {/* ═══════════════════════════════════════ ABOUT HERO ═══════════════════════════════════════ */}
{/* <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#050505]"> */}
  <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">
  {/* 1. Background Layer: Parallax Image with a modern 'Luminosity' mask */}
  <motion.div 
    style={{ y: useTransform(useScroll().scrollY, [0, 500], [0, 150]) }}
    className="absolute inset-0 z-0"
  >
    <img 
      src={HERO_IMAGE} 
      alt="Aarmbh Studio" 
      className="w-full h-full object-cover opacity-30 grayscale mix-blend-overlay"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/40 to-[#050505]" />
  </motion.div>

  {/* 2. Ambient Glow: Soft amber light in the corner */}
  <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-500/10 blur-[120px] rounded-full" />

  <div className="relative z-10 max-w-6xl mx-auto px-6">
    <div className="flex flex-col items-start text-left">
      
      {/* 3. The Breadcrumb/Tag */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 mb-8"
      >
        <div className="w-10 h-px bg-amber-500" />
        <span className="text-[10px] uppercase tracking-[0.6em] text-amber-500 font-bold">
          Our Narrative
        </span>
      </motion.div>

      {/* 4. Displaced Headline */}
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-7xl lg:text-7xl font-light text-white tracking-tighter leading-[0.9] mb-12"
      >
        Building the <br /> 
        <span className="text-amber-500 italic font-serif ml-0 md:ml-24">future of impact.</span>
      </motion.h1>

      {/* 5. Split Description & Action */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end w-full">
        {/* <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-md"
        >
          Aarmbh is a multidisciplinary board of architects where strategy meets technical precision.
We don't just write code; we engineer the high-performance infrastructure of business growth.
        </motion.p> */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="space-y-6"
        >
          <p className="text-white text-xl md:text-2xl font-light leading-snug">
            Aarmbh is a multidisciplinary team of <span className="text-amber-500">digital architects</span> where strategy meets technical precision.
          </p>
          <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-xl border-l border-white/10 pl-6">
            We don't just write code; we engineer the high-performance infrastructure of business growth.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex md:justify-end"
        >
          <button 
            onClick={() => navigate('/contact')}
            className="group relative flex items-center gap-4 px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white overflow-hidden transition-all duration-500 hover:border-amber-500/50"
          >
            {/* Liquid Background Fill */}
            <div className="absolute inset-0 bg-amber-500 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            
            <span className="relative z-10 font-bold text-xs uppercase tracking-widest group-hover:text-black transition-colors">
              Begin your journey
            </span>
            <span className="relative z-10 text-xl group-hover:text-black group-hover:translate-x-1 transition-all">
              →
            </span>
          </button>
        </motion.div>
      </div>

    </div>
  </div>

  {/* 6. Subtle Bottom Mask */}
  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent" />
</section>

      <AnimatedDivider />


      {/* ─── OUR STORY ─────────────────────────────────────────────────── */}
      {/* ═══════════════════════════════════════ REFINED OUR STORY ═══════════════════════════════════════ */}
<section className="py-32 bg-[#050505] relative overflow-hidden">
  {/* Subtle Background Grid Line */}
  <div className="absolute top-0 left-1/4 w-px h-full bg-white/[0.03] hidden lg:block" />

  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
      
      {/* LEFT: The "Visual Composition" */}
      <motion.div 
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="lg:col-span-5 relative"
      >
        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 group">
          <img 
            src={STORY_IMAGE} 
            alt="Collaboration at Aarmbh"
            className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
        </div>

        {/* Floating Stat 1: The Deliveries */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="absolute -bottom-6 -right-6 md:right-10 bg-[#080808] border border-amber-500/30 rounded-2xl p-6 backdrop-blur-xl shadow-2xl"
        >
          <p className="text-3xl font-light text-white leading-none mb-1">99.9<span className="text-amber-500 font-bold">%</span></p>
          <p className="text-[10px] uppercase tracking-widest text-slate-500">System Uptime</p>
        </motion.div>

        {/* Floating Stat 2: The Location (Subtle) */}
        <div className="absolute -top-6 -left-6 hidden md:block bg-white/5 border border-white/10 rounded-full p-4 backdrop-blur-md">
           <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
        </div>
      </motion.div>

      {/* RIGHT: The Narrative Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="lg:col-span-7 flex flex-col"
      >
        <div className="flex items-center gap-4 mb-6">
          <span className="text-amber-500 font-mono text-xs uppercase tracking-[0.4em]">Our Legacy</span>
          <div className="h-px w-12 bg-amber-500/30" />
        </div>

        <h2 className="text-4xl md:text-5xl font-light text-white tracking-tighter leading-tight mb-10">
          Blending Technical <span className="italic font-serif text-amber-200/90">Trust</span> <br /> 
          with Pure Creativity.
        </h2>

        <div className="space-y-8 text-slate-400">
          <p className="text-xl md:text-2xl font-light leading-relaxed text-slate-200">
            Aarmbh blends creativity with deep-rooted trust, engineering software solutions that define the standards of the next generation.
          </p>
          
          <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm md:text-base leading-relaxed">
            <p>
              Driven by a board of dedicated architects, we fuse strategic thinking with advanced technologies to design platforms that inspire global confidence.
            </p>
            <p>
              Our commitment ensures reliable, scalable products built on a foundation of understanding client evolution in a rapidly changing digital world.
            </p>
          </div>
        </div>

        {/* Refined Badges */}
        <div className="mt-12 flex flex-wrap gap-3">
          {['Pune Based HQ', 
    '100% Custom Architecture', 
    'Cloud-Native Solutions', 
    'Agile Development', 
    'Post-Launch Optimization'].map((badge) => (
            <div 
              key={badge} 
              className="px-4 py-2 bg-white/[0.03] border border-white/10 rounded-lg text-slate-300 text-[10px] uppercase tracking-widest hover:border-amber-500/50 hover:text-amber-500 transition-all duration-300"
            >
              {badge}
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  </div>
</section>

      <AnimatedDivider />

      {/* ═══════════════════════════════════════ VISION & MISSION ═══════════════════════════════════════ */}
<section className="py-32 bg-[#050505] relative overflow-hidden">
  {/* Background Decorative Element: Architectural Crosshair */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.02] rounded-full pointer-events-none" />
  
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    
    {/* Header: Minimal & Left-Aligned */}
    <div className="mb-20 border-l border-amber-500/50 pl-4">
      <h2 className="text-[10px] uppercase tracking-[0.6em] text-amber-500 font-bold mb-1">Purpose</h2>
      <p className="text-2xl md:text-3xl font-light text-white tracking-tight">What Drives the Collective.</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-[2.5rem] overflow-hidden">
      
      {/* 1. VISION: The "Light" side */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-[#080808] p-12 md:p-16 group overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-[80px] group-hover:bg-amber-500/10 transition-colors duration-700" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-[10px] text-amber-500/60 uppercase tracking-widest">01</span>
            <div className="h-px w-8 bg-amber-500/30" />
            <h3 className="text-xl uppercase tracking-[0.3em] font-medium text-white">Our Vision</h3>
          </div>
          
          <p className="text-2xl md:text-3xl font-light text-slate-200 leading-tight tracking-tight">
            To revolutionize the digital landscape by empowering businesses with <span className="italic font-serif text-amber-200/90">intelligent technology</span> that inspires global success.
          </p>
        </div>
      </motion.div>

      {/* 2. MISSION: The "Structural" side */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="relative bg-[#080808] p-12 md:p-16 group"
      >
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-[10px] text-amber-500/60 uppercase tracking-widest">02</span>
            <div className="h-px w-8 bg-amber-500/30" />
            <h3 className="text-xl uppercase tracking-[0.3em] font-medium text-white">Our Mission</h3>
          </div>
          
          <div className="space-y-6 text-slate-400 text-lg font-light leading-relaxed">
            <p>
              To become a globally recognized development partner — delivering top-tier digital products that accelerate business transformation and create <span className="text-white">lasting impact.</span>
            </p>
            <p className="text-sm border-l border-amber-500/20 pl-6 text-slate-500 italic">
              "We focus on the intersection of complex logic and seamless human experience."
            </p>
          </div>
        </div>
      </motion.div>

    </div>
  </div>
</section>

      <AnimatedDivider />

     {/* ═══════════════════════════════════════ DIFFERENTIATORS ═══════════════════════════════════════ */}
<section className="py-32 bg-[#050505] relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    
    {/* Header: Left Aligned & Architectural */}
    <div className="mb-20 border-l border-amber-500/50 pl-6">
      <h2 className="text-[10px] uppercase tracking-[0.8em] text-amber-500 font-bold mb-2">The Edge</h2>
      <p className="text-3xl md:text-5xl font-light text-white tracking-tighter">
        What defines <span className="italic font-serif text-amber-200/90">our collective.</span>
      </p>
    </div>

    {/* The Bento-Inspired Grid */}
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      
      {/* 1. Main Feature: End-to-End (The Anchor) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="md:col-span-8 relative p-10 md:p-14 rounded-[2.5rem] bg-[#080808] border border-white/5 overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/[0.03] blur-[100px] group-hover:bg-amber-500/[0.07] transition-colors duration-1000" />
        
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
          <div className="bg-amber-500/10 p-5 rounded-2xl border border-amber-500/20">
            <FiCheckCircle className="w-8 h-8 text-amber-500" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-tight">End-to-End Partnership</h3>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl font-light">
              From the initial architectural blueprint to final deployment and ongoing optimization, we remain your technical anchor. We handle the complexity so you can focus on the growth.
            </p>
          </div>
        </div>
      </motion.div>

      {/* 2. Secondary Differentiators: Vertical Stack */}
      <div className="md:col-span-4 grid grid-cols-1 gap-6">
        {differentiators.slice(0, 2).map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-[2rem] bg-[#080808] border border-white/5 hover:border-amber-500/30 transition-all duration-500 group"
          >
            <div className="flex items-center gap-4 mb-4">
               <span className="text-amber-500/50 group-hover:text-amber-500 transition-colors">
                 {item.icon}
               </span>
               <div className="h-px flex-grow bg-white/5 group-hover:bg-amber-500/20 transition-all" />
            </div>
            <h3 className="text-3xl font-light text-white mb-1 tracking-tighter">
              {item.value}
            </h3>
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 group-hover:text-slate-300 transition-colors">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* 3. The Remaining Stats: Horizontal Strip */}
      <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {differentiators.slice(2).map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="p-8 rounded-[2rem] bg-[#080808] border border-white/5 flex flex-col items-center text-center group"
          >
            <h3 className="text-3xl font-light text-amber-500 mb-2">{item.value}</h3>
            <p className="text-[9px] uppercase tracking-[0.4em] text-slate-500 group-hover:text-white transition-colors">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>

    </div>
  </div>
</section>

      <AnimatedDivider />

      {/* ═══════════════════════════════════════ COMPACT INDUSTRIES ═══════════════════════════════════════ */}
{/* ═══════════════════════════════════════ INDUSTRIES (MOBILE OPTIMIZED) ═══════════════════════════════════════ */}
<section className="py-20 bg-[#050505] border-t border-white/5">
  <div className="max-w-6xl mx-auto px-6">
    
    {/* Minimalist Header */}
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
      <div className="border-l border-amber-500/50 pl-4">
        <h2 className="text-[10px] uppercase tracking-[0.6em] text-amber-500 font-bold mb-1">
          Sectors
        </h2>
        <p className="text-xl md:text-2xl font-light text-white tracking-tight">
          Verticals of Expertise.
        </p>
      </div>
      <p className="text-white text-[12px] md:text-sm font-light max-w-[200px] md:max-w-xs md:text-right italic leading-relaxed">
        "Custom architecture tailored to specific industry logic."
      </p>
    </div>

    {/* Responsive Container: 2-columns on mobile, Flex-wrap on desktop */}
    <div className="grid grid-cols-2 md:flex md:flex-wrap gap-2 md:gap-3">
      {I_DATA.map((industry, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          viewport={{ once: true }}
          className="group relative flex items-center gap-2 md:gap-3 px-3 md:px-5 py-2.5 md:py-3 rounded-lg md:rounded-xl border border-white/5 bg-[#080808] hover:border-amber-500/30 transition-all duration-500 cursor-default overflow-hidden"
        >
          {/* Small Amber Dot Indicator */}
          <div className="w-1 h-1 rounded-full bg-amber-500/40 group-hover:bg-amber-500 transition-colors flex-shrink-0" />
          
          <span className="text-amber-500/80 group-hover:text-amber-400 transition-colors text-xs md:text-sm flex-shrink-0">
            {industry.icon}
          </span>
          
          <span className="text-slate-300 text-[10px] md:text-sm font-medium tracking-wide group-hover:text-white transition-colors truncate">
            {industry.name}
          </span>

          {/* Subtle Numbering - Hidden on mobile to keep columns clean */}
          <span className="hidden md:inline text-[9px] font-mono text-slate-700 ml-2 group-hover:text-amber-500/40 transition-colors">
            0{index + 1}
          </span>

          {/* Mobile-only subtle glow effect on hover */}
          <div className="absolute inset-0 bg-amber-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none md:hidden" />
        </motion.div>
      ))}
    </div>
  </div>
</section>

      <AnimatedDivider />

      {/* ─── CORE VALUES ──────────────────────────────────────────────────── */}
      {/* ═══════════════════════════════════════ SCROLLING MANIFESTO ═══════════════════════════════════════ */}
<section className="py-32 bg-[#050505] relative">
  <div className="max-w-6xl mx-auto px-6">
    
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
      
      {/* LEFT: Sticky Header & Progress Indicator */}
      <div className="lg:col-span-4 lg:sticky lg:top-40 h-fit">
        <div className="border-l-2 border-amber-500/20 pl-8 relative">
          <h2 className="text-[10px] uppercase tracking-[0.8em] text-amber-500 font-bold mb-4">Culture</h2>
          <p className="text-3xl md:text-4xl font-light text-white tracking-tighter leading-tight mb-8">
            The DNA of <br /> 
            <span className="italic font-serif text-amber-200/90">Aarmbh Architects.</span>
          </p>
          <p className="text-white text-md font-light leading-relaxed max-w-xs">
            Our principles aren't just words; they are the engineering constraints we apply to every line of code.
          </p>
        </div>
      </div>

      {/* RIGHT: High-Contrast Content Flow */}
      <div className="lg:col-span-8 space-y-32 lg:py-0">
        {V_DATA.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8 }}
            className="group relative"
          >
            {/* Large Watermark Index */}
            <span className="absolute -left-12 -top-12 text-[12rem] font-bold text-white/[0.02] pointer-events-none group-hover:text-amber-500/[0.03] transition-colors duration-1000">
              0{index + 1}
            </span>

            <div className="relative z-10 pl-0 lg:pl-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500 border border-amber-500/20">
                  {value.icon}
                </div>
                <div className="h-px flex-grow bg-gradient-to-r from-amber-500/40 to-transparent" />
              </div>

              <h3 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-tight">
                {value.title}
              </h3>
              
              <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                {value.description}
              </p>

              {/* Technical "Closing" Line */}
              <div className="mt-10 flex items-center gap-3">
                <span className="text-[9px] font-mono text-amber-500/60 uppercase tracking-[0.3em]">Constraint Verified</span>
                <div className="w-2 h-2 rounded-full bg-amber-500/40 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </div>
</section>

      <AnimatedDivider />

    </div>
  );
};

const AboutPage = React.memo(AboutPageComponent);
export default AboutPage;