import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';
// import Projects from './Projects';
function Projects() {
    const primaryGold = '#f7dab2'; 
    const darkBackground = 'bg-gray-900'; 
    const deepestBlack = 'bg-gray-950';

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
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop",
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
      <div className={`pt-16 min-h-screen ${deepestBlack}`}>
        <Helmet>
          <title>Our Projects | Web, Mobile & AI Solutions at Aarmbh</title>
          <meta name="description" content="Explore our portfolio of projects including web development with React.js, mobile apps in Flutter, AI chatbots, and industry solutions like e-commerce and transportation apps." />
          <meta name="keywords" content="projects, portfolio, web development, mobile development, AI chatbot, React.js, Flutter, Python, freelance projects" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Projects Portfolio | Aarmbh Development Showcase" />
          <meta property="og:description" content="Discover recent projects: e-commerce platforms, transportation apps, Telegram bots, and more built with modern technologies for real-world impact." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://aarmbh15.42web.io/" /> {/* Replace with actual URL */}
          <meta property="og:image" content="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Our Projects | Innovative Solutions by Aarmbh" />
          <meta name="twitter:description" content="From web and mobile to AI: View our case studies in React, Flutter, Python, and more." />
          <meta name="twitter:image" content="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop" />
          <link rel="canonical" href="https://aarmbh15.42web.io/" /> {/* Replace with actual URL */}
        </Helmet>
        {/* Hero Section */}
           <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                     <div
                        className="absolute inset-0 bg-cover bg-center opacity-20"
                        style={{
                          backgroundImage:
                            "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop')", // Code/technology theme
                        }}
                      ></div>
            
                      <div className="relative z-15 container mx-auto px-6 py-24 md:py-32">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8 }}
                          className="text-center max-w-4xl mx-auto"
                        >
                          <h1 className="text-4xl md:text-5xl lg:text-6xl mt-20 font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-500 leading-tight">
                              Our Projects
                          </h1>
  
                          <p className="text-lg md:text-xl text-white leading-relaxed">
                            Explore some of our recent projects and see how we've helped clients achieve their goals.
                          </p>
                        </motion.div>
                      </div>
                    </div>
  
        {/* Project Grid Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Reduced gap from gap-8 to gap-6 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
              {projects.map((project, index) => (
                <div key={index} className={`bg-neutral-800 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02]`}>
                  
                  {/* Reduced image height from h-56 to h-48 */}
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" /> 
                  
                  {/* Reduced content padding from p-6 to p-4 */}
                  <div className="p-4 text-white"> 
                    <div className="mb-3"> {/* Reduced margin bottom */}
                      <span style={{ backgroundColor: primaryGold, color: '#171717' }} className="px-3 py-1 rounded-full text-sm font-semibold">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3> {/* Reduced title size from text-2xl to text-xl */}
                    <p className="text-gray-400 mb-1 text-sm">Client: {project.client}</p> {/* Reduced text size */}
                    <p className="text-gray-400 mb-3 text-sm line-clamp-2">{project.description}</p> {/* Reduced margin bottom and text size */}
                    <div className="mb-3"> {/* Reduced margin bottom */}
                      <h4 className="font-semibold text-white mb-1 text-sm">Technologies:</h4> {/* Reduced text size and margin bottom */}
                      <div className="flex flex-wrap gap-1"> {/* Reduced gap */}
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-neutral-700 text-gray-300 px-2 py-0.5 rounded text-xs"> {/* Reduced padding and text size */}
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-3 text-xs"> {/* Reduced gap and text size */}
                      <div>
                        <span className="text-gray-400">Duration:</span>
                        <div className="font-semibold text-white">{project.duration}</div>
                      </div>
                      <div>
                        <span className="text-gray-400">Team:</span>
                        <div className="font-semibold text-white truncate">{project.teamMembers.join(', ')}</div>
                      </div>
                    </div>
                    <div className="mb-4"> {/* Reduced margin bottom */}
                      <span className="text-gray-400 text-xs">Results:</span> {/* Reduced text size */}
                      <div className="font-semibold text-green-400 text-sm">{project.results}</div>
                    </div>
                     <button 
                        style={{ backgroundColor: primaryGold, color: '#171717' }}
                        className="px-4 py-2 rounded-lg transition-colors hover:opacity-80 w-full text-sm"> {/* Reduced padding and text size */}
                        <i className="fas fa-external-link-alt mr-2"></i>
                        View Details
                      </button>
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