import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

function Home() {
  const navigate = useNavigate();

  // NOTE: The primaryGold and secondaryGold variables are still defined
  // but the CTA buttons below will now use the bg-amber-500 theme
  // as requested by the user.
  // #f7dab2 is the lighter, more prominent gold for main text/accents
  const primaryGold = '#f7dab2'; 
  // #d9b991 is the darker gold for borders, secondary accents, and hover effects
  const secondaryGold = '#d9b991'; 
  
  // Using 'bg-neutral-900' for the dark navy/nearly black background, which is close to the logo's background
  const darkBackground = 'bg-gray-950'; 
  // Using 'bg-black' for the deepest black elements
  const deepestBlack = 'bg-gray-900';

  // New Requested Button Style Classes
  const amberButtonClasses = "bg-amber-500 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:bg-amber-400 cursor-pointer transition-transform hover:scale-105";

  return (
    <div className={`pt-16 ${deepestBlack}`}> {/* Main background set to black */}
      <section
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
      {/* Retained the amber-400 color for the heading accent as it fits the new theme */}
      <span className="block text-amber-400 animate-text-glow">
        Ready to Build Your Vision
      </span>
    </h1>

    {/* Subtitle */}
    <p className="text-lg md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto animate-fade-in">
      Professional freelance developers specializing in React, Node.js, Python, and more.  
      From concept to deployment, we deliver high-quality, scalable, and reliable solutions.
    </p>

    {/* CTA Buttons - UPDATED */}
    <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in-up">
      <button
        onClick={() => navigate('/team')}
        // Applying the new amber button classes
        className={amberButtonClasses}
        // Removed inline styles and mouse event handlers
      >
        <i className="fas fa-users mr-2"></i>
        Meet Our Team
      </button>

      <button
        onClick={() => navigate('/projects')}
        // Applying the new amber button classes. For the secondary button, 
        // I'm applying the same style for visual consistency and to meet the request.
        className={amberButtonClasses}
        // Removed inline styles and mouse event handlers
      >
        <i className="fas fa-eye mr-2"></i>
        View Projects
      </button>
    </div>
  </div>
</section>


<section className={`relative py-16 ${deepestBlack} overflow-hidden`}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading Section */}
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
      {[
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
      ].map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="relative overflow-hidden rounded-2xl shadow-2xl backdrop-blur-md bg-white/10 border border-white/20 group"
        >
          {/* Background Image */}
          <img
            src={feature.img}
            alt={feature.title}
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
          />

          {/* Glass Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-2xl"></div>

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
</section>;

{/* Add this CSS for animation */}
<style jsx>{`
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
`}</style>

      {/* // Section using Primary Gold for statistics 
      // The original Gold accent was used for the number, so we use primaryGold.
      */}
   <section className={`py-16 ${darkBackground}`}> {/* Background set to Black */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    {/* Section Heading */}
    <h3 className="text-3xl font-bold mb-4 text-white">
      Our Achievements
    </h3>

    {/* Slogan */}
    <p className="text-gray-400 mb-12 text-lg italic">
      From concept to completion - we make it happen.
    </p>

    {/* Stats Grid */}
   <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
  <div className="fade-in transform transition duration-500 hover:scale-105 bg-gray-800 rounded-xl p-6 shadow-lg">
    {/* Kept the custom gold color for the stat numbers for contrast */}
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
    </div>
  );
}

export default Home;