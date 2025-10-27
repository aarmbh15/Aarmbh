import { motion } from "framer-motion";
import shwetaImg from '../assets/shweta.jpg';
import Snigdha from '../assets/Snigdhaa.jpg';
import Mahesha from '../assets/Mahesh.jpg';
import Param from '../assets/Veer.jpg';

function Team() {
    const primaryGold = '#f7dab2'; 
    const secondaryGold = '#d9b991'; 
    const darkBackground = 'bg-gray-900'; 
    const deepestBlack = 'bg-gray-950';

const teamMembers = [     
  {
    name: 'Paramveer Patil',
    role: 'Full-Stack Developer & Database Administrator',
    specialties: ['React.js','Node.js', 'SQL', 'Firebase'],
    experience: '1+ years',
    image: Param,
    rating: 4.9,
    completedProjects: '5+',
    bio: 'Passionate about creating scalable web applications and leading development teams to success.',
    portfolioUrl: 'https://paramveer-portfolio.vercel.app/',
  },
  {
    name: 'Snigdha Kamble',
    role: 'App & Backend Developer, Team Co-Ordinator',
    specialties: ['Data Analytics','Flutter', 'PHP (Laravel)','GoLang'],
    experience: '1+ years',
    image: Snigdha,
    rating: 4.8,
    completedProjects: '5+',
    bio: 'Expert in building robust backend systems and cloud infrastructure for enterprise applications.',
    portfolioUrl: 'https://snigdha-portfolio.vercel.app/',
  },
  {
  name: 'Shweta Gangurde',
  role: 'Full Stack Developer & Technical Expert',
  specialties: ['React.js', 'Python', 'MongoDB', 'C++'],
  experience: '1+ years',
  image: shwetaImg,
  rating: 4.9,
  completedProjects: '5+',
  bio: 'Passionate Full Stack Developer with over 3 years of experience in designing and developing scalable web applications.'
},

  {
    name: 'Mahesh Gunwant',
    role: 'Frontend Developer & UI/UX Designer',
    specialties: ['Canva', 'Bootstrap', 'Figma', 'Tailwind CSS', 'SEO'],
    experience: '1+ years',
    image: Mahesha,
    rating: 4.7,
    completedProjects: '5+',
    bio: 'Specialized in creating beautiful, user-friendly interfaces that convert visitors into customers.',
    portfolioUrl: 'https://mahesh-portfolio.vercel.app/',
  },
];
  
    return (
      <div className={`pt-16 min-h-screen ${darkBackground}`}>
          {/* ... (Hero section remains the same) */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-20"
                      style={{
                        backgroundImage:
                          "url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2940&auto=format&fit=crop')", // Code/technology theme
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
                          Meet Our Expert Team
                        </h1>
                        <p className="text-lg md:text-xl text-white leading-relaxed">
                         Four seasoned working together to deliver exceptional results for your projects.
                        </p>
                      </motion.div>
                    </div>
                  </div>
  
       <section className="py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className={`bg-neutral-800 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl`}
        >
          {/* Change 1: Added a new div for the image container */}
          <div className="flex justify-center p-6 bg-neutral-900">
            {/* Change 2: Applied 'rounded-full', 'w-48', 'h-48', and 'ring-4' to the image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-75 h-75 object-cover rounded-full ring-4 ring-amber-500/50 shadow-xl"
            />
          </div>

          <div className="relative p-6">
             {/* Change 3: Moved the rating badge here for better placement with a circular image */}
            <div className="absolute top-0 right-6 -mt-4 bg-neutral-700 px-3 py-1 rounded-full flex items-center shadow-lg border border-amber-500/50">
              <i className="fas fa-star mr-1" style={{ color: primaryGold }}></i>
              <span className="text-sm font-semibold text-white">
                {member.rating}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
            <p className="font-semibold mb-3" style={{ color: secondaryGold }}>
              {member.role}
            </p>
            <p className="text-gray-400 text-sm mb-4">{member.bio}</p>

            <div className="mb-4">
              <h4 className="font-semibold text-white mb-2">Specialties:</h4>
              <div className="flex flex-wrap gap-2">
                {member.specialties.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-neutral-700 text-gray-300 px-2 py-1 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm mb-4">
              <div>
                <span className="text-gray-400">Experience:</span>
                <div className="font-semibold text-white">{member.experience}</div>
              </div>
              <div>
                <span className="text-gray-400">Projects:</span>
                <div className="font-semibold text-white">{member.completedProjects}</div>
              </div>
            </div>

            <div className="relative"> 
  {/* Card Content Above */}
  
  {/* Contact Button - Bottom Right */}
  <button
    onClick={() => window.open(member.portfolioUrl, '_blank')}
    style={{ backgroundColor: primaryGold, color: '#171717' }}
    className="absolute bottom-4 right-4 px-4 py-2 rounded-lg shadow-md transition-transform hover:scale-105 hover:opacity-85"
  >
    <i className="fas fa-message mr-2"></i>
    Contact
  </button>
</div>


          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  
        {/* ... (Collective expertise section remains the same) */}
        <section className={`py-16 ${deepestBlack}`}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-12 text-white">
      Our Collective Expertise
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
      
      <div className="bg-gray-800 rounded-2xl p-6 shadow-xl hover:scale-105 transform transition duration-300">
        <div className="text-3xl font-bold mb-2" style={{ color: primaryGold }}>5+</div>
        <div className="text-gray-400">Years Combined Experience</div>
      </div>
      
      <div className="bg-gray-800 rounded-2xl p-6 shadow-xl hover:scale-105 transform transition duration-300">
        <div className="text-3xl font-bold mb-2" style={{ color: primaryGold }}>10+</div>
        <div className="text-gray-400">Total Projects</div>
      </div>
      
      <div className="bg-gray-800 rounded-2xl p-6 shadow-xl hover:scale-105 transform transition duration-300">
        <div className="text-3xl font-bold mb-2" style={{ color: primaryGold }}>15+</div>
        <div className="text-gray-400">Technologies</div>
      </div>
      
      <div className="bg-gray-800 rounded-2xl p-6 shadow-xl hover:scale-105 transform transition duration-300">
        <div className="text-3xl font-bold mb-2" style={{ color: primaryGold }}>4.8</div>
        <div className="text-gray-400">Average Rating</div>
      </div>
      
      <div className="bg-gray-800 rounded-2xl p-6 shadow-xl hover:scale-105 transform transition duration-300">
        <div className="text-3xl font-bold mb-2" style={{ color: primaryGold }}>100%</div>
        <div className="text-gray-400">Client Retention</div>
      </div>

    </div>
  </div>
</section>

      </div>
    );
  }
  
  export default Team;