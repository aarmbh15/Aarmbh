import React, { useEffect, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
// Framer-motion left as-is (you may lazy-load it at app level if needed)
import { motion } from "framer-motion";
const primaryGold = '#f7dab2';
const darkBackground = 'bg-gray-950';
const deepestBlack = 'bg-gray-900';
// const amberButtonClasses =
//   "bg-amber-500 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:bg-amber-400 cursor-pointer transition-transform hover:scale-105";

const FEATURES = [
  {
    title: "Fast Delivery",
    description:
      "Quick turnaround times without compromising quality. We deliver projects on time, every time.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Secure & Reliable",
    description:
      "Your projects are safe with us. We follow best practices for security and data protection.",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Clear Communication",
    description:
      "Regular updates and transparent communication throughout the development process.",
    img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Modern Tech Stack",
    description:
      "We use the latest technologies and frameworks to build scalable, maintainable solutions.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Competitive Pricing",
    description:
      "High-quality development services at competitive rates. No hidden fees or surprises.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80",
  },
  {
    title: "24/7 Support",
    description:
      "Round-the-clock support for ongoing projects and post-launch maintenance.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
];

// HERO image used in hero section (kept same url)
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=1920&q=80";

function HomeComponent() {
  const navigate = useNavigate();

  // Memoize features so it's stable across renders
  const features = useMemo(() => FEATURES, []);

  // Set document title and meta description for SEO (no external deps needed)
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Aarmbh — Expert Development Team";

    let meta = document.querySelector('meta[name="description"]');
    const prevDescription = meta ? meta.getAttribute('content') : null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      'content',
      'Aarmbh — Professional developers specializing in React, Node.js, Python, and more. From concept to deployment, we deliver high-quality, scalable, and reliable solutions.'
    );

    // Preload hero image to improve LCP (only if not already present)
    const preloadId = 'preload-hero-img';
    if (!document.querySelector(`link[id="${preloadId}"]`)) {
      const link = document.createElement('link');
      link.id = preloadId;
      link.rel = 'preload';
      link.as = 'image';
      // Use the same URL — browser will prioritize it earlier
      link.href = HERO_IMAGE;
      document.head.appendChild(link);
    }

    return () => {
      // restore previous title/description to avoid side-effects if navigating away
      document.title = prevTitle;
      if (meta) {
        if (prevDescription) meta.setAttribute('content', prevDescription);
        else meta.remove();
      }
    };
  }, []);

  // navigation handlers memoized
  const goTeam = useCallback(() => navigate('/team'), [navigate]);
  const goProjects = useCallback(() => navigate('/projects'), [navigate]);

  return (
    <div className={`pt-16 ${deepestBlack}`}>
      <header aria-label="Hero">
       {/* HERO SECTION — Upgraded */}
<section
  className="relative min-h-screen flex items-center justify-center overflow-hidden bg-no-repeat bg-center"
  aria-labelledby="hero-heading"
>
  {/* Background image (kept as <img> for LCP & layout stability) */}
  <img
  src={HERO_IMAGE}
  alt="Office / developer workspace"
  fetchpriority="high"
  decoding="async"
  width="1920"
  height="1080"
  style={{
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    zIndex: 0,
  }}
  aria-hidden="false"
/>


  {/* Gradient + dark navy overlay to give contrast (navy + amber tint) */}
  <div
    className="absolute inset-0"
    style={{
      background:
        "linear-gradient(180deg, rgba(6,10,25,0.65) 0%, rgba(6,10,25,0.75) 40%, rgba(3,6,20,0.85) 100%)",
      mixBlendMode: "normal",
      zIndex: 1,
    }}
    aria-hidden="true"
  />

  {/* Subtle decorative light flare (gold) */}
  <div
    className="pointer-events-none absolute -left-20 -top-20 w-96 h-96 rounded-full blur-3xl opacity-30"
    style={{ background: "radial-gradient(circle, rgba(255,221,150,0.25), rgba(255,204,92,0.0))", zIndex: 2 }}
    aria-hidden="true"
  />

  {/* Content wrapper (zIndex above image + overlays) */}
  <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center text-white">
    {/* Inline animation CSS kept minimal and respectful of reduced-motion */}
    <style>{`
      @keyframes fade-in-up {
        0% { opacity: 0; transform: translateY(18px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes glow {
        0% { text-shadow: 0 0 0 rgba(255, 184, 77, 0.0); }
        50% { text-shadow: 0 8px 30px rgba(255, 184, 77, 0.12); }
        100% { text-shadow: 0 0 0 rgba(255, 184, 77, 0.0); }
      }
      .animate-fade-in-up { animation: fade-in-up 700ms cubic-bezier(.22,.9,.3,1) both; }
      .animate-glow { animation: glow 3s ease-in-out infinite; }
      @media (prefers-reduced-motion: reduce) {
        .animate-fade-in-up, .animate-glow { animation: none !important; }
      }
    `}</style>

    {/* Heading */}
    <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white mb-4 animate-fade-in-up">
      Expert Development Team
      <span className="block text-amber-400 mt-2 animate-glow">
        Ready to Build Your Vision
      </span>
    </h1>

    {/* Subheading */}
    <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-200 mb-8 animate-fade-in-up" style={{ animationDelay: "120ms" }}>
     Professional developers specializing in React, Node.js, Python, and more. From concept to deployment, we deliver high-quality, scalable, and reliable solutions.
    </p>

    {/* CTAs */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 animate-fade-in-up" style={{ animationDelay: "220ms" }}>
      <button
        onClick={goTeam}
        className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold shadow-lg transition-transform transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-300 focus-visible:ring-opacity-40"
        style={{
          background: "linear-gradient(90deg, #F59E0B 0%, #FBBF24 100%)",
          color: "#061223",
        }}
        aria-label="Meet our team"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="opacity-90">
          <path d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 20a8 8 0 0116 0" stroke="#061223" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Meet Our Team
      </button>

      <button
        onClick={goProjects}
        className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold border-2 border-amber-300 bg-transparent text-amber-300 hover:bg-amber-500/10 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-300 focus-visible:ring-opacity-25"
        aria-label="View projects"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="opacity-95">
          <path d="M3 7v10a2 2 0 002 2h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 7V5a2 2 0 00-2-2H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        View Projects
      </button>
    </div>
  </div>
</section>

      </header>

      <main>
        <section className={`relative py-16 ${deepestBlack} overflow-hidden`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Team?</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                We combine technical expertise with seamless project management to deliver exceptional results.
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative overflow-hidden rounded-2xl shadow-2xl backdrop-blur-md bg-white/10 border border-white/20 group"
                >
                  {/* Background Image — use <img> with lazy loading, set width/height for CLS */}
                  <img
                    src={feature.img}
                    alt={feature.title}
                    loading="lazy"
                    decoding="async"
                    width="1200"
                    height="800"
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                  />

                  {/* Glass Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-2xl" />

                  {/* Content */}
                  <div className="relative z-10 p-8 text-center">
                    <h3 className="text-2xl font-semibold text-amber-400 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-200">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className={`py-16 ${darkBackground}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-bold mb-4 text-white">Our Achievements</h3>
            <p className="text-gray-400 mb-12 text-lg italic">From concept to completion - we make it happen.</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="fade-in transform transition duration-500 hover:scale-105 bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold mb-2" style={{ color: primaryGold }}>10+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>

              <div className="fade-in transform transition duration-500 hover:scale-105 bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold mb-2" style={{ color: primaryGold }}>90%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>

              <div className="fade-in transform transition duration-500 hover:scale-105 bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold mb-2" style={{ color: primaryGold }}>4+</div>
                <div className="text-gray-400">Expert Developers</div>
              </div>

              <div className="fade-in transform transition duration-500 hover:scale-105 bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold mb-2" style={{ color: primaryGold }}>24/7</div>
                <div className="text-gray-400">Support Available</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Add this CSS for animation and respects reduced motion */}
      <style>{`
        .fade-in-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.8s ease forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .floating-slow {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .fade-in-up, .floating-slow { animation: none !important; transition: none !important; }
        }
      `}</style>
    </div>
  );
}

const Home = React.memo(HomeComponent);
export default Home;
