import { useReducedMotion, motion } from "framer-motion";
import shwetaImg from "../assets/shweta.jpg";
import Snigdha from "../assets/Snigdhaa.jpg";
import Mahesha from "../assets/Mahesh.jpg";
import Param from "../assets/Veer.jpg";

function Team() {
  const primaryGold = "#f7dab2";
  const secondaryGold = "#d9b991";
  const darkBackground = "bg-gray-900";
  const deepestBlack = "bg-gray-950";

  const teamMembers = [
    {
      name: "Paramveer Patil",
      role: "Full-Stack Developer & Database Administrator",
      specialties: ["React.js", "Node.js", "SQL", "Firebase"],
      experience: "1+ years",
      image: Param,
      rating: 4.9,
      completedProjects: "5+",
      bio: "Passionate about creating scalable web applications and leading development teams to success.",
      portfolioUrl: "https://paramportfolio-112ac.web.app",
    },
    {
      name: "Snigdha Kamble",
      role: "App & Backend Developer, Team Co-Ordinator",
      specialties: ["Data Analytics", "Flutter", "PHP (Laravel)", "GoLang"],
      experience: "1+ years",
      image: Snigdha,
      rating: 4.8,
      completedProjects: "5+",
      bio: "Expert in building robust backend systems and cloud infrastructure for enterprise applications.",
      portfolioUrl: "https://snigdhaportfolio-d038d.web.app/",
    },
    {
      name: "Shweta Gangurde",
      role: "Full Stack Developer & Technical Expert",
      specialties: ["React.js", "Python", "MongoDB", "C++"],
      experience: "1+ years",
      image: shwetaImg,
      rating: 4.9,
      completedProjects: "5+",
      bio: "Passionate Full Stack Developer with over 3 years of experience in designing and developing scalable web applications.",
      portfolioUrl: "https://shwetaportfolio-f96eb.web.app/",
    },
    {
      name: "Mahesh Gunwant",
      role: "Frontend Developer & UI/UX Designer",
      specialties: ["Canva", "Bootstrap", "Figma", "Tailwind CSS", "SEO"],
      experience: "1+ years",
      image: Mahesha,
      rating: 4.7,
      completedProjects: "5+",
      bio: "Specialized in creating beautiful, user-friendly interfaces that convert visitors into customers.",
      portfolioUrl: "https://mahesh-portfolio.vercel.app/",
    },
  ];

  const AnimatedDivider = () => {
    const prefersReducedMotion = useReducedMotion();
    if (prefersReducedMotion)
      return <div className="h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />;
    return (
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent origin-left"
      />
    );
  };

  const TechnologiesSection = () => {
    const prefersReducedMotion = useReducedMotion();

    // const technologies = [
    //   { name: "React.js", icon: "fab fa-react" },
    //   { name: "Node.js", icon: "fab fa-node-js" },
    //   { name: "Python", icon: "fab fa-python" },
    //   { name: "Tailwind CSS", icon: "fa-brands fa-css3-alt" },
    //   { name: "MongoDB", icon: "fas fa-leaf" },
    //   { name: "Firebase", icon: "fas fa-fire" },
    //   { name: "AWS", icon: "fab fa-aws" },
    //   { name: "Docker", icon: "fab fa-docker" },
    //   { name: "Flutter", icon: "fas fa-mobile-alt" },
    //   { name: "GoLang", icon: "fab fa-golang" },
    //   { name: "Laravel", icon: "fab fa-laravel" },
    //   { name: "Figma", icon: "fab fa-figma" },
    // ];

const technologies = [
  // 🌐 Frontend
  { name: "HTML5", icon: "fab fa-html5" },
  { name: "CSS3", icon: "fab fa-css3-alt" },
  { name: "Bootstrap", icon: "fab fa-bootstrap" },
  { name: "Tailwind CSS", icon: "fa-brands fa-css3-alt" },
  { name: "JavaScript", icon: "fab fa-js" },
  { name: "React.js", icon: "fab fa-react" },
  { name: "Flutter", icon: "fas fa-mobile-alt" },

  // ⚙️ Backend
  { name: "Node.js", icon: "fab fa-node-js" },
  { name: "PHP", icon: "fab fa-php" },
  { name: "Laravel", icon: "fab fa-laravel" },
  { name: "Python", icon: "fab fa-python" },
  { name: "Java", icon: "fab fa-java" },
  { name: "GoLang", icon: "fab fa-golang" },

  // 🗄️ Database
  { name: "MongoDB", icon: "fas fa-leaf" },
  { name: "SQL", icon: "fas fa-database" },
  { name: "Database", icon: "fas fa-server" },
  { name: "Firebase", icon: "fas fa-fire" },

  // ☁️ Cloud & DevOps
  { name: "AWS", icon: "fab fa-aws" },
  { name: "Docker", icon: "fab fa-docker" },

  // 🧰 Tools & Version Control
  { name: "Git", icon: "fab fa-git-alt" },
  { name: "GitHub", icon: "fab fa-github" },
  { name: "API", icon: "fas fa-code" },
  { name: "VS Code", icon: "fas fa-code-branch" },

  // 🎨 Design
  { name: "Figma", icon: "fab fa-figma" },
];

    const animationVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
      }),
    };

    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
              Technologies & Expertise
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              We master the tools that power modern digital experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={prefersReducedMotion ? {} : animationVariants}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 25px rgba(251, 191, 36, 0.4)",
                  transition: { duration: 0.3 },
                }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-lg transition-all duration-300 hover:bg-white/10 hover:border-amber-500/30 flex flex-col items-center justify-center space-y-3 h-full">
                  <i
                    className={`${tech.icon} text-4xl transition-transform duration-300 group-hover:scale-110`}
                    style={{ color: primaryGold }}
                  />
                  <span className="text-sm font-medium text-gray-200 group-hover:text-amber-400 transition-colors">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className={`pt-16 min-h-screen ${darkBackground}`}>
      {/* HERO – NO IMAGE, PROGRAMMING ICONS + CODE PARTICLES */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black">
        {/* Subtle glow */}
        <div className="absolute inset-0 flex items-center justify-center opacity-50">
          <div className="w-[700px] h-[700px] bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
        </div>

        {/* === PROGRAMMING LANGUAGE ICONS AS PARTICLES === */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { icon: "fab fa-react", color: "#61DAFB", size: "text-4xl" },
    { icon: "fab fa-node-js", color: "#8CC84B", size: "text-5xl" },
    { icon: "fab fa-python", color: "#3776AB", size: "text-4xl" },
    { icon: "fab fa-js-square", color: "#F7DF1E", size: "text-3xl" },
    { icon: "fab fa-git-alt", color: "#F05032", size: "text-4xl" },
    { icon: "fab fa-docker", color: "#2496ED", size: "text-5xl" },
    { icon: "fab fa-html5", color: "#E34F26", size: "text-4xl" },
    { icon: "fab fa-css3-alt", color: "#1572B6", size: "text-4xl" },

    // Remaining languages / technologies
    { icon: "fab fa-php", color: "#777BB4", size: "text-4xl" },
    { icon: "fab fa-java", color: "#007396", size: "text-4xl" },
    { icon: "fab fa-laravel", color: "#FF2D20", size: "text-4xl" },
    { icon: "fas fa-mobile-alt", color: "#02569B", size: "text-4xl" }, // Flutter
    { icon: "fas fa-leaf", color: "#47A248", size: "text-4xl" }, // MongoDB
    { icon: "fas fa-database", color: "#FF6F61", size: "text-4xl" }, // SQL
    { icon: "fas fa-server", color: "#6C63FF", size: "text-4xl" }, // Database
    { icon: "fas fa-fire", color: "#FFCA28", size: "text-4xl" }, // Firebase
    { icon: "fab fa-aws", color: "#FF9900", size: "text-4xl" },
    { icon: "fas fa-code", color: "#8E44AD", size: "text-4xl" }, // API
    { icon: "fas fa-code-branch", color: "#007ACC", size: "text-4xl" }, // VS Code
    { icon: "fab fa-figma", color: "#F24E1E", size: "text-4xl" },
    { icon: "fa-brands fa-css3-alt", color: "#38B2AC", size: "text-4xl" }, // Tailwind CSS
    { icon: "fab fa-bootstrap", color: "#7952B3", size: "text-4xl" },
          ].map((item, i) => (
            <motion.i
              key={`icon-${i}`}
              className={`${item.icon} ${item.size} absolute opacity-20`}
              style={{ color: item.color }}
              initial={{
                x: Math.random() * window.innerWidth,
                y: -100,
                rotate: Math.random() * 360,
              }}
              animate={{
                y: window.innerHeight + 100,
                x: Math.random() * window.innerWidth,
                rotate: Math.random() * 720,
              }}
              transition={{
                duration: 20 + Math.random() * 15,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 10,
              }}
            />
          ))}
        </div>

        {/* === CODE SYMBOL PARTICLES === */}
        {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 16 }).map((_, i) => {
            const symbols = ["{", "}", "(", ")", "[", "]", "0", "1", "▋", "→", ";", "/", "<", ">"];
            const symbol = symbols[Math.floor(Math.random() * symbols.length)];
            const size = symbol.length > 1 ? "text-sm" : "text-lg";

            return (
              <motion.div
                key={`code-${i}`}
                className={`absolute font-mono font-bold text-amber-400/30 ${size}`}
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: -40,
                }}
                animate={{
                  y: window.innerHeight + 40,
                }}
                transition={{
                  duration: 15 + Math.random() * 10,
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 8,
                }}
                style={{
                  textShadow: "0 0 8px rgba(251, 191, 36, 0.2)",
                }}
              >
                {symbol}
              </motion.div>
            );
          })}
        </div> */}

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 py-28 md:py-36 text-center max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
              Meet Our Expert Team
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto"
          >
            Four elite developers crafting scalable, high-performance solutions with cutting-edge technology.
          </motion.p>

          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12"
          >
            <button
              onClick={() => document.querySelector("#team-cards")?.scrollIntoView({ behavior: "smooth" })}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-300 font-medium hover:bg-amber-500/20 transition-all duration-300"
            >
              Explore Team
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </button>
          </motion.div> */}
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
      </div>

      <AnimatedDivider />

      {/* TEAM CARDS */}
      <section id="team-cards" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-neutral-800/50 backdrop-blur-xl border border-white/5 rounded-xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl"
              >
                <div className="flex justify-center p-8 bg-gradient-to-b from-neutral-900 to-neutral-800">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 object-cover rounded-full ring-4 ring-amber-500/30 shadow-2xl"
                  />
                </div>

                <div className="relative p-6">
                  <div className="absolute top-0 right-6 -mt-4 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full flex items-center shadow-lg">
                    <i className="fas fa-star mr-1 text-amber-400 text-xs" />
                    <span className="text-sm font-semibold text-amber-300">{member.rating}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-amber-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-5">{member.bio}</p>

                  <div className="mb-5">
                    <h4 className="font-semibold text-white mb-2 text-sm">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-white/5 text-gray-300 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                    <div>
                      <span className="text-gray-400">Experience</span>
                      <div className="font-semibold text-white">{member.experience}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Projects</span>
                      <div className="font-semibold text-white">{member.completedProjects}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => window.open(member.portfolioUrl, "_blank")}
                    className="w-full px-4 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 rounded-lg font-bold shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <i className="fas fa-external-link-alt" />
                    View Portfolio
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimatedDivider />

      <TechnologiesSection />

      <AnimatedDivider />

      <section className={`py-16 ${deepestBlack}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Our Collective Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {[
              { num: "5+", label: "Years Combined" },
              { num: "10+", label: "Total Projects" },
              { num: "15+", label: "Technologies" },
              { num: "4.8", label: "Avg Rating" },
              { num: "100%", label: "Retention" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-gray-800/50 backdrop-blur border border-white/5 rounded-2xl p-6 shadow-xl hover:scale-105 transform transition duration-300"
              >
                <div className="text-3xl font-bold mb-2 text-amber-400">
                  {stat.num}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;