import { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

// --- Inline SVG Icon Components (All necessary icons are now here) ---

const IconWrapper = ({ children, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-6 h-6 ${className}`}
  >
    {children}
  </svg>
);

const MailIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </IconWrapper>
);

const PhoneIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.83 19.83 0 01-7.05-7.05 19.79 19.79 0 01-3.07-8.63A2 2 0 013.08 2h3a2 2 0 012 1.74A17 17 0 0013.3 9.4l.8.8c.2.2.45.33.7.38a.92.92 0 00.9-.38l.8-.8a2 2 0 011.74-2h3A2 2 0 0122 6.08z"></path>
  </IconWrapper>
);

const MapPinIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9a2 2 0 100-4 2 2 0 000 4z"></path>
  </IconWrapper>
);

// Custom Instagram Icon (Inline SVG derived from Lucide)
const InstagramIcon = (props) => (
  <IconWrapper {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </IconWrapper>
);

// Custom Facebook Icon (Inline SVG derived from Lucide)
const FacebookIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
  </IconWrapper>
);

function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone:'',
    subject: '',
    service:'',
    message: '',
    honeypot: '', // Honeypot field (hidden from real users)
  });
  const [formStatus, setFormStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      service: '',
      message: '',
      honeypot: '',
    });
    setFormStatus(null);
    setStatusMessage('');
    setErrors({});
    if (formRef.current) {
      formRef.current.reset();
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Name: required, min 2 chars
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long.';
    }

    // Email: required, valid format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // Phone: required, valid international format
    const phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 format basic check
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number (e.g., +919881033442).';
    }

    if (!formData.subject) {
      newErrors.subject = 'Please enter subject.';
    }

    // Service: required
    if (!formData.service) {
      newErrors.service = 'Please select a service.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus(null);
    setStatusMessage('');
    setErrors({});

    if (!validateForm()) {
      return;
    }

    if (formData.honeypot) {
      setFormStatus('success');
      setStatusMessage('Message sent successfully!');
      setTimeout(() => {
        setFormStatus(null);
        setStatusMessage('');
      }, 5000);
      return;
    }

    const payload = new FormData();
    payload.append('name', formData.name);
    payload.append('email', formData.email);
    payload.append('phone', formData.phone);
    payload.append('subject', formData.subject);
    payload.append('service', formData.service);
    payload.append('message', formData.message);
    payload.append('honeypot', formData.honeypot);

    try {
      const response = await fetch('https://aarmbh15.42web.io/contact.php', {
        method: 'POST',
        body: payload,
      });
      const text = await response.text();
      console.log('Raw response:', text);
      try {
        const data = JSON.parse(text);
        setFormStatus(data.status);
        setStatusMessage(data.message || (data.status === 'success' ? 'Message sent successfully!' : 'An error occurred.'));
        if (data.status === 'success') {
          setFormData({ name: '', email: '', phone: '', subject: '', service: '', message: '', honeypot: '' });
          formRef.current.reset();
        }
      } catch (jsonError) {
        console.error('JSON parse error:', jsonError, 'Raw response:', text);
        setFormStatus('error');
        setStatusMessage('Invalid server response. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setFormStatus('error');
      setStatusMessage('Network error: Failed to connect to server. Please try again.');
    }

    setTimeout(() => {
      setFormStatus(null);
      setStatusMessage('');
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gray-800 font-inter"> 
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden"
      >
        {/* Background Image Container */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
            backgroundPosition: 'center center',
          }}
        ></div>

        {/* Overlay for dark effect */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-amber-400 mb-4">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or need assistance? Contact our team, and let's
              bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info Panel */}
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg card-hover">
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <MailIcon className="text-amber-500 text-2xl mr-4 w-6 h-6" /> 
                  <div>
                    <p className="font-semibold text-white">Email Us</p>
                    <p className="text-gray-400">aarmbh15@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="text-amber-500 text-2xl mr-4 w-6 h-6" />
                  <div>
                    <p className="font-semibold text-white">Call Us</p>
                    <p className="text-gray-400">+91 9423512942</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="text-amber-500 text-2xl mr-4 w-6 h-6" />
                  <div>
                    <p className="font-semibold text-white">Our Location</p>
                    <p className="text-gray-400">Pune</p>
                  </div>
                </div>
              </div>
              
              {/* Connect With Us (Using inline SVGs for stability) - 5 icons total */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4 text-white">Connect With Us</h3>
                <div className="flex space-x-2 text-2xl mt-4">
                  
                  {/* LinkedIn */}
               <a
                    // *** UPDATED LINK HERE ***
                    href="https://www.linkedin.com/company/aarmbh/" // Example structure for a personal profile
                    // If you intended the company page, keep: href="https://www.linkedin.com/company/aarmbh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors duration-200 shadow-md flex items-center justify-center w-10 h-10" 
                    aria-label="LinkedIn Profile"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                  {/* GitHub */}
                  <a
                    href="https://github.com/aarmbh15"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-200 shadow-md flex items-center justify-center w-10 h-10"
                    aria-label="GitHub Profile"
                    title="GitHub Profile"
                  >
                    <Github className="w-6 h-6 text-white" />
                  </a>
                  
                  {/* Instagram - Using Custom SVG */}
                  <a
                    href="https://www.instagram.com/aarmbh15?utm_source=qr&igsh=ZXVpcWtuNDM1Zzht"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-pink-600 hover:bg-pink-500 transition-colors duration-200 shadow-md flex items-center justify-center w-10 h-10" 
                    aria-label="Instagram Profile"
                    title="Instagram Profile"
                  >
                    <InstagramIcon className="w-6 h-6 text-white" />
                  </a>

                  {/* Facebook - Using Custom SVG */}
                  <a
                    href="https://www.facebook.com/share/17ErcqKUyV/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-blue-800 hover:bg-blue-700 transition-colors duration-200 shadow-md flex items-center justify-center w-10 h-10" 
                    aria-label="Facebook Profile"
                    title="Facebook Profile"
                  >
                    <FacebookIcon className="w-6 h-6 text-white" />
                  </a>

                  {/* Email */}
                  {/* <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=aarmbh15@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-red-600 hover:bg-red-500 transition-colors duration-200 shadow-md flex items-center justify-center w-10 h-10"
                    aria-label="Email Address"
                    title="Send Email"
                  >
                    <Mail className="w-6 h-6 text-white" />
                  </a> */}
                </div>
              </div>
            </div>

            {/* Contact Form Panel */}
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg card-hover">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Form</h2>
              
              <form ref={formRef} className="space-y-6" onSubmit={handleSubmit} noValidate>
                {/* Honeypot field */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex="-1"
                  autoComplete="off"
                  aria-hidden="true"
                />

                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-white text-sm font-medium mb-2">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="off"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-amber-400 transition-colors"
                    placeholder="Your full name"
                    required
                  />
                  {errors.name && <p className="mt-1 text-red-400 text-sm">{errors.name}</p>}
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
                    autoComplete="off"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-amber-400 transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                  {errors.email && <p className="mt-1 text-red-400 text-sm">{errors.email}</p>}
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
                    autoComplete="off"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-amber-400 transition-colors"
                    placeholder="+44 123 456 7890"
                    required
                  />
                  {errors.phone && <p className="mt-1 text-red-400 text-sm">{errors.phone}</p>}
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
                    autoComplete="off"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-amber-400 transition-colors"
                    placeholder="Project subject"
                    required
                  />
                  {errors.subject && <p className="mt-1 text-red-400 text-sm">{errors.subject}</p>}
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
                    autoComplete="off"
                    // Added a custom class to make the select arrow white for better visibility
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:border-amber-400 transition-colors appearance-none custom-select-arrow"
                    required
                  >
                    <option value="" className="text-gray-700">Select service</option>
                    <option value="web" className="text-gray-700">Web Development</option>
                    <option value="software" className="text-gray-700">Software Development</option>
                  </select>
                  {/* Custom CSS for select appearance (placed inline to adhere to the single file rule) */}
                  <style jsx="true">{`
                    .custom-select-arrow {
                        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3e%3cpath d='M7 7l3 3 3-3m0 6l-3-3-3 3' stroke='%23f5f5f5' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e");
                        background-repeat: no-repeat;
                        background-position: right 0.75rem center;
                        background-size: 1.5em 1.5em;
                        padding-right: 2.5rem;
                    }
                  `}</style>

                  {errors.service && <p className="mt-1 text-red-400 text-sm">{errors.service}</p>}
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
                    autoComplete="off"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-amber-400 transition-colors"
                    placeholder="Tell us about your project requirements..."
                    required
                  ></textarea>
                  {errors.message && <p className="mt-1 text-red-400 text-sm">{errors.message}</p>}
                </div>

                {/* Submit */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="w-30 bg-amber-500 text-gray-900 px-5 py-2 rounded-lg cursor-pointer font-semibold hover:bg-amber-400 transition-colors shadow-lg flex items-center gap-2"
                  >
                    Submit 
                    {/* <MailIcon className="w-4 h-4 ml-2" /> */}
                  </button>
                </div>

              </form>
              
              {/* Dynamic Status Message */}
              {(formStatus === 'success' || formStatus === 'error') && (
                <div className={`mt-6 p-4 rounded-lg border ${formStatus === 'success' ? 'bg-green-800 text-green-200 border-green-600' : 'bg-red-800 text-red-200 border-red-600'}`}>
                  {statusMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;