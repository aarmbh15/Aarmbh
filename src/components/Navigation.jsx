// import { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import AarambhLogo from '../assets/AarambhLogo.png';
// import { FaHome, FaInfoCircle, FaCogs, FaUsers, FaBriefcase, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

// // Animated Hamburger Component
// const AnimatedHamburger = ({ isMenuOpen, setIsMenuOpen }) => (
//   <button
//     onClick={() => setIsMenuOpen(!isMenuOpen)}
//     className="flex flex-col justify-center items-end w-6 h-6 text-white hover:text-amber-400 focus:outline-none transition-colors"
//     aria-expanded={isMenuOpen}
//     aria-label="Toggle menu"
//   >
//     <span
//       className={`block h-0.5 w-6 bg-current rounded-full transition-all duration-300 ease-in-out ${
//         isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
//       }`}
//     ></span>
//     <span
//       className={`block h-0.5 w-6 bg-current rounded-full transition-all duration-300 ease-in-out my-1 ${
//         isMenuOpen ? 'opacity-0' : 'w-4'
//       }`}
//     ></span>
//     <span
//       className={`block h-0.5 w-6 bg-current rounded-full transition-all duration-300 ease-in-out ${
//         isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
//       }`}
//     ></span>
//   </button>
// );

// function Navigation() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navItems = [
//     { key: 'home', label: 'HOME', icon: <FaHome />, path: '/' },
//     { key: 'about', label: 'ABOUT', icon: <FaInfoCircle />, path: '/About' },
//     { key: 'services', label: 'SERVICES', icon: <FaCogs />, path: '/services' },
//     { key: 'team', label: 'TECH STACK', icon: <FaUsers />, path: '/team' },
//     { key: 'projects', label: 'PROJECTS', icon: <FaBriefcase />, path: '/projects' },
//     { key: 'contact', label: 'CONTACT', icon: <FaEnvelope />, path: '/contact' },
//   ];

//   const handleNavigation = (path) => {
//     navigate(path);
//     setIsMenuOpen(false);
//   };

//   const mainNavItems = navItems.slice(0, -1);
//   const contactItem = navItems.at(-1);

//   return (
//     <>
//       {/* Global Glassmorphism Styles */}
//       <style>{`
//         @import url('https://rsms.me/inter/inter.css');
//         html { font-family: 'Inter', system-ui, sans-serif; }

//         .glass-nav {
//           background: rgba(0, 0, 0, 0.35);
//           backdrop-filter: blur(16px);
//           -webkit-backdrop-filter: blur(16px);
//           border-bottom: 1px solid rgba(255, 255, 255, 0.1);
//           box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
//         }

//         .glass-mobile-menu {
//           background: rgba(17, 24, 39, 0.5);
//           backdrop-filter: blur(14px);
//           -webkit-backdrop-filter: blur(14px);
//           border-top: 1px solid rgba(255, 255, 255, 0.08);
//         }

//         .glass-button {
//           background: linear-gradient(90deg, #F59E0B 0%, #FBBF24 100%);
//           transition: all 0.3s ease;
//         }
//         .glass-button:hover {
//           background: linear-gradient(90deg, #D97706 0%, #F59E0B 100%);
//           box-shadow: 0 8px 20px rgba(251, 158, 11, 0.3);
//         }

//         @media (prefers-reduced-motion: reduce) {
//           *, *::before, *::after {
//             animation: none !important;
//             transition: none !important;
//           }
//         }
//       `}</style>

//       <nav className="fixed top-0 w-full glass-nav z-50 transition-all duration-300">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-20">
//             {/* Logo Section */}
//             <div
//               className="flex items-center cursor-pointer transition-transform hover:scale-105"
//               onClick={() => navigate('/')}
//             >
//               <img
//                 src={AarambhLogo}
//                 alt="Aarambh Logo"
//                 className="h-14 w-14 object-contain drop-shadow-md"
//                 loading="eager"
//               />
//             </div>

//             {/* Desktop Navigation Links */}
//             <div className="hidden md:flex items-center space-x-8">
//               {mainNavItems.map((item) => (
//                 <button
//                   key={item.key}
//                   onClick={() => navigate(item.path)}
//                   className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 group ${
//                     location.pathname === item.path
//                       ? 'text-amber-400'
//                       : 'text-gray-300 hover:text-amber-400'
//                   }`}
//                   aria-current={location.pathname === item.path ? 'page' : undefined}
//                 >
//                   <span className="mr-2 transition-transform group-hover:scale-110">
//                     {item.icon}
//                   </span>
//                   <span className="relative">
//                     {item.label}
//                     {location.pathname === item.path && (
//                       <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-400 rounded-full"></span>
//                     )}
//                   </span>
//                 </button>
//               ))}

//               {/* Desktop Contact Button */}
//               <button
//                 onClick={() => navigate(contactItem.path)}
//                 className="glass-button text-gray-900 px-5 py-2.5 rounded-lg font-semibold flex items-center gap-2 shadow-lg"
//                 aria-label="Contact us"
//               >
//                 CONTACT US
//                 <FaPhoneAlt className="text-gray-900" />
//               </button>
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="md:hidden">
//               <AnimatedHamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu Content */}
//         {isMenuOpen && (
//           <div className="md:hidden glass-mobile-menu pb-4">
//             <div className="px-4 pt-3 pb-2 space-y-1">
//               {mainNavItems.map((item) => (
//                 <button
//                   key={item.key}
//                   onClick={() => handleNavigation(item.path)}
//                   className={`flex items-center w-full px-4 py-3 rounded-lg text-left text-base font-medium transition-all duration-200 ${
//                     location.pathname === item.path
//                       ? 'text-amber-400 bg-white/10'
//                       : 'text-gray-300 hover:text-amber-400 hover:bg-white/5'
//                   }`}
//                 >
//                   <span className="mr-3">{item.icon}</span>
//                   {item.label}
//                 </button>
//               ))}

//               {/* Mobile Contact Button */}
//               <button
//                 onClick={() => handleNavigation(contactItem.path)}
//                 className="glass-button text-gray-900 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 w-full justify-center mt-3 shadow-lg"
//               >
//                 Contact Us
//                 <FaPhoneAlt className="text-gray-900" />
//               </button>
//             </div>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// }

// export default Navigation;

import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AarambhLogo from '../assets/AarambhLogo.png';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/About' },
  { label: 'Services', path: '/services' },
  { label: 'Tech Stack', path: '/team' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

export default function Navigation({ visible = true }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <style>{`
      @import url('https://rsms.me/inter/inter.css');
        html { font-family: 'Inter', system-ui, sans-serif; }
        .nav-link-item {
          font-size: clamp(24px, 5vw, 48px);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .nav-link-item:hover { color: #fff; }
        
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
        }
      `}</style>

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
  style={{
  position: 'fixed',
  top: 0, left: 0, right: 0,
  zIndex: 60,
  height: 80,

  background: 'linear-gradient(180deg, rgba(10,10,10,0.8) 0%, rgba(10,10,10,0.4) 100%)',
  backdropFilter: 'blur(20px) saturate(160%)',
  WebkitBackdropFilter: 'blur(20px) saturate(160%)',
  borderBottom: '1px solid rgba(255,255,255,0.08)',

  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
}}
      >
        <div style={{
          width: '100%',
          padding: '0 clamp(20px, 6vw, 80px)',
          height: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center'
        }}>
          
          {/* LEFT — BRANDING */}
          <div style={{ lineHeight: 1.2, cursor: 'pointer' }} onClick={() => navigate('/')}>
            <div style={{ fontSize: '0.90rem', letterSpacing: '0.3em', color: 'white', fontWeight: 700 }}>
              AARAMBH 
            </div>
            <div style={{ fontSize: '0.9rem', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.4)' }}>
              INFOTECH
            </div>
          </div>

          {/* CENTER — LOGO */}
          <div 
            onClick={() => navigate('/')}
            style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }}
          >
            <img src={AarambhLogo} alt="Logo" style={{ height: '60px', width: 'auto' }} />
          </div>

          {/* RIGHT — MENU TOGGLE */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '32px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                transition: 'transform 0.3s ease'
              }}
            >
              <motion.div animate={{ rotate: menuOpen ? 180 : 0 }}>
                {menuOpen ? '✕' : '＋'}
              </motion.div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* FULLSCREEN OVERLAY MENU (Universal for Desktop & Mobile) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(5, 5, 5, 0.98)',
              backdropFilter: 'blur(15px)',
              zIndex: 50,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(20px, 4vh, 40px)'
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
              >
                <button
                  onClick={() => navigate(link.path)}
                  className="nav-link-item"
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    position: 'relative',
                    color: location.pathname === link.path ? '#fff' : 'rgba(255,255,255,0.5)'
                  }}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.div 
                      layoutId="underline"
                      style={{ 
                        height: '2px', 
                        background: '#fff', 
                        width: '100%',
                        position: 'absolute',
                        bottom: -5
                      }} 
                    />
                  )}
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}