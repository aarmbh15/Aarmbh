import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReducedMotion, motion } from 'framer-motion';

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
      'CMS Integration – easy content updates',
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
  {
    icon: 'fas fa-hospital',
    title: 'Healthcare IT Services',
    description: 'Specialized technology solutions for healthcare — secure, compliant (HIPAA/GDPR), and seamlessly integrated with EHR systems.',
    features: [
      'HIPAA/GDPR Compliance – ensuring patient data protection',
      'EHR/EMR Integration – unified patient data',
      'Telemedicine Platform Development',
      'Secure data infrastructure – cloud and on-premise',
    ],
    benefit: 'Improve patient care & maintain compliance',
    cta: 'Explore Healthcare IT',
  },
];

// ─── FAQ Data ─────────────────────────────────────────────────────────
const faqs = [
  { q: 'How long does a typical web project take?', a: 'From 4–12 weeks depending on scope. We provide a detailed timeline after the Discovery phase.' },
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
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop')" }} />
        <div className="relative z-10 container mx-auto px-6 py-24 md:py-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mt-20 font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-500">
              Our Expert Services
            </h1>
            <p className="text-lg md:text-xl text-white leading-relaxed mb-8">
              From concept to deployment — solutions that drive growth, cut costs, and scale with your business.
            </p>
            {/* Quick service pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {['Web Dev', 'Mobile App', 'AI/ML', 'UI/UX', 'Backend', 'Healthcare IT'].map(s => (
                <span key={s} className="px-4 py-1.5 bg-amber-400/10 border border-amber-400/30 rounded-full text-amber-300 text-sm">{s}</span>
              ))}
            </div>
            <motion.button onClick={() => navigate('/contact')} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-gray-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 shadow-lg transition-all">
              🚀 Get Free Consultation
            </motion.button>
          </motion.div>
        </div>
      </div>

      <AnimatedDivider />

      {/* ─── SERVICES LIST ─────────────────────────────────────────── */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 via-transparent to-amber-800/20 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
              Services Built for Growth
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">Scalable, secure, and designed to deliver measurable business impact.</p>
          </motion.div>

          <div className="space-y-24 md:space-y-32">
            {services.map((service, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className="space-y-12">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}
                    className={`flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-16`}>

                    {/* Icon card */}
                    <div className="w-full lg:w-5/12">
                      <motion.div whileHover={{ scale: 1.03, boxShadow: '0 25px 50px -12px rgba(251,191,36,0.15)' }} transition={{ duration: 0.4 }}
                        className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10 flex items-center gap-5">
                          <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                            <i className={`${service.icon} text-2xl text-gray-950`} />
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-white">{service.title}</h3>
                        </div>
                        <p className="mt-4 text-amber-400 font-medium text-base">{service.benefit}</p>
                      </motion.div>
                    </div>

                    {/* Content card */}
                    <div className="w-full lg:w-7/12">
                      <motion.div whileHover={{ boxShadow: '0 25px 50px -12px rgba(251,191,36,0.12)' }}
                        className="p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg transition-all duration-500 hover:border-amber-500/20">
                        <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-6">{service.description}</p>
                        <ul className="space-y-3 mb-8">
                          {service.features.map((feat, i) => (
                            <li key={i} className="flex items-start text-gray-300">
                              <i className="fas fa-check text-amber-500 mr-3 mt-1 flex-shrink-0" />
                              <span className="text-sm md:text-base">{feat}</span>
                            </li>
                          ))}
                        </ul>
                        <motion.button onClick={() => navigate('/contact')}
                          className="px-7 py-3.5 rounded-xl font-semibold text-base bg-gradient-to-r from-amber-400 to-amber-500 text-gray-950 shadow-md flex items-center gap-2 w-fit transition-all duration-300 hover:from-amber-500 hover:to-amber-600 hover:shadow-amber-500/30"
                          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                          {service.cta} <i className="fas fa-arrow-right" />
                        </motion.button>
                      </motion.div>
                    </div>
                  </motion.div>
                  {index < services.length - 1 && <div className="w-full max-w-3xl mx-auto"><AnimatedDivider /></div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* ─── WHY CHOOSE US ─────────────────────────────────────────── */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-12">Why Choose Aarmbh?</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: 'fas fa-tools', title: 'Custom-Built, No Templates', desc: 'Every line of code is written for your unique goals and business needs.' },
              { icon: 'fas fa-shield-alt', title: 'Free 2-Month Post-Launch Support', desc: 'Bugs, tweaks, and monitoring — on us, no extra charge.' },
              { icon: 'fas fa-road', title: 'Transparent Agile Process', desc: 'Weekly demos, shared project boards, zero surprises.' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}
                className="bg-neutral-800 p-6 rounded-xl border border-gray-700 hover:border-amber-500/40 transition-colors">
                <i className={`${item.icon} text-4xl text-amber-400 mb-4 block`}></i>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* ─── PROCESS ───────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Our Seamless Process</h2>
          <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto">Every service follows the same proven 4-step workflow — from discovery to ongoing support.</p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery & Audit', desc: 'Align goals, audit infrastructure, build roadmap.', icon: 'fas fa-lightbulb' },
              { step: '02', title: 'Design & Prototyping', desc: 'Architecture, wireframes, UI/UX specifications.', icon: 'fas fa-drafting-compass' },
              { step: '03', title: 'Agile Development', desc: 'Iterative sprints, CI/CD, thorough testing.', icon: 'fas fa-code' },
              { step: '04', title: 'Deployment & Support', desc: 'Launch, monitoring, guaranteed maintenance.', icon: 'fas fa-rocket' },
            ].map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6, delay: i * 0.15 }} viewport={{ once: true }}
                className="bg-neutral-800 rounded-xl p-6 shadow-xl border border-gray-700 hover:border-amber-500 cursor-pointer text-center transition-colors">
                <div className="w-12 h-12 bg-amber-500 text-gray-950 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-extrabold">{p.step}</div>
                <div className="text-4xl mb-4 text-amber-500"><i className={p.icon}></i></div>
                <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
                <p className="text-gray-400">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* ─── FAQ ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-400 mb-12">Have more questions? <button onClick={() => navigate('/contact')} className="text-amber-400 hover:underline">Contact us directly.</button></p>
          <FAQAccordion />
        </div>
      </section>

      <AnimatedDivider />

      {/* ─── CTA BANNER ──────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="bg-gradient-to-r from-amber-500/10 to-amber-400/5 border border-amber-500/30 rounded-3xl p-10 md:p-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-400 text-lg mb-8">Free consultation · No commitment · Response within 24 hours</p>
            <motion.button onClick={() => navigate('/contact')} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              className="px-10 py-4 rounded-2xl font-bold text-gray-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 shadow-lg transition-all text-base">
              📩 Request a Free Quote
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Services;