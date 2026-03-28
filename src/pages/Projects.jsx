// import React, { useEffect, useState } from 'react';
// import { useReducedMotion, motion, AnimatePresence } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import { FiExternalLink, FiLayers, FiShield, FiGlobe, FiCpu, FiCode } from 'react-icons/fi';

// // Assets
// import smartImage from '../assets/smart.jpg';
// import phdianImage from '../assets/phdian.jpg';

// /* ─── Project Data ──────────────────────────────────────────────────── */
// const PROJECTS = [
//   {
//     id: 1,
//     title: 'Smart Auto Electrics',
//     client: 'Automotive Industry, UK',
//     category: 'Web Development',
//     tag: 'Live',
//     url: 'https://smartautoelectrics.co.uk/',
//     image: smartImage,
//     description: 'Premium automotive electrical services platform with dynamic service listings and appointment booking built for the UK market.',
//     technologies: ['React.js', 'Tailwind', 'MongoDB'],
//     year: '2024',
//   },
//   {
//     id: 2,
//     title: 'Phdians',
//     client: 'Education Platform',
//     category: 'Web Development',
//     tag: 'Live',
//     url: 'https://phdians.org/',
//     image: phdianImage,
//     description: 'Academic platform connecting PhD scholars for research collaboration with real-time features and resources.',
//     technologies: ['React.js', 'Tailwind', 'Firebase'],
//     year: '2024',
//   },
//   {
//     id: 3,
//     title: 'H&H Tech Solutions',
//     client: 'IT Consultancy, UK',
//     category: 'Web Development',
//     tag: 'Live',
//     url: 'https://hhtechsolutions.co.uk/',
//     image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
//     description: 'Corporate IT consultancy website with professional services showcase designed for the UK enterprise market.',
//     technologies: ['React.js', 'PHP', 'MySQL'],
//     year: '2024',
//   },
//   {
//     id: 4,
//     title: 'Digital Marketing Agency',
//     client: 'Marketing Agency',
//     category: 'Web Development',
//     tag: 'Live',
//     url: 'https://digital-agency-ten-self.vercel.app/',
//     image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
//     description: 'High-impact agency website with bold animations and a conversion-focused layout to attract premium clients.',
//     technologies: ['React.js', 'Framer', 'Tailwind'],
//     year: '2024',
//   },
//   {
//     id: 5,
//     title: 'Cafe Lamees',
//     client: 'Food & Beverage, UK',
//     category: 'E-Commerce',
//     tag: 'Live',
//     url: 'https://test.cafelamees.co.uk/',
//     image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
//     description: 'Elegant café website with online menu and brand storytelling for a UK-based establishment.',
//     technologies: ['React.js', 'Tailwind', 'Firebase'],
//     year: '2024',
//   },
//   {
//     id: 6,
//     title: 'Luxury Furniture Store',
//     client: 'E-commerce Retail',
//     category: 'Web Development',
//     tag: 'Live',
//     url: 'https://furniture-420c3.web.app',
//     image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
//     description: 'Sophisticated furniture e-commerce platform with advanced filtering and luxurious browsing experience.',
//     technologies: ['React.js', 'Firebase', 'Tailwind'],
//     year: '2024',
//   },
//   {
//     id: 7,
//     title: 'Wedding Planner',
//     client: 'Event Services',
//     category: 'Web Development',
//     tag: 'Live',
//     url: 'https://wedding-weld-two.vercel.app/',
//     image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
//     description: 'Romantic wedding planning website with gallery, vendor listings, and inquiry forms.',
//     technologies: ['React.js', 'Framer', 'Tailwind'],
//     year: '2024',
//   },
//   {
//     id: 8,
//     title: "Ambition Let's Move",
//     client: 'Transportation, Mobile',
//     category: 'Mobile App',
//     tag: 'App Store',
//     url: null,
//     image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80',
//     description: 'Cross-platform transportation app with real-time ride tracking and driver management.',
//     technologies: ['Flutter', 'Firebase', 'MongoDB'],
//     year: '2024',
//   },
//   {
//     id: 9,
//     title: 'Telegram AI Chatbot',
//     client: 'Business Automation',
//     category: 'AI / ML',
//     tag: 'Deployed',
//     url: null,
//     image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1200&q=80',
//     description: 'Production-grade AI chatbot with NLP, automated customer support, and monitoring dashboard.',
//     technologies: ['Python', 'ML', 'API'],
//     year: '2024',
//   },
//   {
//     id: 10,
//     title: 'Upscale Sugar Factory',
//     client: 'Industrial / ERP',
//     category: 'Enterprise Software',
//     tag: 'Deployed',
//     url: null,
//     image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
//     description: 'Custom enterprise web solution for sugar factory operations including inventory and workforce scheduling.',
//     technologies: ['Python', 'PostgreSQL', 'JS'],
//     year: '2023',
//   },
// ];

// const MAINTENANCE = [
//   { title: 'Smart Auto Electrics', url: 'https://smartautoelectrics.co.uk/', type: 'Website Maintenance', since: '2024', icon: '🔧' },
//   { title: 'H&H Tech Solutions', url: 'https://hhtechsolutions.co.uk/', type: 'Hosting & Maintenance', since: '2024', icon: '🖥️' },
//   { title: 'Phdians', url: 'https://phdians.org/', type: 'Platform Maintenance', since: '2024', icon: '🎓' },
//   { title: 'Cafe Lamees', url: 'https://test.cafelamees.co.uk/', type: 'Website Maintenance', since: '2024', icon: '☕' },
// ];

// const CATEGORIES = ['All', 'Web Development', 'E-Commerce', 'Mobile App', 'AI / ML', 'Enterprise Software'];

// /* ─── Helper Components ─────────────────────────────────────────────── */
// const AnimatedDivider = () => {
//   return (
//     <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 1.2 }}
//       className="h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent origin-left" />
//   );
// };

// /* ─── Technical Project Card ────────────────────────────────────────── */
// function ProjectCard({ project }) {
//   const handleClick = () => { if (project.url) window.open(project.url, '_blank', 'noopener,noreferrer'); };

//   return (
//     <motion.article
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       onClick={handleClick}
//       className={`group relative bg-[#080808] border border-white/5 overflow-hidden transition-all duration-700 hover:border-amber-500/20 ${project.url ? 'cursor-pointer' : 'cursor-default'}`}
//     >
//       <div className="px-5 py-3 border-b border-white/5 flex justify-between items-center bg-[#0a0a0a]">
//         <span className="font-mono text-[9px] text-slate-600 tracking-widest uppercase">Build // 0{project.id}</span>
//         <div className="flex gap-1.5">
//           <div className={`w-1.5 h-1.5 rounded-full ${project.tag === 'Live' ? 'bg-green-500 animate-pulse' : 'bg-amber-500/40'}`} />
//           <div className="w-1.5 h-1.5 rounded-full bg-white/5" />
//         </div>
//       </div>

//       <div className="relative aspect-video overflow-hidden">
//         <img src={project.image} className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" alt={project.title} />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent opacity-80" />

//         <div className="absolute top-4 left-4">
//            <span className="px-3 py-1 bg-black/60 border border-white/10 backdrop-blur-md rounded-full text-[9px] uppercase tracking-widest text-amber-500/80">
//             {project.category}
//            </span>
//         </div>
//       </div>

//       <div className="p-6 lg:p-8">
//         <h3 className="text-xl md:text-2xl font-medium text-white mb-2 tracking-tight group-hover:text-amber-200 transition-colors">
//           {project.title}
//         </h3>
//         <p className="text-slate-500 text-sm font-light leading-relaxed mb-8 line-clamp-2">
//           {project.description}
//         </p>

//         <div className="flex flex-wrap gap-2 mb-8">
//           {project.technologies.map((tech, i) => (
//             <span key={i} className="font-mono text-[9px] text-slate-400 px-2 py-1 bg-white/[0.03] border border-white/5">
//               {tech}
//             </span>
//           ))}
//         </div>

//         {project.url && (
//           <div className="flex items-center gap-3 text-amber-500/60 font-mono text-[9px] uppercase tracking-widest group-hover:text-amber-500 transition-all">
//             <span>View Infrastructure</span>
//             <div className="h-px w-8 bg-amber-500/20 group-hover:w-12 transition-all" />
//           </div>
//         )}
//       </div>
//       <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-amber-500 group-hover:w-full transition-all duration-700" />
//     </motion.article>
//   );
// }

// /* ─── Main Component ────────────────────────────────────────────────── */
// export default function Projects() {
//   const navigate = useNavigate();
//   const [activeFilter, setActiveFilter] = useState('All');

//   useEffect(() => {
//     document.title = 'Project Dossier | Aarmbh InfoTech';
//   }, []);

//   const filtered = activeFilter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === activeFilter);

//   return (
//     <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-amber-500/30">

//       {/* ══════════════════════════ PROJECTS HERO ══════════════════════════ */}
//       <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-24">
//         <div className="absolute inset-0 z-0">
//           <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_85%)]" />
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
//           <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3 mb-8">
//             <div className="w-12 h-px bg-amber-500" />
//             <span className="text-[10px] uppercase tracking-[0.6em] text-amber-500 font-bold">Project Dossier</span>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
//             className="text-5xl md:text-8xl lg:text-[7vw] font-light text-white tracking-tighter leading-[0.9] mb-12"
//           >
//             Engineered <br />
//             <span className="text-amber-500 italic font-serif">Outcomes.</span>
//           </motion.h1>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
//             <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
//               className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-xl">
//               A curated selection of high-performance digital products engineered for global impact, structural stability, and seamless scalability.
//             </motion.p>

//             <div className="flex md:justify-end gap-12 border-t border-white/5 pt-8">
//               {[
//                 { label: 'Deployed', val: '20+', icon: <FiLayers /> },
//                 { label: 'Uptime', val: '99.9%', icon: <FiShield /> }
//               ].map((stat, i) => (
//                 <div key={i} className="group">
//                   <div className="flex items-center gap-2 mb-1">
//                     <span className="text-amber-500/40 text-xs">{stat.icon}</span>
//                     <p className="text-3xl font-light text-white">{stat.val}</p>
//                   </div>
//                   <p className="font-mono text-[9px] uppercase tracking-widest text-slate-600 group-hover:text-amber-500/50 transition-colors">{stat.label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <AnimatedDivider />

//       {/* ══════════════════════════ FILTER BAR ═════════════════════ */}
//       <div className="sticky top-0 z-40 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 py-6">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="flex gap-3 overflow-x-auto scrollbar-none">
//             {CATEGORIES.map(cat => (
//               <button key={cat} onClick={() => setActiveFilter(cat)}
//                 className={`whitespace-nowrap px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold border transition-all duration-500 ${
//                   activeFilter === cat
//                     ? 'bg-amber-500 text-black border-amber-500'
//                     : 'bg-transparent text-slate-500 border-white/10 hover:border-amber-500/50 hover:text-white'
//                 }`}>
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
// <AnimatedDivider />
//       {/* ══════════════════════════ PROJECT GRID ════════════════════ */}
//       {/* ══════════════════════════ COMPACT PROJECT GRID ════════════════════ */}
// <section className="py-16 bg-[#050505]">
//   <div className="max-w-7xl mx-auto px-6">
//     <AnimatePresence mode="wait">
//       <motion.div key={activeFilter} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//         {filtered.length === 0 ? (
//           <div className="text-center py-20 border border-dashed border-white/5 rounded-2xl">
//             <p className="font-mono text-[9px] text-slate-600 uppercase tracking-widest">No active deployments.</p>
//           </div>
//         ) : (
//           /* Changed from 2-columns to 3-columns for desktop */
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//             {filtered.map((project) => (
//               <motion.article
//                 key={project.id}
//                 initial={{ opacity: 0, y: 15 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 onClick={() => project.url && window.open(project.url, '_blank')}
//                 className="group relative bg-[#080808] border border-white/5 overflow-hidden transition-all duration-500 hover:border-amber-500/30"
//               >
//                 {/* Slim Header */}
//                 <div className="px-4 py-2 border-b border-white/5 flex justify-between items-center bg-[#0a0a0a]">
//                   <span className="font-mono text-[8px] text-slate-600 uppercase tracking-widest">Build_{project.id}</span>
//                   <div className="w-1 h-1 rounded-full bg-amber-500/40 group-hover:bg-amber-500 transition-colors" />
//                 </div>

//                 {/* Shorter Aspect Ratio Image (aspect-video) */}
//                 <div className="relative aspect-video overflow-hidden">
//                   <img
//                     src={project.image}
//                     className="w-full h-full object-cover grayscale opacity-20 group-hover:opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
//                     alt={project.title}
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent opacity-60" />
//                 </div>

//                 {/* Compact Content */}
//                 <div className="p-5">
//                   <div className="flex justify-between items-start mb-2">
//                     <h3 className="text-lg font-medium text-white tracking-tight group-hover:text-amber-200 transition-colors">
//                       {project.title}
//                     </h3>
//                     <span className="font-mono text-[9px] text-slate-700">{project.year}</span>
//                   </div>

//                   <p className="text-slate-500 text-xs font-light leading-relaxed line-clamp-2 mb-4 h-8">
//                     {project.description}
//                   </p>

//                   {/* Shrunken Tech Tags */}
//                   <div className="flex flex-wrap gap-1.5 mb-5">
//                     {project.technologies.slice(0, 3).map((tech, i) => (
//                       <span key={i} className="font-mono text-[8px] text-slate-400 px-1.5 py-0.5 bg-white/[0.03] border border-white/5">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Minimal Link */}
//                   {project.url && (
//                     <div className="pt-4 border-t border-white/5 flex items-center justify-between">
//                        <span className="text-[8px] font-mono text-amber-500/40 uppercase tracking-widest">Source_Live</span>
//                        <FiExternalLink className="text-slate-600 group-hover:text-amber-500 transition-colors text-xs" />
//                     </div>
//                   )}
//                 </div>
//               </motion.article>
//             ))}
//           </div>
//         )}
//       </motion.div>
//     </AnimatePresence>
//   </div>
// </section>

//       <AnimatedDivider />

//       {/* ══════════════════════════ MAINTENANCE DASHBOARD ═════════════ */}
//       <section className="py-32 bg-[#050505]">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
//             <div className="border-l border-amber-500/50 pl-6">
//               <h2 className="text-[10px] uppercase tracking-[0.8em] text-amber-500 font-bold mb-2">Stability</h2>
//               <p className="text-3xl font-light text-white">Active Retainers.</p>
//             </div>
//             <div className="flex items-center gap-4 text-green-500/80 font-mono text-[10px] uppercase tracking-widest border border-green-500/20 px-4 py-2 rounded-full">
//                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//                Systems Operational
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 overflow-hidden rounded-3xl">
//             {MAINTENANCE.map((item, i) => (
//               <div key={i} className="bg-[#080808] p-10 group hover:bg-amber-500/[0.02] transition-all duration-500">
//                 <span className="text-3xl mb-8 block group-hover:scale-110 transition-transform">{item.icon}</span>
//                 <h3 className="text-white font-medium mb-1 tracking-tight">{item.title}</h3>
//                 <p className="text-amber-500/50 text-[9px] uppercase tracking-widest mb-8">{item.type}</p>
//                 <div className="flex justify-between items-center pt-6 border-t border-white/5">
//                    <span className="font-mono text-[9px] text-slate-700">SINCE // {item.since}</span>
//                    <span className="text-[10px] text-slate-400 group-hover:text-amber-500 transition-colors flex items-center gap-2">
//                      LIVE <FiGlobe className="text-[8px]" />
//                    </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <AnimatedDivider />

//       {/* ══════════════════════════ FINAL ARCHITECTURAL CTA ════════════════════════════ */}
//       <section className="py-32 bg-[#050505] relative text-center">
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
//         <div className="relative z-10 max-w-4xl mx-auto px-6">
//           <p className="text-amber-500 font-mono text-[10px] uppercase tracking-[0.5em] mb-8">Ready to Scale?</p>
//           <h2 className="text-5xl md:text-7xl font-light text-white tracking-tighter mb-16 leading-tight">
//             Your vision deserves <br />
//             <span className="italic font-serif text-amber-200">Elite Architecture.</span>
//           </h2>
//           <button
//             onClick={() => navigate('/contact')}
//             className="group relative inline-flex items-center gap-8 px-12 py-6 rounded-full border border-amber-500/30 bg-[#080808] text-white hover:border-amber-500 transition-all duration-500"
//           >
//             <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Initiate Deployment</span>
//             <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-black group-hover:translate-x-2 transition-transform">
//               →
//             </div>
//           </button>
//         </div>
//       </section>

//       {/* System Status Indicator */}
//       <div className="py-8 border-t border-white/5 flex justify-center items-center gap-4 bg-[#050505]">
//         <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
//         <span className="font-mono text-[9px] text-slate-700 uppercase tracking-[0.4em]">Portfolio Integrity Verified // 2026</span>
//       </div>

//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { useReducedMotion, motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiExternalLink, FiLayers, FiShield, FiGlobe } from "react-icons/fi";

// Assets
import smartImage from "../assets/smart.jpg";
import phdianImage from "../assets/phdian.jpg";

/* ─── Project Data ──────────────────────────────────────────────────── */
const PROJECTS = [
  {
    id: 1,
    title: "Smart Auto Electrics",
    client: "Automotive Industry, UK",
    category: "Web Development",
    tag: "Live",
    url: "https://smartautoelectrics.co.uk/",
    image: smartImage,
    description:
      "Premium automotive electrical services platform with dynamic service listings and appointment booking built for the UK market.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "MySQL", "PHP", "Hostinger"],
    year: "2025",
  },
  {
    id: 2,
    title: "Phdians",
    client: "Education Platform",
    category: "Web Development",
    tag: "Live",
    url: "https://phdians.org/",
    image: phdianImage,
    description:
      "Academic platform connecting PhD scholars for research collaboration with real-time features and resources.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "PHP", "MySQL", "Vercel" ],
    year: "2025",
  },
  {
    id: 3,
    title: "H&H Tech Solutions",
    client: "IT Consultancy, UK",
    category: "Web Development",
    tag: "Live",
    url: "https://hhtechsolutions.co.uk/",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    description:
      "Corporate IT consultancy website with professional services showcase designed for the UK enterprise market.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "PHP", "MySQL", "Hostinger"],
    year: "2025",
  },
  {
    id: 4,
    title: "Digital Marketing Agency",
    client: "Marketing Agency",
    category: "Web Development",
    tag: "Live",
    url: "https://digital-agency-ten-self.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
    description:
      "High-impact agency website with bold animations and a conversion-focused layout to attract premium clients.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "PHP", "MySQL", "Hostinger"],
    year: "2026",
  },
  {
    id: 5,
    title: "Cafe Lamees",
    client: "Food & Beverage, UK",
    category: "E-Commerce",
    tag: "Live",
    url: "https://test.cafelamees.co.uk/",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
    description:
      "Elegant café website with online menu and brand storytelling for a UK-based establishment.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "PHP Laravel", "MySQL", "Hostinger"],
    year: "2026",
  },
  {
    id: 6,
    title: "Luxury Furniture Store",
    client: "E-commerce Retail",
    category: "Web Development",
    tag: "Live",
    url: "https://furniture-420c3.web.app",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    description:
      "Sophisticated furniture e-commerce platform with advanced filtering and luxurious browsing experience.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "PHP", "MySQL", "Hostinger"],
    year: "2026",
  },
  {
    id: 7,
    title: "Wedding Planner",
    client: "Event Services",
    category: "Web Development",
    tag: "Live",
    url: "https://wedding-weld-two.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    description:
      "Romantic wedding planning website with gallery, vendor listings, and inquiry forms.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "PHP", "MySQL", "Hostinger"],
    year: "2026",
  },
  {
    id: 8,
    title: "Ambition Let's Move",
    client: "Transportation, Mobile",
    category: "Mobile App",
    tag: "App Store",
    url: null,
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80",
    description:
      "Cross-platform transportation app with real-time ride tracking and driver management.",
    technologies: ["Flutter", "Firebase", "MongoDB"],
    year: "2025",
  },
  {
    id: 9,
    title: "Telegram AI Chatbot",
    client: "Business Automation",
    category: "AI / ML",
    tag: "Deployed",
    url: null,
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1200&q=80",
    description:
      "Production-grade AI chatbot with NLP, automated customer support, and monitoring dashboard.",
    technologies: ["Python", "ML", "API"],
    year: "2024",
  },
  {
    id: 10,
    title: "Upscale Sugar Factory",
    client: "Industrial / ERP",
    category: "Enterprise Software",
    tag: "Deployed",
    url: null,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    description:
      "Custom enterprise web solution for sugar factory operations including inventory and workforce scheduling.",
    technologies: ["Python", "PostgreSQL", "JS"],
    year: "2024",
  },
];

const MAINTENANCE = [
  {
    title: "Smart Auto Electrics",
    url: "https://smartautoelectrics.co.uk/",
    type: "Website Maintenance",
    since: "2025",
    icon: "🔧",
  },
  {
    title: "H&H Tech Solutions",
    url: "https://hhtechsolutions.co.uk/",
    type: "Hosting & Maintenance",
    since: "2025",
    icon: "🖥️",
  },
  {
    title: "Phdians",
    url: "https://phdians.org/",
    type: "Platform Maintenance",
    since: "2025",
    icon: "🎓",
  },
  {
    title: "Cafe Lamees",
    url: "https://test.cafelamees.co.uk/",
    type: "Website Maintenance",
    since: "2026",
    icon: "☕",
  },
];

const CATEGORIES = [
  "All",
  "Web Development",
  "E-Commerce",
  "Mobile App",
  "AI / ML",
  "Enterprise Software",
];

/* ─── Helper Components ─────────────────────────────────────────────── */
const AnimatedDivider = () => {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 1.2 }}
      className="h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent origin-left"
    />
  );
};

/* ─── Main Component ────────────────────────────────────────────────── */
export default function Projects() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    document.title = "Project Dossier | Aarmbh InfoTech";
  }, []);

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-amber-500/30 overflow-x-hidden">
      {/* ══════════════════════════ PROJECTS HERO ══════════════════════════ */}
      {/* <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-center overflow-hidden pt-20 md:pt-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_85%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3 mb-6 md:mb-8">
            <div className="w-8 md:w-12 h-px bg-amber-500" />
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.6em] text-amber-500 font-bold">Project Dossier</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-[7vw] font-light text-white tracking-tighter leading-[1.1] md:leading-[0.9] mb-8 md:mb-12"
          >
            Engineered <br /> 
            <span className="text-amber-500 italic font-serif">Outcomes.</span>
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-end">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
              className="text-slate-400 text-sm md:text-xl font-light leading-relaxed max-w-xl">
              A curated selection of high-performance digital products engineered for global impact, structural stability, and seamless scalability.
            </motion.p>
            
            <div className="flex justify-start md:justify-end gap-8 md:gap-12 border-t border-white/5 pt-8">
              {[
                { label: 'Deployed', val: '20+', icon: <FiLayers /> },
                { label: 'Uptime', val: '99.9%', icon: <FiShield /> }
              ].map((stat, i) => (
                <div key={i} className="group">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-amber-500/40 text-xs">{stat.icon}</span>
                    <p className="text-2xl md:text-3xl font-light text-white">{stat.val}</p>
                  </div>
                  <p className="font-mono text-[8px] md:text-[9px] uppercase tracking-widest text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      <section className="relative h-screen flex items-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_85%)]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-px bg-amber-500" />
            <span className="text-[10px] uppercase tracking-[0.6em] text-amber-500 font-bold">
              Project Dossier
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl lg:text-[7vw] font-light text-white tracking-tighter leading-[0.9] mb-12"
          >
            Engineered <br />
            <span className="text-amber-500 italic font-serif">Outcomes.</span>
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-xl"
            >
              A curated selection of high-performance digital products
              engineered for global impact, structural stability, and seamless
              scalability.
            </motion.p>

            <div className="flex md:justify-end gap-12 border-t border-white/5 pt-8">
              {[
                { label: "Deployed", val: "20+", icon: <FiLayers /> },
                { label: "Uptime", val: "99.9%", icon: <FiShield /> },
              ].map((stat, i) => (
                <div key={i} className="group">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-amber-500/40 text-xs">
                      {stat.icon}
                    </span>
                    <p className="text-3xl font-light text-white">{stat.val}</p>
                  </div>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-slate-600 group-hover:text-amber-500/50 transition-colors">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* ══════════════════════════ FILTER BAR ═════════════════════ */}
      <div className="sticky top-0 z-40 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex gap-2 md:gap-3 overflow-x-auto no-scrollbar pb-2 md:pb-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`whitespace-nowrap px-4 md:px-6 py-1.5 md:py-2 rounded-full text-[8px] md:text-[10px] uppercase tracking-widest font-bold border transition-all duration-500 ${
                  activeFilter === cat
                    ? "bg-amber-500 text-black border-amber-500"
                    : "bg-transparent text-slate-500 border-white/10 hover:border-amber-500/50 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════ PROJECT GRID ════════════════════ */}
      <section className="py-12 md:py-16 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {filtered.length === 0 ? (
                <div className="text-center py-20 border border-dashed border-white/5 rounded-2xl">
                  <p className="font-mono text-[9px] text-slate-600 uppercase tracking-widest">
                    No active deployments.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-5">
                  {filtered.map((project) => (
                    <motion.article
                      key={project.id}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      onClick={() =>
                        project.url && window.open(project.url, "_blank")
                      }
                      className="group relative bg-[#080808] border border-white/5 overflow-hidden transition-all duration-500 hover:border-amber-500/30"
                    >
                      <div className="px-4 py-2 border-b border-white/5 flex justify-between items-center bg-[#0a0a0a]">
                        <span className="font-mono text-[8px] text-slate-600 uppercase tracking-widest">
                          Build_{project.id}
                        </span>
                        <div className="w-1 h-1 rounded-full bg-amber-500/40 group-hover:bg-amber-500 transition-colors" />
                      </div>

                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={project.image}
                          className="w-full h-full object-cover grayscale opacity-20 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                          alt={project.title}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent opacity-60" />
                      </div>

                      {/* <div className="p-5">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-medium text-white tracking-tight group-hover:text-amber-200 transition-colors">{project.title}</h3>
                          <span className="font-mono text-[9px] text-slate-700">{project.year}</span>
                        </div>
                        <p className="text-slate-500 text-xs font-light leading-relaxed line-clamp-2 mb-4 h-8">{project.description}</p>
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {project.technologies.slice(0, 3).map((tech, i) => (
                            <span key={i} className="font-mono text-[8px] text-slate-400 px-1.5 py-0.5 bg-white/[0.03] border border-white/5">{tech}</span>
                          ))}
                        </div>
                        {project.url && (
                          <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                             <span className="text-[8px] font-mono text-amber-500/40 uppercase tracking-widest">Source_Live</span>
                             <FiExternalLink className="text-slate-600 group-hover:text-amber-500 transition-colors text-xs" />
                          </div>
                        )}
                      </div> */}
                      <div className="p-6">
                        {" "}
                        {/* Increased padding for better breathing room */}
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-medium text-white tracking-tight group-hover:text-amber-200 transition-colors">
                            {project.title}
                          </h3>
                          <span className="font-mono text-[10px] text-slate-600">
                            {project.year}
                          </span>
                        </div>
                        {/* Description: Removed fixed h-8 and adjusted line-clamp */}
                        <p className="text-slate-400 text-12px font-light leading-relaxed mb-6 line-clamp-3">
                          {project.description}
                        </p>
                        {/* Tech Stack: Added margin and ensured wrapping */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.slice(0, 4).map((tech, i) => (
                            <span
                              key={i}
                              className="font-mono text-[11px] text-slate-300 px-2 py-1 bg-white/[0.05] border border-white/10 rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        {/* Minimal Link */}
                        {project.url && (
                          <div className="pt-4 border-t border-white/5 flex items-center justify-between group-hover:border-amber-500/20 transition-colors">
                            <span className="text-[9px] font-mono text-amber-500/50 uppercase tracking-[0.2em]">
                              Source_Live
                            </span>
                            <FiExternalLink className="text-slate-500 group-hover:text-amber-500 transition-colors text-sm" />
                          </div>
                        )}
                      </div>
                    </motion.article>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <AnimatedDivider />

      {/* ══════════════════════════ MAINTENANCE DASHBOARD ═════════════ */}
      <section className="py-16 md:py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 md:gap-8">
            <div className="border-l border-amber-500/50 pl-6">
              <h2 className="text-[9px] md:text-[10px] uppercase tracking-[0.6em] md:tracking-[0.8em] text-amber-500 font-bold mb-2">
                Stability
              </h2>
              <p className="text-2xl md:text-3xl font-light text-white">
                Active Retainers.
              </p>
            </div>
            <div className="flex items-center gap-3 md:gap-4 text-green-500/80 font-mono text-[9px] uppercase tracking-widest border border-green-500/20 px-3 md:px-4 py-1.5 md:py-2 rounded-full">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse" />
              Systems Operational
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 overflow-hidden rounded-2xl md:rounded-3xl">
            {MAINTENANCE.map((item, i) => (
              <div
                key={i}
                className="bg-[#080808] p-8 md:p-10 group hover:bg-amber-500/[0.02] transition-all duration-500"
              >
                <span className="text-2xl md:text-3xl mb-6 md:mb-8 block">
                  {item.icon}
                </span>
                <h3 className="text-white font-medium mb-1 tracking-tight text-sm md:text-base">
                  {item.title}
                </h3>
                <p className="text-amber-500/50 text-[8px] md:text-[9px] uppercase tracking-widest mb-6 md:mb-8">
                  {item.type}
                </p>
                <div className="flex justify-between items-center pt-4 md:pt-6 border-t border-white/5">
                  <span className="font-mono text-[8px] md:text-[9px] text-slate-700">
                    EST_{item.since}
                  </span>
                  <span className="text-[9px] md:text-[10px] text-slate-400 group-hover:text-amber-500 transition-colors flex items-center gap-1.5">
                    LIVE <FiGlobe className="text-[8px]" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* ══════════════════════════ FINAL ARCHITECTURAL CTA ════════════════════════════ */}
      <section className="py-20 md:py-32 bg-[#050505] relative text-center px-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-amber-500/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-amber-500 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] mb-6 md:mb-8">
            Ready to Scale?
          </p>
          <h2 className="text-4xl md:text-7xl font-light text-white tracking-tighter mb-12 md:mb-16 leading-tight">
            Your vision deserves <br />
            <span className="italic font-serif text-amber-200">
              Elite Architecture.
            </span>
          </h2>
          <button
            onClick={() => navigate("/contact")}
            className="group relative inline-flex items-center gap-6 md:gap-8 px-8 md:px-12 py-4 md:py-6 rounded-full border border-amber-500/30 bg-[#080808] text-white hover:border-amber-500 transition-all duration-500"
          >
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] font-bold">
              Initiate Deployment
            </span>
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-amber-500 flex items-center justify-center text-black group-hover:translate-x-2 transition-transform">
              →
            </div>
          </button>
        </div>
      </section>

      {/* System Status Indicator */}
      <div className="py-6 md:py-8 border-t border-white/5 flex justify-center items-center gap-3 md:gap-4 bg-[#050505] px-6 text-center">
        <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
        <span className="font-mono text-[8px] md:text-[9px] text-slate-700 uppercase tracking-[0.3em] md:tracking-[0.4em]">
          Portfolio Integrity Verified // 2026
        </span>
      </div>
    </div>
  );
}
