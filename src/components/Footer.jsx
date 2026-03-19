import React from "react";
// Import the SocialIcon component from react-social-icons (you must install this library: npm install react-social-icons)
import { SocialIcon } from "react-social-icons";
import AarambhLogo from '../assets/AarambhLogo.png';
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { motion, useReducedMotion } from "framer-motion";

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

  // Animated Divider Component
      const AnimatedDivider = () => {
        const prefersReducedMotion = useReducedMotion();
        if (prefersReducedMotion) return <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />;
        return (
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent origin-left"
          />
        );
      };

  return (
    <>
    <AnimatedDivider />

      {/* ============================= */}
      {/* CTA SECTION (Before Footer) */}
      {/* ============================= */}
      {/* <section className={`py-16 ${deepestBlack} text-white`}>
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
            {/* <button
              onClick={() => navigate("/contact")}
              className={amberButtonClasses}
            >
              <FaEnvelope className="mr-2 inline-block align-middle" />
              Get Started Today
            </button>
          </div>
        </div>
      </section>  */}
      {/* ═══════════════════════════════════════ REFINED CTA ═══════════════════════════════════════ */}
<section className="py-12 md:py-18 bg-[#050505]">
  <div className="max-w-5xl mx-auto px-6">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative group p-8 md:p-20 rounded-[2rem] md:rounded-[3rem] border border-white/5 bg-[#080808] overflow-hidden text-center"
    >
      {/* 1. Aura Glow (Visible on both) */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      {/* 2. Content */}
      <div className="relative z-10">
        <span className="text-[10px] md:text-[12px] uppercase tracking-[0.4em] md:tracking-[0.6em] text-amber-500 font-bold mb-4 md:mb-6 block">
          Next Step
        </span>
        
        <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight md:tracking-tighter mb-6 md:mb-8 leading-tight">
          Ready to bring your <br className="hidden md:block" /> 
          <span className="italic font-serif text-amber-200/90">vision to reality</span>?
        </h2>
        
        <div className="flex flex-col items-center gap-4 mb-10 md:mb-12">
          {/* Mobile: Reduce font size slightly so it doesn't wrap awkwardly */}
          <p className="text-slate-400 text-sm md:text-lg font-light tracking-wide max-w-[280px] md:max-w-none">
            Custom Architecture • User-Centric Design • Built for Performance
          </p>
          
          <div className="h-px w-8 md:w-12 bg-white/10" />
          
          {/* Mobile: Stack the contact info if needed, or keep it tiny and clean */}
          <div className="text-slate-500 text-[12px] font-mono tracking-widest uppercase flex flex-col md:flex-row gap-2 md:gap-4">
            <span>Pune, IN</span>
            <span className="hidden md:inline">•</span>
            <a href="mailto:contact@aarmbhinfotech.com" className="hover:text-amber-500 transition-colors">contact@aarmbhinfotech.com</a>
            <span className="hidden md:inline">•</span>
            <a href="tel:9423512942" className="hover:text-amber-500 transition-colors">+91 94235 12942</a>
          </div>
        </div>

        {/* 3. Refined Button Duo: High-Interaction Design */}
<div className="flex flex-col md:flex-row gap-8 justify-center items-center">
  
  {/* PRIMARY: The "Liquid Fill" Button */}
  <motion.button
    onClick={() => navigate("/contact")}
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.96 }}
    className="group relative w-full md:w-auto px-10 py-4 md:py-5 rounded-full border border-amber-500/50 overflow-hidden bg-transparent transition-all duration-500"
  >
    {/* The Amber Fill Layer: Floods from the bottom */}
    <div className="absolute inset-0 bg-amber-500 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
    
    <span className="relative z-10 flex items-center justify-center gap-2 font-bold text-xs md:text-sm tracking-[0.2em] uppercase text-amber-500 group-hover:text-black transition-colors duration-500">
      Start Your Project
      <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
    </span>
  </motion.button>

  {/* SECONDARY: The "Glass-Ghost" Button */}
  <motion.button 
    onClick={() => navigate("/contact")}
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.96 }}
    className="group relative w-full md:w-auto px-10 py-4 md:py-5 rounded-full border border-white/10 overflow-hidden bg-white/[0.02] transition-all duration-500 hover:border-white/30"
  >
    {/* Subtle Internal Glow that follows the hover */}
    <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    {/* The "Contact Us" Text */}
    <span className="relative z-10 flex items-center justify-center gap-2 font-medium text-xs md:text-sm tracking-[0.2em] uppercase text-slate-300 group-hover:text-white transition-colors duration-500">
      Contact Us
      <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-amber-500 group-hover:shadow-[0_0_8px_#fbbf24] transition-all duration-500" />
    </span>

    {/* Bottom Shine Accent */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:w-2/3 transition-all duration-700" />
  </motion.button>
</div>
      </div>

      {/* 4. Corner Accent */}
      <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-amber-500/5 blur-[60px] md:blur-[80px] rounded-full" />
    </motion.div>
  </div>
</section>

      {/* Animated Divider - NOW AFTER CTA */}
      <AnimatedDivider />

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
                Professional development team delivering high-quality web solutions worldwide.
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
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@aarmbhinfotech.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors" // Changed hover color to amber for consistency
                  >
                    contact@aarmbhinfotech.com
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