import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AarambhLogo from '../assets/AarambhLogo.png'; // Adjust the path as needed
import { FaHome, FaInfoCircle, FaCogs, FaUsers, FaBriefcase, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

// Animated Hamburger Component
const AnimatedHamburger = ({ isMenuOpen, setIsMenuOpen }) => (
  <button
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    className="flex flex-col justify-center items-end w-6 h-6 text-white hover:text-amber-400 focus:outline-none"
    aria-expanded={isMenuOpen}
    aria-label="Toggle menu"
  >
    <span
      className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
      }`}
    ></span>
    <span
      className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 ease-in-out my-1 ${
        isMenuOpen ? 'opacity-0' : 'w-4'
      }`}
    ></span>
    <span
      className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 ease-in-out ${
        isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
      }`}
    ></span>
  </button>
);

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', label: 'Home', icon: <FaHome />, path: '/' },
    { key: 'about', label: 'About', icon: <FaInfoCircle />, path: '/About' },
    { key: 'services', label: 'Services', icon: <FaCogs />, path: '/services' },
    { key: 'team', label: 'Our Team', icon: <FaUsers />, path: '/team' },
    { key: 'projects', label: 'Projects', icon: <FaBriefcase />, path: '/projects' },
    { key: 'contact', label: 'Contact', icon: <FaEnvelope />, path: '/contact' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const mainNavItems = navItems.slice(0, -1);
  const contactItem = navItems.at(-1);

  return (
    <nav className="fixed top-0 w-full bg-black shadow-xl z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <img src={AarambhLogo} alt="Aarambh Logo" className="h-15 w-15 " />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <button
                key={item.key}
                onClick={() => navigate(item.path)}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-amber-400 border-b-2 border-amber-400'
                    : 'text-gray-300 hover:text-amber-400'
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </button>
            ))}

            {/* Desktop Contact Button */}
            <button
              onClick={() => navigate(contactItem.path)}
              className="bg-amber-500 text-gray-900 px-5 py-2 rounded-lg font-semibold hover:bg-amber-400 transition-colors shadow-lg flex items-center gap-2"
            >
              Contact Us
              <FaPhoneAlt className="text-gray-900" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <AnimatedHamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700 pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {mainNavItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavigation(item.path)}
                className={`flex items-center w-full px-3 py-2 rounded-md text-left text-base font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-amber-400 bg-gray-800'
                    : 'text-gray-300 hover:text-amber-400 hover:bg-gray-800'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </button>
            ))}

            {/* Mobile Contact Button */}
            <button
              onClick={() => handleNavigation(contactItem.path)}
              className="bg-amber-500 text-gray-900 px-5 py-2 rounded-lg font-semibold cursor-pointer hover:bg-amber-400 transition-colors shadow-lg flex items-center gap-2 w-40"
            >
              Contact Us
              <FaPhoneAlt className="text-gray-900" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
