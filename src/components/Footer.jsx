import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
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
              Professional freelance development team delivering high-quality
              solutions worldwide.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-whiteÑ">Services</h3>
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
              {/* Email - UPDATED to use mailto: and open a Gmail compose window */}
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

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 FreelanceTeam Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;