import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AarambhLogo from '../assets/AarambhLogo.png';
import { useNavigate } from "react-router-dom"; // Make sure React Router is installed

function Footer() {
  const navigate = useNavigate();

  // Define your color constants (still here but CTA buttons will use amber classes)
  const primaryGold = "#f7dab2";
  const secondaryGold = "#d9b991";
   const deepestBlack = 'bg-gray-900';
  // Deep black background class

  // New Requested Button Style Classes
  const amberButtonClasses = "bg-amber-500 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:bg-amber-400 cursor-pointer";

  return (
    <>
      {/* ============================= */}
      {/* CTA SECTION (Before Footer) */}
      {/* ============================= */}
      <section className={`py-16 ${deepestBlack} text-white`}>
        {/* Black background for CTA */}
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-gray-400">
            Let's discuss your requirements and bring your ideas to life with
            our expert development team.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary Button - UPDATED */}
            <button
              onClick={() => navigate("/contact")}
              // Applying the new amber button classes
              className={amberButtonClasses}
              // Removed inline styles and mouse event handlers
            >
              <i className="fas fa-envelope mr-2"></i>
              Get Started Today
            </button>

            {/* Secondary Button - UPDATED */}
            <button
              onClick={() => navigate("/team")}
              // Applying the new amber button classes for consistent look
              className={amberButtonClasses}
              // Removed inline styles and mouse event handlers
            >
              <i className="fas fa-calendar mr-2"></i>
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      {/* ============================= */}
      {/* FOOTER SECTION */}
      {/* ============================= */}
     <footer className="bg-black text-white py-10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Grid: 1 column on mobile, 4 columns on md+ */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
      
      {/* Column 1: Logo and Description */}
      <div>
        <div
          className="flex justify-center md:justify-start items-center cursor-pointer mb-4"
          onClick={() => navigate('/')}
        >
          <img src={AarambhLogo} alt="Aarambh Logo" className="h-25 w-35" />
        </div>
        <p className="text-gray-400">
          Professional freelance development team delivering
          high-quality solutions worldwide.
        </p>
      </div>

      {/* Column 2: Services */}
      <div className="md:ml-15 space-y-2">
        <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
        <ul className="space-y-2 text-gray-400">
          <li className="hover:text-amber-400 transition-colors">
            <a href="/Services">Web Development</a>
          </li>
          <li className="hover:text-amber-400 transition-colors">
            <a href="/Services">Mobile Apps</a>
          </li>
          <li className="hover:text-amber-400 transition-colors">
            <a href="/Services">Backend Systems</a>
          </li>
          <li className="hover:text-amber-400 transition-colors">
            <a href="/Services">UI/UX Design</a>
          </li>
        </ul>
      </div>

      {/* Column 3: Company */}
      <div className="md:ml-15 space-y-2">
        <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
        <ul className="space-y-2 text-gray-400">
          <li className="hover:text-amber-400 transition-colors">
            <a href="/Team">Our Team</a>
          </li>
          <li className="hover:text-amber-400 transition-colors">
            <a href="/Services">Services</a>
          </li>
          <li className="hover:text-amber-400 transition-colors">
            <a href="/Projects">Projects</a>
          </li>
          <li className="hover:text-amber-400 transition-colors">
            <a href="/Dashboard">Dashboard</a>
          </li>
          <li className="hover:text-amber-400 transition-colors">
            <a href="/Contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* Column 4: Connect */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-white">Connect</h3>
        <div className="flex justify-center md:justify-start space-x-6 text-2xl">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/company/freelanceteam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/freelanceteam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub Repository"
          >
            <i className="fab fa-github"></i>
          </a>

          {/* Email */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=aarmbh15@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Send Email via Gmail"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
      <p>&copy; 2025 FreelanceTeam Pro. All rights reserved.</p>
    </div>
  </div>
</footer>

    </>
  );
}

export default Footer;