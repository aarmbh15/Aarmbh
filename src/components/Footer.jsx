import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
<<<<<<< Updated upstream
import { useNavigate } from "react-router-dom"; // Make sure React Router is installed
=======
import AarambhLogo from '../assets/AarambhLogo.png';
import { useNavigate } from "react-router-dom"; 
import { Helmet } from 'react-helmet-async';
// Make sure React Router is installed
>>>>>>> Stashed changes

function Footer() {
  const navigate = useNavigate();

  // Define your color constants
  const primaryGold = "#f7dab2";
  const secondaryGold = "#d9b991";
   const deepestBlack = 'bg-gray-900';
  // Deep black background class

  return (
    <>
      {/* ============================= */}
      {/* Helmet for SEO and Performance */}
      {/* ============================= */}
      <Helmet>
        <title>Aarambh - Professional Freelance Development Team</title>
        <meta name="description" content="Aarambh is a professional freelance development team delivering high-quality web solutions worldwide. Contact us to start your project today." />
        <meta name="keywords" content="freelance development, web solutions, software development, Aarambh, projects, services" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.youraaram bhdomain.com/" /> {/* Replace with your actual domain */}
        
        {/* Open Graph / Social Media Tags for Better Sharing */}
        <meta property="og:title" content="Aarambh - Start Your Project with Expert Developers" />
        <meta property="og:description" content="Let's discuss your requirements and bring your ideas to life with our expert development team." />
        <meta property="og:image" content={AarambhLogo} /> {/* Use the logo as OG image */}
        <meta property="og:url" content="https://www.youraaram bhdomain.com/" /> {/* Replace with actual URL */}
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aarambh - Professional Web Development Services" />
        <meta name="twitter:description" content="High-quality freelance development solutions. Get started today!" />
        <meta name="twitter:image" content={AarambhLogo} />
        
        {/* Preload critical assets if needed (e.g., logo for faster rendering) */}
        <link rel="preload" href={AarambhLogo} as="image" />
        
        {/* Optional: DNS Prefetch for external links to improve performance */}
        <link rel="dns-prefetch" href="https://www.linkedin.com" />
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://mail.google.com" />
      </Helmet>

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
            {/* Primary Button */}
            <button
              onClick={() => navigate("/contact")}
              style={{ backgroundColor: primaryGold, color: "#171717" }}
              className="px-8 py-4 rounded-lg text-lg font-semibold transition-colors hover:shadow-lg"
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = secondaryGold)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = primaryGold)
              }
            >
              <i className="fas fa-envelope mr-2"></i>
              Get Started Today
            </button>

            {/* Secondary Button */}
            <button
              onClick={() => navigate("/team")}
              style={{ borderColor: secondaryGold, color: secondaryGold }}
              className="border-2 px-8 py-4 rounded-lg text-lg font-semibold transition-colors hover:text-neutral-900"
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = primaryGold;
                e.currentTarget.style.borderColor = primaryGold;
                e.currentTarget.style.color = "#171717";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.borderColor = secondaryGold;
                e.currentTarget.style.color = secondaryGold;
              }}
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
          <div className="grid md:grid-cols-4 gap-8">
            {/* Column 1: Logo and Description */}
            <div>
              <div className="bg-amber-500 text-gray-900 px-3 py-2 rounded-lg font-bold text-xl mb-4 inline-flex items-center">
                <i className="fas fa-code mr-2"></i>
                FreelanceTeam
              </div>
              <p className="text-gray-400">
                Professional freelance development team delivering
                high-quality solutions worldwide.
              </p>
            </div>

            {/* Column 2: Services */}
            <div>
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
            <div>
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

            {/* Column 4: Connect (Social Icons) */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Connect</h3>
              <div className="flex space-x-6 text-2xl">
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
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
