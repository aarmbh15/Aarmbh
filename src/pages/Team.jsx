import { useReducedMotion, motion } from "framer-motion";
// 1. Import the image
import TeamHeroBackground from "../assets/Teamhero.png"; 

// Removed team member image imports as they are no longer used

function Team() {
  const primaryGold = "#f7dab2";
  const darkBackground = "bg-gray-900";
  const deepestBlack = "bg-gray-950";

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

    const technologies = [
      // 🌐 Frontend
      { name: "React.js", icon: "fab fa-react", category: "Frontend" },
      { name: "Flutter", icon: "fas fa-mobile-alt", category: "Frontend" },
      { name: "JavaScript", icon: "fab fa-js", category: "Frontend" },
      { name: "HTML5", icon: "fab fa-html5", category: "Frontend" },
      { name: "Tailwind CSS", icon: "fa-brands fa-css3-alt", category: "Frontend" },
      { name: "Bootstrap", icon: "fab fa-bootstrap", category: "Frontend" },

      // ⚙️ Backend
      { name: "Node.js", icon: "fab fa-node-js", category: "Backend" },
      { name: "Python", icon: "fab fa-python", category: "Backend" },
      { name: "GoLang", icon: "fab fa-golang", category: "Backend" },
      { name: "PHP", icon: "fab fa-php", category: "Backend" },
      { name: "Laravel", icon: "fab fa-laravel", category: "Backend" },
      { name: "Java", icon: "fab fa-java", category: "Backend" },

      // 🗄️ Database
      { name: "MongoDB", icon: "fas fa-leaf", category: "Database" },
      { name: "SQL", icon: "fas fa-database", category: "Database" },
      { name: "Firebase", icon: "fas fa-fire", category: "Database" },

      // ☁️ Cloud & DevOps
      { name: "AWS", icon: "fab fa-aws", category: "Cloud & DevOps" },
      { name: "Docker", icon: "fab fa-docker", category: "Cloud & DevOps" },
      
      // 🧰 Tools & Design
      { name: "Git", icon: "fab fa-git-alt", category: "Tools & Design" },
      { name: "GitHub", icon: "fab fa-github", category: "Tools & Design" },
      { name: "Figma", icon: "fab fa-figma", category: "Tools & Design" },
      { name: "API", icon: "fas fa-code", category: "Tools & Design" },
    ];
    
    // Detailed Pros & Cons for key technologies
    const stackProsAndCons = [
        {
            tech: "React.js",
            icon: "fab fa-react",
            pros: [
                "Component-based architecture for better reusability and maintainability.",
                "Excellent performance due to the Virtual DOM.",
                "Large, robust community and vast ecosystem of tools/libraries."
            ],
            cons: [
                "Steep learning curve for absolute beginners.",
                "Requires constant updating with fast-paced ecosystem changes.",
            ]
        },
        {
            tech: "Node.js",
            icon: "fab fa-node-js",
            pros: [
                "Single-threaded, non-blocking I/O model is perfect for data-intensive, real-time applications.",
                "Unified JavaScript stack (Frontend/Backend) reduces context switching.",
                "Massive package repository (npm) for rapid development."
            ],
            cons: [
                "Not ideal for CPU-intensive tasks (e.g., heavy computations).",
                "Asynchronous nature can lead to complex callback management (resolved with Promises/Async-Await)."
            ]
        },
        {
            tech: "MongoDB",
            icon: "fas fa-leaf",
            pros: [
                "Highly flexible and schema-less design for quick iteration and changing data requirements.",
                "Excellent horizontal scalability and sharding capabilities.",
                "Supports complex data structures natively (JSON/BSON)."
            ],
            cons: [
                "Data redundancy may be higher than in relational databases.",
                "Less suitable for applications requiring complex, multi-row ACID transactions."
            ]
        },
        {
            tech: "Tailwind CSS",
            icon: "fa-brands fa-css3-alt",
            pros: [
                "Rapid UI development using utility classes directly in the markup.",
                "Highly customizable and produces lean, production-ready CSS.",
                "Avoids the need for custom class names, leading to consistent design."
            ],
            cons: [
                "Markup can become cluttered with many classes (mitigated by components).",
                "Initial learning curve to memorize utility class names."
            ]
        },
    ];

    // Enhanced animation variants for a staggered grid effect
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.05,
        },
      },
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 30, scale: 0.9 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 10,
        },
      },
    };

    // Grouping technologies by category for better organization
    const groupedTechnologies = technologies.reduce((acc, tech) => {
      (acc[tech.category] = acc[tech.category] || []).push(tech);
      return acc;
    }, {});

    const categoryOrder = [
        "Frontend",
        "Backend",
        "Database",
        "Cloud & DevOps",
        "Tools & Design",
    ];

    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600">
              Core Technologies
            </h2>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Mastering the full spectrum of modern development, from elegant frontend design to robust backend infrastructure.
            </p>
          </motion.div>

          {/* Technology Grid by Category */}
          {categoryOrder.map((category) => {
            const techs = groupedTechnologies[category];
            if (!techs) return null;

            return (
              <div key={category} className="mb-12">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl font-semibold text-amber-400 mb-6 border-b border-amber-400/20 pb-2 flex items-center gap-2"
                >
                    <i className={
                        category === "Frontend" ? "fas fa-laptop-code" :
                        category === "Backend" ? "fas fa-cogs" :
                        category === "Database" ? "fas fa-server" :
                        category === "Cloud & DevOps" ? "fas fa-cloud" :
                        "fas fa-tools"
                    } />
                    {category}
                </motion.h3>
                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-6 justify-center"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {techs.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      variants={prefersReducedMotion ? {} : itemVariants}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 20px rgba(251, 191, 36, 0.4)",
                        transition: { duration: 0.3 },
                      }}
                      className="group"
                    >
                      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-lg transition-all duration-300 hover:bg-white/10 hover:border-amber-500/50 flex flex-col items-center justify-center space-y-3 h-full cursor-pointer">
                        <i
                          className={`${tech.icon} text-3xl md:text-4xl transition-transform duration-300 group-hover:scale-110`}
                          style={{ color: primaryGold }}
                        />
                        <span className="text-xs md:text-sm font-medium text-gray-200 group-hover:text-amber-400 transition-colors text-center">
                          {tech.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            );
          })}

          <AnimatedDivider />
          
          {/* Pros and Cons Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
                Why We Choose Our Core Stack
            </h2>
            <p className="text-gray-400 max-w-4xl mx-auto mb-10">
                A deeper look into the strategic reasons behind our core technology choices, considering both advantages and trade-offs.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {stackProsAndCons.map((item, index) => (
              <motion.div
                key={item.tech}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-neutral-800/50 backdrop-blur-xl border border-amber-500/20 rounded-xl p-6 shadow-2xl"
              >
                <div className="flex items-center mb-4">
                    <i className={`${item.icon} text-3xl mr-3`} style={{ color: primaryGold }} />
                    <h3 className="text-xl font-bold text-white">{item.tech}</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {/* Pros Column */}
                    <div>
                        <h4 className="font-semibold text-green-400 mb-2 flex items-center">
                            <i className="fas fa-check-circle mr-2" />
                            Pros
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            {item.pros.map((pro, i) => (
                                <li key={i} className="flex items-start">
                                    <i className="fas fa-plus text-green-400 mt-1 mr-2 flex-shrink-0 text-xs" />
                                    <span>{pro}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Cons Column */}
                    <div>
                        <h4 className="font-semibold text-red-400 mb-2 flex items-center">
                            <i className="fas fa-times-circle mr-2" />
                            Cons
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            {item.cons.map((con, i) => (
                                <li key={i} className="flex items-start">
                                    <i className="fas fa-minus text-red-400 mt-1 mr-2 flex-shrink-0 text-xs" />
                                    <span>{con}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    );
  };

  // The rest of the component (Hero, AnimatedDivider, Collective Expertise) remains the same as the previous update

  return (
    <div className={`pt-16 min-h-screen ${darkBackground}`}>
      {/* HERO SECTION */}
      <div 
        className="relative overflow-hidden" 
        style={{
            // 2. Add the background image style
            backgroundImage: `url(${TeamHeroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Subtle glow (Adjusted to be a gradient overlay to match previous styling) */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950/90 via-gray-900/80 to-black/90 flex items-center justify-center">
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
            { icon: "fab fa-php", color: "#777BB4", size: "text-4xl" },
            { icon: "fab fa-java", color: "#007396", size: "text-4xl" },
            { icon: "fab fa-laravel", color: "#FF2D20", size: "text-4xl" },
            { icon: "fas fa-mobile-alt", color: "#02569B", size: "text-4xl" },
            { icon: "fas fa-leaf", color: "#47A248", size: "text-4xl" },
            { icon: "fas fa-database", color: "#FF6F61", size: "text-4xl" },
            { icon: "fas fa-server", color: "#6C63FF", size: "text-4xl" },
            { icon: "fas fa-fire", color: "#FFCA28", size: "text-4xl" },
            { icon: "fab fa-aws", color: "#FF9900", size: "text-4xl" },
            { icon: "fas fa-code", color: "#8E44AD", size: "text-4xl" },
            { icon: "fas fa-code-branch", color: "#007ACC", size: "text-4xl" },
            { icon: "fab fa-figma", color: "#F24E1E", size: "text-4xl" },
            { icon: "fa-brands fa-css3-alt", color: "#38B2AC", size: "text-4xl" },
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

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 py-28 md:py-36 text-center max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
              Our Core Technology Stack
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto"
          >
            Cutting-edge tools and frameworks that power next-generation digital products.
          </motion.p>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
      </div>

      <AnimatedDivider />

      <TechnologiesSection />

      <AnimatedDivider />

      {/* COLLECTIVE EXPERTISE */}
      <section className={`py-16 ${deepestBlack}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Our Development Capabilities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {[
              { num: "5+", label: "Years Combined" },
              { num: "10+", label: "Total Projects" },
              { num: "15+", label: "Technologies" },
              { num: "100%", label: "Scalability" },
              { num: "100%", label: "Best Practices" },
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