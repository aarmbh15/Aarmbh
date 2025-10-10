import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', label: 'Home', icon: 'fas fa-home', path: '/' },
    { key: 'team', label: 'Our Team', icon: 'fas fa-users', path: '/team' },
    { key: 'services', label: 'Services', icon: 'fas fa-cogs', path: '/services' },
    { key: 'projects', label: 'Projects', icon: 'fas fa-briefcase', path: '/projects' },
    { key: 'dashboard', label: 'Dashboard', icon: 'fas fa-tachometer-alt', path: '/dashboard' },
    { key: 'contact', label: 'Contact', icon: 'fas fa-envelope', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <div className="gradient-bg text-white px-3 py-2 rounded-lg font-bold text-xl">
              <i className="fas fa-code mr-2"></i>
              FreelanceTeam
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.slice(0, -1).map(item => (
              <button
                key={item.key}
                onClick={() => navigate(item.path)}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                <i className={`${item.icon} mr-2`}></i>
                {item.label}
              </button>
            ))}
            <button
              onClick={() => navigate('/contact')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map(item => (
              <button
                key={item.key}
                onClick={() => {
                  navigate(item.path);
                  setIsMenuOpen(false);
                }}
                className={`flex items-center w-full px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.path ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                <i className={`${item.icon} mr-3`}></i>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;