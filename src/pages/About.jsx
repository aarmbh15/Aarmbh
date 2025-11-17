import React, { useEffect, useMemo } from 'react';
import { useReducedMotion, motion } from "framer-motion";
import {
  FiGlobe,
  FiTrendingUp,
  FiUsers,
  FiLayers,
  FiShield,
  FiTarget,
  FiBriefcase,
  FiAward,
  FiHeart,
  FiClock,
  FiCode,
  FiDollarSign,
  FiBarChart2,
  FiCheckCircle
} from 'react-icons/fi';

function FiCloud({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
    </svg>
  );
}

function FiBook({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
    </svg>
  );
}

function FiHome({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  );
}
// End of missing icon components

// Constants for Image and Data
const HERO_IMAGE = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2940&auto=format&fit=crop';
// Re-adding STORY_IMAGE constant
const STORY_IMAGE = 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80'; 
const D_DATA = [
    { label: 'Projects Delivered', value: '10+', icon: <FiLayers className="w-8 h-8 bg-teal-500/20 p-1 rounded-full" /> },
    { label: 'Average ROI Improvement', value: '45%', icon: <FiTrendingUp className="w-8 h-8 bg-teal-500/20 p-1 rounded-full" /> },
    { label: 'Combined Expertise', value: '4 Domains', icon: <FiCode className="w-8 h-8 bg-teal-500/20 p-1 rounded-full" /> },
  ];
const V_DATA = [
    { title: 'Innovation-Driven', description: 'We embrace new technologies and creative problem-solving to deliver future-ready solutions', icon: <FiCode className="w-6 h-6" /> },
    { title: 'Client-Centric', description: 'Every project begins and ends with your success. We focus on measurable outcomes and long-term value.', icon: <FiHeart className="w-6 h-6" /> },
    { title: 'Integrity', description: 'We uphold transparency, honesty, and accountability in every partnership and project.', icon: <FiShield className="w-6 h-6" /> },
    { title: 'Collaboration', description: 'We value teamwork and open communication — building strong relationships with clients and within our team.', icon: <FiUsers className="w-6 h-6" /> },
    { title: 'Excellence', description: 'We are dedicated to achieving the highest standards in design, development, and user experience. ', icon: <FiAward className="w-6 h-6" /> },
    { title: 'Growth Mindset', description: 'We continuously evolve, learn, and innovate — ensuring sustainable success for both our team and our clients.', icon: <FiBarChart2 className="w-6 h-6" /> },
  ];
const I_DATA = [
    { name: 'E-commerce', icon: <FiDollarSign className="w-5 h-5 " /> },
    { name: 'Healthcare', icon: <FiHeart className="w-5 h-5" /> },
    { name: 'Finance', icon: <FiBarChart2 className="w-5 h-5" /> },
    { name: 'SaaS', icon: <FiCloud className="w-5 h-5" /> },
    { name: 'Education', icon: <FiBook className="w-5 h-5" /> },
    { name: 'Real Estate', icon: <FiHome className="w-5 h-5" /> },
  ];


const AboutPageComponent = () => {
  // Memoize data arrays for performance
  const differentiators = useMemo(() => D_DATA, []);
  const values = useMemo(() => V_DATA, []);
  const industries = useMemo(() => I_DATA, []);


  // PERFORMANCE & SEO IMPROVEMENT: Set metadata, preload LCP image, and ensure mobile viewport
  useEffect(() => {
    // 1. CRITICAL Mobile Performance: Ensure Viewport Meta Tag is present
    let viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      viewportMeta = document.createElement('meta');
      viewportMeta.setAttribute('name', 'viewport');
      document.head.appendChild(viewportMeta);
    }
    viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1');

    // 2. SEO: Set Document Title
    const prevTitle = document.title;
    document.title = "Aarmbh — About Us | Vision, Mission, and Values";

    // 3. SEO: Set Meta Description
    let meta = document.querySelector('meta[name="description"]');
    const prevDescription = meta ? meta.getAttribute('content') : null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      'content',
      'Discover the vision, mission, and core values that drive Aarmbh. We are a team of expert developers delivering innovative, growth-focused technology solutions.'
    );

    // 4. LCP Optimization: Preload hero image (LCP element)
    const preloadId = 'preload-about-hero-img';
    if (!document.querySelector(`link[id="${preloadId}"]`)) {
      const link = document.createElement('link');
      link.id = preloadId;
      link.rel = 'preload';
      link.as = 'image';
      link.href = HERO_IMAGE; // Use the URL constant
      document.head.appendChild(link);
    }

    // 5. Preload Story Image for the new section
    const preloadStoryId = 'preload-about-story-img';
    if (!document.querySelector(`link[id="${preloadStoryId}"]`)) {
      const link = document.createElement('link');
      link.id = preloadStoryId;
      link.rel = 'preload';
      link.as = 'image';
      link.href = STORY_IMAGE; // Use the new URL constant
      document.head.appendChild(link);
    }


    return () => {
      // Cleanup effect
      document.title = prevTitle;
      if (meta) {
        if (prevDescription) meta.setAttribute('content', prevDescription);
        else meta.remove();
      }
      // Cleanup preload link if added
      document.querySelector(`link[id="${preloadStoryId}"]`)?.remove();
    };
  }, []);

  // Animated Divider Component
    const AnimatedDivider = () => {
      const prefersReducedMotion = useReducedMotion();
      if (prefersReducedMotion) return <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />;
      return (
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent origin-left"
        />
      );
    };

return (
    <div className="min-h-screen bg-gray-950 text-white font-sans overflow-x-hidden">
      {/* Hero Section */}
     <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
        
        {/* LCP & CLS FIX: Replaced CSS background with an <img> tag for better prioritization */}
        <img 
          src={HERO_IMAGE}
          alt="Technology background with blue light" // Added alt for SEO
          fetchPriority="high" // High priority for LCP
          decoding="async"
          // Explicit dimensions for CLS prevention (ratio of 2940 wide is approx 3:2 height)
          width="2940" 
          height="1960" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-20" // Replicates original CSS classes
        />

        {/* Applied max-w-7xl mx-auto px-6 lg:px-8 */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl mt-20 font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-500">
              Transforming Ideas Into
              <br />
              <span className="text-4xl md:text-5xl lg:text-6xl mt-20 font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-500">
                Real-World Impact
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white leading-relaxed">
              Where technology meets strategy, and execution transforms ideas into impact - Aarmbh powers the next chapter of business growth.
            </p>
          </motion.div>
        </div>
      </div>

      <AnimatedDivider />

      {/* RE-ADDED: Our Story/About Section (This was missing from your last provided code) */}
      <section className="py-20 bg-gray-950">
        {/* Applied max-w-7xl mx-auto px-6 lg:px-8 */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image Side with Animation */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src={STORY_IMAGE}
                alt="A collaborative team working on a digital strategy" 
                loading="lazy"
                width="2940" 
                height="1960" 
                className="w-full h-auto object-cover aspect-video lg:aspect-square"
              />
              <div className="absolute inset-0 bg-teal-500/10 mix-blend-multiply"></div>
            </motion.div>

            {/* Content Side with Animation - MODIFIED FOR HEIGHT MATCHING */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-white h-full flex flex-col justify-center" // Added h-full, flex, flex-col, justify-center
            >
              <h2 className="text-4xl font-bold mb-6 text-white border-amber-500/50 pb-2 inline-block">
                Our Story: Blending Trust with Creativity
              </h2>
              <AnimatedDivider />
              <br/>
              <p className="text-lg text-gray-300 leading-relaxed space-y-4">
                {/* UPDATED CONTENT START */}
                <span className='block'>Aarmbh IT blends creativity with trust, delivering web and software solutions that are always updated to meet the standards of the new generation.</span>
                <span className='block'>Driven by a team of dedicated professionals, we fuse strategic thinking with the latest, most advanced technologies to design platforms and experiences that inspire confidence and future growth.</span>
                <span className='block'>Our commitment ensures reliable, scalable products and long-lasting partnerships built on a strong focus on understanding client needs and evolving with the rapidly changing digital world.</span>
                {/* UPDATED CONTENT END */}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatedDivider />


      {/* Vision & Mission - Section 1: Darker Gray - HOVER EFFECT ADDED */}
      <section className="py-16 bg-gray-900 ">
        {/* Applied max-w-7xl mx-auto px-6 lg:px-8 */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">What Drives Us</h2>
            <p className="text-gray-400 mt-4">
              Our core values shape every project we deliver. We’re driven by creativity, collaboration, and a deep commitment to building meaningful, long-term partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              // ADDED HOVER EFFECTS: scale and shadow
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-400 shadow-xl transition-all duration-300 hover:border-amber-500/50 hover:shadow-sm hover:shadow-amber-500/50 hover:scale-[1.01]"
            >
              <div className="flex items-center mb-6">
                <div className="bg-teal-500/20 p-3 rounded-full mr-4">
                  <FiTarget className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
               To revolutionize the digital landscape by empowering businesses with intelligent, innovative, and growth-focused technology solutions that inspire success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              // ADDED HOVER EFFECTS: scale and shadow
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-400 shadow-xl transition-all duration-300 hover:border-amber-500/50 hover:shadow-sm hover:shadow-amber-500/50 hover:scale-[1.01]"
            >
              <div className="flex items-center mb-6">
                <div className="bg-teal-500/20 p-3 rounded-full mr-4">
                  <FiBriefcase className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To become a globally recognized development partner — delivering top-tier digital products and strategies that accelerate business transformation, enhance efficiency, and create lasting impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* Differentiators - Section 2: Slightly Lighter Background - HOVER EFFECT ADDED */}
      <section className="py-16 bg-gray-950 ">
        {/* Applied max-w-7xl mx-auto px-6 lg:px-8 */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
             We combine deep industry experience with technical expertise to deliver results that go beyond expectations. Every solution we craft is designed to maximize performance, scalability, and ROI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                // ADDED HOVER EFFECTS: scale and shadow
                className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-400 transition-all duration-300 hover:border-amber-500/50 hover:shadow-sm hover:shadow-amber-500/50 hover:scale-[1.01]"
              >
                <div className="text-amber-500 mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{item.value}</h3>
                <p className="text-gray-400">{item.label}</p>
              </motion.div>
            ))}
          </div>

          {/* End-to-End Card - HOVER EFFECT ADDED */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            // ADDED HOVER EFFECTS: scale and shadow
            className="mt-12 bg-gradient-to-r from-teal-500/10 to-blue-500/10 p-8 rounded-2xl border border-gray-400 transition-all duration-300 hover:border-amber-500/50 hover:shadow-sm hover:shadow-amber-500/50 hover:scale-[1.01]" 
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:mr-8 mb-6 md:mb-0">
                <div className="bg-teal-500/20 p-4 rounded-full">
                  <FiCheckCircle className="w-12 h-12 text-amber-500" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">End-to-End Partnership</h3>
                <p className="text-gray-300">
                  From consultation to deployment and ongoing optimization, we stay by your side at every stage. Our comprehensive approach ensures seamless integration, transparent communication, and continuous growth for your business.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatedDivider />

      {/* Industries - Section 3: Slightly Darker Gray/Blue Hue - HOVER EFFECT ADDED */}
      <section className="py-16 bg-gray-900 ">
        {/* Applied max-w-7xl mx-auto px-6 lg:px-8 */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industries We Serve 
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
             We provide tailored solutions across multiple industries, helping businesses adapt and thrive in a fast-changing digital world.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                // ADDED HOVER EFFECTS: scale and shadow
                className="flex items-center bg-gray-800/50 px-6 py-3 rounded-full border border-gray-400 transition-all duration-300 hover:border-amber-500/50 hover:bg-gray-700/50 hover:scale-[1.05] cursor-pointer"
              >
                <span className="text-amber-500 mr-2">{industry.icon}</span>
                <span>{industry.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* Core Values & Culture - Section 4: Lighter Background again - HOVER EFFECT ADDED */}
     <section className="py-16 bg-gray-950">
        {/* Applied max-w-7xl mx-auto px-6 lg:px-8 */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values &amp; Culture
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              At Aarmbh, we believe success is built on trust, creativity, and collaboration. Our culture blends professionalism with innovation — encouraging every team member to deliver excellence and learn continuously.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col h-full bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-400 transition-all duration-300 hover:border-amber-500/50 hover:shadow-sm hover:shadow-amber-500/50 hover:scale-[1.01]"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-teal-500/20 p-2 rounded-full mr-4">
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

    </div>
  );
};

// PERFORMANCE Improvement: Export as a memoized component to prevent unnecessary re-renders
const AboutPage = React.memo(AboutPageComponent);
export default AboutPage;