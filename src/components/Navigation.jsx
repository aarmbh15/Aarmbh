import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AarambhLogo from '../assets/AarambhLogo.png'; // Adjust the path as needed

// New: Component for the Custom Hamburger/Close Icon
const AnimatedHamburger = ({ isMenuOpen, setIsMenuOpen }) => (
  <button
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    className="flex flex-col justify-center items-end w-6 h-6 text-white hover:text-amber-400 focus:outline-none"
    aria-expanded={isMenuOpen}
    aria-label="Toggle menu"
  >
    {/* Bar 1 (Top) */}
    <span 
      className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
      }`}
    ></span>
    
    {/* Bar 2 (Middle/Custom Short Bar) */}
    <span 
      className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 ease-in-out my-1 ${
        isMenuOpen ? 'opacity-0' : 'w-4' // Custom short bar on close, invisible on open
      }`}
    ></span>

    {/* Bar 3 (Bottom) */}
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
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Controls the mobile menu and "hamburger" icon

  const navItems = [
    { key: 'home', label: 'Home', icon: 'fas fa-home', path: '/' },
    { key: 'team', label: 'Our Team', icon: 'fas fa-users', path: '/team' },
    { key: 'services', label: 'Services', icon: 'fas fa-cogs', path: '/services' },
    { key: 'projects', label: 'Projects', icon: 'fas fa-briefcase', path: '/projects' },
    { key: 'dashboard', label: 'Dashboard', icon: 'fas fa-tachometer-alt', path: '/dashboard' },
    { key: 'contact', label: 'Contact', icon: 'fas fa-envelope', path: '/contact' },
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
            <img src={AarambhLogo} alt="Aarambh Logo" className="h-25 w-35" /> 
          </div>

          {/* Desktop Navigation Links (Hidden on mobile) */}
          <div className="hidden md:flex items-center space-x-8">
            {mainNavItems.map(item => (
              <button
                key={item.key}
                onClick={() => navigate(item.path)}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors 
                  ${
                    location.pathname === item.path 
                      ? 'text-amber-400 border-b-2 border-amber-400'
                      : 'text-gray-300 hover:text-amber-400'
                  }`}
              >
                <i className={`${item.icon} mr-2`}></i>
                {item.label}
              </button>
            ))}
            
            {/* Desktop Contact Button (CTA) */}
            <button
              onClick={() => navigate('/contact')}
              className="bg-amber-500 text-gray-900 px-5 py-2 rounded-lg font-semibold hover:bg-amber-400 transition-colors shadow-lg"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button (Replaced with Animated Component) */}
          <div className="md:hidden">
            <AnimatedHamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700 pb-4"> 
          <div className="px-2 pt-2 pb-3 space-y-1">
            
            {/* Main Mobile Navigation Links */}
            {navItems.map(item => (
              <button
                key={item.key}
                onClick={() => handleNavigation(item.path)}
                className={`flex items-center w-full px-3 py-2 rounded-md text-left text-base font-medium transition-colors
                  ${
                    location.pathname === item.path 
                      ? 'text-amber-400 bg-gray-800'
                      : 'text-gray-300 hover:text-amber-400 hover:bg-gray-800'
                  }`}
              >
                <i className={`${item.icon} mr-3`}></i>
                {item.label}
              </button>
            ))}

            {/* Horizontal Line Separator */}
            <div className="border-t border-gray-700 my-4"></div>
            
            {/* Contact Button (Mobile CTA) */}
            <button
              onClick={() => handleNavigation(contactItem.path)}
              className="w-full mt-2 flex items-center justify-center bg-amber-500 text-gray-900 px-5 py-2 rounded-lg font-semibold hover:bg-amber-400 transition-colors shadow-lg text-base"
            >
              <i className={`${contactItem.icon} mr-2`}></i>
              Contact Us
            </button>
            
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;