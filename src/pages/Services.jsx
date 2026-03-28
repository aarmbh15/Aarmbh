import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion,useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { FiSearch, FiTerminal, FiCode, FiZap, FiCpu, FiShield, FiActivity } from 'react-icons/fi';

// ─── Animated Divider ────────────────────────────────────────────────
const AnimatedDivider = () => {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) return <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />;
  return (
    <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 1.2, ease: 'easeOut' }}
      className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent origin-left" />
  );
};

// ─── Services Data ────────────────────────────────────────────────────
const services = [
  {
    icon: 'fas fa-laptop-code',
    title: 'Software Development',
    description: 'End-to-end software development from concept to deployment — desktop, enterprise, and custom applications built with modern engineering best practices.',
    features: [
      'Full-Stack Engineering – expertise across all application layers',
      'Legacy System Modernization – upgrading and optimizing existing codebases',
      'Enterprise Resource Planning (ERP) Solutions – tailored to business needs',
      'Scalable Architecture – microservices and cloud-native design',
    ],
    benefit: 'Achieve digital transformation & optimize operations',
    cta: 'Start a Software Project',
  },
  {
    icon: 'fas fa-globe',
    title: 'Web Development',
    description: 'Custom web applications using modern technologies like React.js, Node.js, PHP & more. Optimized for performance, SEO, and scale.',
    features: [
      'Responsive Design – reach customers on every device',
      'SEO Optimization – rank higher, attract organic traffic',
      'Custom Web Applications – tailored features and functionality',
      // 'CMS Integration – easy content updates',
      'Website Maintenance & Updates – keep your site fresh and secure',
      'Sub-second load times – lower bounce rates, higher conversions',
    ],
    benefit: 'Boost conversions & scale effortlessly',
    cta: 'Build My Website',
  },
  {
    icon: 'fas fa-server',
    title: 'Web Hosting & Domain Services',
    description: 'Secure, high-speed hosting solutions and domain registration — ensuring your digital presence is always available and performing at its peak.',
    features: [
      'Reliable & fast web hosting',
      'Domain registration & management',
      '24/7 monitoring – proactive issue detection',
      'Scalable infrastructure – handles traffic spikes effortlessly',
    ],
    benefit: 'Guaranteed uptime & peace of mind',
    cta: 'Get Hosting',
  },
  {
    icon: 'fas fa-mobile-alt',
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications for iOS and Android using Flutter — maximum reach, native performance.',
    features: [
      'Cross-platform – one codebase, two stores',
      'Native performance – smooth 60fps experience',
      'App Store ready – compliant submissions',
      'Push notifications – re-engage users instantly',
    ],
    benefit: 'Expand your audience & drive repeat usage',
    cta: 'Build My App',
  },
  {
    icon: 'fas fa-database',
    title: 'Backend Development',
    description: 'Robust backend systems and APIs using Python, Node.js, PHP-Laravel, Golang and scalable cloud infrastructure.',
    features: [
      'RESTful APIs – integrate with any front-end',
      'Database Design – efficient, future-proof schemas',
      'Cloud Integration – auto-scale with AWS/Azure/GCP',
      'Security & Auth – OAuth, JWT, encryption',
    ],
    benefit: 'Run reliably at any traffic volume',
    cta: 'Start Backend Project',
  },
  {
    icon: 'fas fa-paint-brush',
    title: 'UI/UX Design & Branding',
    description: 'Beautiful, user-friendly interfaces using Figma, Canva & Adobe — plus full branding that drives engagement and conversion.',
    features: [
      'Logo Design & Branding – cohesive visual identity',
      'User Research – data-driven design decisions',
      'Wireframing & Prototyping – test before building',
      'Design Systems – consistent, scalable branding',
    ],
    benefit: 'Turn visitors into loyal customers',
    cta: 'Design My Brand',
  },
  {
    icon: 'fas fa-cogs',
    title: 'AI & Machine Learning',
    description: 'Transform your business with intelligent automation, predictive insights, and AI-powered customer experiences built to deliver measurable ROI.',
    features: [
      'Tailored AI Models – fit your exact data',
      'Smart Chatbots & NLP – 24/7 automated support',
      'Predictive Analytics – forecast trends and demand',
      'Vision-Powered Automation – reduce manual work',
    ],
    benefit: 'Cut costs & unlock new revenue streams',
    cta: 'Explore AI Solutions',
  },
  // {
  //   icon: 'fas fa-hospital',
  //   title: 'Healthcare IT Services',
  //   description: 'Specialized technology solutions for healthcare — secure, compliant (HIPAA/GDPR), and seamlessly integrated with EHR systems.',
  //   features: [
  //     'HIPAA/GDPR Compliance – ensuring patient data protection',
  //     'EHR/EMR Integration – unified patient data',
  //     'Telemedicine Platform Development',
  //     'Secure data infrastructure – cloud and on-premise',
  //   ],
  //   benefit: 'Improve patient care & maintain compliance',
  //   cta: 'Explore Healthcare IT',
  // },
];

// ─── FAQ Data ─────────────────────────────────────────────────────────
const faqs = [
  { q: 'How long does a typical web project take?', a: 'From 2–12 weeks depending on scope. We provide a detailed timeline after the Discovery phase.' },
  { q: 'Do you offer post-launch support?', a: 'Yes — every project includes 2 months of free support, bug fixes, and performance monitoring. Extended plans are available.' },
  { q: 'Can you work with existing codebases?', a: 'Absolutely. We perform a thorough audit, document improvements, and integrate seamlessly with your stack.' },
  { q: 'What is your pricing model?', a: 'We offer fixed-price and time & materials models. All quotes are transparent — no hidden fees. Contact us for a free estimate.' },
  { q: 'Do you sign NDAs?', a: 'Yes, we are happy to sign an NDA before any project discussion. Your ideas and business data remain confidential.' },
];

// ─── FAQ Accordion ────────────────────────────────────────────────────
const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }}
            className={`relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border ${isOpen ? 'border-amber-500/40' : 'border-white/10'} shadow-lg transition-all duration-300 cursor-pointer group`}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}>
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 p-6">
              <div className="flex justify-between items-center">
                <h3 className={`font-semibold text-lg transition-colors ${isOpen ? 'text-amber-400' : 'text-white'}`}>{faq.q}</h3>
                <motion.i className="fas fa-chevron-down ml-4 text-amber-400 flex-shrink-0" animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} />
              </div>
              <motion.div initial={false} animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0, marginTop: isOpen ? 16 : 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }} className="overflow-hidden">
                <p className="text-gray-300 text-base leading-relaxed pr-8">{faq.a}</p>
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────
function Services() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Services – Web, App, AI Development | Aarmbh InfoTech Pune';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta); }
    meta.setAttribute('content', 'Aarmbh InfoTech offers web development, mobile app, AI/ML, UI/UX design, backend, and healthcare IT services. Scalable solutions built for growth. Free consultation.');
  }, []);

  return (
    <div className="pt-16 min-h-screen bg-gray-950">

      {/* ─── HERO ──────────────────────────────────────────────────── */}
      {/* ═══════════════════════════════════════ SERVICES HERO ═══════════════════════════════════════ */}
<section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">
  
  {/* 1. Background Layer: Blueprint Grid & Image */}
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
    <img 
      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop" 
      alt="Engineering Services" 
      className="w-full h-full object-cover opacity-20 grayscale mix-blend-luminosity scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
  </div>

  {/* 2. Ambient Technical Accents */}
  {/* <div className="absolute top-10 left-10 text-white font-mono text-[10px] hidden md:block uppercase tracking-[0.5em] [writing-mode:vertical-lr]">
    Aarmbh // Services // V3.0
  </div> */}

  <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
    <div className="flex flex-col items-center text-center">
      
      {/* 3. Small Tag */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 mb-8"
      >
        <div className="w-8 h-px bg-amber-500/50" />
        <span className="text-[10px] uppercase tracking-[0.6em] text-amber-500 font-bold">The Capability Set</span>
        <div className="w-8 h-px bg-amber-500/50" />
      </motion.div>

      {/* 4. The Hero Heading: Mixed Typography */}
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-6xl md:text-8xl lg:text-[7.5vw] font-light text-white tracking-tighter leading-[0.8] mb-12"
      >
        Precision <br /> 
        <span className="text-amber-500 italic font-serif">Engineering.</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-12"
      >
        From concept to deployment — we architect solutions that drive growth, 
        scale infinitely, and define industry standards.
      </motion.p>

      {/* 5. Refined Service Tags (The Technical Specs) */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-3xl">
        {['Web Dev', 'Mobile App', 'AI/ML', 'UI/UX', 'Backend'].map((s, i) => (
          <motion.span 
            key={s} 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + (i * 0.1) }}
            className="px-5 py-2 bg-white/[0.03] border border-white/10 rounded-full text-slate-300 text-[10px] uppercase tracking-widest hover:border-amber-500/50 hover:text-amber-500 transition-all duration-300"
          >
            {s}
          </motion.span>
        ))}
      </div>

      {/* 6. The Action Pill */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <button 
          onClick={() => navigate('/contact')}
          className="group relative flex items-center gap-6 px-10 py-5 rounded-full border border-amber-500/20 bg-amber-500/5 text-white overflow-hidden transition-all duration-500 hover:border-amber-500/50"
        >
          <div className="absolute inset-0 bg-amber-500 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          <span className="relative z-10 font-bold text-xs uppercase tracking-widest group-hover:text-black transition-colors">
            Get Technical Consultation
          </span>
          <span className="relative z-10 text-xl group-hover:text-black group-hover:translate-x-1 transition-all">
            →
          </span>
        </button>
      </motion.div>
    </div>
  </div>

  {/* 7. Bottom Gradient Mask & Indicator */}
  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent" />
</section>

      <AnimatedDivider />

      

      {/* ═══════════════════════════════════════ SERVICES LIST (ICON-CENTRIC) ═══════════════════════════════════════ */}
{/* ═══════════════════════════════════════ SERVICES LIST (ICON-CENTRIC) ═══════════════════════════════════════ */}
{/* ═══════════════════════════════════════ SERVICES LIST (TIGHTENED) ═══════════════════════════════════════ */}
<section className="py-20 bg-[#050505] relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 relative z-10">
    
    <div className="mb-16 border-l border-amber-500/50 pl-6">
      <h2 className="text-[10px] uppercase tracking-[0.8em] text-amber-500 font-bold mb-2">Capabilities</h2>
      <p className="text-3xl md:text-4xl font-light text-white tracking-tighter">
        Engineered for <span className="italic font-serif text-amber-200/90">Scale.</span>
      </p>
    </div>

    {/* Reduced spacing from space-y-32 to space-y-16 */}
    <div className="space-y-16 md:space-y-20">
      {services.map((service, index) => {
        const isLeft = index % 2 === 0;
        return (
          <React.Fragment key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-center`}
            >
              {/* Icon & Title Block */}
              <div className={`md:col-span-5 ${!isLeft ? 'md:order-last' : ''}`}>
                <div className="relative p-8 rounded-[2rem] border border-white/5 bg-[#080808] group hover:border-amber-500/20 transition-all duration-500 overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-8">
                      <span className="font-mono text-[9px] text-amber-500/60 uppercase tracking-widest">System // 0{index + 1}</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    </div>

                    <div className="w-16 h-16 rounded-2xl bg-amber-500/5 border border-amber-500/10 flex items-center justify-center text-3xl text-amber-500 mb-6">
                      <i className={`${service.icon}`} />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-tight">{service.title}</h3>
                    <p className="text-amber-200/90 text-sm md:text-base font-light leading-snug">{service.benefit}</p>
                  </div>
                </div>
              </div>

              {/* Description & Features */}
              <div className="md:col-span-7">
                <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed mb-6 max-w-2xl">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-8">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-3 border-b border-white/5 py-2 group/item">
                      <div className="w-1 h-1 bg-amber-500/30 group-hover/item:bg-amber-500 transition-colors" />
                      <span className="text-slate-400 text-xs md:text-sm font-light group-hover/item:text-white transition-colors">{feat}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  onClick={() => navigate('/contact')}
                  className="group flex items-center gap-4 text-white text-[11px] uppercase tracking-[0.4em] font-bold"
                >
                  <span className="relative">
                    {service.cta}
                    <div className="absolute -bottom-1 left-0 w-6 h-[1px] bg-amber-500 group-hover:w-full transition-all duration-500" />
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform text-amber-500">→</span>
                </motion.button>
              </div>
            </motion.div>

            {index < services.length - 1 && (
              <div className="py-12 opacity-30"><AnimatedDivider /></div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  </div>
</section>
      <AnimatedDivider />

      {/* ═══════════════════════════════════════ WHY CHOOSE US (TECHNICAL EDGE) ═══════════════════════════════════════ */}
<section className="py-32 bg-[#050505] relative overflow-hidden">
  
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    
    {/* Header: Minimal & Left-Aligned */}
    <div className="mb-20 border-l border-amber-500/50 pl-6">
      <h2 className="text-[10px] uppercase tracking-[0.8em] text-amber-500 font-bold mb-2">The Advantage</h2>
      <p className="text-3xl md:text-5xl font-light text-white tracking-tighter">
        Engineering beyond <span className="italic font-serif text-amber-200/90">the standard.</span>
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-[2.5rem] overflow-hidden">
      {[
        { 
          icon: <FiCpu className="w-6 h-6" />, 
          title: 'Zero-Template Policy', 
          desc: 'Every line of code is engineered for your specific logic. We don’t skin templates; we build custom infrastructure.',
          tag: 'LOGIC-FIRST'
        },
        { 
          icon: <FiShield className="w-6 h-6" />, 
          title: '60-Day Post-Launch Tuning', 
          desc: 'Full-spectrum monitoring, bug resolution, and performance audits—on us. We don’t just deploy; we stabilize.',
          tag: 'STABILITY'
        },
        { 
          icon: <FiActivity className="w-6 h-6" />, 
          title: 'Agile Transparency', 
          desc: 'Weekly sprint demos and shared project boards. Real-time access to the building process with zero surprises.',
          tag: 'VELOCITY'
        },
      ].map((item, i) => (
        <motion.div 
          key={i} 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="group relative bg-[#080808] p-10 md:p-12 flex flex-col h-full hover:bg-amber-500/[0.02] transition-colors duration-700"
        >
          {/* Top Metadata Row */}
          <div className="flex justify-between items-start mb-16">
            <div className="text-amber-500 group-hover:scale-110 transition-transform duration-500">
              {item.icon}
            </div>
            <span className="font-mono text-[9px] text-slate-700 tracking-[0.3em] uppercase">
              {item.tag}
            </span>
          </div>

          {/* Content Block */}
          <div className="mt-auto">
            <h3 className="text-xl font-medium text-white mb-4 tracking-tight group-hover:text-amber-200 transition-colors">
              {item.title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed font-light group-hover:text-slate-300 transition-colors duration-500">
              {item.desc}
            </p>
          </div>

          {/* Technical Accent: Lower Numbering */}
          <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <span className="font-mono text-[10px] text-amber-500/20">0{i + 1} // ADVTG</span>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      <AnimatedDivider />

      {/* ═══════════════════════════════════════ ENGAGEMENT MODELS ═══════════════════════════════════════ */}
<section className="py-32 bg-[#050505]">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="mb-20 border-l border-amber-500/50 pl-6">
      <h2 className="text-[10px] uppercase tracking-[0.8em] text-amber-500 font-bold mb-2">Collaboration</h2>
      <p className="text-3xl md:text-5xl font-light text-white tracking-tighter">
        Engagement <span className="italic font-serif text-amber-200/90">Models.</span>
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-[2.5rem] overflow-hidden">
      {[
        { 
          type: 'Project-Based', 
          desc: 'Best for defined scopes like a website or a specific app launch. Fixed timeline and fixed budget.',
          label: 'FIXED-COST'
        },
        { 
          type: 'Dedicated Collective', 
          desc: 'A monthly retainer for ongoing development, R&D, and scaling. We act as your internal CTO/Engineering wing.',
          label: 'RECURRING'
        }
      ].map((model, i) => (
        <div key={i} className="bg-[#080808] p-12 group hover:bg-amber-500/[0.02] transition-colors">
          <div className="flex justify-between mb-16">
            <span className="font-mono text-[10px] text-amber-500/50 uppercase tracking-widest">{model.label}</span>
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500/20 group-hover:bg-amber-500 transition-colors" />
          </div>
          <h3 className="text-2xl font-light text-white mb-4">{model.type}</h3>
          <p className="text-slate-500 text-sm leading-relaxed max-w-sm">{model.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

<AnimatedDivider />

      {/* ═══════════════════════════════════════ PROCESS (TECHNICAL PIPELINE) ═══════════════════════════════════════ */}
<section className="py-32 bg-[#050505] relative overflow-hidden">
  
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    
    {/* Header: Architectural Alignment */}
    <div className="mb-24 border-l border-amber-500/50 pl-6">
      <h2 className="text-[10px] uppercase tracking-[0.8em] text-amber-500 font-bold mb-2">Workflow</h2>
      <p className="text-3xl md:text-5xl font-light text-white tracking-tighter">
        The Architecture <span className="italic font-serif text-amber-200/90">Lifecycle.</span>
      </p>
    </div>

    {/* The Pipeline Container */}
    <div className="relative">
      
      {/* Background Connecting Line (Desktop Only) */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 hidden md:block -translate-y-1/2 z-0" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        {[
          { 
            step: '01', 
            title: 'Discovery & Audit', 
            desc: 'Align goals, audit existing infrastructure, and build the technical roadmap.',
            icon: <FiSearch className="w-5 h-5" />,
            phase: 'ANALYSIS'
          },
          { 
            step: '02', 
            title: 'Prototyping', 
            desc: 'System architecture, wireframes, and comprehensive UI/UX specifications.',
            icon: <FiTerminal className="w-5 h-5" />,
            phase: 'STRATEGY'
          },
          { 
            step: '03', 
            title: 'Agile Build', 
            desc: 'Iterative sprints, CI/CD pipelines, and rigorous automated testing.',
            icon: <FiCode className="w-5 h-5" />,
            phase: 'EXECUTION'
          },
          { 
            step: '04', 
            title: 'Deployment', 
            desc: 'Production launch, real-time monitoring, and guaranteed maintenance.',
            icon: <FiZap className="w-5 h-5" />,
            phase: 'STABILIZE'
          },
        ].map((p, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            className="group relative bg-[#080808] p-8 rounded-[2rem] border border-white/5 hover:border-amber-500/30 transition-all duration-700"
          >
            {/* Step Number Circle */}
            <div className="w-10 h-10 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center mb-8 group-hover:border-amber-500/50 group-hover:text-amber-500 transition-all duration-500">
              <span className="font-mono text-[10px] font-bold">{p.step}</span>
            </div>

            {/* Phase Metadata */}
            <div className="flex items-center gap-3 mb-4">
              <div className="text-amber-500/60 group-hover:text-amber-500 transition-colors">
                {p.icon}
              </div>
              <div className="h-px w-8 bg-white/5 group-hover:bg-amber-500/20 transition-all" />
              <span className="font-mono text-[9px] text-slate-600 tracking-[0.2em]">
                {p.phase}
              </span>
            </div>

            {/* Content */}
            <h3 className="text-lg font-medium text-white mb-3 tracking-tight group-hover:text-amber-200 transition-colors">
              {p.title}
            </h3>
            <p className="text-slate-500 text-sm font-light leading-relaxed group-hover:text-slate-300 transition-colors duration-500">
              {p.desc}
            </p>

            {/* Bottom Glow (Mobile Only for visual pop) */}
            <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

      <AnimatedDivider />

      {/* ═══════════════════════════════════════ FAQ (TECHNICAL INDEX) ═══════════════════════════════════════ */}
<section className="py-32 bg-[#050505] relative border-t border-white/5">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
      
      {/* LEFT: Sticky Header & CTA */}
      <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
        <div className="border-l border-amber-500/50 pl-6">
          <h2 className="text-[10px] uppercase tracking-[0.8em] text-amber-500 font-bold mb-4">Support</h2>
          <p className="text-3xl md:text-4xl font-light text-white tracking-tighter leading-tight mb-8">
            Frequently Asked <br /> 
            <span className="italic font-serif text-amber-200/90">Specifications.</span>
          </p>
          <div className="space-y-6">
            <p className="text-slate-500 text-sm font-light leading-relaxed">
              Don't see the technical details you're looking for? Reach out to our engineering collective for a deep dive.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="text-amber-500 text-[10px] uppercase tracking-[0.4em] font-bold hover:text-white transition-colors flex items-center gap-3 group"
            >
              Contact Engineering 
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT: Sophisticated Accordion */}
      <div className="lg:col-span-8 divide-y divide-white/5 border-b border-white/5">
        {/* Note: This assumes you have a functional FAQAccordion component. 
            If you are building it from scratch, use the structure below. */}
        <FAQAccordion />
      </div>

    </div>
  </div>
</section>

      <AnimatedDivider />
    </div>
  );
}

export default Services;