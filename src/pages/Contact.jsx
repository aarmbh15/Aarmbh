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

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };
    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
 <section
  className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden"
>
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
    }}
  ></div>

  {/* Overlay for dark effect */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl px-6">
    <h1 className="text-4xl md:text-6xl font-bold text-amber-400 mb-4">
      Get in Touch
    </h1>
    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
      Have a project in mind or need assistance? Contact our team, and let's
      bring your vision to life.
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
                  <i className="fas fa-envelope text-amber-500 text-2xl mr-4"></i>
                  <div>
                    <p className="font-semibold text-white">Email Us</p>
                    <p className="text-gray-400">aarmbh15@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-phone text-amber-500 text-2xl mr-4"></i>
                  <div>
                    <p className="font-semibold text-white">Call Us</p>
                    <p className="text-gray-400">+91 9881033442</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt text-amber-500 text-2xl mr-4"></i>
                  <div>
                    <p className="font-semibold text-white">Our Location</p>
                    <p className="text-gray-400">Pune</p>
                  </div>
                </div>
              </div>
             <div className="mt-8">
  <h3 className="text-lg font-semibold mb-4 text-white">Connect With Us</h3>
  <div className="flex space-x-6 text-2xl">
    <a
      href="https://www.linkedin.com/company/aarmbh/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
      aria-label="LinkedIn"
    >
      <i className="fab fa-linkedin"></i>
    </a>

    <a
      href="https://github.com/aarmbh15"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
      aria-label="GitHub"
    >
      <i className="fab fa-github"></i>
    </a>

    <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=aarmbh15@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-white transition-colors duration-200"
  aria-label="Email"
>
  <i className="fas fa-envelope"></i>
</a>

  </div>
</div>

            </div>

            <div className="bg-gray-900 p-8 rounded-xl shadow-lg card-hover">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Form</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-white text-sm font-medium mb-2">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors"
                    placeholder="Your full name"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors"
                    placeholder="+44 123 456 7890"
                    required
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-white text-sm font-medium mb-2">
                    Subject <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors"
                    placeholder="Project subject"
                    required
                  />
                </div>

                {/* Service Dropdown */}
                <div>
                  <label htmlFor="service" className="block text-white text-sm font-medium mb-2">
                    Choose a Service <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:border-white transition-colors"
                    required
                  >
                    <option value="" className="text-black">Select service</option>
                    <option value="web" className="text-black">Web Development</option>
                    <option value="software" className="text-black">Software Development</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                    Enter Your Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors"
                    placeholder="Tell us about your project requirements..."
                    required
                  ></textarea>
                </div>

                {/* Submit */}
              <div className="flex justify-center">
  <button
    type="submit"
    className="w-40 bg-amber-500 text-gray-900 px-5 py-2 rounded-lg cursor-pointer font-semibold hover:bg-amber-400 transition-colors shadow-lg flex items-center gap-2"
  >
    Submit <i className="fas fa-paper-plane ml-2"></i>
  </button>
</div>

              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;