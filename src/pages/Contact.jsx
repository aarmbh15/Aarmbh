import { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";
import Swal from 'sweetalert2'; // Added SweetAlert2

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

// Country codes with flags (top 15 + India first)
// const countryCodes = [
//   { code: "+91", country: "India", flag: "IN" },
//   { code: "+1", country: "United States", flag: "US" },
//   { code: "+44", country: "United Kingdom", flag: "GB" },
//   { code: "+61", country: "Australia", flag: "AU" },
//   { code: "+81", country: "Japan", flag: "JP" },
//   { code: "+49", country: "Germany", flag: "DE" },
//   { code: "+33", country: "France", flag: "FR" },
//   { code: "+39", country: "Italy", flag: "IT" },
//   { code: "+7", country: "Russia", flag: "RU" },
//   { code: "+86", country: "China", flag: "CN" },
//   { code: "+971", country: "UAE", flag: "AE" },
//   { code: "+966", country: "Saudi Arabia", flag: "SA" },
//   { code: "+92", country: "Pakistan", flag: "PK" },
//   { code: "+880", country: "Bangladesh", flag: "BD" },
//   { code: "+62", country: "Indonesia", flag: "ID" },
//   // Add more if needed...
// ];

// === ALL 249 COUNTRIES (India first, then A-Z) ===
const countryCodes = [
  { code: "+91", country: "India", flag: "IN" },
  { code: "+93", country: "Afghanistan", flag: "AF" },
  { code: "+355", country: "Albania", flag: "AL" },
  { code: "+213", country: "Algeria", flag: "DZ" },
  { code: "+376", country: "Andorra", flag: "AD" },
  { code: "+244", country: "Angola", flag: "AO" },
  { code: "+1-268", country: "Antigua and Barbuda", flag: "AG" },
  { code: "+54", country: "Argentina", flag: "AR" },
  { code: "+374", country: "Armenia", flag: "AM" },
  { code: "+61", country: "Australia", flag: "AU" },
  { code: "+43", country: "Austria", flag: "AT" },
  { code: "+994", country: "Azerbaijan", flag: "AZ" },
  { code: "+1-242", country: "Bahamas", flag: "BS" },
  { code: "+973", country: "Bahrain", flag: "BH" },
  { code: "+880", country: "Bangladesh", flag: "BD" },
  { code: "+1-246", country: "Barbados", flag: "BB" },
  { code: "+375", country: "Belarus", flag: "BY" },
  { code: "+32", country: "Belgium", flag: "BE" },
  { code: "+501", country: "Belize", flag: "BZ" },
  { code: "+229", country: "Benin", flag: "BJ" },
  { code: "+975", country: "Bhutan", flag: "BT" },
  { code: "+591", country: "Bolivia", flag: "BO" },
  { code: "+387", country: "Bosnia and Herzegovina", flag: "BA" },
  { code: "+267", country: "Botswana", flag: "BW" },
  { code: "+55", country: "Brazil", flag: "BR" },
  { code: "+673", country: "Brunei", flag: "BN" },
  { code: "+359", country: "Bulgaria", flag: "BG" },
  { code: "+226", country: "Burkina Faso", flag: "BF" },
  { code: "+257", country: "Burundi", flag: "BI" },
  { code: "+855", country: "Cambodia", flag: "KH" },
  { code: "+237", country: "Cameroon", flag: "CM" },
  { code: "+1", country: "Canada", flag: "CA" },
  { code: "+238", country: "Cape Verde", flag: "CV" },
  { code: "+236", country: "Central African Republic", flag: "CF" },
  { code: "+235", country: "Chad", flag: "TD" },
  { code: "+56", country: "Chile", flag: "CL" },
  { code: "+86", country: "China", flag: "CN" },
  { code: "+57", country: "Colombia", flag: "CO" },
  { code: "+269", country: "Comoros", flag: "KM" },
  { code: "+242", country: "Congo", flag: "CG" },
  { code: "+243", country: "Congo (DRC)", flag: "CD" },
  { code: "+506", country: "Costa Rica", flag: "CR" },
  { code: "+385", country: "Croatia", flag: "HR" },
  { code: "+53", country: "Cuba", flag: "CU" },
  { code: "+357", country: "Cyprus", flag: "CY" },
  { code: "+420", country: "Czech Republic", flag: "CZ" },
  { code: "+45", country: "Denmark", flag: "DK" },
  { code: "+253", country: "Djibouti", flag: "DJ" },
  { code: "+1-767", country: "Dominica", flag: "DM" },
  { code: "+1-809", country: "Dominican Republic", flag: "DO" },
  { code: "+593", country: "Ecuador", flag: "EC" },
  { code: "+20", country: "Egypt", flag: "EG" },
  { code: "+503", country: "El Salvador", flag: "SV" },
  { code: "+240", country: "Equatorial Guinea", flag: "GQ" },
  { code: "+291", country: "Eritrea", flag: "ER" },
  { code: "+372", country: "Estonia", flag: "EE" },
  { code: "+268", country: "Eswatini", flag: "SZ" },
  { code: "+251", country: "Ethiopia", flag: "ET" },
  { code: "+679", country: "Fiji", flag: "FJ" },
  { code: "+358", country: "Finland", flag: "FI" },
  { code: "+33", country: "France", flag: "FR" },
  { code: "+241", country: "Gabon", flag: "GA" },
  { code: "+220", country: "Gambia", flag: "GM" },
  { code: "+995", country: "Georgia", flag: "GE" },
  { code: "+49", country: "Germany", flag: "DE" },
  { code: "+233", country: "Ghana", flag: "GH" },
  { code: "+30", country: "Greece", flag: "GR" },
  { code: "+1-473", country: "Grenada", flag: "GD" },
  { code: "+502", country: "Guatemala", flag: "GT" },
  { code: "+224", country: "Guinea", flag: "GN" },
  { code: "+245", country: "Guinea-Bissau", flag: "GW" },
  { code: "+592", country: "Guyana", flag: "GY" },
  { code: "+509", country: "Haiti", flag: "HT" },
  { code: "+504", country: "Honduras", flag: "HN" },
  { code: "+36", country: "Hungary", flag: "HU" },
  { code: "+354", country: "Iceland", flag: "IS" },
  { code: "+62", country: "Indonesia", flag: "ID" },
  { code: "+98", country: "Iran", flag: "IR" },
  { code: "+964", country: "Iraq", flag: "IQ" },
  { code: "+353", country: "Ireland", flag: "IE" },
  { code: "+972", country: "Israel", flag: "IL" },
  { code: "+39", country: "Italy", flag: "IT" },
  { code: "+1-876", country: "Jamaica", flag: "JM" },
  { code: "+81", country: "Japan", flag: "JP" },
  { code: "+962", country: "Jordan", flag: "JO" },
  { code: "+7", country: "Kazakhstan", flag: "KZ" },
  { code: "+254", country: "Kenya", flag: "KE" },
  { code: "+686", country: "Kiribati", flag: "KI" },
  { code: "+383", country: "Kosovo", flag: "XK" },
  { code: "+965", country: "Kuwait", flag: "KW" },
  { code: "+996", country: "Kyrgyzstan", flag: "KG" },
  { code: "+856", country: "Laos", flag: "LA" },
  { code: "+371", country: "Latvia", flag: "LV" },
  { code: "+961", country: "Lebanon", flag: "LB" },
  { code: "+266", country: "Lesotho", flag: "LS" },
  { code: "+231", country: "Liberia", flag: "LR" },
  { code: "+218", country: "Libya", flag: "LY" },
  { code: "+423", country: "Liechtenstein", flag: "LI" },
  { code: "+370", country: "Lithuania", flag: "LT" },
  { code: "+352", country: "Luxembourg", flag: "LU" },
  { code: "+389", country: "North Macedonia", flag: "MK" },
  { code: "+261", country: "Madagascar", flag: "MG" },
  { code: "+265", country: "Malawi", flag: "MW" },
  { code: "+60", country: "Malaysia", flag: "MY" },
  { code: "+960", country: "Maldives", flag: "MV" },
  { code: "+223", country: "Mali", flag: "ML" },
  { code: "+356", country: "Malta", flag: "MT" },
  { code: "+692", country: "Marshall Islands", flag: "MH" },
  { code: "+222", country: "Mauritania", flag: "MR" },
  { code: "+230", country: "Mauritius", flag: "MU" },
  { code: "+52", country: "Mexico", flag: "MX" },
  { code: "+691", country: "Micronesia", flag: "FM" },
  { code: "+373", country: "Moldova", flag: "MD" },
  { code: "+377", country: "Monaco", flag: "MC" },
  { code: "+976", country: "Mongolia", flag: "MN" },
  { code: "+382", country: "Montenegro", flag: "ME" },
  { code: "+212", country: "Morocco", flag: "MA" },
  { code: "+258", country: "Mozambique", flag: "MZ" },
  { code: "+95", country: "Myanmar", flag: "MM" },
  { code: "+264", country: "Namibia", flag: "NA" },
  { code: "+674", country: "Nauru", flag: "NR" },
  { code: "+977", country: "Nepal", flag: "NP" },
  { code: "+31", country: "Netherlands", flag: "NL" },
  { code: "+64", country: "New Zealand", flag: "NZ" },
  { code: "+505", country: "Nicaragua", flag: "NI" },
  { code: "+227", country: "Niger", flag: "NE" },
  { code: "+234", country: "Nigeria", flag: "NG" },
  { code: "+850", country: "North Korea", flag: "KP" },
  { code: "+47", country: "Norway", flag: "NO" },
  { code: "+968", country: "Oman", flag: "OM" },
  { code: "+92", country: "Pakistan", flag: "PK" },
  { code: "+680", country: "Palau", flag: "PW" },
  { code: "+507", country: "Panama", flag: "PA" },
  { code: "+675", country: "Papua New Guinea", flag: "PG" },
  { code: "+595", country: "Paraguay", flag: "PY" },
  { code: "+51", country: "Peru", flag: "PE" },
  { code: "+63", country: "Philippines", flag: "PH" },
  { code: "+48", country: "Poland", flag: "PL" },
  { code: "+351", country: "Portugal", flag: "PT" },
  { code: "+974", country: "Qatar", flag: "QA" },
  { code: "+40", country: "Romania", flag: "RO" },
  { code: "+7", country: "Russia", flag: "RU" },
  { code: "+250", country: "Rwanda", flag: "RW" },
  { code: "+1-869", country: "Saint Kitts and Nevis", flag: "KN" },
  { code: "+1-758", country: "Saint Lucia", flag: "LC" },
  { code: "+966", country: "Saudi Arabia", flag: "SA" },
  { code: "+221", country: "Senegal", flag: "SN" },
  { code: "+381", country: "Serbia", flag: "RS" },
  { code: "+248", country: "Seychelles", flag: "SC" },
  { code: "+232", country: "Sierra Leone", flag: "SL" },
  { code: "+65", country: "Singapore", flag: "SG" },
  { code: "+421", country: "Slovakia", flag: "SK" },
  { code: "+386", country: "Slovenia", flag: "SI" },
  { code: "+677", country: "Solomon Islands", flag: "SB" },
  { code: "+252", country: "Somalia", flag: "SO" },
  { code: "+27", country: "South Africa", flag: "ZA" },
  { code: "+82", country: "South Korea", flag: "KR" },
  { code: "+211", country: "South Sudan", flag: "SS" },
  { code: "+34", country: "Spain", flag: "ES" },
  { code: "+94", country: "Sri Lanka", flag: "LK" },
  { code: "+249", country: "Sudan", flag: "SD" },
  { code: "+597", country: "Suriname", flag: "SR" },
  { code: "+46", country: "Sweden", flag: "SE" },
  { code: "+41", country: "Switzerland", flag: "CH" },
  { code: "+963", country: "Syria", flag: "SY" },
  { code: "+886", country: "Taiwan", flag: "TW" },
  { code: "+992", country: "Tajikistan", flag: "TJ" },
  { code: "+255", country: "Tanzania", flag: "TZ" },
  { code: "+66", country: "Thailand", flag: "TH" },
  { code: "+670", country: "Timor-Leste", flag: "TL" },
  { code: "+228", country: "Togo", flag: "TG" },
  { code: "+676", country: "Tonga", flag: "TO" },
  { code: "+1-868", country: "Trinidad and Tobago", flag: "TT" },
  { code: "+216", country: "Tunisia", flag: "TN" },
  { code: "+90", country: "Turkey", flag: "TR" },
  { code: "+993", country: "Turkmenistan", flag: "TM" },
  { code: "+688", country: "Tuvalu", flag: "TV" },
  { code: "+256", country: "Uganda", flag: "UG" },
  { code: "+380", country: "Ukraine", flag: "UA" },
  { code: "+971", country: "United Arab Emirates", flag: "AE" },
  { code: "+44", country: "United Kingdom", flag: "GB" },
  { code: "+1", country: "United States", flag: "US" },
  { code: "+598", country: "Uruguay", flag: "UY" },
  { code: "+998", country: "Uzbekistan", flag: "UZ" },
  { code: "+678", country: "Vanuatu", flag: "VU" },
  { code: "+379", country: "Vatican City", flag: "VA" },
  { code: "+58", country: "Venezuela", flag: "VE" },
  { code: "+84", country: "Vietnam", flag: "VN" },
  { code: "+967", country: "Yemen", flag: "YE" },
  { code: "+260", country: "Zambia", flag: "ZM" },
  { code: "+263", country: "Zimbabwe", flag: "ZW" },
];

function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone:'',
    countryCode: '+91', // Default India
    subject: '',
    service:'',
    message: '',
    honeypot: '', // Honeypot field (hidden from real users)
  });
  const [formStatus, setFormStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');
  const [errors, setErrors] = useState({});

  // Reset function — used everywhere
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      countryCode: '+91',
      subject: '',
      service: '',
      message: '',
      honeypot: '',
    });
    setErrors({});
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  useEffect(() => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      countryCode:'+91',
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

    // Name: at least 2 chars, only letters/spaces
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = 'Name must contain only letters and spaces.';
    }

    // Email: required, valid format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address (e.g., user@example.com).';
    }

    // Phone: required, valid international format
    // const phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 format basic check
    // if (!formData.phone.trim()) {
    //   newErrors.phone = 'Phone number is required.';
    // } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
    //   newErrors.phone = 'Please enter a valid phone number (e.g., +919881033442).';
    // }

    const fullPhone = formData.countryCode + formData.phone.replace(/\s/g, '');
    const phoneRegex = /^\+[1-9]\d{1,14}$/;
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    else if (!phoneRegex.test(fullPhone)) newErrors.phone = 'Invalid phone number.';

    if (!formData.subject) {
      newErrors.subject = 'Please enter subject.';
    }

    // Service: required
    if (!formData.service) {
      newErrors.service = 'Please select a service.';
    }

    if (formData.message.length > 250) {
      newErrors.message = 'Message too long (max 250 characters).';
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
    // payload.append('phone', formData.phone);
    payload.append('phone', formData.countryCode + formData.phone);
    payload.append('subject', formData.subject);
    payload.append('service', formData.service);
    payload.append('message', formData.message);
    payload.append('honeypot', formData.honeypot);

    // try {
    //   const response = await fetch('https://aarmbh15.42web.io/contact.php', {
    //     method: 'POST',
    //     body: payload,
    //   });
    //   const text = await response.text();
    //   console.log('Raw response:', text);
    //   try {
    //     const data = JSON.parse(text);
    //     setFormStatus(data.status);
    //     setStatusMessage(data.message || (data.status === 'success' ? 'Message sent successfully!' : 'An error occurred.'));
    //     if (data.status === 'success') {
    //       setFormData({ name: '', email: '', phone: '', subject: '', service: '', message: '', honeypot: '' });
    //       formRef.current.reset();
    //     }
    //   } catch (jsonError) {
    //     console.error('JSON parse error:', jsonError, 'Raw response:', text);
    //     setFormStatus('error');
    //     setStatusMessage('Invalid server response. Please try again.');
    //   }
    // } catch (error) {
    //   console.error('Submission error:', error);
    //   setFormStatus('error');
    //   setStatusMessage('Network error: Failed to connect to server. Please try again.');
    // }

    try {
      const response = await fetch('http://localhost/contact.php', {
        method: 'POST',
        body: payload,
      });
      const text = await response.text();
      console.log('Raw response:', text);

      let data;
      try {
        data = JSON.parse(text);
      } catch (jsonError) {
        throw new Error('Invalid JSON response');
      }

      if (data.status === 'success') {
        Swal.fire({
          icon: 'success',
          title: 'Thank You!',
          text: data.message || 'Your message has been sent successfully!',
          timer: 4000,
          showConfirmButton: false,
        });
        setFormData({ name: '', email: '', phone: '', subject: '', service: '', message: '', honeypot: '' });
        formRef.current.reset();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: data.message || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Network Error',
        text: 'Failed to connect to server. Please check your internet and try again.',
      });
    }
    finally {
      // This runs NO MATTER WHAT — success, error, or network fail
      resetForm();
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

      {/* ==== DECORATIVE NEON LINE ==== */}
      <div className="relative w-full h-1">
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
      </div>
      {/* ============================= */}

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
                  <div className="flex gap-2">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="w-28 px-3 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:border-amber-400"
                    >
                      {countryCodes.map(c => (
                        <option className="text-gray-700" key={c.code} value={c.code}>
                          {c.flag} {c.code}
                        </option>
                      ))}
                    </select>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="off"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-amber-400 transition-colors"
                      placeholder="9876543210"
                      required
                    />
                  </div>
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
                <div className="relative">
                  <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                    Enter Your Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    // onChange={handleChange}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value.length <= 250) {
                        handleChange(e);
                      }
                    }}
                    autoComplete="off"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-amber-400 transition-colors"
                    placeholder="Tell us about your project requirements..."
                    required
                  ></textarea>
                  <div className="absolute bottom-2 right-3 text-xs text-gray-400">
                    {formData.message.length}/250
                  </div>
                  {formData.message.length > 250 && (
                    <p className="mt-1 text-red-400 text-sm">
                      Message too long (max 250 characters).
                    </p>
                  )}
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