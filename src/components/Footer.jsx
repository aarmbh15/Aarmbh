function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="gradient-bg text-white px-3 py-2 rounded-lg font-bold text-xl mb-4 inline-block">
                <i className="fas fa-code mr-2"></i>
                FreelanceTeam
              </div>
              <p className="text-gray-400">
                Professional freelance development team delivering high-quality solutions worldwide.
              </p>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Web Development</li>
                <li>Mobile Apps</li>
                <li>Backend Systems</li>
                <li>UI/UX Design</li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Portfolio</li>
                <li>Contact</li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4 text-2xl">
                <i className="fab fa-linkedin text-blue-400 hover:text-blue-300 cursor-pointer"></i>
                <i className="fab fa-github text-gray-400 hover:text-gray-300 cursor-pointer"></i>
                <i className="fab fa-twitter text-blue-400 hover:text-blue-300 cursor-pointer"></i>
                <i className="fas fa-envelope text-gray-400 hover:text-gray-300 cursor-pointer"></i>
              </div>
            </div>
          </div>
  
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FreelanceTeam Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;