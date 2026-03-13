import { useState, useEffect, useRef } from 'react';
import { useReducedMotion, motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';
import Swal from 'sweetalert2';

// ─── Icon components ──────────────────────────────────────────────────
const IconWrapper = ({ children, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 ${className}`}>
    {children}
  </svg>
);
const MailIcon = (p) => <IconWrapper {...p}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></IconWrapper>;
const PhoneIcon = (p) => <IconWrapper {...p}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.83 19.83 0 01-7.05-7.05 19.79 19.79 0 01-3.07-8.63A2 2 0 013.08 2h3a2 2 0 012 1.74A17 17 0 0013.3 9.4l.8.8c.2.2.45.33.7.38a.92.92 0 00.9-.38l.8-.8a2 2 0 011.74-2h3A2 2 0 0122 6.08z"></path></IconWrapper>;
const MapPinIcon = (p) => <IconWrapper {...p}><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9a2 2 0 100-4 2 2 0 000 4z"></path></IconWrapper>;
const InstagramIcon = (p) => <IconWrapper {...p}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></IconWrapper>;
const FacebookIcon = (p) => <IconWrapper {...p}><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></IconWrapper>;

// ─── Country codes (condensed — top 20 + India first) ─────────────────
const countryCodes = [
  { code: '+91', country: 'India', flag: '🇮🇳' },
  { code: '+1', country: 'United States', flag: '🇺🇸' },
  { code: '+44', country: 'United Kingdom', flag: '🇬🇧' },
  { code: '+61', country: 'Australia', flag: '🇦🇺' },
  { code: '+971', country: 'UAE', flag: '🇦🇪' },
  { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+65', country: 'Singapore', flag: '🇸🇬' },
  { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
  { code: '+49', country: 'Germany', flag: '🇩🇪' },
  { code: '+33', country: 'France', flag: '🇫🇷' },
  { code: '+81', country: 'Japan', flag: '🇯🇵' },
  { code: '+82', country: 'South Korea', flag: '🇰🇷' },
  { code: '+86', country: 'China', flag: '🇨🇳' },
  { code: '+92', country: 'Pakistan', flag: '🇵🇰' },
  { code: '+880', country: 'Bangladesh', flag: '🇧🇩' },
  { code: '+94', country: 'Sri Lanka', flag: '🇱🇰' },
  { code: '+977', country: 'Nepal', flag: '🇳🇵' },
  { code: '+62', country: 'Indonesia', flag: '🇮🇩' },
  { code: '+55', country: 'Brazil', flag: '🇧🇷' },
  { code: '+27', country: 'South Africa', flag: '🇿🇦' },
];

// ─── Animated Divider ─────────────────────────────────────────────────
const AnimatedDivider = () => {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) return <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />;
  return (
    <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 1.2, ease: 'easeOut' }}
      className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent origin-left" />
  );
};

function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', countryCode: '+91',
    subject: '', service: '', budget: '', message: '', honeypot: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = 'Contact Aarmbh InfoTech | Free Consultation – Pune, India';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta); }
    meta.setAttribute('content', 'Contact Aarmbh InfoTech for a free consultation. Web development, mobile app, AI & software solutions. Pune, India. Respond within 24 hours.');
    return () => { setFormData({ name: '', email: '', phone: '', countryCode: '+91', subject: '', service: '', budget: '', message: '', honeypot: '' }); setErrors({}); };
  }, []);

  const resetForm = () => {
    setFormData({ name: '', email: '', phone: '', countryCode: '+91', subject: '', service: '', budget: '', message: '', honeypot: '' });
    setErrors({});
    if (formRef.current) formRef.current.reset();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    else if (formData.name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters.';
    else if (!nameRegex.test(formData.name)) newErrors.name = 'Name must contain only letters and spaces.';

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim()) newErrors.email = 'Email address is required.';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Please enter a valid email address.';

    const fullPhone = formData.countryCode + formData.phone.replace(/\s/g, '');
    const phoneRegex = /^\+[1-9]\d{1,14}$/;
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    else if (!phoneRegex.test(fullPhone)) newErrors.phone = 'Invalid phone number.';

    if (!formData.subject) newErrors.subject = 'Please enter a subject.';
    if (!formData.service) newErrors.service = 'Please select a service.';
    if (formData.message.length > 500) newErrors.message = 'Message too long (max 500 characters).';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    if (formData.honeypot) { resetForm(); return; }

    setIsSubmitting(true);
    const payload = new FormData();
    Object.entries({ ...formData, phone: formData.countryCode + formData.phone }).forEach(([k, v]) => payload.append(k, v));

    try {
      const response = await fetch('contact.php', { method: 'POST', body: payload });
      const text = await response.text();
      let data;
      try { data = JSON.parse(text); } catch { throw new Error('Invalid JSON response'); }

      if (data.status === 'success') {
        Swal.fire({ icon: 'success', title: 'Thank You!', text: data.message || 'Your message has been sent! We will contact you within 24 hours.', timer: 4000, showConfirmButton: false });
      } else {
        Swal.fire({ icon: 'error', title: 'Oops...', text: data.message || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      Swal.fire({ icon: 'error', title: 'Network Error', text: 'Failed to connect to server. Please try again or WhatsApp us.' });
    } finally {
      setIsSubmitting(false);
      resetForm();
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-colors";
  const labelClass = "block text-white text-sm font-medium mb-2";
  const errorClass = "mt-1 text-red-400 text-sm";

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* ─── HERO ──────────────────────────────────────────────────── */}
      <section className="relative h-[55vh] flex items-center justify-center text-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1920&q=80')" }} />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 max-w-4xl px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-4 text-green-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block"></span>
              Available for new projects · Reply within 24h
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-amber-400 mb-4">Get in Touch</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss it — free consultation, no commitment required.
            </p>
          </motion.div>
        </div>
      </section>

      <AnimatedDivider />

      {/* ─── QUICK CONTACT STRIP ───────────────────────────────────── */}
      <div className="bg-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
            <a href="tel:+919423512942" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
              <i className="fas fa-phone text-amber-500"></i> +91 9423512942
            </a>
            <a href="mailto:aarmbh15@gmail.com" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
              <i className="fas fa-envelope text-amber-500"></i> aarmbh15@gmail.com
            </a>
            <a href="https://wa.me/919423512942?text=Hi%20Aarmbh%2C%20I%20am%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
              <i className="fab fa-whatsapp text-green-500"></i> WhatsApp Us
            </a>
            <span className="flex items-center gap-2">
              <i className="fas fa-map-marker-alt text-amber-500"></i> Pune, Maharashtra, India
            </span>
          </div>
        </div>
      </div>

      <AnimatedDivider />

      {/* ─── MAIN CONTENT ──────────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">

            {/* ─── LEFT: Info + Social ─────────────────────────────── */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <div className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-800 h-full">
                <h2 className="text-2xl font-bold text-white mb-2">Let's Talk</h2>
                <p className="text-gray-400 mb-8 text-sm">Fill in the form or reach us directly. We respond within 24 hours on business days.</p>

                <div className="space-y-5 mb-8">
                  <a href="tel:+919423512942" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                      <PhoneIcon className="text-amber-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">Call Us</p>
                      <p className="text-gray-400 group-hover:text-amber-400 transition-colors">+91 9423512942</p>
                    </div>
                  </a>
                  <a href="mailto:aarmbh15@gmail.com" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                      <MailIcon className="text-amber-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">Email Us</p>
                      <p className="text-gray-400 group-hover:text-amber-400 transition-colors">aarmbh15@gmail.com</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                      <MapPinIcon className="text-amber-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">Location</p>
                      <p className="text-gray-400">Pune, Maharashtra, India</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <a href="https://wa.me/919423512942?text=Hi%20Aarmbh%2C%20I%20am%20interested%20in%20your%20services.%20Can%20we%20discuss%3F"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-3 px-6 rounded-xl bg-green-600 hover:bg-green-500 text-white font-semibold transition-all shadow-lg mb-8">
                  <i className="fab fa-whatsapp text-xl"></i> Chat on WhatsApp
                </a>

                {/* Social */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
                  <div className="flex space-x-3">
                    <a href="https://www.linkedin.com/company/aarmbh/" target="_blank" rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors shadow-md flex items-center justify-center w-10 h-10" aria-label="LinkedIn">
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a href="https://github.com/aarmbh15" target="_blank" rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors shadow-md flex items-center justify-center w-10 h-10" aria-label="GitHub">
                      <Github className="w-5 h-5 text-white" />
                    </a>
                    <a href="https://www.instagram.com/aarmbh15" target="_blank" rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-pink-600 hover:bg-pink-500 transition-colors shadow-md flex items-center justify-center w-10 h-10" aria-label="Instagram">
                      <InstagramIcon className="w-5 h-5 text-white" />
                    </a>
                    <a href="https://www.facebook.com/share/17ErcqKUyV/" target="_blank" rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-blue-800 hover:bg-blue-700 transition-colors shadow-md flex items-center justify-center w-10 h-10" aria-label="Facebook">
                      <FacebookIcon className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>

                {/* Trust signals */}
                <div className="mt-8 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                  <p className="text-gray-400 text-xs leading-relaxed">
                    🔒 Your information is safe with us. We never share your data and respond within 24 business hours.
                    We sign NDAs upon request.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ─── RIGHT: Form ──────────────────────────────────────── */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
              <div className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-2">Request a Free Consultation</h2>
                <p className="text-gray-500 text-sm mb-6">All fields marked <span className="text-red-400">*</span> are required.</p>

                <form ref={formRef} className="space-y-5" onSubmit={handleSubmit} noValidate>
                  {/* Honeypot */}
                  <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange}
                    style={{ display: 'none' }} tabIndex="-1" autoComplete="off" aria-hidden="true" />

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className={labelClass}>Full Name <span className="text-red-400">*</span></label>
                    <input id="name" name="name" type="text" value={formData.name} onChange={handleChange}
                      autoComplete="name" className={inputClass} placeholder="Your full name" required />
                    {errors.name && <p className={errorClass}>{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className={labelClass}>Email Address <span className="text-red-400">*</span></label>
                    <input id="email" name="email" type="email" value={formData.email} onChange={handleChange}
                      autoComplete="email" className={inputClass} placeholder="your@email.com" required />
                    {errors.email && <p className={errorClass}>{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className={labelClass}>Phone Number <span className="text-red-400">*</span></label>
                    <div className="flex gap-2">
                      <select name="countryCode" value={formData.countryCode} onChange={handleChange}
                        className="w-28 px-3 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-amber-400">
                        {countryCodes.map(c => (
                          <option key={c.code + c.country} value={c.code} className="text-gray-700">
                            {c.flag} {c.code}
                          </option>
                        ))}
                      </select>
                      <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange}
                        autoComplete="tel" className={`${inputClass} flex-1`} placeholder="9876543210" required />
                    </div>
                    {errors.phone && <p className={errorClass}>{errors.phone}</p>}
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className={labelClass}>Subject <span className="text-red-400">*</span></label>
                    <input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange}
                      autoComplete="off" className={inputClass} placeholder="e.g. E-commerce Website Project" required />
                    {errors.subject && <p className={errorClass}>{errors.subject}</p>}
                  </div>

                  {/* Service + Budget (2 columns) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="service" className={labelClass}>Service Needed <span className="text-red-400">*</span></label>
                      <select id="service" name="service" value={formData.service} onChange={handleChange}
                        className={`${inputClass} appearance-none`} required>
                        <option value="">Select service</option>
                        <option value="web">Web Development</option>
                        <option value="software">Software Development</option>
                        <option value="mobile">Mobile App (Flutter)</option>
                        <option value="ai">AI / Machine Learning</option>
                        <option value="ui">UI/UX Design</option>
                        <option value="hosting">Web Hosting & Domain</option>
                        <option value="healthcare">Healthcare IT</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.service && <p className={errorClass}>{errors.service}</p>}
                    </div>
                    <div>
                      <label htmlFor="budget" className={labelClass}>Estimated Budget</label>
                      <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className={`${inputClass} appearance-none`}>
                        <option value="">Select range</option>
                        <option value="under50k">Under ₹50,000</option>
                        <option value="50k-1L">₹50,000 – ₹1,00,000</option>
                        <option value="1L-3L">₹1,00,000 – ₹3,00,000</option>
                        <option value="3L+">₹3,00,000+</option>
                        <option value="flexible">Flexible / TBD</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <label htmlFor="message" className={labelClass}>Project Details</label>
                    <textarea id="message" name="message" rows="4" value={formData.message}
                      onChange={(e) => { if (e.target.value.length <= 500) handleChange(e); }}
                      autoComplete="off" className={inputClass}
                      placeholder="Tell us about your project — what you need, timeline, any specific requirements..."></textarea>
                    <div className="absolute bottom-3 right-3 text-xs text-gray-500">{formData.message.length}/500</div>
                    {errors.message && <p className={errorClass}>{errors.message}</p>}
                  </div>

                  {/* Submit */}
                  <motion.button type="submit" disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }} whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full py-4 rounded-xl font-bold text-gray-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 shadow-lg transition-all text-base disabled:opacity-70 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <><span className="animate-spin rounded-full h-4 w-4 border-2 border-gray-900 border-t-transparent"></span> Sending...</>
                    ) : (
                      <><i className="fas fa-paper-plane"></i> Send Message — It's Free!</>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* ─── WHY CONTACT US ──────────────────────────────────────────── */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-10">What Happens Next?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', icon: 'fas fa-calendar-check', title: 'We Review Your Request', desc: 'Our team reviews your message within 24 business hours and schedules a free discovery call.' },
              { step: '02', icon: 'fas fa-comments', title: 'Free Consultation Call', desc: 'We discuss your project in detail — goals, timeline, tech stack, and budget. No obligations.' },
              { step: '03', icon: 'fas fa-file-alt', title: 'Receive a Custom Proposal', desc: 'You receive a clear, itemized proposal with pricing, timeline, and our recommended approach.' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-gray-800 border border-gray-700 hover:border-amber-500/40 transition-colors">
                <div className="w-12 h-12 rounded-full bg-amber-500 text-gray-950 font-extrabold text-lg flex items-center justify-center mx-auto mb-4">{item.step}</div>
                <i className={`${item.icon} text-3xl text-amber-400 mb-3 block`}></i>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;