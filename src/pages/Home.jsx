import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  // New Gold/Bronze Colors from user request
  // #f7dab2 is the lighter, more prominent gold for main text/accents
  const primaryGold = '#f7dab2'; 
  // #d9b991 is the darker gold for borders, secondary accents, and hover effects
  const secondaryGold = '#d9b991'; 
  
  // Using 'bg-neutral-900' for the dark navy/nearly black background, which is close to the logo's background
  const darkBackground = 'bg-gray-950'; 
  // Using 'bg-black' for the deepest black elements
  const deepestBlack = 'bg-gray-900';

  return (
    <div className={`pt-16 ${deepestBlack}`}> {/* Main background set to black */}
      <section className={`${darkBackground} text-white py-20 relative`}> {/* Dark navy/black background for hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 fade-in">
              Expert Development Team
              {/* Primary Gold Accent for the standout text */}
              <span className="block text-amber-500">Ready to Build Your Vision</span> 
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-400 max-w-3xl mx-auto fade-in">
              Professional freelance developers specializing in React, Node.js, Python, and more. 
              From concept to deployment, we deliver high-quality solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in">
              {/* Primary Button: Gold background (#f7dab2), Dark text. Hover uses Secondary Gold (#d9b991) */}
              <button
                onClick={() => navigate('/team')}
                style={{ backgroundColor: primaryGold, color: '#171717' }} // Using a deep gray for text on light gold
                className="px-8 py-4 rounded-lg text-lg font-semibold transition-colors hover:shadow-lg" 
                // We'll use a custom hover class if needed, but for simplicity, we'll keep the base style here.
                // A better approach for hover would be to modify tailwind.config.js, but for component-only change, 
                // we'll rely on the default hover-bg change if defined in config or stick to the current look.
                // For a good visual effect, using primaryGold for BG and secondaryGold for HOVER BG is ideal:
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = secondaryGold}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = primaryGold}
              >
                <i className="fas fa-users mr-2"></i>
                Meet Our Team
              </button>

              {/* Secondary Button: Secondary Gold border/text (#d9b991). Hover uses Primary Gold (#f7dab2) for fill. */}
              <button
                onClick={() => navigate('/projects')}
                style={{ borderColor: secondaryGold, color: secondaryGold }} // Secondary Gold border/text
                className="border-2 px-8 py-4 rounded-lg text-lg font-semibold transition-colors hover:text-neutral-900" 
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = primaryGold; 
                  e.currentTarget.style.borderColor = primaryGold;
                  e.currentTarget.style.color = '#171717'; // Dark text on hover
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
        </div>

        {/* Floating Icons updated to Primary Gold accent */}
        <div className={`absolute top-20 left-10 text-6xl opacity-20 floating`} style={{ color: primaryGold }}>
          <i className="fab fa-react"></i>
        </div>
        <div className={`absolute top-40 right-20 text-4xl opacity-20 floating`} style={{ animationDelay: '2s', color: primaryGold }}>
          <i className="fab fa-node-js"></i>
        </div>
        <div className={`absolute bottom-20 left-20 text-5xl opacity-20 floating`} style={{ animationDelay: '4s', color: primaryGold }}>
          <i className="fab fa-python"></i>
        </div>
        <div className={`absolute bottom-20 right-20 text-5xl opacity-20 floating`} style={{ animationDelay: '4s', color: primaryGold }}>
          <i className="fab fa-flutter"></i>
        </div>
         <div className={`absolute top-60 right-50 text-5xl opacity-20 floating`} style={{ animationDelay: '4s', color: primaryGold }}>
          <i className="fab fa-php"></i>
        </div>
         <div className={`absolute bottom-50 left-20 text-5xl opacity-20 floating`} style={{ animationDelay: '4s', color: primaryGold }}>
          <i className="fab fa-mysql"></i>
        </div>
      </section>

      {/* // Section using Primary Gold for statistics 
      // The original Gold accent was used for the number, so we use primaryGold.
      */}
      <section className={`py-16 ${deepestBlack}`}> {/* Background set to Black */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="fade-in">
              <div className="text-4xl font-bold mb-2" style={{ color: primaryGold }}>10+</div> 
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="fade-in">
              <div className="text-4xl font-bold mb-2" style={{ color: primaryGold }}>98%</div> 
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
            <div className="fade-in">
              <div className="text-4xl font-bold mb-2" style={{ color: primaryGold }}>5</div> 
              <div className="text-gray-400">Expert Developers</div>
            </div>
            <div className="fade-in">
              <div className="text-4xl font-bold mb-2" style={{ color: primaryGold }}>24/7</div> 
              <div className="text-gray-400">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* // Feature section uses Primary Gold for icons and Secondary Gold for subtle border 
      */}
      <section className={`py-16 ${darkBackground}`}> {/* Dark navy/black background for feature section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Team?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We combine technical expertise with seamless project management to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'fas fa-rocket',
                title: 'Fast Delivery',
                description: 'Quick turnaround times without compromising quality. We deliver projects on time, every time.',
              },
              {
                icon: 'fas fa-shield-alt',
                title: 'Secure & Reliable',
                description: 'Your projects are safe with us. We follow best practices for security and data protection.',
              },
              {
                icon: 'fas fa-comments',
                title: 'Clear Communication',
                description: 'Regular updates and transparent communication throughout the development process.',
              },
              {
                icon: 'fas fa-tools',
                title: 'Modern Tech Stack',
                description: 'We use the latest technologies and frameworks to build scalable, maintainable solutions.',
              },
              {
                icon: 'fas fa-dollar-sign',
                title: 'Competitive Pricing',
                description: 'High-quality development services at competitive rates. No hidden fees or surprises.',
              },
              {
                icon: 'fas fa-headset',
                title: '24/7 Support',
                description: 'Round-the-clock support for ongoing projects and post-launch maintenance.',
              },
            ].map((feature, index) => (
              <div
  key={index}
  className={`
    bg-gray-800 p-6 rounded-xl shadow-xl
    border border-[${secondaryGold}]
    transition-all duration-300 ease-in-out
    hover:shadow-2xl hover:scale-105 hover:border-amber-400 hover:bg-gray-700
  `}
  style={{ borderColor: secondaryGold, borderWidth: '1px' }}
>
  <div
    className="text-3xl mb-4 transition-colors duration-300"
    style={{ color: primaryGold }}
  >
    <i className={feature.icon}></i>
  </div>
  <h3 className="text-xl font-semibold text-amber-400 mb-3">{feature.title}</h3>
  <p className="text-white">{feature.description}</p>
</div>

            ))}
          </div>
        </div>
      </section>

      {/* // Call To Action (CTA) Section
      */}
      <section className={`py-16 ${deepestBlack} text-white`}> {/* Black background for CTA */}
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-gray-400">
            Let's discuss your requirements and bring your ideas to life with our expert development team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             {/* Primary Button: Gold background (#f7dab2), Dark text. Hover uses Secondary Gold (#d9b991) */}
            <button
              onClick={() => navigate('/contact')}
              style={{ backgroundColor: primaryGold, color: '#171717' }} 
              className="px-8 py-4 rounded-lg text-lg font-semibold transition-colors hover:shadow-lg" 
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = secondaryGold}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = primaryGold}
            >
              <i className="fas fa-envelope mr-2"></i>
              Get Started Today
            </button>
            {/* Secondary Button: Secondary Gold border/text (#d9b991). Hover uses Primary Gold (#f7dab2) for fill. */}
            <button
              onClick={() => navigate('/team')}
              style={{ borderColor: secondaryGold, color: secondaryGold }} // Secondary Gold border/text
              className="border-2 px-8 py-4 rounded-lg text-lg font-semibold transition-colors hover:text-neutral-900" 
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = primaryGold; 
                e.currentTarget.style.borderColor = primaryGold;
                e.currentTarget.style.color = '#171717'; // Dark text on hover
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = secondaryGold;
                e.currentTarget.style.color = secondaryGold;
              }}
            >
              <i className="fas fa-calendar mr-2"></i>
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;