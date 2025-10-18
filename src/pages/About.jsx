import React from 'react';
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';

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


const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Add these missing icon components (kept for functionality)
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

const AboutPage = () => {
  // Differentiators data
  const differentiators = [
    { label: 'Projects Delivered', value: '100+', icon: <FiLayers className="w-8 h-8" /> },
    { label: 'Average ROI Improvement', value: '45%', icon: <FiTrendingUp className="w-8 h-8" /> },
    { label: 'Trainees Placed', value: '200+', icon: <FiUsers className="w-8 h-8" /> },
    { label: 'Combined Expertise', value: '4 Domains', icon: <FiCode className="w-8 h-8" /> },
  ];

  // Values data
  const values = [
    { title: 'Innovation-Driven', description: 'We constantly explore emerging technologies to deliver forward-thinking solutions', icon: <FiCode className="w-6 h-6" /> },
    { title: 'Client-Centric', description: 'Every project is designed around measurable business impact', icon: <FiHeart className="w-6 h-6" /> },
    { title: 'Integrity', description: 'We maintain transparency and ethical practices in every engagement', icon: <FiShield className="w-6 h-6" /> },
    { title: 'Collaboration', description: 'Strong partnerships and cross-functional teamwork are our foundation', icon: <FiUsers className="w-6 h-6" /> },
    { title: 'Excellence', description: 'We aim for the highest standards in performance, security, and usability', icon: <FiAward className="w-6 h-6" /> },
    { title: 'Growth Mindset', description: 'We cultivate continuous learning for both our team and the talent we train', icon: <FiBarChart2 className="w-6 h-6" /> },
  ];

  // Industries data
  const industries = [
    { name: 'E-commerce', icon: <FiDollarSign className="w-5 h-5" /> },
    { name: 'Healthcare', icon: <FiHeart className="w-5 h-5" /> },
    { name: 'Finance', icon: <FiBarChart2 className="w-5 h-5" /> },
    { name: 'SaaS', icon: <FiCloud className="w-5 h-5" /> },
    { name: 'Education', icon: <FiBook className="w-5 h-5" /> },
    { name: 'Real Estate', icon: <FiHome className="w-5 h-5" /> },
  ];

  // Expanded data for global city markers (Not used in the final render, but kept in data)
  const cityMarkers = [
    // ... cityMarkers data is here ... (omitted for brevity)
    { name: "New York", coordinates: [-74.006, 40.7128], color: "#14b8a6" },
    { name: "Los Angeles", coordinates: [-118.2437, 34.0522], color: "#14b8a6" },
    { name: "Toronto", coordinates: [-79.3832, 43.6532], color: "#fb923c" },
    { name: "Mexico City", coordinates: [-99.1332, 19.4326], color: "#fb923c" },
    { name: "Chicago", coordinates: [-87.6298, 41.8781], color: "#14b8a6" },
    { name: "Vancouver", coordinates: [-123.1207, 49.2827], color: "#fb923c" },
    { name: "Montreal", coordinates: [-73.5673, 45.5017], color: "#fb923c" },
    { name: "Calgary", coordinates: [-114.0719, 51.0447], color: "#fb923c" },

    // Europe
    { name: "London", coordinates: [-0.1278, 51.5074], color: "#3b82f6" },
    { name: "Berlin", coordinates: [13.4050, 52.5200], color: "#a855f7" },
    { name: "Paris", coordinates: [2.3522, 48.8566], color: "#a855f7" },
    { name: "Rome", coordinates: [12.4964, 41.9028], color: "#a855f7" },
    { name: "Madrid", coordinates: [-3.7038, 40.4168], color: "#a855f7" },
    { name: "Amsterdam", coordinates: [4.8952, 52.3702], color: "#3b82f6" },
    { name: "Dublin", coordinates: [-6.2603, 53.3498], color: "#3b82f6" },
    { name: "Stockholm", coordinates: [18.0686, 59.3293], color: "#3b82f6" },
    { name: "Vienna", coordinates: [16.3738, 48.2082], color: "#3b82f6" },

    // Asia
    { name: "Tokyo", coordinates: [139.6917, 35.6895], color: "#f59e0b" },
    { name: "Mumbai", coordinates: [72.8777, 19.0760], color: "#10b981" },
    { name: "Shanghai", coordinates: [121.4737, 31.2304], color: "#ef4444" },
    { name: "Seoul", coordinates: [126.9780, 37.5665], color: "#f59e0b" },
    { name: "Singapore", coordinates: [103.8198, 1.3521], color: "#10b981" },
    { name: "Dubai", coordinates: [55.2708, 25.2048], color: "#8b5cf6" },
    { name: "Bangkok", coordinates: [100.5018, 13.7563], color: "#10b981" },
    { name: "Jakarta", coordinates: [106.8456, -6.2088], color: "#10b981" },
    { name: "Kuala Lumpur", coordinates: [101.6869, 3.1390], color: "#10b981" },

    // Other continents
    { name: "Sydney", coordinates: [151.2093, -33.8688], color: "#ef4444" },
    { name: "Sao Paulo", coordinates: [-46.6333, -23.5505], color: "#6366f1" },
    { name: "Johannesburg", coordinates: [28.0473, -26.2041], color: "#fcd34d" },
    { name: "Cairo", coordinates: [31.2357, 30.0444], color: "#f59e0b" },
    { name: "Moscow", coordinates: [37.6173, 55.7558], color: "#3b82f6" },
    { name: "Buenos Aires", coordinates: [-58.3816, -34.6037], color: "#6366f1" },
    { name: "Cape Town", coordinates: [18.4241, -33.9249], color: "#fcd34d" },
    { name: "Tel Aviv", coordinates: [34.7818, 32.0853], color: "#8b5cf6" },
    { name: "Melbourne", coordinates: [144.9631, -37.8136], color: "#ef4444" },
    { name: "Perth", coordinates: [115.8605, -31.9505], color: "#ef4444" },
    { name: "Brisbane", coordinates: [153.0251, -27.4698], color: "#ef4444" },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans overflow-x-hidden">
      <Helmet>
        <title>About Aarmbh | Transforming Ideas Into Real-World Impact</title>
        <meta name="description" content="Discover Aarmbh's vision, mission, core values, and expertise in delivering innovative technology solutions across industries like E-commerce, Healthcare, and Finance." />
        <meta name="keywords" content="Aarmbh, about us, technology solutions, freelance development, innovation, client-centric, digital transformation" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Aarmbh | Empowering Business Growth with Technology" />
        <meta property="og:description" content="Where technology meets strategy. Learn about our vision to revolutionize the digital landscape and our mission to deliver top-tier digital products." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/about" /> {/* Replace with actual URL */}
        <meta property="og:image" content="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2940&auto=format&fit=crop" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Aarmbh | Transforming Ideas Into Impact" />
        <meta name="twitter:description" content="Empowering businesses with intelligent solutions. Explore our values, industries, and differentiators." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2940&auto=format&fit=crop" />
        <link rel="canonical" href="https://yourdomain.com/about" /> {/* Replace with actual URL */}
      </Helmet>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800"> {/* Kept original gradient for the hero */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 container mx-auto px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl mt-20 font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-500">
              Transforming Measurable Success
            </h1>
            <p className="text-lg md:text-xl text-white leading-relaxed">
              H&amp;H Tech Solutions brings technology, strategy and execution under one roof working as one unified force to drive your business growth.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Vision & Mission - Section 1: Darker Gray */}
      <section className="py-16 bg-gray-900 ">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">What Drives Us</h2>
            <p className="text-gray-400 mt-4">
              Our core principles and goals that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-xl"
            >
              <div className="flex items-center mb-6">
                <div className="bg-teal-500/20 p-3 rounded-full mr-4">
                  <FiTarget className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To reshape how businesses grow by eliminating fragmentation and empowering companies with unified, intelligent, and performance-driven solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-xl"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-500/20 p-3 rounded-full mr-4">
                  <FiBriefcase className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To become the most trusted growth partner for businesses by offering holistic, results-oriented solutions from audit to acquisition all delivered through expert teams.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Differentiators - Section 2: Slightly Lighter Background */}
      <section className="py-16 bg-gray-950 ">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Makes Us <span className="text-amber-500">Different</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We deliver results that matter through our unique approach
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-teal-500/50 transition-all hover:shadow-lg"
              >
                <div className="text-amber-500 mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{item.value}</h3>
                <p className="text-gray-400">{item.label}</p>
              </motion.div>
            ))}
          </div>

          {/* End-to-End Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-teal-500/10 to-blue-500/10 p-8 rounded-2xl border border-amber-500/30"
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
                  From first consultation to full-scale deployment, we&apos;re with you at every step. Our comprehensive approach ensures seamless integration and continuous optimization.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries - Section 3: Slightly Darker Gray/Blue Hue */}
      <section className="py-16 bg-gray-900 ">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industries We <span className="text-amber-500">Serve</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tailored solutions for diverse business needs
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
                className="flex items-center bg-gray-800/50 px-6 py-3 rounded-full border border-gray-700 hover:border-teal-500/50 transition-all"
              >
                <span className="text-amber-500 mr-2">{industry.icon}</span>
                <span>{industry.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values & Culture - Section 4: Lighter Background again */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core <span className="text-amber-500">Values &amp; Culture</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              At H&amp;H Tech Solutions, our values guide our partnerships and projects. Our culture blends professionalism with creativity, encouraging bold ideas, ownership, and a shared commitment to results.
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
                className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-teal-500/20 p-2 rounded-full mr-4">
                    <span className="text-amber-500">{value.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                </div>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;