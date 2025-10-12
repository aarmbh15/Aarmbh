import React from "react";
import { motion } from "framer-motion";

function Services() {
    // Define the custom colors based on the original theme
    const primaryGold = '#f7dab2'; 
    const secondaryGold = '#d9b991'; 
    const deepestBlack = 'bg-gray-950';

    // The services list, now filtered to include only the first four
    const services = [
      {
        icon: 'fas fa-globe',
        title: 'Web Development',
        description: 'Custom web applications using modern technologies like React, Vue.js, and Node.js. Optimized for performance and scale.',
        features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Security Focused'],
        startingPrice: '$2,500',
        deliveryTime: '2-4 weeks',
      },
      {
        icon: 'fas fa-mobile-alt',
        title: 'Mobile App Development',
        description: 'Cross-platform mobile applications for iOS and Android using React Native and Flutter for maximum reach.',
        features: ['Cross-platform', 'Native Performance', 'App Store Ready', 'Push Notifications'],
        startingPrice: '$5,000',
        deliveryTime: '4-8 weeks',
      },
      {
        icon: 'fas fa-server',
        title: 'Backend Development',
        description: 'Robust backend systems and APIs using Python, Node.js, and scalable cloud infrastructure.',
        features: ['RESTful APIs', 'Database Design', 'Cloud Integration', 'Security & Auth'],
        startingPrice: '$3,000',
        deliveryTime: '3-6 weeks',
      },
      {
        icon: 'fas fa-paint-brush',
        title: 'UI/UX Design',
        description: 'Creating beautiful, user-friendly interfaces that drive engagement and improve conversion rates.',
        features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
        startingPrice: '$1,500',
        deliveryTime: '1-3 weeks',
      },
      // The other two services were removed here
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
          {/* New Unsplash Background Image: A clean, technical image */}
          <div9 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop')", // Code/technology theme
            }}
          ></div9>

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
              // Modified to grid-cols-2 on medium screens and up
              className="grid grid-cols-1 md:grid-cols-2 gap-10" 
            >
              {services.map((service, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className={`bg-neutral-800 rounded-2xl shadow-2xl p-8 transition-transform duration-300 hover:scale-[1.02] border border-gray-700`}
                  style={{ borderBottom: `5px solid ${primaryGold}` }} // Gold accent border
                >
                  {/* Primary Gold for icon */}
                  <div className="text-5xl mb-6" style={{ color: primaryGold }}>
                    <i className={service.icon}></i>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6 min-h-[60px]">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3 text-lg">Key Features:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-base text-gray-300">
                          {/* Secondary Gold for checkmarks */}
                          <i className="fas fa-check-circle mr-3" style={{ color: secondaryGold }}></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-neutral-700 pt-6 mt-6">
                    <div className="flex justify-between items-center mb-5">
                      <div>
                        <span className="text-gray-400 text-sm block">Starting at</span>
                        {/* Primary Gold for price */}
                        <div className="text-3xl font-extrabold" style={{ color: primaryGold }}>{service.startingPrice}</div>
                      </div>
                      <div className="text-right">
                        <span className="text-gray-400 text-sm block">Estimated Delivery</span>
                        <div className="text-xl font-semibold text-white">{service.deliveryTime}</div>
                      </div>
                    </div>
                    
                    {/* Primary Gold for button */}
                    <motion.button 
                      whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${primaryGold}40` }}
                      whileTap={{ scale: 0.98 }}
                      style={{ backgroundColor: primaryGold, color: '#171717' }}
                      className="w-full py-3 rounded-xl font-bold text-lg transition-all"
                    >
                      <i className="fas fa-arrow-right mr-2"></i>
                      Start Project
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Development Process Section */}
        <section className={`py-20 bg-gray-950 text-white`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 text-amber-500">Our Seamless Process</h2>
            
            <div className="grid md:grid-cols-4 gap-12">
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
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  {/* Step Number Badge */}
                  <div 
                    style={{ backgroundColor: primaryGold, color: deepestBlack.replace('bg-', '#') }} 
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-extrabold shadow-lg"
                  >
                    {process.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-4xl mb-4" style={{ color: secondaryGold }}>
                    <i className={process.icon}></i>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{process.title}</h3>
                  <p className="text-gray-400">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Services;