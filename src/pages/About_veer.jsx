import React, { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReducedMotion, motion } from 'framer-motion';
import {
  FiGlobe, FiTrendingUp, FiUsers, FiLayers, FiShield, FiTarget,
  FiBriefcase, FiAward, FiHeart, FiCode, FiDollarSign, FiBarChart2, FiCheckCircle
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

const D_DATA = [
  { label: 'Projects Delivered', value: '10+', icon: <FiLayers className="w-8 h-8" /> },
  { label: 'Average ROI Improvement', value: '45%', icon: <FiTrendingUp className="w-8 h-8" /> },
  { label: 'Combined Expertise', value: '4 Domains', icon: <FiCode className="w-8 h-8" /> },
];

const V_DATA = [
  { title: 'Innovation-Driven', description: 'We embrace new technologies and creative problem-solving to deliver future-ready solutions.', icon: <FiCode className="w-6 h-6" /> },
  { title: 'Client-Centric', description: 'Every project begins and ends with your success. We focus on measurable outcomes and long-term value.', icon: <FiHeart className="w-6 h-6" /> },
  { title: 'Integrity', description: 'We uphold transparency, honesty, and accountability in every partnership and project.', icon: <FiShield className="w-6 h-6" /> },
  { title: 'Collaboration', description: 'We value teamwork and open communication — building strong relationships with clients and within our team.', icon: <FiUsers className="w-6 h-6" /> },
  { title: 'Excellence', description: 'We are dedicated to achieving the highest standards in design, development, and user experience.', icon: <FiAward className="w-6 h-6" /> },
  { title: 'Growth Mindset', description: 'We continuously evolve, learn, and innovate — ensuring sustainable success for both our team and our clients.', icon: <FiBarChart2 className="w-6 h-6" /> },
];

const I_DATA = [
  { name: 'E-commerce', icon: <FiDollarSign className="w-5 h-5" /> },
  { name: 'Healthcare', icon: <FiHeart className="w-5 h-5" /> },
  { name: 'Finance', icon: <FiBarChart2 className="w-5 h-5" /> },
  { name: 'SaaS', icon: <FiCloud className="w-5 h-5" /> },
  { name: 'Education', icon: <FiBook className="w-5 h-5" /> },
  { name: 'Real Estate', icon: <FiHome className="w-5 h-5" /> },
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

      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
        <img src={HERO_IMAGE} alt="Expert software development team at Aarmbh InfoTech Pune"
          fetchPriority="high" decoding="async" width="2940" height="1960"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mt-20 font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-500">
              Transforming Ideas Into<br /><span className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-500">Real-World Impact</span>
            </h1>
            <p className="text-lg md:text-xl text-white leading-relaxed">
              Where technology meets strategy, and execution transforms ideas into impact — Aarmbh powers the next chapter of business growth.
            </p>
            <motion.button onClick={() => navigate('/contact')} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-gray-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 shadow-lg transition-all">
              🚀 Work With Us
            </motion.button>
          </motion.div>
        </div>
      </div>

      <AnimatedDivider />

      {/* ─── OUR STORY ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true, amount: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={STORY_IMAGE} alt="Aarmbh InfoTech team collaborating on digital strategy"
                loading="lazy" width="1600" height="900" className="w-full h-auto object-cover aspect-video lg:aspect-square" />
              <div className="absolute inset-0 bg-amber-500/10 mix-blend-multiply"></div>
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-gray-900/90 border border-amber-500/30 rounded-xl px-4 py-3 backdrop-blur-sm">
                <p className="text-amber-400 font-bold text-lg">10+ Projects</p>
                <p className="text-gray-400 text-xs">Successfully Delivered</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true, amount: 0.3 }}
              className="text-white h-full flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-6 text-white">Our Story: Blending Trust with Creativity</h2>
              <AnimatedDivider />
              <br />
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>Aarmbh IT blends creativity with trust, delivering web and software solutions that are always updated to meet the standards of the new generation.</p>
                <p>Driven by a team of dedicated professionals, we fuse strategic thinking with the latest, most advanced technologies to design platforms and experiences that inspire confidence and future growth.</p>
                <p>Our commitment ensures reliable, scalable products and long-lasting partnerships built on a strong focus on understanding client needs and evolving with the rapidly changing digital world.</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                {['Pune Based', '100% Custom Code', 'Free 2-Month Support', 'On-Time Delivery'].map((badge) => (
                  <span key={badge} className="px-4 py-2 bg-amber-400/10 border border-amber-400/30 rounded-full text-amber-400 text-sm font-medium">
                    ✓ {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* ─── VISION & MISSION ──────────────────────────────────────────── */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">What Drives Us</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Our core values shape every project we deliver — driven by creativity, collaboration, and deep commitment to meaningful partnerships.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { icon: <FiTarget className="w-8 h-8 text-amber-500" />, title: 'Our Vision', text: 'To revolutionize the digital landscape by empowering businesses with intelligent, innovative, and growth-focused technology solutions that inspire success.' },
              { icon: <FiBriefcase className="w-8 h-8 text-amber-400" />, title: 'Our Mission', text: 'To become a globally recognized development partner — delivering top-tier digital products and strategies that accelerate business transformation, enhance efficiency, and create lasting impact.' },
            ].map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: i === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-xl transition-all duration-300 hover:border-amber-500/50 hover:shadow-amber-500/10 hover:shadow-lg hover:scale-[1.01]">
                <div className="flex items-center mb-6">
                  <div className="bg-amber-500/10 p-3 rounded-full mr-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* ─── DIFFERENTIATORS ────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Makes Us Different</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Deep industry experience + technical expertise = results beyond expectations.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {differentiators.map((item, index) => (
              <motion.div key={index}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}
                className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 transition-all duration-300 hover:border-amber-500/50 hover:shadow-amber-500/10 hover:shadow-lg hover:scale-[1.01] text-center">
                <div className="text-amber-500 mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-3xl font-bold mb-2 text-amber-400">{item.value}</h3>
                <p className="text-gray-400">{item.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-amber-500/10 to-amber-400/5 p-8 rounded-2xl border border-amber-500/20 transition-all duration-300 hover:border-amber-500/40 hover:scale-[1.005]">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-amber-500/10 p-4 rounded-full flex-shrink-0">
                <FiCheckCircle className="w-12 h-12 text-amber-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">End-to-End Partnership</h3>
                <p className="text-gray-300">From consultation to deployment and ongoing optimization, we stay by your side at every stage. Our comprehensive approach ensures seamless integration, transparent communication, and continuous growth for your business.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatedDivider />

      {/* ─── INDUSTRIES ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Tailored solutions across multiple industries — helping businesses adapt and thrive in a fast-changing digital world.</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <motion.div key={index}
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: index * 0.1 }} viewport={{ once: true }}
                className="flex items-center bg-gray-800/50 px-6 py-3 rounded-full border border-gray-700 transition-all duration-300 hover:border-amber-500/50 hover:bg-gray-700/50 hover:scale-105 cursor-pointer">
                <span className="text-amber-500 mr-2">{industry.icon}</span>
                <span className="text-gray-200">{industry.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* ─── CORE VALUES ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values & Culture</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">At Aarmbh, success is built on trust, creativity, and collaboration — encouraging excellence and continuous learning.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div key={index}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}
                className="flex flex-col h-full bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 transition-all duration-300 hover:border-amber-500/50 hover:shadow-amber-500/10 hover:shadow-lg hover:scale-[1.01]">
                <div className="flex items-center mb-4">
                  <div className="bg-amber-500/10 p-2 rounded-full mr-4">
                    <span className="text-amber-500">{value.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                </div>
                <p className="text-gray-400 mt-auto">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="bg-gradient-to-r from-amber-500/10 to-amber-400/5 border border-amber-500/30 rounded-3xl p-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Let's Build Something Together</h2>
            <p className="text-gray-400 text-lg mb-8">Free consultation · Transparent pricing · On-time delivery</p>
            <motion.button onClick={() => navigate('/contact')} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              className="px-10 py-4 rounded-2xl font-bold text-gray-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 shadow-lg transition-all text-base">
              📩 Get in Touch Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const AboutPage = React.memo(AboutPageComponent);
export default AboutPage;