import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';
import { FaUsers, FaEye } from 'react-icons/fa'; // Replaced Font Awesome with react-icons for better performance
import React, { Suspense, lazy } from 'react'; // For lazy loading components

// Lazy load motion components to reduce initial bundle size
const LazyMotionDiv = lazy(() => import('framer-motion').then(module => ({ default: module.motion.div })));

// Optimized image URLs: Added &fm=webp&q=75 for compression and WebP format
const heroImage = 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=1920&q=75&fm=webp';
const featureImages = [
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=75&fm=webp',
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=75&fm=webp',
  'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=75&fm=webp',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=75&fm=webp',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=75&fm=webp',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=75&fm=webp',
];

function Home() {
  const navigate = useNavigate();

<<<<<<< Updated upstream
  // New Gold/Bronze Colors from user request
  // #f7dab2 is the lighter, more prominent gold for main text/accents
  const primaryGold = '#f7dab2'; 
  // #d9b991 is the darker gold for borders, secondary accents, and hover effects
  const secondaryGold = '#d9b991'; 
  
  // Using 'bg-neutral-900' for the dark navy/nearly black background, which is close to the logo's background
=======
  const primaryGold = '#f7dab2'; 
>>>>>>> Stashed changes
  const darkBackground = 'bg-gray-950'; 
  const deepestBlack = 'bg-gray-900';
<<<<<<< Updated upstream
=======
  const amberButtonClasses = "bg-amber-500 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:bg-amber-400 cursor-pointer transition-transform hover:scale-105";
>>>>>>> Stashed changes

  return (
    <div className={`pt-16 ${deepestBlack}`}>
      
      {/* ✅ Helmet for SEO with preload for hero image */}
      <Helmet>
        <title>Expert Freelance Developers | React, Node.js, Python Experts</title>
        <meta
          name="description"
          content="Hire professional freelance developers specializing in React, Node.js, and Python. From concept to deployment — we build high-quality, scalable, and reliable solutions."
        />
        <meta
          name="keywords"
          content="freelance developers, React developers, Node.js experts, Python projects, web development team, full stack development, software development"
        />
        <meta name="author" content="Paramveer Patil & Team" />
        <meta property="og:title" content="Expert Freelance Developers | React, Node.js, Python Experts" />
        <meta property="og:description" content="Hire our team of expert freelance developers for React, Node.js, and Python projects. Build your vision with professionals." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta property="og:image" content={heroImage} />
        <link rel="canonical" href="https://yourwebsite.com/" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" as="image" href={heroImage} /> {/* Preload hero image */}
        <link rel="preconnect" href="https://images.unsplash.com" /> {/* Preconnect to image domain */}
      </Helmet>
      {/* ✅ End Helmet */}

      <section
<<<<<<< Updated upstream
  className="relative text-white min-h-screen flex items-center justify-center overflow-hidden bg-center bg-cover bg-no-repeat"
  style={{
    backgroundImage: `url('https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=1920&q=80')`,
  }}
>
  {/* Dark Overlay for readability */}
  <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]"></div>

  {/* Animations */}
  <style>
    {`
      @keyframes fade-in-up {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }

      @keyframes fade-in {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
      @keyframes float-slow {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-15px); }
      }

      .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
      .animate-fade-in { animation: fade-in 1.2s ease-in forwards; }
      .animate-text-glow { animation: text-glow 2.5s ease-in-out infinite alternate; }
      .floating-slow { animation: float-slow 5s ease-in-out infinite; }
      .delay-1000 { animation-delay: 1s; }
      .delay-2000 { animation-delay: 2s; }
      .delay-3000 { animation-delay: 3s; }
      .delay-4000 { animation-delay: 4s; }
      .delay-5000 { animation-delay: 5s; }
    `}
  </style>

  {/* Content Wrapper */}
  <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
    {/* Heading */}
    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in-up">
      Expert Development Team
      <span className="block text-amber-400 animate-text-glow">
        Ready to Build Your Vision
      </span>
    </h1>

    {/* Subtitle */}
    <p className="text-lg md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto animate-fade-in">
      Professional freelance developers specializing in React, Node.js, Python, and more.  
      From concept to deployment, we deliver high-quality, scalable, and reliable solutions.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in-up">
      <button
        onClick={() => navigate('/team')}
        style={{ backgroundColor: primaryGold, color: '#171717' }}
        className="px-8 py-4 rounded-lg text-lg font-semibold transition-transform hover:scale-105 hover:shadow-[0_0_15px_#f7dab2]"
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = secondaryGold}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = primaryGold}
=======
        className="relative text-white min-h-screen flex items-center justify-center overflow-hidden bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('${heroImage}')`,
        }}
>>>>>>> Stashed changes
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]"></div>

<<<<<<< Updated upstream
      <button
        onClick={() => navigate('/projects')}
        style={{ borderColor: secondaryGold, color: secondaryGold }}
        className="border-2 px-8 py-4 rounded-lg text-lg font-semibold transition-transform hover:scale-105 hover:shadow-[0_0_15px_#f7dab2]"
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = primaryGold; 
          e.currentTarget.style.borderColor = primaryGold;
          e.currentTarget.style.color = '#171717';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.borderColor = secondaryGold;
          e.currentTarget.style.color = secondaryGold;
        }}
      >
        <i className="fas fa-eye mr-2"></i>
        View Projects
      </button>
    </div>
  </div>
</section>
=======
        {/* Simplified animations: Removed custom keyframes for performance; use Tailwind or basic CSS */}
        <style>
          {`
            @keyframes fade-in-up {
              0% { opacity: 0; transform: translateY(20px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
          `}
        </style>
>>>>>>> Stashed changes

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in-up">
            Expert Development Team
            <span className="block text-amber-400">
              Ready to Build Your Vision
            </span>
          </h1>

          <p className="text-lg md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto animate-fade-in-up">
            Professional freelance developers specializing in React, Node.js, Python, and more.  
            From concept to deployment, we deliver high-quality, scalable, and reliable solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in-up">
            <button
              onClick={() => navigate('/team')}
              className={amberButtonClasses}
            >
              <FaUsers className="inline mr-2" />
              Meet Our Team
            </button>

            <button
              onClick={() => navigate('/projects')}
              className={amberButtonClasses}
            >
              <FaEye className="inline mr-2" />
              View Projects
            </button>
          </div>
        </div>
      </section>

      <section className={`relative py-16 ${deepestBlack} overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<div>Loading...</div>}>
            <LazyMotionDiv
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Team?</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                We combine technical expertise with seamless project management to deliver exceptional results.
              </p>
            </LazyMotionDiv>
          </Suspense>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Fast Delivery",
                description: "Quick turnaround times without compromising quality. We deliver projects on time, every time.",
                img: featureImages[0],
              },
              {
                title: "Secure & Reliable",
                description: "Your projects are safe with us. We follow best practices for security and data protection.",
                img: featureImages[1],
              },
              {
                title: "Clear Communication",
                description: "Regular updates and transparent communication throughout the development process.",
                img: featureImages[2],
              },
              {
                title: "Modern Tech Stack",
                description: "We use the latest technologies and frameworks to build scalable, maintainable solutions.",
                img: featureImages[3],
              },
              {
                title: "Competitive Pricing",
                description: "High-quality development services at competitive rates. No hidden fees or surprises.",
                img: featureImages[4],
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock support for ongoing projects and post-launch maintenance.",
                img: featureImages[5],
              },
            ].map((feature, index) => (
              <Suspense key={index} fallback={<div>Loading...</div>}>
                <LazyMotionDiv
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative overflow-hidden rounded-2xl shadow-2xl backdrop-blur-md bg-white/10 border border-white/20 group"
                >
                  <img
                    src={feature.img}
                    alt={feature.title}
                    loading="lazy" // Lazy load images
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-2xl"></div>
                  <div className="relative z-10 p-8 text-center">
                    <h3 className="text-2xl font-semibold text-amber-400 mb-3">{feature.title}</h3>
                    <p className="text-gray-200">{feature.description}</p>
                  </div>
                </LazyMotionDiv>
              </Suspense>
            ))}
          </div>
        </div>
      </section>

<<<<<<< Updated upstream
    {/* Slogan */}
    <p className="text-gray-400 mb-12 text-lg italic">
      From concept to completion - we make it happen.
    </p>

    {/* Stats Grid */}
   <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
  <div className="fade-in transform transition duration-500 hover:scale-105 bg-gray-800 rounded-xl p-6 shadow-lg">
    <div className="text-4xl font-bold mb-2" style={{ color: primaryGold }}>10+</div>
    <div className="text-gray-400">Projects Completed</div>
  </div>

  <div className="fade-in transform transition duration-500 hover:scale-105 bg-gray-800 rounded-xl p-6 shadow-lg">
    <div className="text-4xl font-bold mb-2" style={{ color: primaryGold }}>98%</div>
    <div className="text-gray-400">Client Satisfaction</div>
  </div>

  <div className="fade-in transform transition duration-500 hover:scale-105 bg-gray-800 rounded-xl p-6 shadow-lg">
    <div className="text-4xl font-bold mb-2" style={{ color: primaryGold }}>5+</div>
    <div className="text-gray-400">Expert Developers</div>
  </div>

  <div className="fade-in transform transition duration-500 hover:scale-105 bg-gray-800 rounded-xl p-6 shadow-lg">
    <div className="text-4xl font-bold mb-2" style={{ color: primaryGold }}>24/7</div>
    <div className="text-gray-400">Support Available</div>
  </div>
</div>

  </div>
</section>
=======
      <section className={`py-16 ${darkBackground}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4 text-white">Our Achievements</h3>
          <p className="text-gray-400 mb-12 text-lg italic">From concept to completion - we make it happen.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform transition duration-500 hover:scale-105 bg-gray-800 rounded-xl p-6 shadow-lg animate-fade-in-up">
              <div className="text-4xl font-bold mb-2" style={{ color: primaryGold }}>10+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="transform transition duration-500 hover:scale-105 bg-gray-800 rounded-xl p-6 shadow-lg animate-fade-in-up">
              <div className="text-4xl font-bold mb-2" style={{ color: primaryGold }}>90%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
            <div className="transform transition duration-500 hover:scale-105 bg-gray-800 rounded-xl p-6 shadow-lg animate-fade-in-up">
              <div className="text-4xl font-bold mb-2" style={{ color: primaryGold }}>4+</div>
              <div className="text-gray-400">Expert Developers</div>
            </div>
            <div className="transform transition duration-500 hover:scale-105 bg-gray-800 rounded-xl p-6 shadow-lg animate-fade-in-up">
              <div className="text-4xl font-bold mb-2" style={{ color: primaryGold }}>24/7</div>
              <div className="text-gray-400">Support Available</div>
            </div>
          </div>
        </div>
      </section>
>>>>>>> Stashed changes
    </div>
  );
}

export default Home;