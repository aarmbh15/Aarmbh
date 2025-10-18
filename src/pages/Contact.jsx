import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating form submission (replace with actual API call in production)
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus(null), 3000);
    }, 1000);
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-800">
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-400 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or need assistance? Contact our team, and let's bring your vision to life.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg card-hover">
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <i className="fas fa-envelope text-blue-600 text-2xl mr-4"></i>
                  <div>
                    <p className="font-semibold text-white">Email Us</p>
                    <p className="text-gray-400">team@freelanceteam.pro</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-phone text-blue-600 text-2xl mr-4"></i>
                  <div>
                    <p className="font-semibold text-white">Call Us</p>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt text-blue-600 text-2xl mr-4"></i>
                  <div>
                    <p className="font-semibold text-white">Our Location</p>
                    <p className="text-gray-400">123 Tech Street, San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4 text-white">Connect With Us</h3>
                <div className="flex space-x-6 text-2xl">
                  <a href="https://linkedin.com" className="text-blue-400 hover:text-blue-300">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://github.com" className="text-gray-400 hover:text-gray-300">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://twitter.com" className="text-blue-400 hover:text-blue-300">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl shadow-lg card-hover">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Form</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Project inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <i className="fas fa-paper-plane mr-2"></i>
                  Send Message
                </button>
                {formStatus === 'success' && (
                  <p className="text-green-600 text-center mt-4">Message sent successfully!</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Our Location</h2>
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086394604056!2d-122.4194156846813!3d37.77492977975937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f1b8a8c8d%3A0x3b1c0b6b7f7b7b7!2sSan%20Francisco%2C%20CA%2094105%2C%20USA!5e0!3m2!1sen!2sus!4v1697654321098!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map showing our location in San Francisco"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-950 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss your ideas and create something amazing together.
          </p>
          <button
            onClick={() => navigate('/services')}
            className="bg-amber-500 text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            <i className="fas fa-cogs mr-2"></i>
            Explore Our Services
          </button>
        </div>
      </section>
    </div>
  );
} 

export default Contact;