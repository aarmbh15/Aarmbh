function Projects() {
    const projects = [
      {
        title: 'E-commerce Platform',
        client: 'RetailCorp',
        category: 'Web Development',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
        description: 'Full-stack e-commerce solution with payment integration and inventory management.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        duration: '3 months',
        teamMembers: ['Alex Rodriguez', 'Sarah Chen'],
        results: '+150% sales increase, 40% faster load times',
      },
      {
        title: 'Healthcare Mobile App',
        client: 'MedTech Solutions',
        category: 'Mobile Development',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
        description: 'HIPAA-compliant mobile app for patient management and telemedicine.',
        technologies: ['React Native', 'Firebase', 'WebRTC'],
        duration: '4 months',
        teamMembers: ['Elena Vasquez', 'Marcus Johnson'],
        results: '10K+ active users, 99.9% uptime',
      },
      {
        title: 'AI Analytics Dashboard',
        client: 'DataInsights Inc',
        category: 'AI & Data Science',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
        description: 'Machine learning dashboard for predictive analytics and data visualization.',
        technologies: ['Python', 'TensorFlow', 'React', 'D3.js'],
        duration: '5 months',
        teamMembers: ['David Kim', 'Sarah Chen'],
        results: '60% improvement in prediction accuracy',
      },
    ];
  
    return (
      <div className="pt-16 min-h-screen bg-gray-50">
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Portfolio</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore some of our recent projects and see how we've helped clients achieve their goals.
            </p>
          </div>
        </section>
  
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img src={project.image} alt={project.title} className="w-full h-64 md:h-full object-cover" />
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="mb-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-1">Client: {project.client}</p>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <span className="text-gray-500">Duration:</span>
                          <div className="font-semibold">{project.duration}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Team:</span>
                          <div className="font-semibold">{project.teamMembers.join(', ')}</div>
                        </div>
                      </div>
                      <div className="mb-6">
                        <span className="text-gray-500 text-sm">Results:</span>
                        <div className="font-semibold text-green-600">{project.results}</div>
                      </div>
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        <i className="fas fa-external-link-alt mr-2"></i>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Projects;