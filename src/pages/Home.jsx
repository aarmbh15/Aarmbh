import React, { useEffect, useMemo, useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useReducedMotion,
  useMotionValue,
  animate,
  useSpring,
} from 'framer-motion';

const primaryGold = '#f7dab2';
const accentGold = '#F59E0B';
const deepestBlack = 'bg-gray-950';
const darkBg = 'bg-gray-900';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=1920&q=80';

const FEATURES = [
  {
    title: 'Fast Delivery',
    description: 'Quick turnaround times without compromising quality. We deliver projects on time, every time.',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  },
  {
    title: 'Secure & Reliable',
    description: 'Your projects are safe with us. We follow best practices for security and data protection.',
    img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  },
  {
    title: 'Clear Communication',
    description: 'Regular updates and transparent communication throughout the development process.',
    img: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
  },
  {
    title: 'Modern Tech Stack',
    description: 'We use the latest technologies and frameworks to build scalable, maintainable solutions.',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
  },
  {
    title: 'Competitive Pricing',
    description: 'High-quality development services at competitive rates. No hidden fees or surprises.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock support for ongoing projects and post-launch maintenance.',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
];

const PROCESS_STEPS = [
  { title: 'Discovery & Planning', description: 'We discuss your goals, define scope, and create a detailed roadmap for success.' },
  { title: 'Design & Prototype', description: 'Crafting beautiful, intuitive UI/UX with interactive prototypes for your feedback.' },
  { title: 'Development', description: 'Building scalable, clean code using modern frameworks and best practices.' },
  { title: 'Launch & Support', description: 'Deploy with confidence and provide ongoing maintenance and 24/7 support.' },
];

const TESTIMONIALS = [
  { name: 'Hammad Akbar', role: 'CEO', company: 'H&H Tech Solutions', rating: 5, text: 'Aarmbh transformed our idea into a scalable platform in record time. Their communication and expertise are unmatched.' },
  { name: 'Rohinit Gitay', role: 'Product Lead', company: 'Phdians', rating: 5, text: 'Professional, reliable, and incredibly skilled. They delivered beyond expectations with zero downtime.' },
  { name: 'Priya Sharma', role: 'Founder', company: 'EduLearn', rating: 5, text: "The team's attention to detail and proactive updates made the entire process seamless. Highly recommend!" },
];

const PROJECTS = [
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
    category: 'E-commerce',
    tag: 'Live',
    url: 'https://furniture-420c3.web.app',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    description: 'Sophisticated furniture e-commerce platform with product showcases, advanced filtering, and a luxurious browsing experience designed to drive premium sales.',
    technologies: ['React.js', 'Firebase', 'Tailwind CSS'],
    year: '2024',
  },
];


/* ---------- FLIP CARD ---------- */
const FlipCard = React.memo(({ feature, index, isInView }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const prefersReducedMotion = useReducedMotion();
  const toggle = () => { if (!prefersReducedMotion && window.innerWidth >= 768) setIsFlipped(v => !v); };
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative w-full h-80 md:cursor-pointer perspective-1000"
      onMouseEnter={toggle} onMouseLeave={toggle} onClick={toggle}
    >
      <motion.div
        className="absolute inset-0 w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped && !prefersReducedMotion && window.innerWidth >= 768 ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
      >
        <div className="absolute inset-0 h-full rounded-2xl shadow-2xl overflow-hidden bg-white/10 border border-white/20 backdrop-blur-md backface-hidden">
          <img src={feature.img} alt={feature.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-amber-400/20 rounded-full flex items-center justify-center text-amber-400">{feature.icon}</div>
            <h3 className="text-xl sm:text-2xl font-semibold text-amber-400">{feature.title}</h3>
            <p className="text-gray-400 text-xs mt-2 md:hidden">{feature.description}</p>
          </div>
        </div>
        <div className="absolute inset-0 h-full rounded-2xl shadow-2xl bg-gradient-to-br from-amber-500/10 to-amber-600/10 border border-amber-400/30 backdrop-blur-md p-6 flex flex-col justify-center text-center backface-hidden" style={{ transform: 'rotateY(180deg)' }}>
          <div className="w-12 h-12 mx-auto mb-3 text-amber-400 opacity-70">{feature.icon}</div>
          <h3 className="text-lg sm:text-xl font-bold text-amber-300 mb-2">{feature.title}</h3>
          <p className="text-gray-200 text-sm leading-relaxed">{feature.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
});

/* ---------- REFINED STAT CARD ---------- */
const StatCard = React.memo(({ stat, index, isInView }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  React.useEffect(() => {
    if (!isInView) return;
    // Faster, smoother animation duration for a snappier feel
    const controls = animate(count, stat.end, { 
      duration: 2.5, 
      ease: [0.16, 1, 0.3, 1], 
      delay: index * 0.1 
    });
    return controls.stop;
  }, [isInView, count, stat.end, index]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative group p-10 md:p-14 border-r border-b border-white/10 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 1. Subtle Background Hover Glow */}
      <div className="absolute inset-0 bg-amber-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* 2. Number Layout */}
      <div className="relative z-10 flex items-baseline gap-1 mb-3">
        <motion.span className="text-4xl md:text-6xl font-light tracking-tighter text-white group-hover:text-amber-400 transition-colors duration-500">
          {rounded}
        </motion.span>
        <span className="text-amber-500 text-xl font-light">{stat.suffix}</span>
      </div>

      {/* 3. Label - Micro Typography */}
      <div className="relative z-10 text-slate-500 text-[10px] uppercase tracking-[0.2em] font-medium text-center">
        {stat.label}
      </div>

      {/* 4. Architectural Accent (Bottom line that grows on hover) */}
      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-500 group-hover:w-full transition-all duration-700 ease-in-out" />
    </motion.div>
  );
});
/* ---------- STAR RATING ---------- */
const StarRating = ({ rating }) => (
  <div className="flex gap-1">
    {[1,2,3,4,5].map(star => (
      <svg key={star} className={`w-5 h-5 ${star <= rating ? 'text-amber-400 fill-amber-400' : 'text-gray-600'}`} viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

/* ---------- TESTIMONIAL CARD ---------- */
const TestimonialCard = React.memo(({ review, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-500/20 flex flex-col h-full"
  >
    <StarRating rating={review.rating} />
    <p className="text-gray-300 my-4 flex-grow italic leading-relaxed">"{review.text}"</p>
    <div className="flex items-center gap-3 mt-auto">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-xl font-bold text-gray-900">
        {review.name[0]}
      </div>
      <div>
        <p className="font-semibold text-amber-300">{review.name}</p>
        <p className="text-xs text-gray-500">{review.role}, {review.company}</p>
      </div>
    </div>
  </motion.div>
));

/* ---------- ANIMATED DIVIDER ---------- */
const AnimatedDivider = () => {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) return <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />;
  return (
    <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 1.2, ease: 'easeOut' }}
      className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent origin-left" />
  );
};

/* ---------- FAQ ITEM COMPONENT ---------- */
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/5 rounded-2xl bg-[#080808] overflow-hidden transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
      >
        <span className="text-slate-200 text-sm font-medium tracking-wide">{question}</span>
        <motion.span 
          animate={{ rotate: isOpen ? 135 : 0 }}
          className="text-amber-500 text-xl font-light"
        >
          +
        </motion.span>
      </button>
      
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="p-6 pt-0 text-slate-400 text-sm leading-relaxed border-t border-white/5">
          {answer}
        </div>
      </motion.div>
    </div>
  );
};

/* ---------- LEAD CAPTURE MODAL ---------- */
const LeadModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(onClose, 2500);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 120 }}
        className="bg-gray-900 border border-amber-500/30 rounded-2xl p-8 max-w-md w-full shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {!submitted ? (
          <>
            <div className="text-center mb-6">
              <div className="text-amber-400 text-4xl mb-3">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-2">Get a Free Consultation</h3>
              <p className="text-gray-400 text-sm">Tell us about your project — we'll get back within 24 hours.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input required type="text" placeholder="Your Name *" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none" />
              <input required type="email" placeholder="Email Address *" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none" />
              <input type="tel" placeholder="Phone Number" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none" />
              <select value={form.service} onChange={e => setForm({...form, service: e.target.value})}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-amber-400 focus:outline-none">
                <option value="">What do you need?</option>
                <option value="web">Web Development</option>
                <option value="app">Mobile App</option>
                <option value="ai">AI / ML</option>
                <option value="ui">UI/UX Design</option>
                <option value="other">Other</option>
              </select>
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} type="submit"
                className="w-full py-3 rounded-xl font-bold text-gray-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 transition-all shadow-lg">
                Request Free Consultation →
              </motion.button>
            </form>
            <button onClick={onClose} className="mt-4 w-full text-gray-500 hover:text-gray-300 text-sm text-center">No thanks</button>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
            <p className="text-gray-400">We'll contact you within 24 hours.</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

/* ---------- TECHNOLOGY BADGES ---------- */
const TECH_STACK = ['React.js', 'Node.js', 'Flutter', 'Python', 'PHP', 'MongoDB', 'Firebase', 'AWS', 'Tailwind CSS', 'TypeScript', 'PostgreSQL', 'Docker'];

/* ---------- MAIN COMPONENT ---------- */
function HomeComponent() {
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();
  const [showLeadModal, setShowLeadModal] = useState(false);

  const { scrollY, scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const statsRef = useRef(null);
  const processRef = useRef(null);
  const reviewsRef = useRef(null);
  const techRef = useRef(null);

  const yHeroBg = useTransform(scrollY, [0, 1000], [0, -200]);
  const opacityPrevSection = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const features = useMemo(() => FEATURES, []);
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: '-150px' });
  const isStatsInView = useInView(statsRef, { once: true, margin: '-150px' });
  const isProcessInView = useInView(processRef, { once: true, margin: '-150px' });
  const isTechInView = useInView(techRef, { once: true, margin: '-100px' });

  useEffect(() => {
    document.title = 'Aarmbh InfoTech | Web, App & AI Development – Pune, India';
    const meta = document.querySelector('meta[name="description"]') || document.createElement('meta');
    meta.setAttribute('name', 'description');
    meta.setAttribute('content', 'Expert web, mobile app & AI development company in Pune. Free consultation available. React, Node.js, Flutter, Python & more.');
    document.head.appendChild(meta);

    const link = document.createElement('link');
    link.rel = 'preload'; link.as = 'image'; link.href = HERO_IMAGE;
    if (!document.getElementById('hero-preload')) { link.id = 'hero-preload'; document.head.appendChild(link); }

    // Show lead modal after 15 seconds (exit-intent alternative for mobile)
    const timer = setTimeout(() => setShowLeadModal(true), 15000);
    return () => clearTimeout(timer);
  }, []);

  const goContact = useCallback(() => navigate('/contact'), [navigate]);
  const goProjects = useCallback(() => navigate('/projects'), [navigate]);

  return (
    <div className={`pt-16 ${deepestBlack} overflow-x-hidden`}>
      {/* <LeadModal isOpen={showLeadModal} onClose={() => setShowLeadModal(false)} /> */}

      {/* ═══════════════════════════════════════ HERO ═══════════════════════════════════════ */}
{/* ═══════════════════════════════════════ HOME HERO (FLAGSHIP) ═══════════════════════════════════════ */}
{/* ═══════════════════════════════════════ HOME HERO (RESPONSIVE) ═══════════════════════════════════════ */}
<motion.section 
  ref={heroRef} 
  className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]"
  style={{ opacity: opacityPrevSection }} 
>
  {/* 1. BACKGROUND LAYER */}
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:50px_50px]" />
    
    <motion.img
      src={HERO_IMAGE}
      alt="Engineering Core"
      className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale mix-blend-luminosity"
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 4, ease: 'easeOut' }}
    />
    
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_90%)]" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]" />
  </div>

  {/* 2. HUD ACCENTS (Hidden on mobile to prevent overlap) */}
  <div className="absolute top-32 left-10 hidden lg:block overflow-hidden">
    <motion.div 
      initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1 }}
      className="flex flex-col gap-2 border-l border-amber-500 pl-4"
    >
      <span className="font-mono text-[8px] text-white/80 tracking-[0.5em] uppercase">Status // Ready</span>
      <span className="font-mono text-[8px] text-white/80 tracking-[0.5em] uppercase">Loc // Pune</span>
    </motion.div>
  </div>

  {/* 3. MAIN CONTENT */}
  <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
    
    {/* System Badge */}
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="inline-flex items-center gap-3 bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-full px-4 md:px-5 py-2 mb-8 md:mb-12"
    >
      <div className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-green-500"></span>
      </div>
      <span className="font-mono text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-slate-300">
        Active Node // Available for Global Engagement
      </span>
    </motion.div>

    {/* Original Headline: Preserved Content */}
    <motion.h1 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-5xl sm:text-6xl md:text-8xl lg:text-[8.5vw] font-light text-white tracking-tighter leading-[1] md:leading-[0.8] mb-8 md:mb-12"
    >
      Digital <br /> 
      <span className="text-amber-500 italic font-serif">Infrastructure.</span>
    </motion.h1>

    {/* Original Subtext: Preserved Content */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="max-w-2xl mx-auto mb-12 md:mb-16"
    >
      <p className="text-slate-400 text-base md:text-xl font-light leading-relaxed px-2 md:px-0">
        Transforming complex business logic into high-velocity digital products. 
        We deploy the <span className="text-white border-b border-amber-500/30">advanced engineering</span> 
        required to outpace the competition and scale without friction.
      </p>
    </motion.div>

    {/* 4. CALLS TO ACTION (Stacked on mobile for better UX) */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8"
    >
      <button 
        onClick={() => setShowLeadModal(true)}
        className="w-full sm:w-auto group relative flex items-center justify-center gap-6 px-10 py-5 rounded-full bg-amber-500 text-black font-bold text-xs uppercase tracking-[0.2em] transition-all hover:bg-amber-400"
      >
        <span>Initiate Consultation</span>
        <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
      </button>
      
      <button 
        onClick={goProjects}
        className="group flex items-center gap-4 text-white text-[10px] uppercase tracking-[0.4em] font-bold py-2"
      >
        <span className="relative">
          View Portfolio
          <div className="absolute -bottom-2 left-0 w-8 h-[1px] bg-amber-500 group-hover:w-full transition-all duration-500" />
        </span>
      </button>
    </motion.div>
  </div>
  
  {/* Scroll Indicator */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4 opacity-30">
    <div className="w-px h-12 bg-gradient-to-b from-amber-500 to-transparent" />
    <span className="font-mono text-[8px] uppercase tracking-[0.5em] text-slate-500">Scroll</span>
  </div>
</motion.section>

      <AnimatedDivider />

      {/* ═══════════════════════════════════════ MINIMALIST TECH STRIP ═══════════════════════════════════════ */}
<section className="py-6 bg-[#050505] border-y border-white/[0.05]">
  <div className="relative flex items-center overflow-hidden">
    
    {/* Infinite Loop Container */}
    <motion.div 
      className="flex whitespace-nowrap gap-16 items-center"
      animate={{ x: ['0%', '-50%'] }}
      transition={{ 
        duration: 35, 
        repeat: Infinity, 
        ease: "linear" 
      }}
    >
      {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
        <div key={`${tech}-${i}`} className="flex items-center gap-12">
          <span className="text-[12px] uppercase tracking-[0.4em] text-white/80 font-medium select-none">
            {tech}
          </span>
          {/* A tiny, low-opacity separator */}
          <div className="w-1 h-1 rounded-full bg-white/10" />
        </div>
      ))}
    </motion.div>

    {/* Intense Fades: This makes the text "appear" and "disappear" softly */}
    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />
  </div>
</section>

      <AnimatedDivider />

      {/* ═══════════════════════════════════════ REFINED STATS ═══════════════════════════════════════ */}
<section ref={statsRef} className="py-24 bg-[#050505] overflow-hidden border-y border-white/[0.03]">
  <div className="max-w-6xl mx-auto px-6">
    
    {/* Minimalist Header - Left Aligned to match Capabilities */}
    <div className="mb-16 border-l border-amber-500/50 pl-4">
      <h2 className="text-[10px] uppercase tracking-[0.6em] text-amber-500 font-bold mb-1">
        Impact
      </h2>
      <p className="text-2xl md:text-3xl font-light text-white tracking-tight">
        Our Track Record.
      </p>
    </div>

    {/* Stats Grid with 1px Divider Logic */}
    <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
      {[
        // { end: 10, label: 'Projects Completed', suffix: '+' },
        // { end: 90, label: 'Client Satisfaction', suffix: '%' },
        // { end: 4, label: 'Expert Developers', suffix: '+' },
        // { end: 24, label: 'Support Available', suffix: '/7' },
        // { end: 99, label: 'Lighthouse Score', suffix: '%' },
        { end: 100, label: 'Responsive Design', suffix: '%' },
        { end: 40, label: 'Conversion Increase', suffix: '%' },
        { end: 2, label: 'Average Build Time', suffix: 'wk' },
        // { end: 15, label: 'Industries Transformed', suffix: '+' },
        { end: 100, label: 'Custom Components', suffix: '%' },
        // { end: 8, label: 'Hours Avg Support', suffix: '<' },
        // { end: 5, label: 'Design Iterations', suffix: '+' } 
      ].map((s, i) => (
        <StatCard key={i} stat={s} index={i} isInView={isStatsInView} />
      ))}
    </div>
  </div>
</section>

<AnimatedDivider />

{/* ═══════════════════════════════════════ REFINED FEATURED WORK ═══════════════════════════════════════ */}
<section className="py-24 bg-[#050505]">
  <div className="max-w-6xl mx-auto px-6">
    
    {/* Header */}
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
      <div className="border-l border-amber-500/50 pl-4">
        <h2 className="text-[10px] uppercase tracking-[0.6em] text-amber-500 font-bold mb-1">
          Portfolio
        </h2>
        <p className="text-2xl md:text-3xl font-light text-white tracking-tight">
          Selected Projects.
        </p>
      </div>
      
      <button 
        onClick={() => navigate('/projects')}
        className="hidden md:flex items-center gap-2 text-white hover:text-amber-500 transition-colors group text-[12px] tracking-[0.3em] uppercase font-mono"
      >
        View All Work 
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </button>
    </div>

    {/* Project Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {/* Ensure PROJECTS exists and has items before mapping */}
      {PROJECTS && PROJECTS.length > 0 ? PROJECTS.slice(0, 3).map((project, i) => (
        <motion.div 
          key={project.id || i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          onClick={() => project.url && window.open(project.url, '_blank')}
          className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/5 bg-[#080808] cursor-pointer"
        >
          {/* Image Layer */}
          <div className="absolute inset-0 w-full h-full">
             <img 
              src={project.image} 
              className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700" 
              alt={project.title} 
              loading="lazy"
            />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90" />

          {/* Project Content */}
          <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-amber-500 font-mono text-[9px] tracking-[0.3em] uppercase">
                {project.category}
              </span>
              <h3 className="text-xl font-light text-white mt-2 group-hover:text-amber-200 transition-colors">
                {project.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {project.technologies && project.technologies.slice(0, 3).map(tech => (
                  <span key={tech} className="text-[8px] text-slate-400 border border-white/10 px-2 py-1 rounded-full uppercase tracking-widest bg-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )) : (
        <p className="text-slate-500 col-span-full text-center py-10">No projects found.</p>
      )}
    </div>

    {/* Mobile "View More" Button */}
    <div className="flex md:hidden justify-center">
       <button 
        onClick={() => navigate('/projects')}
        className="w-full py-4 rounded-xl border border-white/10 text-white text-[10px] tracking-[0.3em] uppercase font-mono active:bg-white/5 transition-all"
      >
        Explore Full Portfolio
      </button>
    </div>
  </div>
</section>

      <AnimatedDivider />

{/* ═══════════════════════════════════════ REFINED PROCESS ═══════════════════════════════════════ */}
<section ref={processRef} className="py-24 bg-[#050505] overflow-hidden">
  <div className="max-w-5xl mx-auto px-6">
    
    {/* Header */}
    <div className="mb-20 border-l border-amber-500/50 pl-4">
      <h2 className="text-[10px] uppercase tracking-[0.6em] text-amber-500 font-bold mb-1">
        Workflow
      </h2>
      <p className="text-2xl md:text-3xl font-light text-white tracking-tight">
        How we bring ideas to life.
      </p>
    </div>

    <div className="relative">
      {/* 1. THE STATIC BACKGROUND LINE: Thin and dim */}
      <div className="absolute left-[11px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 md:-translate-x-1/2 z-0" />

      {/* 2. THE DYNAMIC TRACE LINE: This grows as the user scrolls */}
      {/* Note: Requires 'useScroll' and 'useSpring' from framer-motion in your component top level */}
      <motion.div 
        className="absolute left-[11px] md:left-1/2 top-0 w-[1.5px] bg-gradient-to-b from-amber-600 via-amber-400 to-amber-200 md:-translate-x-1/2 z-0 origin-top shadow-[0_0_15px_rgba(251,191,36,0.4)]"
        style={{ 
          height: "100%", 
          scaleY: useSpring(useScroll({ target: processRef, offset: ["start 0.7", "end 0.5"] }).scrollYProgress, { stiffness: 100, damping: 30 }) 
        }} 
      />

      <div className="space-y-24 md:space-y-32">
        {PROCESS_STEPS.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.2 }} // Starts muted
            whileInView={{ opacity: 1 }} // Lights up when in view
            viewport={{ amount: 0.6 }}
            transition={{ duration: 0.5 }}
            className={`relative flex flex-col md:flex-row items-start md:items-center ${
              i % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* 1. The Connector Dot - Lights up based on Viewport */}
            <div className="absolute left-0 md:left-1/2 w-[24px] h-[24px] rounded-full bg-[#050505] border border-white/20 flex items-center justify-center md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(0,0,0,1)]">
              <motion.div 
                whileInView={{ scale: [1, 1.5, 1], backgroundColor: ["#475569", "#fbbf24", "#fbbf24"] }}
                viewport={{ amount: 0.9 }}
                className="w-1.5 h-1.5 rounded-full bg-slate-600 shadow-[0_0_10px_#fbbf24]" 
              />
            </div>

            {/* 2. The Content Card */}
            <div className="pl-12 md:pl-0 md:w-1/2 group">
              <div className={`flex flex-col ${i % 2 === 0 ? "md:items-start md:pl-16" : "md:items-end md:pr-16"}`}>
                <div className="flex items-center gap-3 mb-2">
                   <span className="font-mono text-[12px] text-amber-500/60 uppercase tracking-widest">
                    Phase 0{i + 1}
                  </span>
                  <div className="h-px w-8 bg-white/10 group-hover:bg-amber-500/40 transition-all" />
                </div>
                
                <h3 className="text-xl md:text-3xl font-light text-white mb-3 group-hover:text-amber-400 transition-colors duration-500">
                  {step.title}
                </h3>
                <p className={`text-slate-500 text-md leading-relaxed max-w-sm transition-colors group-hover:text-slate-300 ${i % 2 === 0 ? "" : "md:text-right"}`}>
                  {step.description}
                </p>
              </div>
            </div>

            {/* 3. Empty Spacer for Desktop Layout */}
            <div className="hidden md:block md:w-1/2" />
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

      <AnimatedDivider />

{/* ═══════════════════════════════════════ FEATURES (HYBRID VIEW) ═══════════════════════════════════════ */}
<section ref={featuresRef} className="py-32 bg-[#050505] overflow-hidden">
  <div className="max-w-6xl mx-auto px-6">
    
    {/* Header: Original Design */}
    <div className="mb-20 border-l-2 border-amber-500 pl-6">
      <h2 className="text-[10px] uppercase tracking-[0.5em] text-amber-500 font-bold mb-2">
        Capabilities
      </h2>
      <p className="text-4xl md:text-5xl font-light text-white tracking-tight">
        Why partners choose us.
      </p>
    </div>

    {/* List Body */}
    <div className="flex flex-col border-t border-white/10">
      {features.map((f, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="group relative flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-white/5 transition-all duration-500 md:hover:px-6"
        >
          {/* Left Side: Number and Title */}
          <div className="relative z-10 flex items-center gap-8 md:gap-16">
            <span className="font-mono text-[10px] tracking-widest text-slate-600 group-hover:text-amber-500 transition-colors">
              0{i + 1}
            </span>
            <h3 className="text-2xl md:text-3xl font-light tracking-tight text-slate-300 group-hover:text-white transition-all duration-500 md:group-hover:translate-x-3">
              {f.title}
            </h3>
          </div>

          {/* Right Side: Description */}
          <div className="relative z-10 mt-6 md:mt-0 max-w-sm md:text-right">
            <p className="text-slate-500 text-sm md:text-base leading-relaxed group-hover:text-slate-200 transition-colors duration-500">
              {f.description}
            </p>
          </div>

          {/* --- Interactive Layering --- */}

          {/* 1. Desktop Vertical Glow Line (Only active on hover for Desktop) */}
          <div className="hidden md:block absolute left-0 top-0 w-[2px] h-0 bg-amber-500 group-hover:h-full transition-all duration-700 ease-in-out" />
          
          {/* 2. MOBILE SCROLL HIGHLIGHT: 
               This line grows as the user scrolls the card into view on mobile devices.
          */}
          <motion.div 
            className="md:hidden absolute left-[-10px] top-0 w-[2px] bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ amount: 0.5, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          
          {/* 3. Background Gradient Sweep (Original Design) */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        </motion.div>
      ))}
    </div>
  </div>
</section>
      <AnimatedDivider />

    

     {/* ═══════════════════════════════════════ REFINED TESTIMONIALS ═══════════════════════════════════════ */}
<section className="py-24 bg-[#050505] overflow-hidden">
  <div className="max-w-6xl mx-auto px-6 mb-16">
    {/* Left-Aligned Header - Matches your Capabilities & Process */}
    <div className="border-l border-amber-500/50 pl-4">
      <h2 className="text-[10px] uppercase tracking-[0.6em] text-amber-500 font-bold mb-1">
        Voices
      </h2>
      <p className="text-2xl md:text-3xl font-light text-white tracking-tight">
        Trusted by industry leaders.
      </p>
    </div>
  </div>

  {/* Marquee Container with Side Fades */}
  <div className="relative flex overflow-hidden select-none group">
    <motion.div 
      animate={{ x: ['0%', '-50%'] }}
      transition={{ 
        duration: 30, // Slow & premium speed
        repeat: Infinity, 
        ease: "linear" 
      }}
      className="flex whitespace-nowrap gap-6 pr-6"
    >
      {/* We map twice to create the infinite loop effect */}
      {[...TESTIMONIALS, ...TESTIMONIALS].map((r, i) => (
        <div 
          key={i} 
          className="w-[350px] md:w-[450px] bg-white/[0.02] border border-white/5 p-10 rounded-[2rem] flex flex-col justify-between hover:bg-white/[0.04] transition-all duration-500 group/card hover:border-amber-500/20"
        >
          {/* Quote Text */}
          <p className="text-slate-400 text-sm md:text-base leading-relaxed italic whitespace-normal mb-8 group-hover/card:text-slate-200 transition-colors">
            "{r.text}"
          </p>

          {/* Author Info */}
          <div className="flex items-center gap-4">
            {/* Minimalist Monogram Avatar */}
            <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 font-bold text-xs uppercase">
              {r.name[0]}
            </div>
            <div>
              <h4 className="text-white text-sm font-medium tracking-wide">
                {r.name}
              </h4>
              <p className="text-slate-600 text-[9px] uppercase tracking-[0.2em] font-semibold">
                {r.role} • {r.company}
              </p>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
    
    {/* Gradient Overlays: Makes the testimonials 'fade' in and out at the edges */}
    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
  </div>
</section>

      <AnimatedDivider />

      {/* ═══════════════════════════════════════ FAQ SECTION ═══════════════════════════════════════ */}
{/* <section className="py-24 bg-[#050505]">
  <div className="max-w-3xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-[10px] uppercase tracking-[0.6em] text-amber-500 font-bold mb-4">FAQ</h2>
      <p className="text-3xl font-light text-white">Common Inquiries.</p>
    </div>

    <div className="space-y-4">
      {[
        { q: "What is your typical project timeline?", a: "Most MVP projects are delivered within 4-8 weeks, depending on complexity and scope." },
        { q: "Do you provide post-launch support?", a: "Yes, we offer 24/7 technical support and maintenance packages to ensure your platform stays updated." },
        { q: "Who owns the intellectual property?", a: "You do. Once the final payment is cleared, 100% of the code and design assets belong to you." },
        { q: "Which tech stack do you recommend?", a: "We typically suggest React or Next.js for web and Flutter for mobile to ensure the best performance." }
      ].map((item, i) => (
        <FAQItem key={i} question={item.q} answer={item.a} />
      ))}
    </div>
  </div>
</section> */}
<AnimatedDivider />

      {/* ═══════════════════════════════════════ REFINED CTA ═══════════════════════════════════════ */}
{/* ═══════════════════════════════════════ PRECISION CTA ═══════════════════════════════════════ */}
{/* <section className="py-24 bg-[#050505]">
  <div className="max-w-5xl mx-auto px-6">
    <div className="relative border border-white/10 rounded-2xl overflow-hidden bg-[#080808] grid grid-cols-1 lg:grid-cols-2 group">
      
      {/* Left Side: The "Quiet" Invitation */}
      {/* <div className="p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-white/10">
        <span className="text-[10px] uppercase tracking-[0.4em] text-amber-500 font-bold mb-4 block">
          Collaboration
        </span>
        <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-6">
          Ready to bring your <br /> 
          <span className="text-slate-500">vision to reality?</span>
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
          We specialize in turning complex ideas into seamless digital experiences. Reach out for a consultation.
        </p>
      </div> */}

      {/* Right Side: The "Direct" Action */}
      {/* <div className="p-10 md:p-16 flex flex-col justify-center bg-gradient-to-br from-transparent to-amber-500/[0.02]">
        <div className="space-y-8"> */}
          {/* Action 1: Primary */}
          {/* <motion.button
            onClick={() => navigate("/contact")}
            whileHover={{ x: 5 }}
            className="flex items-center gap-4 group/btn"
          >
            <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-black transition-transform group-hover/btn:scale-110">
              <span className="text-xl">→</span>
            </div>
            <div className="text-left">
              <p className="text-white font-medium text-sm uppercase tracking-widest">Start Project</p>
              <p className="text-slate-500 text-[10px]">Average response: 24h</p>
            </div>
          </motion.button>

          <div className="h-px w-full bg-white/5" /> */}

          {/* Action 2: Secondary / Contact */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-25">
            <div className="space-y-1">
              <p className="text-[9px] uppercase tracking-widest text-slate-600">Email us</p>
              <a href="mailto:contact@aarmbhinfotech.com" className="text-white text-sm hover:text-amber-500 transition-colors">
                contact@aarmbhinfotech.com
              </a>
            </div>
            <div className="space-y-1">
              <p className="text-[9px] uppercase tracking-widest text-slate-600">Call us</p>
              <p className="text-white text-sm">+91 98810 33442</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Subtle Interactive Glow */}
      {/* <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    </div>
  </div> */}
{/* // </section> */} 

      {/* GLOBAL STYLES */}
      <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
      `}</style>
    </div>
  );
}

const Home = React.memo(HomeComponent);
export default Home;