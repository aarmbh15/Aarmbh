import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AarambhLogo from '../assets/AarambhLogo.png';
import { useNavigate } from "react-router-dom"; // Make sure React Router is installed

function Footer() {
  const navigate = useNavigate();

  // Define your color constants (still here but CTA buttons will use amber classes)
  // const primaryGold = "#f7dab2";
  // const secondaryGold = "#d9b991";
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
            {/* <button
              onClick={() => navigate("/team")}
              // Applying the new amber button classes for consistent look
              className={amberButtonClasses}
              // Removed inline styles and mouse event handlers
            >
              <i className="fas fa-calendar mr-2"></i>
              Schedule a Call
            </button> */}
          </div>
        </div>
      </section>

      {/* ============================= */}
      {/* FOOTER SECTION */}
      {/* ============================= */}
<footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid layout: 1 column on mobile, 3 columns on md+ */}
        {/* Added 'justify-items-center' to ensure all content blocks are centered on small screens. */}
        {/* Added 'md:justify-items-start' to reset alignment for desktop view. */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center justify-items-center md:justify-items-start md:text-left">

          {/* Column 1: Logo + Description */}
          {/* Changed items-center to flex-col for better vertical structure */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <div
              className="flex justify-center md:justify-start items-center cursor-pointer"
              onClick={() => navigate('/')}
            >
              <img
                src={AarambhLogo}
                alt="Aarambh Logo"
                className="h-20 w-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Professional freelance development team delivering high-quality web solutions worldwide.
            </p>
          </div>

          {/* Column 2: Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white tracking-wide">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              {[
                { name: 'Our Team', link: '/team' }, // Changed to lowercase for consistency
                { name: 'Services', link: '/services' }, // Changed to lowercase for consistency
                { name: 'Projects', link: '/projects' }, // Changed to lowercase for consistency
                { name: 'Contact', link: '/contact' },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.link}
                    className="hover:text-amber-400 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-white tracking-wide">Connect</h3>
            <div className="flex justify-center md:justify-start space-x-6 text-2xl">
              <a
                href="https://www.linkedin.com/company/aarmbh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/aarmbh15"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=aarmbh15@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Email"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>


    </>
  );
}

export default Footer;