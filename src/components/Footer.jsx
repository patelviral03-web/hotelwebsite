import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Mountain, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Heart,
  Star
} from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Accommodation', path: '/accommodation' },
  { name: 'Gallery', path: '/gallery' },
];

const servicesLinks = [
  { name: 'Geodesic Domes', path: '/accommodation#domes' },
  { name: 'Private Rooms', path: '/accommodation#rooms' },
  { name: 'Trekking Tours', path: '/services#trekking' },
  { name: 'Local Experiences', path: '/services#experiences' },
  { name: 'Wellness Retreats', path: '/services#wellness' },
];

const contactInfo = [
  { icon: Mail, text: 'reservations@himalayanhaven.com', link: 'mailto:reservations@himalayanhaven.com' },
  { icon: Phone, text: '+91 98765 43210', link: 'tel:+919876543210' },
  { icon: MapPin, text: 'Village Manali, Himachal Pradesh, India - 175131', link: '#' },
];

const socialLinks = [
  { icon: Facebook, link: '#', color: '#3b5998' },
  { icon: Instagram, link: '#', color: '#e4405f' },
  { icon: Twitter, link: '#', color: '#1da1f2' },
  { icon: Youtube, link: '#', color: '#cd201f' },
];

const Footer = () => {
  return (
    <footer className="bg-primary pt-16 pb-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 border border-gold rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 border border-gold-light rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Mountain className="w-12 h-12 text-gold" />
              <div>
                <h3 className="text-2xl font-bold gradient-text">Himalayan Haven</h3>
                <p className="text-text-secondary text-sm">Luxury Mountain Retreat</p>
              </div>
            </div>
            <p className="text-text-secondary mb-6">
              Experience the majesty of the Himalayas at our premium retreat, where luxury meets adventure 
              in the heart of Himachal Pradesh.
            </p>
            <div className="flex space-x-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold fill-gold" />
              ))}
            </div>
            <p className="text-text-secondary text-sm mt-2">Rated 5.0 by 1200+ guests</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-gold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={link.path}
                    className="text-text-secondary hover:text-gold transition-all duration-300 flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 bg-gold rounded-full"></span>
                    <span>{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-gold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {servicesLinks.map((link, index) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={link.path}
                    className="text-text-secondary hover:text-gold transition-all duration-300 flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 bg-gold-light rounded-full"></span>
                    <span>{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-gold mb-6">Contact Us</h4>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.text}
                  href={item.link}
                  className="flex items-center space-x-4 text-text-secondary hover:text-gold transition-all duration-300 group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-bg-secondary rounded-lg flex items-center justify-center group-hover:bg-gold group-hover:text-primary transition-all duration-300">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span>{item.text}</span>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="text-lg font-medium text-gold mb-4">Follow Us</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.link}
                    href={social.link}
                    className="w-10 h-10 bg-bg-secondary rounded-full flex items-center justify-center text-text-secondary hover:bg-gold hover:text-primary transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="bg-bg-secondary rounded-2xl p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1">
              <h4 className="text-xl font-semibold text-gold mb-2">Stay Updated</h4>
              <p className="text-text-secondary text-sm">
                Subscribe to our newsletter for exclusive offers and updates on Himalayan adventures.
              </p>
            </div>
            <div className="md:col-span-2">
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-primary border-2 border-transparent rounded-lg text-text placeholder-text-secondary focus:border-gold focus:outline-none transition-all duration-300"
                />
                <motion.button
                  type="submit"
                  className="btn px-6 py-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-700 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-secondary text-sm text-center md:text-left">
              © {new Date().getFullYear()} Himalayan Haven. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <p className="text-text-secondary text-sm">Made with <Heart className="w-4 h-4 text-red-500 inline" /> in Himachal</p>
              <div className="flex space-x-4 text-sm">
                <Link to="/privacy" className="text-text-secondary hover:text-gold transition-all duration-300">Privacy Policy</Link>
                <Link to="/terms" className="text-text-secondary hover:text-gold transition-all duration-300">Terms of Service</Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 w-12 h-12 bg-gold rounded-full flex items-center justify-center text-primary shadow-lg hover:bg-gold-light transition-all duration-300 z-50"
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </footer>
  );
};

export default Footer;
