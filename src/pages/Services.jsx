import React from "react";
import { motion } from "framer-motion";

function Services() {
    // Define the custom colors based on the original theme
    // Removed: primaryGold and secondaryGold
    const deepestBlack = 'bg-gray-950';

    // The services list, now filtered to include only the first four
    const services = [
      {
        icon: 'fas fa-globe',
        title: 'Web Development',
        description: 'Custom web applications using modern technologies like HTML,CSS,Javasript, & Framework like PHP, React.js and Node.js. Optimized for performance and scale.',
        features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Security Focused'],
      },
      {
        icon: 'fas fa-mobile-alt',
        title: 'Mobile App Development',
        description: 'Cross-platform mobile applications for iOS and Android using Flutter for maximum reach.',
        features: ['Cross-platform', 'Native Performance', 'App Store Ready', 'Push Notifications'],
      },
      {
        icon: 'fas fa-server',
        title: 'Backend Development',
        description: 'Robust backend systems and APIs using Python, Node.js,PHP-Laravel,C,C++,Golang and scalable cloud infrastructure.',
        features: ['RESTful APIs', 'Database Design', 'Cloud Integration', 'Security & Auth'],
      },
      {
        icon: 'fas fa-paint-brush',
        title: 'UI/UX Design',
        description: 'Creating beautiful,user-friendly interfaces using Figma,Canva,Adobe-that drive engagement and improve conversion rates.',
        features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      },
      {
        icon: 'fas fa-cogs',
        title: 'AI & Machine Learning',
        description: 'Transform your business with intelligent automation, predictive insights, and AI-powered customer experiences — built to scale and deliver measurable ROI.',
        features: [
          'Tailored AI Models',
          'Smart Chatbots & NLP',
          'Predictive Analytics',
          'Vision-Powered Automation',
        ],
      },
    ];

    // Animation variants for card staggering
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    };

    const itemVariants = {
      hidden: { y: 20, opacity: 0, scale: 0.95 },
      visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 20,
        },
      },
    };
  
    return (
      <div className={`pt-16 min-h-screen ${deepestBlack}`}>

        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop')",
            }}
          ></div>

          <div className="relative z-10 container mx-auto px-6 py-24 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl mt-20 font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-500">
                Our Expert Services
              </h1>
              <p className="text-lg md:text-xl text-white leading-relaxed">
                From concept to deployment, we offer comprehensive development services to bring your ideas to life.
              </p>
            </motion.div>
          </div>
        </div>

        
        {/* Services Grid Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-10" 
            >
              {services.map((service, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  // Updated card border and added hover shadow
                  className={`bg-neutral-800 rounded-2xl shadow-2xl p-8 transition-transform duration-300 hover:scale-[1.02] border border-gray-400  cursor-pointer border-b-4`}
                  // Removed inline style border
                >
                  {/* Icon - Updated to use text-amber-500 class */}
                  <div className="text-5xl mb-6 text-amber-400">
                    <i className={service.icon}></i>
                  </div>
                  <h3 className="text-3xl text-white font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6 min-h-[60px]">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3 text-lg">Key Features:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-base text-gray-300">
                          {/* Checkmark - Updated to use text-amber-500 class */}
                          <i className="fas fa-check-circle mr-3 text-amber-500"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-neutral-700 pt-6 mt-6">
                    <div className="flex justify-between items-center mb-5">
                    </div>
                    {/* Button - Updated to use bg-amber-500 and simplified whileHover */}
                   <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
  className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 ml-auto py-3 rounded-xl font-bold text-lg transition-all cursor-pointer bg-amber-400 text-gray-950 hover:bg-amber-400 flex items-center justify-center"
>
  <span>Start Project</span>
  <i className="fas fa-arrow-right ml-2"></i>
</motion.button>


                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Development Process Section - UPDATED TO CARDS */}
        <section className={`py-20 bg-gray-950 text-white`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">Our Seamless Process</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Discovery & Audit',
                  description: 'We align on goals, analyze your existing infrastructure, and create a detailed roadmap.',
                  icon: 'fas fa-lightbulb',
                },
                {
                  step: '02',
                  title: 'Design & Prototyping',
                  description: 'Create technical architecture, wireframes, mockups, and final UI/UX specifications.',
                  icon: 'fas fa-drafting-compass',
                },
                {
                  step: '03',
                  title: 'Agile Development',
                  description: 'Build your solution in iterative sprints with continuous integration and testing.',
                  icon: 'fas fa-code',
                },
                {
                  step: '04',
                  title: 'Deployment & Support',
                  description: 'Smooth launch, post-launch monitoring, and guaranteed ongoing maintenance and support.',
                  icon: 'fas fa-rocket',
                },
              ].map((process, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="bg-neutral-800 rounded-xl p-6 shadow-xl border border-gray-700 transition-all duration-300 hover:border-amber-500 cursor-pointer"
                >
                  {/* Step Number Badge - Already using bg-amber-500 */}
                  <div 
                    className="w-12 h-12 bg-amber-500 text-gray-950 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-extrabold shadow-lg"
                  >
                    {process.step}
                  </div>
                  
                  {/* Icon - Updated to use text-amber-500 class */}
                  <div className="text-4xl mb-4 text-center text-amber-500">
                    <i className={process.icon}></i>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{process.title}</h3>
                  <p className="text-gray-400 text-center">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Services;