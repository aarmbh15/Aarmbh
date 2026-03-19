import { useReducedMotion, motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import smartImage from '../assets/smart.jpg';
import phdianImage from '../assets/phdian.jpg';

/* ─── Project Data ──────────────────────────────────────────────────── */
const PROJECTS = [
  {
    id: 1,
    title: 'Smart Auto Electrics',
    client: 'Automotive Industry, UK',
    category: 'Web Development',
    tag: 'Live',
    url: 'https://smartautoelectrics.co.uk/',
    image: smartImage,
    description: 'Premium automotive electrical services platform with dynamic service listings, appointment booking, and a polished brand experience built for the UK market.',
    technologies: ['React.js', 'Tailwind CSS', 'MongoDB'],
    year: '2024',
  },
  {
    id: 2,
    title: 'Phdians',
    client: 'Education Platform',
    category: 'Web Development',
    tag: 'Live',
    url: 'https://phdians.org/',
    image: phdianImage,
    description: 'Academic platform connecting PhD scholars and university students for research collaboration, expert guidance, and resources — with real-time features.',
    technologies: ['React.js', 'Tailwind CSS', 'Firebase'],
    year: '2024',
  },
  {
    id: 3,
    title: 'H&H Tech Solutions',
    client: 'IT Consultancy, UK',
    category: 'Web Development',
    tag: 'Live',
    url: 'https://hhtechsolutions.co.uk/',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    description: 'Corporate IT consultancy website with professional services showcase, case studies, and lead generation — designed for the UK enterprise market.',
    technologies: ['React.js', 'PHP', 'MySQL'],
    year: '2024',
  },
  {
    id: 4,
    title: 'Digital Marketing Agency',
    client: 'Marketing Agency',
    category: 'Web Development',
    tag: 'Live',
    url: 'https://digital-agency-ten-self.vercel.app/',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
    description: 'High-impact digital marketing agency website with bold animations, comprehensive service sections, and a conversion-focused layout to attract premium clients.',
    technologies: ['React.js', 'Framer Motion', 'Tailwind CSS'],
    year: '2024',
  },
  {
    id: 5,
    title: 'Cafe Lamees',
    client: 'Food & Beverage, UK',
    category: 'E-Commerce',
    tag: 'Live',
    url: 'https://test.cafelamees.co.uk/',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
    description: 'Elegant café website with online menu, brand storytelling, and ambience-focused design — crafted for a UK-based food and beverage establishment.',
    technologies: ['React.js', 'Tailwind CSS', 'Firebase'],
    year: '2024',
  },
  {
    id: 6,
    title: 'Luxury Furniture Store',
    client: 'E-commerce Retail',
    category: 'Web Development',
    tag: 'Live',
    url: 'https://furniture-420c3.web.app',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    description: 'Sophisticated furniture e-commerce platform with product showcases, advanced filtering, and a luxurious browsing experience designed to drive premium sales.',
    technologies: ['React.js', 'Firebase', 'Tailwind CSS'],
    year: '2024',
  },
  {
    id: 7,
    title: 'Wedding Planner',
    client: 'Event Services',
    category: 'Web Development',
    tag: 'Live',
    url: 'https://wedding-weld-two.vercel.app/',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    description: 'Romantic and elegant wedding planning website with gallery, vendor listings, service packages, and inquiry forms — beautifully crafted for couples.',
    technologies: ['React.js', 'Framer Motion', 'Tailwind CSS'],
    year: '2024',
  },
  {
    id: 8,
    title: "Ambition Let's Move",
    client: 'Transportation, Mobile',
    category: 'Mobile App',
    tag: 'App Store',
    url: null,
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80',
    description: 'Cross-platform mobile transportation app with real-time ride tracking, seamless booking, driver management, and optimised route management.',
    technologies: ['Flutter', 'Firebase', 'MongoDB'],
    year: '2024',
  },
  {
    id: 9,
    title: 'Telegram AI Chatbot',
    client: 'Business Automation',
    category: 'AI / ML',
    tag: 'Deployed',
    url: null,
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1200&q=80',
    description: 'Production-grade Telegram chatbot with NLP, predictive analytics, automated customer support workflows, and an admin dashboard for monitoring.',
    technologies: ['Python', 'Machine Learning', 'Telegram API'],
    year: '2024',
  },
  {
    id: 10,
    title: 'Upscale Sugar Factory',
    client: 'Industrial / ERP',
    category: 'Enterprise Software',
    tag: 'Deployed',
    url: null,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
    description: 'Custom enterprise web solution for sugar factory operations — production tracking, inventory management, quality control, and workforce scheduling.',
    technologies: ['Python', 'PostgreSQL', 'JavaScript'],
    year: '2023',
  },
];

const MAINTENANCE = [
  { title: 'Smart Auto Electrics', url: 'https://smartautoelectrics.co.uk/', type: 'Website Maintenance', since: '2024', icon: '🔧' },
  { title: 'H&H Tech Solutions', url: 'https://hhtechsolutions.co.uk/', type: 'Hosting & Maintenance', since: '2024', icon: '🖥️' },
  { title: 'Phdians', url: 'https://phdians.org/', type: 'Platform Maintenance', since: '2024', icon: '🎓' },
  { title: 'Cafe Lamees', url: 'https://test.cafelamees.co.uk/', type: 'Website Maintenance', since: '2024', icon: '☕' },
];

const CATEGORIES = ['All', 'Web Development', 'E-Commerce', 'Mobile App', 'AI / ML', 'Enterprise Software'];

const categoryColors = {
  'Web Development':     'bg-sky-500/15 text-sky-300 border-sky-500/30',
  'E-Commerce':          'bg-violet-500/15 text-violet-300 border-violet-500/30',
  'Mobile App':          'bg-purple-500/15 text-purple-300 border-purple-500/30',
  'AI / ML':             'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  'Enterprise Software': 'bg-orange-500/15 text-orange-300 border-orange-500/30',
};

/* ─── Animated Divider ──────────────────────────────────────────────── */
const AnimatedDivider = () => {
  const pref = useReducedMotion();
  if (pref) return <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />;
  return (
    <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 1.2, ease: 'easeOut' }}
      className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent origin-left" />
  );
};

/* ─── Tag Pill ──────────────────────────────────────────────────────── */
const TagPill = ({ tag }) => (
  <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1 text-xs text-gray-300 font-medium">
    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${tag === 'Live' ? 'bg-green-400 animate-pulse' : 'bg-amber-400'}`} />
    {tag}
  </span>
);

/* ─── Featured Card (full-width) ─────────────────────────────────────── */
function FeaturedCard({ project }) {
  const handleClick = () => { if (project.url) window.open(project.url, '_blank', 'noopener,noreferrer'); };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true, amount: 0.15 }}
      onClick={handleClick}
      className={`group relative bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800
        md:col-span-2 transition-all duration-500 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10
        ${project.url ? 'cursor-pointer' : 'cursor-default'}`}>

      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[380px]">
        {/* Image */}
        <div className="relative overflow-hidden min-h-[260px] md:min-h-0">
          <img src={project.image} alt={`${project.title} – Aarmbh InfoTech`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-900/20 to-neutral-900/70 hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent md:hidden" />
          <div className="absolute top-5 left-5 flex gap-2 flex-wrap">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${categoryColors[project.category] || ''}`}>
              {project.category}
            </span>
            <TagPill tag={project.tag} />
          </div>
          {project.url && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-amber-400 text-gray-950 font-bold px-6 py-2.5 rounded-full flex items-center gap-2 text-sm shadow-xl">
                <i className="fas fa-external-link-alt text-xs" /> Open Live Site
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-8 md:p-10 flex flex-col justify-center relative z-10">
          <span className="text-xs font-mono text-amber-400/60 uppercase tracking-widest mb-3">Featured Project · {project.year}</span>
          <h3 className="text-3xl font-black text-white mb-2 group-hover:text-amber-300 transition-colors leading-tight">{project.title}</h3>
          <p className="text-amber-500/70 text-xs font-bold uppercase tracking-widest mb-5">{project.client}</p>
          <p className="text-gray-400 leading-relaxed mb-7">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span key={i} className="bg-neutral-800 text-gray-400 px-3 py-1.5 rounded-lg text-xs border border-neutral-700">{tech}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-full transition-all duration-700 rounded-b-3xl" />
    </motion.article>
  );
}

/* ─── Standard Card ─────────────────────────────────────────────────── */
function ProjectCard({ project, index }) {
  const handleClick = () => { if (project.url) window.open(project.url, '_blank', 'noopener,noreferrer'); };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.09, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.12 }}
      onClick={handleClick}
      className={`group relative bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800
        transition-all duration-500 hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-500/8 hover:-translate-y-1.5
        ${project.url ? 'cursor-pointer' : 'cursor-default'}`}>

      {/* Image */}
      <div className="relative overflow-hidden h-52">
        <img src={project.image} alt={`${project.title} – Aarmbh InfoTech`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent" />

        <div className="absolute top-4 left-4 flex gap-2 flex-wrap items-center">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${categoryColors[project.category] || 'bg-amber-500/15 text-amber-300 border-amber-500/30'}`}>
            {project.category}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <TagPill tag={project.tag} />
        </div>

        {/* Hover overlay CTA */}
        {project.url && (
          <div className="absolute inset-0 flex items-center justify-center bg-amber-500/0 group-hover:bg-amber-500/5 transition-all duration-500">
            <div className="opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 bg-amber-400 text-gray-950 font-bold px-5 py-2 rounded-full flex items-center gap-2 text-sm shadow-lg">
              <i className="fas fa-external-link-alt text-xs" /> View Live
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-lg font-bold text-white leading-tight group-hover:text-amber-300 transition-colors duration-300">{project.title}</h3>
          <span className="text-gray-700 text-xs font-mono flex-shrink-0 mt-0.5">{project.year}</span>
        </div>
        <p className="text-amber-500/70 text-xs font-bold uppercase tracking-wide mb-3">{project.client}</p>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">{project.description}</p>

        {/* Tech */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech, i) => (
            <span key={i} className="bg-neutral-800 text-gray-500 px-2.5 py-1 rounded-md text-xs border border-neutral-700 group-hover:border-neutral-600 transition-colors">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
    </motion.article>
  );
}

/* ─── Main Component ────────────────────────────────────────────────── */
export default function Projects() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    document.title = 'Portfolio & Projects | Web, App & AI – Aarmbh InfoTech';
  }, []);

  const filtered = activeFilter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === activeFilter);
  const [featured, ...rest] = filtered;

  return (
    <div className="pt-16 min-h-screen bg-gray-950 text-white">

      {/* ══════════════════════════ HERO ══════════════════════════ */}
      <section className="relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/6 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-500/4 rounded-full blur-[100px]" />
          {/* Subtle grid */}
          <div className="absolute inset-0 opacity-[0.025]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.6) 1px,transparent 1px)',
            backgroundSize: '64px 64px',
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            {/* Eyebrow */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-amber-400" />
              <span className="text-amber-400 text-sm font-bold uppercase tracking-[0.2em]">Portfolio</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.02] mb-6 tracking-tight">
              Built with craft.{' '}
              <br className="hidden sm:block" />
              <span className="relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
                  Shipped to the world.
                </span>
                <motion.span className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"
                  initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ delay: 1, duration: 0.9 }} />
              </span>
            </h1>

            <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
              Every card below is a live, working product. Click any project to explore the site we shipped.
            </p>
          </motion.div>

          {/* Metrics */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.7 }}
            className="flex flex-wrap gap-x-12 gap-y-6 mt-14 pt-10 border-t border-neutral-800">
            {[
              { value: '10+', label: 'Shipped Products' },
              { value: '7', label: 'Live Websites' },
              { value: '4+', label: 'Countries Served' },
              { value: '4', label: 'Active Retainers' },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col">
                <span className="text-4xl font-black text-amber-400 leading-none tabular-nums">{value}</span>
                <span className="text-gray-600 text-xs mt-1.5 uppercase tracking-widest">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatedDivider />

      {/* ══════════════════════════ FILTER BAR ═════════════════════ */}
      <div className="sticky top-16 z-30 bg-gray-950/90 backdrop-blur-md border-b border-neutral-800/60 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto scrollbar-none">
            {CATEGORIES.map(cat => {
              const count = cat === 'All' ? PROJECTS.length : PROJECTS.filter(p => p.category === cat).length;
              return (
                <button key={cat} onClick={() => setActiveFilter(cat)}
                  className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 flex-shrink-0 ${
                    activeFilter === cat
                      ? 'bg-amber-400 text-gray-950 border-amber-400 shadow-lg shadow-amber-400/20'
                      : 'bg-transparent text-gray-500 border-neutral-700 hover:border-amber-400/50 hover:text-amber-300'
                  }`}>
                  {cat}
                  <span className={`ml-2 text-xs ${activeFilter === cat ? 'text-gray-700' : 'text-gray-700'}`}>({count})</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ══════════════════════════ PROJECT GRID ════════════════════ */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div key={activeFilter}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}>
              {filtered.length === 0 ? (
                <div className="text-center py-24 text-gray-700">
                  <i className="fas fa-folder-open text-5xl mb-4 block" />
                  <p className="text-lg">No projects in this category yet.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Featured: spans both columns */}
                  {featured && <FeaturedCard project={featured} />}
                  {/* Rest: normal 2-col grid */}
                  {rest.map((project, i) => (
                    <ProjectCard key={project.id} project={project} index={i} />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <AnimatedDivider />

      {/* ══════════════════════════ MAINTENANCE CLIENTS ═════════════ */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-10 bg-amber-400" />
                <span className="text-amber-400 text-sm font-bold uppercase tracking-widest">Ongoing</span>
              </div>
              <h2 className="text-4xl font-black text-white mb-3">Maintenance & Retainer Clients</h2>
              <p className="text-gray-400 max-w-xl">
                These clients trust us to keep their live products fast, secure, and up-to-date — with hosting management, monitoring, and continuous improvements.
              </p>
            </div>
            <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-5 py-2.5 text-green-400 text-sm font-semibold flex-shrink-0">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              {MAINTENANCE.length} Active Contracts
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {MAINTENANCE.map((item, i) => (
              <motion.a key={i} href={item.url} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }}
                className="group block bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-amber-500/40 hover:bg-neutral-800/50 transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl mb-5">{item.icon}</div>
                <h3 className="text-white font-bold text-base mb-1 group-hover:text-amber-300 transition-colors">{item.title}</h3>
                <p className="text-amber-500/60 text-xs font-bold uppercase tracking-widest mb-4">{item.type}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-700 text-xs">Client since {item.since}</span>
                  <span className="flex items-center gap-1.5 text-green-400 text-xs font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Active
                  </span>
                </div>
                <div className="pt-4 border-t border-neutral-800 flex items-center gap-2 text-gray-600 text-xs group-hover:text-amber-400 transition-colors">
                  <i className="fas fa-external-link-alt text-[10px]" /> Visit live site
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* ══════════════════════════ INDUSTRIES MARQUEE ══════════════ */}
      <section className="py-16 bg-gray-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-black text-white mb-2">Industries We've Served</h2>
            <p className="text-gray-600">Real products, across sectors, for clients in India and internationally.</p>
          </motion.div>
        </div>

        <div className="relative flex overflow-hidden gap-5"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)' }}>
          {[0, 1].map(d => (
            <div key={d} className="flex gap-5 flex-shrink-0 animate-marquee">
              {[
                { icon: '🏎️', label: 'Automotive' }, { icon: '🎓', label: 'Education' },
                { icon: '💻', label: 'IT & Tech' }, { icon: '🚗', label: 'Transport' },
                { icon: '☕', label: 'Food & Beverage' }, { icon: '🛋️', label: 'E-commerce' },
                { icon: '💍', label: 'Events' }, { icon: '📣', label: 'Marketing' },
                { icon: '🏭', label: 'Industrial / ERP' }, { icon: '🤖', label: 'AI & Automation' },
              ].map((item, i) => (
                <div key={i} className="flex-shrink-0 flex items-center gap-3 bg-neutral-900 border border-neutral-800 rounded-full px-6 py-3 hover:border-amber-500/30 transition-colors">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-gray-400 text-sm font-medium whitespace-nowrap">{item.label}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <AnimatedDivider />

      {/* ══════════════════════════ PROCESS ════════════════════════ */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-4xl font-black text-white mb-3">How Every Project Starts</h2>
            <p className="text-gray-500 text-lg">A clear, proven path from your idea to a live product.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              { n: '01', icon: 'fas fa-comments', title: 'Discovery Call', desc: 'Free 30-min call to understand your goals, audience, and requirements.' },
              { n: '02', icon: 'fas fa-drafting-compass', title: 'Proposal & Design', desc: 'Transparent quote, wireframes, and visual direction — before any code is written.' },
              { n: '03', icon: 'fas fa-code', title: 'Build & Review', desc: 'Agile sprints with weekly demos. You see real progress, not just promises.' },
              { n: '04', icon: 'fas fa-rocket', title: 'Launch & Support', desc: 'We deploy, monitor, and support — with a free 2-month warranty on every project.' },
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: i * 0.1 }} viewport={{ once: true }}
                className="relative bg-neutral-900 rounded-2xl p-7 border border-neutral-800 hover:border-amber-500/30 transition-all">
                <span className="text-6xl font-black text-neutral-800 absolute top-4 right-5 leading-none select-none">{step.n}</span>
                <i className={`${step.icon} text-2xl text-amber-400 mb-5 block`} />
                <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* ══════════════════════════ CTA ════════════════════════════ */}
      <section className="py-28 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.07),transparent_70%)]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <p className="text-amber-400 text-sm font-bold uppercase tracking-[0.2em] mb-5">Ready to build?</p>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Your product could be<br />
              <span className="text-amber-400">our next showcase.</span>
            </h2>
            <p className="text-gray-500 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Free consultation · Custom proposal · On-time delivery · 2-month support warranty
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button onClick={() => navigate('/contact')} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                className="px-10 py-4 rounded-2xl font-bold text-gray-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 shadow-xl shadow-amber-500/20 transition-all text-base">
                🚀 Start Your Project
              </motion.button>
              <motion.button onClick={() => navigate('/services')} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                className="px-10 py-4 rounded-2xl font-semibold border-2 border-neutral-700 text-gray-400 hover:border-amber-400/50 hover:text-amber-300 transition-all text-base">
                Explore Services →
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global styles */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}