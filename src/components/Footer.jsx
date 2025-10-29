import React from "react";
// Import the SocialIcon component from react-social-icons (you must install this library: npm install react-social-icons)
import { SocialIcon } from "react-social-icons";
import AarambhLogo from '../assets/AarambhLogo.png';
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Footer() {
  const navigate = useNavigate();
  const deepestBlack = 'bg-gray-900';
  const amberButtonClasses = "bg-amber-500 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:bg-amber-400 cursor-pointer";

  // 🚨 INCREASED SIZE: from 28 to 36
  const socialIconProps = {
    className: "hover:scale-110 transition-transform duration-200",
    style: { height: 36, width: 36 }, // Increased size
    target: "_blank",
    rel: "noopener noreferrer",
  };

  return (
    <>
      {/* ============================= */}
      {/* CTA SECTION (Before Footer) */}
      {/* ============================= */}
      <section className={`py-16 ${deepestBlack} text-white`}>
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
              className={amberButtonClasses}
            >
              <FaEnvelope className="mr-2 inline-block align-middle" />
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      {/* ============================= */}
      {/* FOOTER SECTION */}
      {/* ============================= */}
      <footer className="bg-black text-white py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center justify-items-center md:justify-items-start md:text-left">

            {/* Column 1: Logo + Description */}
            <div className="space-y-3 flex flex-col items-center md:items-start">
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
                  { name: 'Our Team', link: '/team' },
                  { name: 'Services', link: '/services' },
                  { name: 'Projects', link: '/projects' },
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

            {/* Column 3: Connect (USING react-social-icons) */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold mb-4 text-white tracking-wide">Connect</h3>

              {/* Social Icons - Using SocialIcon component (5 icons total) */}
              <div className="flex justify-center md:justify-start space-x-2 text-2xl mb-6">
                {/* LinkedIn Icon (SocialIcon) */}
                <SocialIcon
                  url="https://www.linkedin.com/company/aarmbh/"
                  aria-label="LinkedIn"
                  {...socialIconProps}
                  bgColor="#0a66c2" // LinkedIn color
                  fgColor="#FFFFFF"
                />

                {/* GitHub Icon (SocialIcon) */}
                <SocialIcon
                  url="https://github.com/aarmbh15"
                  aria-label="GitHub"
                  {...socialIconProps}
                  bgColor="#181717" // GitHub color
                  fgColor="#FFFFFF"
                />

                {/* Instagram Icon (SocialIcon) */}
                <SocialIcon
                  url="https://www.instagram.com/aarmbh15?utm_source=qr&igsh=ZXVpcWtuNDM1Zzht"
                  aria-label="Instagram"
                  {...socialIconProps}
                  fgColor="#FFFFFF" // Default gradient
                />

                {/* Facebook Icon (SocialIcon) */}
                <SocialIcon
                  url="https://www.facebook.com/share/17ErcqKUyV/"
                  aria-label="Facebook"
                  {...socialIconProps}
                  bgColor="#1877f2" // Facebook color
                  fgColor="#FFFFFF"
                />
                
                {/* Email Icon (SocialIcon) */}
                {/* <SocialIcon
                  url="https://mail.google.com/mail/?view=cm&fs=1&to=aarmbh15@gmail.com"
                  aria-label="Email"
                  {...socialIconProps}
                  network="email"
                  bgColor="#ea4335" // Gmail/Email color
                  fgColor="#FFFFFF"
                /> */}
              </div>
              
              {/* Mobile Number and Email ID (React Icons remain here for simplicity/consistency) */}
              <div className="space-y-2 text-gray-400 text-sm">
                {/* Mobile Number - Using FaPhoneAlt */}
                <p className="flex items-center justify-center md:justify-start">
                  <FaPhoneAlt className="w-5 mr-2 text-amber-500" aria-label="Phone icon" />
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      const phoneNumber = "+919423512942";
                      // Simple check: if it's a mobile device, use tel:, otherwise open WhatsApp Web
                      if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
                        window.location.href = `tel:${phoneNumber}`;
                      } else {
                        window.open(`https://wa.me/${phoneNumber.replace("+", "")}`, "_blank");
                      }
                    }}
                    className="hover:text-amber-400 transition-colors" // Changed hover color to amber for consistency
                  >
                    +91 94235 12942
                  </a>
                </p>

                {/* Email ID - Using FaEnvelope */}
                <p className="flex items-center justify-center md:justify-start">
                  <FaEnvelope className="w-5 mr-2 text-amber-500" aria-label="Email Icon" />
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=aarmbh15@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors" // Changed hover color to amber for consistency
                  >
                    aarmbh15@gmail.com
                  </a>
                </p>

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