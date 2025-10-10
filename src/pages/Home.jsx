import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="pt-16">
      <section className="gradient-bg text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 fade-in">
              Expert Development Team
              <span className="block text-yellow-300">Ready to Build Your Vision</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto fade-in">
              Professional freelance developers specializing in React, Node.js, Python, and more. 
              From concept to deployment, we deliver high-quality solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in">
              <button
                onClick={() => navigate('/team')}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <i className="fas fa-users mr-2"></i>
                Meet Our Team
              </button>
              <button
                onClick={() => navigate('/projects')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                <i className="fas fa-eye mr-2"></i>
                View Projects
              </button>
            </div>
          </div>
        </div>

        <div className="absolute top-20 left-10 text-6xl opacity-20 floating">
          <i className="fab fa-react"></i>
        </div>
        <div className="absolute top-40 right-20 text-4xl opacity-20 floating" style={{ animationDelay: '2s' }}>
          <i className="fab fa-node-js"></i>
        </div>
        <div className="absolute bottom-20 left-20 text-5xl opacity-20 floating" style={{ animationDelay: '4s' }}>
          <i className="fab fa-python"></i>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="fade-in">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="fade-in">
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="fade-in">
              <div className="text-4xl font-bold text-purple-600 mb-2">5</div>
              <div className="text-gray-600">Expert Developers</div>
            </div>
            <div className="fade-in">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Team?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine technical expertise with seamless project management to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'fas fa-rocket',
                title: 'Fast Delivery',
                description: 'Quick turnaround times without compromising quality. We deliver projects on time, every time.',
                color: 'text-blue-600',
              },
              {
                icon: 'fas fa-shield-alt',
                title: 'Secure & Reliable',
                description: 'Your projects are safe with us. We follow best practices for security and data protection.',
                color: 'text-green-600',
              },
              {
                icon: 'fas fa-comments',
                title: 'Clear Communication',
                description: 'Regular updates and transparent communication throughout the development process.',
                color: 'text-purple-600',
              },
              {
                icon: 'fas fa-tools',
                title: 'Modern Tech Stack',
                description: 'We use the latest technologies and frameworks to build scalable, maintainable solutions.',
                color: 'text-orange-600',
              },
              {
                icon: 'fas fa-dollar-sign',
                title: 'Competitive Pricing',
                description: 'High-quality development services at competitive rates. No hidden fees or surprises.',
                color: 'text-red-600',
              },
              {
                icon: 'fas fa-headset',
                title: '24/7 Support',
                description: 'Round-the-clock support for ongoing projects and post-launch maintenance.',
                color: 'text-indigo-600',
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg card-hover fade-in">
                <div className={`${feature.color} text-3xl mb-4`}>
                  <i className={feature.icon}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss your requirements and bring your ideas to life with our expert development team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <i className="fas fa-envelope mr-2"></i>
              Get Started Today
            </button>
            <button
              onClick={() => navigate('/team')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
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