function Services() {
    const primaryGold = '#f7dab2'; 
    const secondaryGold = '#d9b991'; 
  const darkBackground = 'bg-gray-900'; 
    const deepestBlack = 'bg-gray-950';

    const services = [
      {
        icon: 'fas fa-globe',
        title: 'Web Development',
        description: 'Custom web applications using modern technologies like React, Vue.js, and Node.js.',
        features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Security Focused'],
        startingPrice: '$2,500',
        deliveryTime: '2-4 weeks',
      },
      {
        icon: 'fas fa-mobile-alt',
        title: 'Mobile App Development',
        description: 'Cross-platform mobile applications for iOS and Android using React Native and Flutter.',
        features: ['Cross-platform', 'Native Performance', 'App Store Ready', 'Push Notifications'],
        startingPrice: '$5,000',
        deliveryTime: '4-8 weeks',
      },
      {
        icon: 'fas fa-server',
        title: 'Backend Development',
        description: 'Robust backend systems and APIs using Python, Node.js, and cloud technologies.',
        features: ['RESTful APIs', 'Database Design', 'Cloud Integration', 'Security & Auth'],
        startingPrice: '$3,000',
        deliveryTime: '3-6 weeks',
      },
      {
        icon: 'fas fa-paint-brush',
        title: 'UI/UX Design',
        description: 'Beautiful, user-friendly interfaces that convert visitors into customers.',
        features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
        startingPrice: '$1,500',
        deliveryTime: '1-3 weeks',
      },
      {
        icon: 'fas fa-robot',
        title: 'AI & Machine Learning',
        description: 'Intelligent solutions using machine learning, data analysis, and AI technologies.',
        features: ['Data Analysis', 'Predictive Models', 'NLP Solutions', 'Computer Vision'],
        startingPrice: '$4,000',
        deliveryTime: '4-10 weeks',
      },
      {
        icon: 'fas fa-cloud',
        title: 'DevOps & Cloud',
        description: 'Cloud infrastructure, deployment automation, and DevOps best practices.',
        features: ['CI/CD Pipelines', 'AWS/GCP/Azure', 'Docker/Kubernetes', 'Monitoring'],
        startingPrice: '$2,000',
        deliveryTime: '2-5 weeks',
      },
    ];
  
    return (
      <div className={`pt-16 min-h-screen ${deepestBlack}`}>
        <section className={`py-16 ${darkBackground} text-white`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From concept to deployment, we offer comprehensive development services to bring your ideas to life.
            </p>
          </div>
        </section>
  
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`bg-neutral-800 rounded-xl shadow-lg p-8 card-hover text-white`}
                  style={{ borderBottom: `4px solid ${primaryGold}` }} // Gold accent border
                >
                  {/* Primary Gold for icon */}
                  <div className="text-4xl mb-6" style={{ color: primaryGold }}>
                    <i className={service.icon}></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                          {/* Secondary Gold for checkmarks */}
                          <i className="fas fa-check mr-2" style={{ color: secondaryGold }}></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-neutral-700 pt-6">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <span className="text-gray-400 text-sm">Starting at</span>
                        {/* Primary Gold for price */}
                        <div className="text-2xl font-bold" style={{ color: primaryGold }}>{service.startingPrice}</div>
                      </div>
                      <div className="text-right">
                        <span className="text-gray-400 text-sm">Delivery</span>
                        <div className="font-semibold text-white">{service.deliveryTime}</div>
                      </div>
                    </div>
                    {/* Primary Gold for button */}
                    <button 
                      style={{ backgroundColor: primaryGold, color: '#171717' }}
                      className="w-full py-3 rounded-lg transition-colors hover:opacity-80">
                      <i className="fas fa-shopping-cart mr-2"></i>
                      Get Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        <section className={`py-16 ${darkBackground} text-white`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Development Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Discovery',
                  description: 'We analyze your requirements and create a detailed project roadmap.',
                  icon: 'fas fa-lightbulb',
                },
                {
                  step: '02',
                  title: 'Design & Planning',
                  description: 'Create wireframes, mockups, and technical specifications.',
                  icon: 'fas fa-drafting-compass',
                },
                {
                  step: '03',
                  title: 'Development',
                  description: 'Build your solution using agile methodology with regular updates.',
                  icon: 'fas fa-code',
                },
                {
                  step: '04',
                  title: 'Launch & Support',
                  description: 'Deploy your project and provide ongoing maintenance and support.',
                  icon: 'fas fa-rocket',
                },
              ].map((process, index) => (
                <div key={index} className="text-center">
                  {/* Using Primary Gold for step number background and Secondary Gold for icon */}
                  <div 
                    style={{ backgroundColor: primaryGold, color: '#171717' }} 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold"
                  >
                    {process.step}
                  </div>
                  <div className="text-3xl mb-4" style={{ color: secondaryGold }}>
                    <i className={process.icon}></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{process.title}</h3>
                  <p className="text-gray-400">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Services;