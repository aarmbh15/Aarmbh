import React, { useState } from "react";
import { useReducedMotion, motion } from "framer-motion";

function Services() {
  const deepestBlack = "bg-gray-950";

  // -------------------------------------------------
  // Services Data
  // -------------------------------------------------
  const services = [
    {
      icon: "fas fa-globe",
      title: "Web Development",
      description:
        "Custom web applications using modern technologies like HTML, CSS, JavaScript, & frameworks such as PHP, React.js and Node.js. Optimized for performance and scale.",
      features: [
        "Responsive Design – reach customers on every device, increase engagement by 30 %",
        "SEO Optimized – rank higher, attract organic traffic",
        "Fast Performance – sub-second load times, lower bounce rates",
        "Security Focused – protect user data, stay compliant",
      ],
      benefit: "Boost conversions & scale effortlessly",
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications for iOS and Android using Flutter for maximum reach.",
      features: [
        "Cross-platform – one codebase, two stores",
        "Native Performance – smooth 60 fps experience",
        "App Store Ready – compliant submissions",
        "Push Notifications – re-engage users instantly",
      ],
      benefit: "Expand your audience & drive repeat usage",
    },
    {
      icon: "fas fa-server",
      title: "Backend Development",
      description:
        "Robust backend systems and APIs using Python, Node.js, PHP-Laravel, C, C++, Golang and scalable cloud infrastructure.",
      features: [
        "RESTful APIs – integrate with any front-end",
        "Database Design – efficient, future-proof schemas",
        "Cloud Integration – auto-scale with AWS/Azure/GCP",
        "Security & Auth – OAuth, JWT, encryption",
      ],
      benefit: "Run reliably at any traffic volume",
    },
    {
      icon: "fas fa-paint-brush",
      title: "UI/UX Design",
      description:
        "Creating beautiful, user-friendly interfaces using Figma, Canva, Adobe that drive engagement and improve conversion rates.",
      features: [
        "User Research – data-driven decisions",
        "Wireframing – rapid iteration",
        "Prototyping – test before building",
        "Design Systems – consistent branding",
      ],
      benefit: "Turn visitors into loyal customers",
    },
    {
      icon: "fas fa-cogs",
      title: "AI & Machine Learning",
      description:
        "Transform your business with intelligent automation, predictive insights, and AI-powered customer experiences — built to scale and deliver measurable ROI.",
      features: [
        "Tailored AI Models – fit your exact data",
        "Smart Chatbots & NLP – 24/7 support",
        "Predictive Analytics – forecast trends",
        "Vision-Powered Automation – reduce manual work",
      ],
      benefit: "Cut costs & unlock new revenue streams",
    },
  ];

  // -------------------------------------------------
  // Animated Divider
  // -------------------------------------------------
  const AnimatedDivider = () => {
    const prefersReducedMotion = useReducedMotion();
    if (prefersReducedMotion)
      return <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />;
    return (
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent origin-left"
      />
    );
  };

  // -------------------------------------------------
  // FAQ Accordion Component
  // -------------------------------------------------
  const FAQAccordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
      {
        q: "How long does a typical web project take?",
        a: "From 4–12 weeks depending on scope. We provide a detailed timeline after the Discovery phase.",
      },
      {
        q: "Do you offer post-launch support?",
        a: "Yes – every project includes 2 months of free support, bug fixes, and performance monitoring. Extended plans are available.",
      },
      {
        q: "Can you work with existing codebases?",
        a: "Absolutely. We perform a thorough audit, document improvements, and integrate seamlessly with your stack.",
      },
    ];

    const toggleOpen = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };

    return (
      <div className="space-y-6">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`
                relative overflow-hidden rounded-2xl
                bg-white/5 backdrop-blur-xl
                border ${isOpen ? 'border-amber-500/30' : 'border-white/10'}
                shadow-lg transition-all duration-300
                cursor-pointer group
              `}
              onClick={() => toggleOpen(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && toggleOpen(i)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 p-6">
                <div className="flex justify-between items-center">
                  <h3
                    className={`font-semibold text-lg transition-colors ${
                      isOpen ? "text-amber-400" : "text-white"
                    }`}
                  >
                    {faq.q}
                  </h3>
                  <motion.i
                    className="fas fa-chevron-down ml-4 text-amber-400"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                    marginTop: isOpen ? 16 : 0,
                  }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-300 text-base leading-relaxed pr-8">
                    {faq.a}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={`pt-16 min-h-screen ${deepestBlack}`}>
      {/* HERO */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop')",
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
              Our Expert Services
            </h1>
            <p className="text-lg md:text-xl text-white leading-relaxed">
              From concept to deployment, we deliver solutions that drive growth, cut costs, and scale with your business.
            </p>
          </motion.div>
        </div>
      </div>

      <AnimatedDivider />

      {/* SERVICES SECTION */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 via-transparent to-amber-800/20 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
              Services Built for Growth
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
              Scalable, secure, and designed to deliver measurable business impact.
            </p>
          </motion.div>

          <div className="space-y-24 md:space-y-32">
            {services.map((service, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={index} className="space-y-12">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: index * 0.15 }}
                    className={`flex flex-col ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-10 lg:gap-16`}
                  >
                    {/* Icon + Title */}
                    <div className="w-full lg:w-5/12">
                      <motion.div
                        whileHover={{
                          scale: 1.03,
                          boxShadow: "0 25px 50px -12px rgba(251, 191, 36, 0.15)",
                        }}
                        transition={{ duration: 0.4, delay: 0.4 }} // Fixed: comma instead of colon
                        className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg overflow-hidden group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 flex items-center gap-5">
                          <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                            <i className={`${service.icon} text-2xl text-gray-950`} />
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-white">
                            {service.title}
                          </h3>
                        </div>
                        <p className="mt-4 text-amber-400 font-medium text-lg">{service.benefit}</p>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-7/12">
                      <motion.div
                        whileHover={{
                          boxShadow: "0 25px 50px -12px rgba(251, 191, 36, 0.12)",
                        }}
                        className="p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg transition-all duration-500 hover:border-amber-500/20"
                      >
                        <div className="space-y-6">
                          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                            {service.description}
                          </p>

                          <ul className="space-y-3">
                            {service.features.map((feat, i) => (
                              <motion.li
                                key={i}
                                // initial={{ opacity: 0, x: -20 }}
                                // whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                // transition={{ delay: i * 0.08 }}
                                className="flex items-start text-gray-300"
                              >
                              {/* <p key={i} viewport={{ once: true }} className="flex items-start text-gray-300"> */}
                                <i className="fas fa-check text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-sm md:text-base">{feat}</span>
                              {/* </p> */}
                                </motion.li>
                            ))}
                          </ul>

                          <motion.a
                            href="/contact"
                            className="mt-6 px-7 py-3.5 rounded-xl font-semibold text-base bg-gradient-to-r from-amber-400 to-amber-500 text-gray-950 shadow-md flex items-center gap-2 w-fit transition-all duration-300 hover:from-amber-500 hover:to-amber-600 hover:shadow-amber-500/30"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Start This Service <i className="fas fa-arrow-right ml-2" />
                          </motion.a>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>

                  {index < services.length - 1 && (
                    <div className="w-full max-w-3xl mx-auto">
                      <AnimatedDivider />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: "fas fa-tools", title: "Custom-Built, No Templates", desc: "Every line of code is written for your unique goals." },
              { icon: "fas fa-shield-alt", title: "Free 2-Month Post-Launch Support", desc: "Bugs, tweaks, and monitoring – on us." },
              { icon: "fas fa-road", title: "Transparent Agile Process", desc: "Weekly demos, shared boards, no surprises." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="bg-neutral-800 p-6 rounded-xl border border-gray-700"
              >
                <i className={`${item.icon} text-4xl text-amber-400 mb-4`}></i>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* PROCESS */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Our Seamless Process</h2>
          <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto">
            Every service follows the same proven 4-step workflow – from discovery to ongoing support.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery & Audit", desc: "Align goals, audit infrastructure, roadmap.", icon: "fas fa-lightbulb" },
              { step: "02", title: "Design & Prototyping", desc: "Architecture, wireframes, UI/UX specs.", icon: "fas fa-drafting-compass" },
              { step: "03", title: "Agile Development", desc: "Iterative sprints, CI/CD, testing.", icon: "fas fa-code" },
              { step: "04", title: "Deployment & Support", desc: "Launch, monitoring, guaranteed maintenance.", icon: "fas fa-rocket" },
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-neutral-800 rounded-xl p-6 shadow-xl border border-gray-700 hover:border-amber-500 cursor-pointer"
              >
                <div className="w-12 h-12 bg-amber-500 text-gray-950 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-extrabold">
                  {p.step}
                </div>
                <div className="text-4xl mb-4 text-center text-amber-500">
                  <i className={p.icon}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{p.title}</h3>
                <p className="text-gray-400 text-center">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* FAQ */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
            Frequently Asked Questions
          </h2>
          <FAQAccordion />
        </div>
      </section>
    </div>
  );
}

export default Services;