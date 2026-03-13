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

/* ---------- STAT CARD ---------- */
const StatCard = React.memo(({ stat, index, isInView }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const display = useTransform(rounded, v => `${v}${stat.suffix}`);
  React.useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, stat.end, { duration: 4.2, ease: [0.22, 1, 0.36, 1], delay: index * 0.25 });
    return controls.stop;
  }, [isInView, count, stat.end, index]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ scale: 1.08 }}
      className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-amber-500/40 transition-colors"
    >
      <motion.div className="text-4xl font-bold mb-2" style={{ color: primaryGold }}>
        <motion.span>{display}</motion.span>
      </motion.div>
      <div className="text-gray-400 text-sm">{stat.label}</div>
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
      <LeadModal isOpen={showLeadModal} onClose={() => setShowLeadModal(false)} />

      {/* ═══════════════════════════════════════ HERO ═══════════════════════════════════════ */}
      <motion.section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity: opacityPrevSection }} aria-labelledby="hero-heading">
        <motion.img src={HERO_IMAGE} alt="Expert development team working" fetchPriority="high"
          style={{ y: yHeroBg }} className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0.9 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.6, ease: 'easeOut' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90 z-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent blur-3xl pointer-events-none" />

        <motion.div className="relative z-20 max-w-6xl mx-auto px-6 lg:px-8 text-center text-white"
          initial="hidden" animate="visible"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } } }}>

          {/* Trust badge */}
          <motion.div variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
            className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 rounded-full px-4 py-2 mb-6 text-amber-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block"></span>
            ✅ Available for new projects — Free consultation
          </motion.div>

          <motion.h1 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: 'easeOut' }} id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white mb-4">
            Expert Development Team
            <motion.span className="block text-amber-400 mt-2"
              animate={{ textShadow: ['0 0 8px rgba(251,191,36,0)', '0 0 30px rgba(251,191,36,0.4)', '0 0 8px rgba(251,191,36,0)'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
              Ready to Build Your Vision
            </motion.span>
          </motion.h1>

          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-200 mb-4">
            We build scalable web apps, mobile apps & AI solutions that grow your business.
            React · Node.js · Flutter · Python · AI/ML
          </motion.p>

          {/* Social proof micro-text */}
          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="flex items-center justify-center gap-4 mb-8 text-gray-400 text-sm">
            <span className="flex items-center gap-1">⭐ 5.0 Rating</span>
            <span className="text-gray-600">•</span>
            <span>10+ Projects Delivered</span>
            <span className="text-gray-600">•</span>
            <span>90% Client Retention</span>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <motion.button onClick={() => setShowLeadModal(true)}
              whileHover={!prefersReducedMotion ? { scale: 1.05, boxShadow: '0 0 40px rgba(251,191,36,0.5)' } : {}}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold shadow-lg text-base"
              style={{ background: 'linear-gradient(90deg, #F59E0B 0%, #FBBF24 100%)', color: '#061223' }}>
              🚀 Get Free Consultation
            </motion.button>
            <motion.button onClick={goProjects}
              whileHover={!prefersReducedMotion ? { scale: 1.05, backgroundColor: 'rgba(251,191,36,0.15)' } : {}}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold border-2 border-amber-300 bg-transparent text-amber-300">
              View Our Work →
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
          </div>
        </motion.div>
      </motion.section>

      <AnimatedDivider />

      {/* ═══════════════════════════════════════ TECH STACK ═══════════════════════════════════════ */}
      <section ref={techRef} className={`py-10 ${darkBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm uppercase tracking-widest mb-6">Technologies We Master</p>
          <div className="flex flex-wrap justify-center gap-3">
            {TECH_STACK.map((tech, i) => (
              <motion.span key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isTechInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.05 }}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-gray-300 text-sm hover:border-amber-400/60 hover:text-amber-300 transition-all cursor-default">
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* ═══════════════════════════════════════ FEATURES ═══════════════════════════════════════ */}
      <motion.section ref={featuresRef} className={`py-16 ${deepestBlack}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Choose Aarmbh?</h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">We combine technical expertise with seamless project management.</p>
          </motion.div>
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {features.map((f, i) => <FlipCard key={i} feature={f} index={i} isInView={isFeaturesInView} />)}
          </div>
          <div className="md:hidden grid gap-6">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.12 }}
                className="rounded-2xl overflow-hidden shadow-xl bg-white/10 border border-white/20 backdrop-blur-md p-5 text-center">
                <div className="w-14 h-14 mx-auto mb-3 bg-amber-400/20 rounded-full flex items-center justify-center text-amber-400">{f.icon}</div>
                <h3 className="text-lg font-bold text-amber-300 mb-2">{f.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <AnimatedDivider />

      {/* ═══════════════════════════════════════ STATS ═══════════════════════════════════════ */}
      <motion.section ref={statsRef} className={`py-16 ${darkBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Our Track Record</h2>
          <p className="text-gray-400 mb-12 text-lg italic">From concept to completion — we make it happen.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { end: 10, label: 'Projects Completed', suffix: '+' },
              { end: 90, label: 'Client Satisfaction', suffix: '%' },
              { end: 4, label: 'Expert Developers', suffix: '+' },
              { end: 24, label: 'Support Available', suffix: '/7' },
            ].map((s, i) => <StatCard key={i} stat={s} index={i} isInView={isStatsInView} />)}
          </div>
        </div>
      </motion.section>

      <AnimatedDivider />

      {/* ═══════════════════════════════════════ PROCESS ═══════════════════════════════════════ */}
      <motion.section ref={processRef} className={`py-20 ${deepestBlack}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">How We Work</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">A proven, transparent process from idea to launch.</p>
          </motion.div>
          <div className="relative">
            <motion.div className="absolute top-10 left-0 right-0 h-1 bg-gradient-to-r from-amber-400/20 via-amber-400 to-amber-400/20 hidden lg:block"
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 1.5, delay: 0.4 }} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {PROCESS_STEPS.map((step, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  animate={isProcessInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.2 }}
                  className="flex flex-col items-center text-center max-w-xs mx-auto">
                  <motion.div whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-3xl font-bold text-gray-900 shadow-xl mb-4">
                    {i + 1}
                  </motion.div>
                  <h3 className="text-xl font-bold text-amber-300 mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <AnimatedDivider />

      {/* ═══════════════════════════════════════ TESTIMONIALS ═══════════════════════════════════════ */}
      <motion.section className={`py-20 ${darkBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">Trusted by startups and enterprises alike.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((r, i) => <TestimonialCard key={i} review={r} index={i} />)}
          </div>
        </div>
      </motion.section>

      <AnimatedDivider />

      {/* ═══════════════════════════════════════ CTA BANNER ═══════════════════════════════════════ */}
      <section className={`py-20 ${deepestBlack}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-amber-500/10 border border-amber-500/30 rounded-3xl p-10 md:p-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Build Something Great?</h2>
            <p className="text-gray-400 text-lg mb-2">Free consultation · No commitment · 24-hour response</p>
            <p className="text-gray-500 text-sm mb-8">📍 Pune, India &nbsp;|&nbsp; 📞 +91 9423512942 &nbsp;|&nbsp; ✉️ aarmbh15@gmail.com</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button onClick={() => setShowLeadModal(true)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-2xl font-bold text-gray-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 shadow-lg shadow-amber-500/25 transition-all text-base">
                🚀 Start Your Project
              </motion.button>
              <motion.button onClick={goContact} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-2xl font-semibold border-2 border-amber-400/50 text-amber-300 hover:border-amber-400 hover:bg-amber-400/5 transition-all text-base">
                Contact Us →
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

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