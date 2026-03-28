import React, { useMemo } from 'react';
import { useReducedMotion, motion } from "framer-motion";
import { 
  FiCpu, FiLayers, FiCode, FiSearch, FiTerminal, FiZap, FiClock, FiActivity, FiShield 
} from 'react-icons/fi';
import TeamHeroBackground from "../assets/Teamhero.png"; 

// ─── Constants ───────────────────────────────────────────────────────
const PRIMARY_GOLD = "#f7dab2";

const TECH_DATA = [
  { name: "React.js", icon: "fab fa-react", category: "Frontend" },
  { name: "Flutter", icon: "fas fa-mobile-alt", category: "Frontend" },
  { name: "JavaScript", icon: "fab fa-js", category: "Frontend" },
  { name: "HTML5", icon: "fab fa-html5", category: "Frontend" },
  { name: "Tailwind CSS", icon: "fa-brands fa-css3-alt", category: "Frontend" },
  { name: "Node.js", icon: "fab fa-node-js", category: "Backend" },
  { name: "Python", icon: "fab fa-python", category: "Backend" },
  { name: "GoLang", icon: "fab fa-golang", category: "Backend" },
  { name: "PHP", icon: "fab fa-php", category: "Backend" },
  { name: "Laravel", icon: "fab fa-laravel", category: "Backend" },
  { name: "MongoDB", icon: "fas fa-leaf", category: "Database" },
  { name: "SQL", icon: "fas fa-database", category: "Database" },
  { name: "MySQL", icon: "fas fa-database", category: "Database" },
  { name: "Supabase", icon: "fas fa-database", category: "Database" },
  { name: "AWS", icon: "fab fa-aws", category: "Cloud & DevOps" },
  { name: "Docker", icon: "fab fa-docker", category: "Cloud & DevOps" },
  { name: "Figma", icon: "fab fa-figma", category: "Tools" },
  { name: "Git", icon: "fab fa-git", category: "Tools" },
  { name: "GitHub", icon: "fab fa-github", category: "Tools" },
  { name: "VsCode", icon: "fab fa-figma", category: "Tools" },
];

const PROS_DATA = [
  {
    tech: "React.js",
    icon: "fab fa-react",
    pros: ["Component-based architecture", "Virtual DOM performance", "Massive ecosystem"]
  },
  {
    tech: "Node.js",
    icon: "fab fa-node-js",
    pros: ["Non-blocking I/O model", "Unified JS stack", "Rapid NPM development"]
  },
  {
    tech: "MongoDB",
    icon: "fas fa-leaf",
    pros: ["Schema-less flexibility", "Horizontal scalability", "Native JSON support"]
  }
];

// ─── Helper Components ───────────────────────────────────────────────
const AnimatedDivider = () => {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent origin-left"
    />
  );
};

function Tech() {
  const prefersReducedMotion = useReducedMotion();

  // Grouping logic
  const groupedTechs = useMemo(() => {
    return TECH_DATA.reduce((acc, tech) => {
      (acc[tech.category] = acc[tech.category] || []).push(tech);
      return acc;
    }, {});
  }, []);

  const categories = ["Frontend", "Backend", "Database", "Cloud & DevOps", "Tools"];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-amber-500/30">

      {/* 1. ARCHITECTURAL HERO */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_80%)]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 mt-14 md:mt-0 text-center">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-amber-500">System Core // v2026.03</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative mb-12">
            <div className="absolute -left-8 -top-8 w-12 h-12 border-t-2 border-l-2 border-amber-500/20" />
            <div className="absolute -right-8 -bottom-8 w-12 h-12 border-b-2 border-r-2 border-amber-500/20" />
            <h1 className="text-5xl md:text-8xl font-light tracking-tighter leading-none">
              The <span className="text-amber-500 italic font-serif">Aarmbh</span> <br /> Engine Room.
            </h1>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto mb-16">
            We curate a high-performance ecosystem of frameworks designed for zero-latency growth and structural integrity.
          </motion.p>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
            {['React', 'Node', 'Next', 'PHP', 'Flutter', 'AWS'].map((tech, i) => (
              <div key={i} className="px-6 py-4 bg-[#080808]/80 flex flex-col items-center gap-1 group hover:bg-amber-500/[0.05] transition-colors">
                <span className="font-mono text-[9px] text-slate-600">0{i + 1}</span>
                <span className="text-white text-[10px] uppercase tracking-widest font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* 2. ENGINEERING GRID */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20 border-l border-amber-500/50 pl-6">
          <h2 className="text-[10px] uppercase tracking-[0.8em] text-amber-500 font-bold mb-2">The Stack</h2>
          <p className="text-3xl md:text-5xl font-light text-white tracking-tighter">Core <span className="italic font-serif text-amber-200/90">Technologies.</span></p>
        </div>

        {categories.map((cat) => groupedTechs[cat] && (
          <div key={cat} className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-[17px] text-amber-500/60 uppercase tracking-widest">{cat}</span>
              <div className="h-px flex-grow bg-white/5" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
              {groupedTechs[cat].map((tech) => (
                <div key={tech.name} className="bg-[#080808] p-8 flex flex-col items-center justify-center gap-4 group hover:bg-amber-500/[0.02] transition-all">
                  <i className={`${tech.icon} text-3xl text-slate-500 group-hover:text-amber-500 transition-colors duration-500`} />
                  <span className="text-[10px] uppercase tracking-widest text-white group-hover:text-white">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      <AnimatedDivider />

      {/* 3. STRATEGIC SPECS (PROS) */}
      <section className="py-24 bg-[#080808]/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight">Architectural <span className="italic font-serif text-amber-200">Choices.</span></h2>
            <div className="w-12 h-px bg-amber-500/50 mx-auto mt-4" />
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {PROS_DATA.map((item, idx) => (
              <div key={item.tech} className="group relative bg-[#080808] border border-white/5 rounded-3xl p-8 hover:border-amber-500/20 transition-all duration-700">
                <div className="absolute top-4 right-6 font-mono text-[9px] text-slate-800 tracking-widest">SPEC_{idx + 1}</div>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="min-w-[120px] flex flex-col items-center md:items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-amber-500/5 border border-amber-500/10 flex items-center justify-center text-3xl text-amber-500"><i className={item.icon} /></div>
                    <h3 className="text-xl font-medium text-white">{item.tech}</h3>
                  </div>
                  <div className="flex-grow">
                    <p className="text-[10px] font-mono text-amber-500/50 uppercase tracking-[0.3em] mb-4">Engineering Advantages</p>
                    <ul className="space-y-4">
                      {item.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-400 text-sm font-light hover:text-slate-200 transition-colors">
                          <div className="w-1 h-1 rounded-full bg-amber-500/40 mt-2 flex-shrink-0" />{pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <AnimatedDivider />

      {/* 4. ENHANCED SYSTEM METRICS (STATS) */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { num: "5+", label: "Years Combined", icon: <FiClock /> },
              { num: "20+", label: "Systems Built", icon: <FiLayers /> },
              { num: "99.9%", label: "Uptime Logic", icon: <FiZap /> },
              { num: "100%", label: "Scalability", icon: <FiCpu /> },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center md:items-start group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-amber-500/40 group-hover:text-amber-500 transition-colors">{stat.icon}</div>
                  <div className="h-px w-8 bg-white/10 group-hover:bg-amber-500/50 transition-all" />
                </div>
                <div className="text-4xl md:text-5xl font-light text-white tracking-tighter mb-2">{stat.num}</div>
                <div className="font-mono text-[9px] uppercase tracking-[0.4em] text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <AnimatedDivider />

      {/* 5. NEW: DEV ENVIRONMENT (TOOLS) */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-10 border-l border-amber-500/50 pl-6">
                <h2 className="text-[10px] uppercase tracking-[0.8em] text-amber-500 font-bold mb-2">Environment</h2>
                <p className="text-2xl md:text-3xl font-light text-white">Our Local <span className="italic font-serif text-amber-200">Infrastructure.</span></p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Primary OS', val: 'Windows / macOS' },
                  { label: 'Editor', val: 'VS Code / Neovim' },
                  { label: 'Versioning', val: 'Git / GitHub' },
                  { label: 'CI/CD', val: 'GitHub / Vercel Pipelines' },
                  { label: 'Workflow', val: 'Agile / Rapid Iteration' },
                  { label: 'API Style', val: 'REST / WebSockets' }
                ].map((item, i) => (
                  <div key={i} className="p-4 border border-white/5 rounded-xl bg-white/[0.02]">
                    <p className="font-mono text-[12px] text-amber-500/50 uppercase mb-1">{item.label}</p>
                    <p className="text-white text-sm font-medium">{item.val}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-amber-500/5" />
              <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-40 hover:opacity-60 transition-opacity duration-700" alt="Terminal" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
            </div>
          </div>
        </div>
      </section>
      <AnimatedDivider />

      {/* SYSTEM STATUS FOOTER */}
      <div className="py-8 border-t border-white/5 flex justify-center items-center gap-4 bg-[#050505]">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="font-mono text-[10px] text-slate-600 uppercase tracking-[0.4em]">All Systems Operational // Core Stack Verified</span>
      </div>

    </div>
  );
}

export default Tech;