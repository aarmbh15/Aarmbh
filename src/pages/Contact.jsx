import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();
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

  // Reset form on component mount (handles reloads)
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

    // Phone: required, valid international format (e.g., +91 followed by 10 digits, or similar)
    const phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 format basic check
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number (e.g., +919881033442).';
    }

    // Subject: required, min 5 chars
    // if (!formData.subject.trim()) {
    //   newErrors.subject = 'Subject is required.';
    // } else if (formData.subject.trim().length < 5) {
    //   newErrors.subject = 'Subject must be at least 5 characters long.';
    // }
     if (!formData.subject) {
      newErrors.subject = 'Please enter subject.';
    }

    // Service: required
    if (!formData.service) {
      newErrors.service = 'Please select a service.';
    }

    // Message: required, min 10 chars
    // if (!formData.message.trim()) {
    //   newErrors.message = 'Message is required.';
    // } else if (formData.message.trim().length < 10) {
    //   newErrors.message = 'Message must be at least 10 characters long.';
    // }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setFormStatus(null); // Reset previous status
  //   setStatusMessage('');
  //   setErrors({});

  //   if (!validateForm()) {
  //     return; // Stop submission if validation fails
  //   }

  //   // Honeypot check: If filled, it's likely a bot (silent fail or ignore)
  //   if (formData.honeypot) {
  //     // Silent ignore for bots - pretend success or do nothing
  //     setFormStatus('success');
  //     setStatusMessage('Message sent successfully!');
  //     setTimeout(() => {
  //       setFormStatus(null);
  //       setStatusMessage('');
  //     }, 5000);
  //     return;
  //   }

  //   // Create payload from state (ensures controlled values)
  //   const payload = new FormData();
  //   payload.append('name', formData.name);
  //   payload.append('email', formData.email);
  //   payload.append('phone', formData.phone);
  //   payload.append('subject', formData.subject);
  //   payload.append('service', formData.service);
  //   payload.append('message', formData.message);
  //   payload.append('honeypot', formData.honeypot); // Send to server for extra check if needed

  //   try {
  //     const response = await fetch('contact.php', {
  //       method: 'POST',
  //       body: payload,
  //     });
  //     const data = await response.json();
  //     setFormStatus(data.status); // 'success' or 'error'
  //     setStatusMessage(data.message || (data.status === 'success' ? 'Message sent successfully!' : 'An error occurred.'));
      
  //     if (data.status === 'success') {
  //       setFormData({ name: '', email: '', phone: '', subject: '', service: '', message: '', honeypot: '' });
  //     }
  //   } catch (error) {
  //     setFormStatus('error');
  //     setStatusMessage('Network error: Failed to connect to server. Please try again.');
  //     console.error('Submission error:', error);
  //   }

  //   // Auto-clear status after 5 seconds
  //   setTimeout(() => {
  //     setFormStatus(null);
  //     setStatusMessage('');
  //   }, 5000);
  // };
  
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
    <div className="pt-25 min-h-screen bg-gray-800">
 <section
  className="relative h-[60vh584] flex items-center justify-center text-center overflow-hidden"
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
              
              <form ref={formRef} className="space-y-6" onSubmit={handleSubmit} noValidate>
                {/* Honeypot field - Hidden from users via CSS and accessibility attributes */}
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
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors"
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
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors"
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
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors"
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
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors"
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
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:border-white transition-colors"
                    required
                  >
                    <option value="" className="text-black">Select service</option>
                    <option value="web" className="text-black">Web Development</option>
                    <option value="software" className="text-black">Software Development</option>
                  </select>
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
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors"
                    placeholder="Tell us about your project requirements..."
                    required
                  ></textarea>
                  {errors.message && <p className="mt-1 text-red-400 text-sm">{errors.message}</p>}
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
              {/* Dynamic Status Message */}
              {formStatus === 'success' && (
                <div className="mb-4 p-4 bg-green-800 text-green-200 rounded-lg border border-green-600">
                  {statusMessage}
                </div>
              )}
              {formStatus === 'error' && (
                <div className="mb-4 p-4 bg-red-800 text-red-200 rounded-lg border border-red-600">
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