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
} from "framer-motion";

const primaryGold = '#f7dab2';
const darkBackground = 'bg-gray-950';
const deepestBlack = 'bg-gray-900';

const FEATURES = [
  {
    title: "Fast Delivery",
    description: "Quick turnaround times without compromising quality. We deliver projects on time, every time.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Secure & Reliable",
    description: "Your projects are safe with us. We follow best practices for security and data protection.",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Clear Communication",
    description: "Regular updates and transparent communication throughout the development process.",
    img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Modern Tech Stack",
    description: "We use the latest technologies and frameworks to build scalable, maintainable solutions.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Competitive Pricing",
    description: "High-quality development services at competitive rates. No hidden fees or surprises.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock support for ongoing projects and post-launch maintenance.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const HERO_IMAGE = "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=1920&q=80";

// FLIP CARD — DESKTOP ONLY
const FlipCard = React.memo(({ feature, index, isInView }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleToggle = () => {
    if (!prefersReducedMotion && window.innerWidth >= 768) {
      setIsFlipped(p => !p);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative w-full h-80 md:cursor-pointer preserve-3d"
      style={{ perspective: 1000 }}
      onMouseEnter={handleToggle}
      onMouseLeave={handleToggle}
      onClick={handleToggle}
    >
      <motion.div
        className="absolute inset-0 w-full h-full backface-hidden"
        initial={false}
        animate={{ rotateY: isFlipped && !prefersReducedMotion && window.innerWidth >= 768 ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT */}
        <div className="relative h-full rounded-2xl shadow-2xl overflow-hidden bg-white/10 border border-white/20 backdrop-blur-md">
          <img
            src={feature.img}
            alt={feature.title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 120 }}
              className="w-16 h-16 mx-auto mb-4 bg-amber-400/20 rounded-full flex items-center justify-center text-amber-400"
            >
              {feature.icon}
            </motion.div>
            <h3 className="text-xl sm:text-2xl font-semibold text-amber-400">{feature.title}</h3>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 h-full rounded-2xl shadow-2xl bg-gradient-to-br from-amber-500/10 to-amber-600/10 border border-amber-400/30 backdrop-blur-md p-6 flex flex-col justify-center text-center"
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
        >
          <div className="w-12 h-12 mx-auto mb-3 text-amber-400 opacity-70">
            {feature.icon}
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-amber-300 mb-2">{feature.title}</h3>
          <p className="text-gray-200 text-sm leading-relaxed">{feature.description}</p>
        </div>
      </motion.div>

      {/* MOBILE: Description below */}
      <div className="md:hidden absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-center">
        <p className="text-xs text-gray-200 leading-tight">{feature.description}</p>
      </div>
    </motion.div>
  );
});

// MOBILE-ONLY CARD
const MobileCard = React.memo(({ feature, index, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="rounded-2xl overflow-hidden shadow-xl bg-white/10 border border-white/20 backdrop-blur-md"
    >
      <div className="h-48 relative">
        <img src={feature.img} alt={feature.title} className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>
      <div className="p-5 text-center">
        <div className="w-14 h-14 mx-auto mb-3 bg-amber-400/20 rounded-full flex items-center justify-center text-amber-400">
          {feature.icon}
        </div>
        <h3 className="text-lg font-bold text-amber-300 mb-2">{feature.title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  );
});

// Stat Card
const StatCard = React.memo(({ stat, index, isInView }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const display = useTransform(rounded, (v) => `${v}${stat.suffix}`);

  React.useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, stat.end, {
      duration: 4.2,
      ease: [0.22, 1, 0.36, 1],
      delay: index * 0.25,
    });
    return controls.stop;
  }, [isInView, count, stat.end, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ scale: 1.08 }}
      className="bg-gray-800 rounded-xl p-6 shadow-lg"
    >
      <motion.div className="text-4xl font-bold mb-2" style={{ color: primaryGold }}>
        <motion.span>{display}</motion.span>
      </motion.div>
      <div className="text-gray-400 text-sm">{stat.label}</div>
    </motion.div>
  );
});

// Star Rating Component
const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= rating ? 'text-amber-400 fill-amber-400' : 'text-gray-600'}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

// Process Step
const ProcessStep = ({ step, index, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="flex flex-col items-center text-center max-w-xs mx-auto"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-3xl font-bold text-gray-900 shadow-xl mb-4"
      >
        {index + 1}
      </motion.div>
      <h3 className="text-xl font-bold text-amber-300 mb-2">{step.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
    </motion.div>
  );
};

// Testimonial Card
const TestimonialCard = React.memo(({ review, index }) => {
  return (
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
          <p className="text-xs text-gray-500">{review.role}</p>
        </div>
      </div>
    </motion.div>
  );
});

function HomeComponent() {
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();

  const { scrollY, scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const statsRef = useRef(null);
  const processRef = useRef(null);
  const reviewsRef = useRef(null);
  const ctaRef = useRef(null);

  // Parallax
  const yHeroBg = useTransform(scrollY, [0, 1000], [0, -200]);
  const opacityPrevSection = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  // Floating shapes in hero
  const float1 = useSpring(0, { stiffness: 100, damping: 30 });
  const float2 = useSpring(0, { stiffness: 80, damping: 25 });

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      float1.set(Math.sin(Date.now() * 0.001) * 20);
      float2.set(Math.sin(Date.now() * 0.001 + Math.PI) * 15);
    }, 16);
    return () => clearInterval(interval);
  }, [float1, float2, prefersReducedMotion]);

  const features = useMemo(() => FEATURES, []);
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-150px" });
  const isStatsInView = useInView(statsRef, { once: true, margin: "-150px" });
  const isProcessInView = useInView(processRef, { once: true, margin: "-150px" });
  const isReviewsInView = useInView(reviewsRef, { once: true, margin: "-150px" });
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-150px" });

  useEffect(() => {
    document.title = "Aarmbh — Expert Development Team";

    let meta = document.querySelector('meta[name="description"]');
    const prev = meta?.getAttribute('content');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = 'Aarmbh — Professional developers specializing in React, Node.js, Python, and more.';

    const link = document.createElement('link');
    link.rel = 'preload'; link.as = 'image'; link.href = HERO_IMAGE;
    if (!document.getElementById('hero-preload')) {
      link.id = 'hero-preload';
      document.head.appendChild(link);
    }

    return () => {
      if (prev) meta.content = prev;
    };
  }, []);

  const goTeam = useCallback(() => navigate('/team'), [navigate]);
  const goProjects = useCallback(() => navigate('/projects'), [navigate]);

  const PROCESS_STEPS = [
    {
      title: "Discovery & Planning",
      description: "We discuss your goals, define scope, and create a detailed roadmap for success."
    },
    {
      title: "Design & Prototype",
      description: "Crafting beautiful, intuitive UI/UX with interactive prototypes for your feedback."
    },
    {
      title: "Development",
      description: "Building scalable, clean code using modern frameworks and best practices."
    },
    {
      title: "Launch & Support",
      description: "Deploy with confidence and provide ongoing maintenance and 24/7 support."
    }
  ];

  const TESTIMONIALS = [
    {
      name: "Sarah Chen",
      role: "CEO, TechStart",
      rating: 5,
      text: "Aarmbh transformed our idea into a scalable platform in record time. Their communication and expertise are unmatched."
    },
    {
      name: "Michael Rivera",
      role: "Product Lead, InnovateCo",
      rating: 5,
      text: "Professional, reliable, and incredibly skilled. They delivered beyond expectations with zero downtime."
    },
    {
      name: "Priya Sharma",
      role: "Founder, EduLearn",
      rating: 5,
      text: "The team’s attention to detail and proactive updates made the entire process seamless. Highly recommend!"
    },
    {
      name: "James Liu",
      role: "CTO, FinTrust",
      rating: 5,
      text: "Secure, fast, and scalable solutions. Their 24/7 support gives us complete peace of mind."
    }
  ];

  // Animated Divider Component
  const AnimatedDivider = () => {
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
    <div className={`pt-16 ${deepestBlack} overflow-x-hidden`}>
      {/* HERO */}
      <motion.section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity: opacityPrevSection }}
        aria-labelledby="hero-heading"
      >
        {/* Parallax Background */}
        <motion.img
          src={HERO_IMAGE}
          alt="Office workspace"
          fetchpriority="high"
          style={{ y: yHeroBg }}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0.9 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90 z-10" />

        {/* Floating Geometric Shapes */}
        {!prefersReducedMotion && (
          <>
            <motion.div
              className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-amber-400/10 to-transparent blur-3xl"
              style={{ top: "10%", left: "10%", y: float1, x: float2 }}
            />
            <motion.div
              className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-amber-500/8 to-transparent blur-3xl"
              style={{ bottom: "15%", right: "10%", y: float2, x: float1 }}
            />
          </>
        )}

        {/* Hero Content */}
        <motion.div
          className="relative z-20 max-w-6xl mx-auto px-6 lg:px-8 text-center text-white"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.3 }
            }
          }}
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white mb-4"
          >
            Expert Development Team
            <motion.span
              className="block text-amber-400 mt-2"
              animate={{ textShadow: ["0 0 8px rgba(251,:36,0)", "0 0 30px rgba(251,191,36,0.4)", "0 0 8px rgba(251,191,36,0)"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              Ready to Build Your Vision
            </motion.span>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-200 mb-8"
          >
            Professional developers specializing in React, Node.js, Python, and more.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <motion.button
              onClick={goTeam}
              whileHover={!prefersReducedMotion ? { scale: 1.05, boxShadow: "0 0 40px rgba(251,191,36,0.5)" } : {}}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold shadow-lg"
              style={{ background: "linear-gradient(90deg, #F59E0B 0%, #FBBF24 100%)", color: "#061223" }}
            >
              <motion.svg width="18" height="18" viewBox="0 0 24 24" fill="none" initial={{ x: 0 }} whileHover={{ x: 4 }}>
                <path d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 20a8 8 0 0116 0" stroke="#061223" strokeWidth="1.5" strokeLinecap="round"/>
              </motion.svg>
              Meet Our Team
            </motion.button>
            <motion.button
              onClick={goProjects}
              whileHover={!prefersReducedMotion ? { scale: 1.05, backgroundColor: "rgba(251,191,36,0.15)" } : {}}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold border-2 border-amber-300 bg-transparent text-amber-300"
            >
              <motion.svg width="18" height="18" viewBox="0 0 24 24" fill="none" initial={{ x: 0 }} whileHover={{ x: 4 }}>
                <path d="M3 7v10a2 2 0 002 2h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M21 7V5a2 2 0 00-2-2H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </motion.svg>
              View Projects
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.section>

      <AnimatedDivider />

      {/* FEATURES */}
      <motion.section
        ref={featuresRef}
        className={`py-16 ${deepestBlack}`}
        style={{ opacity: useTransform(scrollYProgress, [0.1, 0.3], [0.8, 1]) }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Choose Our Team?</h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              We combine technical expertise with seamless project management.
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
            initial="hidden"
            animate={isFeaturesInView ? "visible" : "hidden"}
            className="hidden md:grid md:grid-cols-3 gap-8"
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6 }}
              >
                <FlipCard feature={f} index={i} isInView={isFeaturesInView} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12 }
              }
            }}
            initial="hidden"
            animate={isFeaturesInView ? "visible" : "hidden"}
            className="md:hidden grid gap-6"
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <MobileCard feature={f} index={i} isInView={isFeaturesInView} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <AnimatedDivider />

      {/* STATS */}
      <motion.section
        ref={statsRef}
        className={`py-16 ${darkBackground}`}
        style={{ opacity: useTransform(scrollYProgress, [0.3, 0.5], [0.8, 1]) }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h3
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-bold mb-4 text-white"
          >
            Our Achievements
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 mb-12 text-lg italic"
          >
            From concept to completion - we make it happen.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } }
            }}
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
          >
            {[
              { end: 10, label: "Projects Completed", suffix: "+" },
              { end: 90, label: "Client Satisfaction", suffix: "%" },
              { end: 4, label: "Expert Developers", suffix: "+" },
              { end: 24, label: "Support Available", suffix: "/7" },
            ].map((s, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={!prefersReducedMotion ? { scale: 1.08, borderColor: primaryGold } : {}}
                className="bg-gray-800 rounded-xl p-6 shadow-lg border border-transparent transition-colors"
              >
                <StatCard stat={s} index={i} isInView={isStatsInView} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <AnimatedDivider />

      {/* PROCESS */}
      <motion.section
        ref={processRef}
        className={`py-20 ${deepestBlack}`}
        style={{ opacity: useTransform(scrollYProgress, [0.5, 0.7], [0.8, 1]) }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">How We Work</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A proven, transparent process from idea to launch.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting Line */}
            <motion.div
              className="absolute top-10 left-0 right-0 h-1 bg-gradient-to-r from-amber-400/20 via-amber-400 to-amber-400/20 hidden lg:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.4 }}
              style={{ transformOrigin: "left" }}
            />
            {/* Animated Dot Trail */}
            <motion.div
              className="absolute top-9 w-3 h-3 rounded-full bg-amber-400 shadow-lg shadow-amber-400/50 hidden lg:block"
              initial={{ x: -20 }}
              animate={isProcessInView ? { x: "100%" } : {}}
              transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {PROCESS_STEPS.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.2 }}
                  className="flex flex-col items-center text-center max-w-xs mx-auto"
                >
                  <ProcessStep step={step} index={i} isInView={isProcessInView} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <AnimatedDivider />

      {/* TESTIMONIALS */}
      <motion.section
        ref={reviewsRef}
        className={`py-20 ${darkBackground}`}
        style={{ opacity: useTransform(scrollYProgress, [0.7, 0.9], [0.8, 1]) }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Trusted by startups and enterprises alike.
            </p>
          </motion.div>

          {/* Desktop Carousel */}
          <div className="hidden md:block overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: [0, -1030] }}
              transition={{
                x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" },
              }}
              onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
              onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
            >
              {[...TESTIMONIALS, ...TESTIMONIALS].map((review, i) => (
                <div key={`desktop-${i}`} className="flex-shrink-0" style={{ width: 'calc(25% - 18px)', maxWidth: '320px' }}>
                  <TestimonialCard review={review} index={i % TESTIMONIALS.length} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mobile Auto-Scrolling Carousel */}
          <div className="md:hidden overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: [0, -1030] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              onTouchStart={(e) => e.currentTarget.style.animationPlayState = 'paused'}
              onTouchEnd={(e) => e.currentTarget.style.animationPlayState = 'running'}
              onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
              onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
              style={{ width: 'fit-content' }}
            >
              {[...TESTIMONIALS, ...TESTIMONIALS].map((review, i) => (
                <div
                  key={`mobile-${i}`}
                  className="flex-shrink-0"
                  style={{ width: '85%', maxWidth: '320px' }}
                >
                  <TestimonialCard review={review} index={i % TESTIMONIALS.length} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      <AnimatedDivider />

      <style jsx>{`
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}

const Home = React.memo(HomeComponent);
export default Home;