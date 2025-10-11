function Team() {
    const primaryGold = '#f7dab2'; 
    const secondaryGold = '#d9b991'; 
    const darkBackground = 'bg-gray-900'; 
    const deepestBlack = 'bg-gray-950';

    const teamMembers = [
      {
        name: 'Alex Rodriguez',
        role: 'Full-Stack Developer & Team Lead',
        specialties: ['React', 'Node.js', 'MongoDB', 'AWS'],
        experience: '5+ years',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
        rating: 4.9,
        completedProjects: 45,
        bio: 'Passionate about creating scalable web applications and leading development teams to success.',
        hourlyRate: '$75-95',
      },
      {
        name: 'Sarah Chen',
        role: 'Frontend Developer & UI/UX Designer',
        specialties: ['React', 'Vue.js', 'Figma', 'Tailwind CSS'],
        experience: '4+ years',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
        rating: 4.8,
        completedProjects: 38,
        bio: 'Specialized in creating beautiful, user-friendly interfaces that convert visitors into customers.',
        hourlyRate: '$65-85',
      },
      {
        name: 'Marcus Johnson',
        role: 'Backend Developer & DevOps Engineer',
        specialties: ['Python', 'Django', 'Docker', 'Kubernetes'],
        experience: '6+ years',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
        rating: 4.9,
        completedProjects: 52,
        bio: 'Expert in building robust backend systems and cloud infrastructure for enterprise applications.',
        hourlyRate: '$80-100',
      },
      {
        name: 'Elena Vasquez',
        role: 'Mobile App Developer',
        specialties: ['React Native', 'Flutter', 'iOS', 'Android'],
        experience: '4+ years',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
        rating: 4.7,
        completedProjects: 31,
        bio: 'Creating cross-platform mobile applications that deliver exceptional user experiences.',
        hourlyRate: '$70-90',
      },
      {
        name: 'David Kim',
        role: 'Data Scientist & AI Developer',
        specialties: ['Python', 'TensorFlow', 'Machine Learning', 'Data Analysis'],
        experience: '5+ years',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
        rating: 4.8,
        completedProjects: 28,
        bio: 'Transforming data into insights and building intelligent solutions with machine learning.',
        hourlyRate: '$85-110',
      },
    ];
  
    return (
      // Main container with deepest black background
      <div className={`pt-16 min-h-screen ${deepestBlack}`}>
        <section className={`py-16 ${darkBackground}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Dark theme text color */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Meet Our Expert Team</h1>
            {/* Dark theme text color */}
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Five seasoned professionals with diverse expertise, working together to deliver exceptional results for your projects.
            </p>
          </div>
        </section>
  
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                // Dark theme card background
                <div key={index} className={`bg-neutral-800 rounded-xl shadow-lg overflow-hidden card-hover`}>
                  <div className="relative">
                    <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                    {/* Adjusted rating badge background and text */}
                    <div className="absolute top-4 right-4 bg-neutral-700 px-2 py-1 rounded-full flex items-center">
                      <i className="fas fa-star mr-1" style={{ color: primaryGold }}></i>
                      <span className="text-sm font-semibold text-white">{member.rating}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    {/* Dark theme text color */}
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    {/* Secondary Gold for the role */}
                    <p className="font-semibold mb-3" style={{ color: secondaryGold }}>{member.role}</p>
                    {/* Dark theme text color */}
                    <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                    <div className="mb-4">
                      {/* Dark theme text color */}
                      <h4 className="font-semibold text-white mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((skill, skillIndex) => (
                          <span key={skillIndex} className="bg-neutral-700 text-gray-300 px-2 py-1 rounded-full text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                      <div>
                        {/* Dark theme text color */}
                        <span className="text-gray-400">Experience:</span>
                        {/* Dark theme text color */}
                        <div className="font-semibold text-white">{member.experience}</div>
                      </div>
                      <div>
                        {/* Dark theme text color */}
                        <span className="text-gray-400">Projects:</span>
                        {/* Dark theme text color */}
                        <div className="font-semibold text-white">{member.completedProjects}</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        {/* Dark theme text color */}
                        <span className="text-gray-400 text-sm">Rate:</span>
                        {/* Primary Gold for the rate */}
                        <div className="font-bold" style={{ color: primaryGold }}>{member.hourlyRate}/hr</div>
                      </div>
                      {/* Primary Gold for the button */}
                      <button 
                        style={{ backgroundColor: primaryGold, color: '#171717' }}
                        className="px-4 py-2 rounded-lg transition-colors hover:opacity-80">
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
  
        {/* Dark theme for the collective expertise section */}
        <section className={`py-16 ${darkBackground}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Dark theme text color */}
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Collective Expertise</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
              <div>
                {/* Primary Gold for stats number */}
                <div className="text-3xl font-bold mb-2" style={{ color: primaryGold }}>20+</div>
                <div className="text-gray-400">Years Combined Experience</div>
              </div>
              <div>
                {/* Primary Gold for stats number */}
                <div className="text-3xl font-bold mb-2" style={{ color: primaryGold }}>194</div>
                <div className="text-gray-400">Total Projects</div>
              </div>
              <div>
                {/* Primary Gold for stats number */}
                <div className="text-3xl font-bold mb-2" style={{ color: primaryGold }}>15+</div>
                <div className="text-gray-400">Technologies</div>
              </div>
              <div>
                {/* Primary Gold for stats number */}
                <div className="text-3xl font-bold mb-2" style={{ color: primaryGold }}>4.8</div>
                <div className="text-gray-400">Average Rating</div>
              </div>
              <div>
                {/* Primary Gold for stats number */}
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