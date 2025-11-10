import { motion } from "framer-motion";
// import Projects from './Projects';
function Projects() {
    const primaryGold = '#f7dab2'; 
    // const darkBackground = 'bg-gray-900'; 
    const deepestBlack = 'bg-gray-950';

    const projects = [
      {
        title: 'H&H TECH SOLUTIONS',
        client: 'IT Consultany & Services',
        category: 'Web Development',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80',
        description: 'Full-stack e-commerce platform built with modern web technologies, featuring a responsive design,and seamless user experience across devices.',
        technologies: ['React.js', 'PHP', 'My SQL'],
      },
      {
  title: "Ambition Let's Move",
  client: "Transportation App",
  category: "Mobile Development",
  image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop",
  description: "Ambition Let's Move is a mobile transportation app built with Flutter, Firebase, and MongoDB. It features real-time ride tracking, seamless booking, and efficient route management, providing users with a smooth and reliable transportation experience.",
  technologies: ['Flutter', 'Firebase', 'MongoDB'],
},

      {
        title: 'Telegram chatbot',
        client: 'Telegram chatbot',
        category: 'AI & Data Science',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
        description: 'Developed an intelligent Telegram chatbot with machine learning capabilities for predictive analytics and interactive data visualization.',
        technologies: ['Python', 'Machine Learning' ],
      },
      {
        title: 'Upscale Sugar Fatory Solution',
        client: 'Sugar Fatory',
        category: 'Web Development',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
        description: 'Developed a comprehensive web solution for sugar factory operations, enabling efficient production tracking, inventory management, and process optimization.',
        technologies: ['HTML','CSS','JavaSript','Python','Postgre SQL',],
      },
      {
        title: 'Deldex',
        client: 'DataInsights Inc',
        category: 'Web Development',
        image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=800&q=80',
        description: 'A full-featured online marketplace platform for buying and selling products, with a responsive design, real-time listings, and secure user interactions.',
        technologies: ['React.js', 'Firebase'],
      },
    ];
  
    return (
      <div className={`pt-16 min-h-screen ${deepestBlack}`}>
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

                    {/* ==== DECORATIVE NEON LINE ==== */}
      <div className="relative w-full h-1">
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
      </div>
      {/* ============================= */}
  
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
  