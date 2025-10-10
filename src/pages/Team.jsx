function Team() {
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
      <div className="pt-16 min-h-screen bg-gray-50">
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Five seasoned professionals with diverse expertise, working together to deliver exceptional results for your projects.
            </p>
          </div>
        </section>
  
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                  <div className="relative">
                    <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                    <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full flex items-center">
                      <i className="fas fa-star text-yellow-400 mr-1"></i>
                      <span className="text-sm font-semibold">{member.rating}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((skill, skillIndex) => (
                          <span key={skillIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                      <div>
                        <span className="text-gray-500">Experience:</span>
                        <div className="font-semibold">{member.experience}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Projects:</span>
                        <div className="font-semibold">{member.completedProjects}</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-gray-500 text-sm">Rate:</span>
                        <div className="font-bold text-green-600">{member.hourlyRate}/hr</div>
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
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
  
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Collective Expertise</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
                <div className="text-gray-600">Years Combined Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">194</div>
                <div className="text-gray-600">Total Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
                <div className="text-gray-600">Technologies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">4.8</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
                <div className="text-gray-600">Client Retention</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Team;