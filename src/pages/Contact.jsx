import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  User, 
  MessageSquare, 
  ArrowRight,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Heart
} from 'lucide-react';

const contactMethods = [
  {
    id: 'phone',
    name: 'Phone',
    description: 'Speak directly with our reservations team',
    icon: Phone,
    color: '#10b981',
    details: [
      { label: 'Reservations', value: '+91 98765 43210' },
      { label: 'General Inquiry', value: '+91 98765 43211' },
      { label: 'Emergency', value: '+91 98765 43212' },
    ],
    hours: '24/7 Available',
  },
  {
    id: 'email',
    name: 'Email',
    description: 'Send us a detailed message about your inquiry',
    icon: Mail,
    color: '#3b82f6',
    details: [
      { label: 'Reservations', value: 'reservations@himalayanhaven.com' },
      { label: 'General Inquiry', value: 'info@himalayanhaven.com' },
      { label: 'Feedback', value: 'feedback@himalayanhaven.com' },
    ],
    hours: 'Response within 24 hours',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    description: 'Quick and convenient messaging',
    icon: MessageSquare,
    color: '#25d366',
    details: [
      { label: 'Reservations', value: '+91 98765 43210' },
      { label: 'Support', value: '+91 98765 43211' },
    ],
    hours: '24/7 Available',
  },
  {
    id: 'address',
    name: 'Visit Us',
    description: 'Our physical location and office hours',
    icon: MapPin,
    color: '#ef4444',
    details: [
      { label: 'Address', value: 'Village Manali, Himachal Pradesh, India - 175131' },
      { label: 'Nearest Airport', value: 'Bhuntar Airport (Kullu-Manali)' },
      { label: 'Nearest Railway', value: 'Joginder Nagar Railway Station' },
    ],
    hours: 'Office: 9:00 AM - 6:00 PM',
  },
];

const faqs = [
  {
    question: 'How do I make a reservation?',
    answer: 'You can make a reservation through our website by selecting your preferred dates and accommodation type. Alternatively, you can call our reservations team or send us an email with your requirements.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Our cancellation policy varies depending on the type of booking and the season. Generally, cancellations made 7 days before arrival are eligible for a full refund. Please refer to our terms and conditions for detailed information.',
  },
  {
    question: 'Do you offer airport pickup?',
    answer: 'Yes, we offer airport pickup services from Bhuntar Airport (Kullu-Manali Airport) for a nominal fee. Please inform us of your flight details at least 24 hours in advance so we can arrange the pickup.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept various payment methods including credit/debit cards, net banking, UPI payments, and cash on arrival. For online bookings, we also accept PayPal and other international payment gateways.',
  },
  {
    question: 'Is there a minimum stay requirement?',
    answer: 'During peak seasons (spring, summer, and autumn), we have a minimum stay requirement of 2 nights for our geodesic domes and premium suites. For other accommodations and off-peak seasons, a 1-night stay is acceptable.',
  },
  {
    question: 'Do you provide meals?',
    answer: 'Yes, we provide complimentary breakfast for all our guests. We also offer lunch and dinner options with a variety of cuisines. Our restaurant serves authentic Himachali dishes, North Indian cuisine, and international options.',
  },
];

const socialLinks = [
  { platform: 'Facebook', icon: Facebook, link: '#', color: '#3b5998' },
  { platform: 'Instagram', icon: Instagram, link: '#', color: '#e4405f' },
  { platform: 'Twitter', icon: Twitter, link: '#', color: '#1da1f2' },
  { platform: 'YouTube', icon: Youtube, link: '#', color: '#cd201f' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState('contact');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1920&h=600&fit=crop"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>
        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold gradient-text mb-4">Contact Us</h1>
          <p className="text-xl text-white/80">We're here to help you plan your perfect Himalayan getaway</p>
        </motion.div>
      </section>

      {/* Navigation Tabs */}
      <section className="section bg-primary">
        <div className="container">
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {['contact', 'visit', 'faq'].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gold text-primary'
                    : 'bg-bg-secondary text-text-secondary hover:bg-gold hover:text-primary'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab === 'contact' && <Mail className="w-5 h-5" />}
                {tab === 'visit' && <MapPin className="w-5 h-5" />}
                {tab === 'faq' && <MessageSquare className="w-5 h-5" />}
                <span className="capitalize">{tab === 'contact' ? 'Contact Form' : tab === 'visit' ? 'Visit Us' : 'FAQs'}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <AnimatePresence mode='wait'>
        {activeTab === 'contact' && (
          <section className="section" key="contact">
            <div className="container">
              <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Contact Form */}
                  <div className="bg-bg-secondary rounded-2xl p-8">
                    <h2 className="text-2xl font-bold gradient-text mb-2">Get in Touch</h2>
                    <p className="text-text-secondary mb-8">
                      Fill out the form below and our team will get back to you as soon as possible.
                    </p>

                    <AnimatePresence mode='wait'>
                      {submitSuccess ? (
                        <motion.div
                          className="text-center py-8"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div
                            className="w-20 h-20 bg-gold bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                          >
                            <Send className="w-10 h-10 text-gold" />
                          </motion.div>
                          <h3 className="text-2xl font-bold gradient-text mb-4">Message Sent!</h3>
                          <p className="text-text-secondary">
                            Thank you for contacting us. We'll get back to you within 24 hours.
                          </p>
                        </motion.div>
                      ) : (
                        <motion.form
                          onSubmit={handleSubmit}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <label className="block text-text-secondary mb-2">Full Name *</label>
                                <div className="relative">
                                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary" />
                                  <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your full name"
                                    className={`w-full pl-10 pr-4 py-3 bg-primary rounded-lg text-white placeholder-text-secondary focus:outline-none focus:ring-2 ${
                                      errors.name ? 'ring-red-500' : 'ring-gold'
                                    }`}
                                  />
                                </div>
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                              </div>

                              <div>
                                <label className="block text-text-secondary mb-2">Email *</label>
                                <div className="relative">
                                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary" />
                                  <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your email address"
                                    className={`w-full pl-10 pr-4 py-3 bg-primary rounded-lg text-white placeholder-text-secondary focus:outline-none focus:ring-2 ${
                                      errors.email ? 'ring-red-500' : 'ring-gold'
                                    }`}
                                  />
                                </div>
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <label className="block text-text-secondary mb-2">Phone *</label>
                                <div className="relative">
                                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary" />
                                  <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Your phone number"
                                    className={`w-full pl-10 pr-4 py-3 bg-primary rounded-lg text-white placeholder-text-secondary focus:outline-none focus:ring-2 ${
                                      errors.phone ? 'ring-red-500' : 'ring-gold'
                                    }`}
                                  />
                                </div>
                                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                              </div>

                              <div>
                                <label className="block text-text-secondary mb-2">Subject *</label>
                                <div className="relative">
                                  <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary" />
                                  <select
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={`w-full pl-10 pr-4 py-3 bg-primary rounded-lg text-white focus:outline-none focus:ring-2 ${
                                      errors.subject ? 'ring-red-500' : 'ring-gold'
                                    }`}
                                  >
                                    <option value="" className="text-text-secondary">Select a subject</option>
                                    <option value="reservation">Reservation Inquiry</option>
                                    <option value="general">General Inquiry</option>
                                    <option value="feedback">Feedback</option>
                                    <option value="support">Technical Support</option>
                                    <option value="other">Other</option>
                                  </select>
                                </div>
                                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                              </div>
                            </div>

                            <div>
                              <label className="block text-text-secondary mb-2">Message *</label>
                              <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="How can we help you?"
                                rows={5}
                                className={`w-full px-4 py-3 bg-primary rounded-lg text-white placeholder-text-secondary focus:outline-none focus:ring-2 ${
                                  errors.message ? 'ring-red-500' : 'ring-gold'
                                } resize-none`}
                              />
                              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                            </div>

                            <motion.button
                              type="submit"
                              disabled={isSubmitting}
                              className="btn w-full flex items-center justify-center space-x-2"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              {isSubmitting ? (
                                <>
                                  <div className="spinner"></div>
                                  <span>Sending...</span>
                                </>
                              ) : (
                                <>
                                  <Send className="w-5 h-5" />
                                  <span>Send Message</span>
                                </>
                              )}
                            </motion.button>
                          </div>
                        </motion.form>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Contact Information */}
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="bg-gradient-to-br from-gold/20 to-gold/10 rounded-2xl p-8">
                      <h3 className="text-xl font-bold gradient-text mb-4">Contact Information</h3>
                      <p className="text-text-secondary mb-6">
                        Reach out to us through your preferred method. We're here to help!
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gold bg-opacity-20 rounded-xl flex items-center justify-center">
                            <Phone className="w-6 h-6 text-gold" />
                          </div>
                          <div>
                            <p className="text-white font-semibold">Phone</p>
                            <p className="text-text-secondary">+91 98765 43210</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gold bg-opacity-20 rounded-xl flex items-center justify-center">
                            <Mail className="w-6 h-6 text-gold" />
                          </div>
                          <div>
                            <p className="text-white font-semibold">Email</p>
                            <p className="text-text-secondary">reservations@himalayanhaven.com</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gold bg-opacity-20 rounded-xl flex items-center justify-center">
                            <Clock className="w-6 h-6 text-gold" />
                          </div>
                          <div>
                            <p className="text-white font-semibold">Office Hours</p>
                            <p className="text-text-secondary">9:00 AM - 6:00 PM (IST)</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="bg-bg-secondary rounded-2xl p-6">
                      <h4 className="text-lg font-semibold text-gold mb-4">Follow Us</h4>
                      <div className="flex space-x-4">
                        {socialLinks.map((social) => (
                          <motion.a
                            key={social.platform}
                            href={social.link}
                            className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-text hover:bg-gold hover:text-primary transition-all duration-300"
                            whileHover={{ scale: 1.1, y: -3 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <social.icon className="w-6 h-6" />
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>
        )}
      </AnimatePresence>

      {/* Visit Us */}
      <AnimatePresence mode='wait'>
        {activeTab === 'visit' && (
          <section className="section" key="visit">
            <div className="container">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <h2 className="section-title">Visit Us</h2>
                <p className="section-subtitle">
                  Find all the information you need to plan your visit to Himalayan Haven
                </p>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {/* Contact Methods */}
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={method.id}
                      className="bg-bg-secondary rounded-2xl p-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gold bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <method.icon className="w-6 h-6" style={{ color: method.color }} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold gradient-text mb-2">{method.name}</h3>
                          <p className="text-text-secondary text-sm mb-4">{method.description}</p>
                          
                          <div className="space-y-2 mb-4">
                            {method.details.map((detail, i) => (
                              <div key={i} className="flex items-center space-x-2">
                                <span className="w-2 h-2 bg-gold rounded-full"></span>
                                <span className="text-text-secondary">{detail.value}</span>
                              </div>
                            ))}
                          </div>
                          
                          <p className="text-text-secondary text-sm">
                            <Clock className="w-4 h-4 inline mr-1" />
                            {method.hours}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Map */}
                <motion.div
                  className="bg-bg-secondary rounded-2xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-xl font-semibold gradient-text mb-4">Our Location</h3>
                  <div className="relative h-96 rounded-xl overflow-hidden mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop"
                      alt="Himalayan Haven Location"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center animate-pulse">
                        <MapPin className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 text-text-secondary">
                    <p className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-gold" />
                      <span>Village Manali, Himachal Pradesh, India - 175131</span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <span className="w-5 h-5 bg-gold bg-opacity-20 rounded flex items-center justify-center">
                        <span className="text-gold font-bold text-xs">A</span>
                      </span>
                      <span>Nearest Airport: Bhuntar Airport (50 km)</span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <Train className="w-5 h-5 text-gold" />
                      <span>Nearest Railway: Joginder Nagar (160 km)</span>
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Directions */}
              <motion.div
                className="bg-gradient-to-r from-gold/20 to-gold/10 rounded-2xl p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <h3 className="text-2xl font-bold gradient-text mb-6 text-center">How to Reach Us</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gold bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🚗</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gold mb-2">By Road</h4>
                    <p className="text-text-secondary text-sm">
                      Well-connected road network from major cities in North India. 
                      Delhi to Manali: ~550 km, 12-14 hours drive
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gold bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">✈️</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gold mb-2">By Air</h4>
                    <p className="text-text-secondary text-sm">
                      Bhuntar Airport (Kullu-Manali Airport) is the nearest, 
                      approximately 50 km from our retreat
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}
      </AnimatePresence>

      {/* FAQs */}
      <AnimatePresence mode='wait'>
        {activeTab === 'faq' && (
          <section className="section" key="faq">
            <div className="container">
              <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="text-center mb-12">
                  <h2 className="section-title">Frequently Asked Questions</h2>
                  <p className="section-subtitle">
                    Find answers to common questions about Himalayan Haven
                  </p>
                </div>

                <div className="space-y-4">
                  {faqs.map((faq, index) => {
                    const [isExpanded, setIsExpanded] = useState(false);
                    
                    return (
                      <motion.div
                        key={index}
                        className="bg-bg-secondary rounded-xl overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <button
                          onClick={() => setIsExpanded(!isExpanded)}
                          className="w-full p-6 text-left flex justify-between items-center hover:bg-primary transition-all duration-300"
                        >
                          <span className="font-semibold text-white">{faq.question}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-gold" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gold" />
                          )}
                        </button>
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              className="p-6 pt-0 text-text-secondary"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <p>{faq.answer}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>

                <motion.div
                  className="text-center mt-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: faqs.length * 0.1 }}
                >
                  <p className="text-text-secondary mb-4">
                    Still have questions? Our team is ready to help!
                  </p>
                  <Link to="/contact" className="btn">
                    Contact Us
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </section>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <motion.div
            className="bg-gradient-to-r from-gold/20 via-primary to-gold/20 rounded-3xl p-12 text-center relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold gradient-text mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                Contact us today and let our team help you plan the perfect Himalayan adventure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/booking" className="btn">
                  Book Your Stay
                </Link>
                <Link to="/plan-your-journey" className="btn btn-secondary">
                  Plan Your Trip
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
