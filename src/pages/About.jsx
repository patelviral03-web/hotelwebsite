import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mountain, Star, Users, Calendar, Award, Heart, Camera, MapPin, Phone, Mail } from 'lucide-react';

const aboutSections = [
  {
    title: 'Our Story',
    content: 'Founded in 2015, Himalayan Haven was born from a passion for sharing the breathtaking beauty of the Himalayas with the world. What started as a small family-run guesthouse has grown into a premium mountain retreat, offering luxurious accommodations and unforgettable experiences to travelers from around the globe.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    icon: Mountain,
    color: '#d4af37',
  },
  {
    title: 'Our Mission',
    content: 'Our mission is to provide an exceptional mountain retreat experience that combines luxury, adventure, and sustainability. We strive to create memories that last a lifetime while respecting and preserving the natural beauty of the Himalayas.',
    image: 'https://images.unsplash.com/photo-1551524164-6cf2ac531fb4?w=600&h=400&fit=crop',
    icon: Heart,
    color: '#f4e4bc',
  },
  {
    title: 'Our Values',
    content: 'We believe in sustainability, authenticity, and exceptional service. Every aspect of Himalayan Haven is designed to provide our guests with an authentic Himalayan experience while minimizing our environmental impact.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop',
    icon: Award,
    color: '#0f3460',
  },
];

const achievements = [
  { number: '1200+', label: 'Happy Guests', icon: Users, color: '#d4af37' },
  { number: '25+', label: 'Luxury Domes', icon: Mountain, color: '#f4e4bc' },
  { number: '10+', label: 'Years of Service', icon: Calendar, color: '#0f3460' },
  { number: '5.0', label: 'Average Rating', icon: Star, color: '#16213e' },
];

const teamMembers = [
  {
    name: 'Rajesh Kumar',
    position: 'Founder & CEO',
    description: 'A passionate mountaineer with over 20 years of experience in hospitality and tourism.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    social: { facebook: '#', twitter: '#', instagram: '#' },
  },
  {
    name: 'Priya Sharma',
    position: 'Operations Manager',
    description: 'Manages day-to-day operations with a focus on guest satisfaction and service excellence.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face',
    social: { facebook: '#', twitter: '#', instagram: '#' },
  },
  {
    name: 'Amit Patel',
    position: 'Head Chef',
    description: 'Creates culinary masterpieces using fresh local ingredients and traditional recipes.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
    social: { facebook: '#', twitter: '#', instagram: '#' },
  },
  {
    name: 'Sneha Verma',
    position: 'Wellness Coordinator',
    description: 'Yoga instructor and wellness expert who helps guests find balance and relaxation.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    social: { facebook: '#', twitter: '#', instagram: '#' },
  },
];

const About = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=600&fit=crop"
            alt="About Himalayan Haven"
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
          <h1 className="text-5xl font-bold gradient-text mb-4">About Us</h1>
          <p className="text-xl text-white/80">Discover the story behind Himalayan Haven</p>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="section">
        <div className="container">
          {aboutSections.map((section, index) => (
            <motion.div
              key={section.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-gold rounded-full opacity-20"></div>
                <img
                  src={section.image}
                  alt={section.title}
                  className="rounded-2xl w-full h-96 object-cover"
                />
                <div className="absolute bottom-4 right-4 w-16 h-16 bg-gold bg-opacity-20 rounded-xl flex items-center justify-center">
                  <section.icon className="w-8 h-8" style={{ color: section.color }} />
                </div>
              </motion.div>
              
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gold bg-opacity-20 rounded-xl flex items-center justify-center mb-6">
                  <section.icon className="w-8 h-8" style={{ color: section.color }} />
                </div>
                <h2 className="text-3xl font-bold gradient-text mb-4">{section.title}</h2>
                <p className="text-text-secondary leading-relaxed mb-6">{section.content}</p>
                <Link to="/plan-your-journey" className="btn btn-secondary">
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section bg-primary">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Achievements</h2>
            <p className="section-subtitle">
              Celebrating our journey and the trust of our valued guests
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                className="bg-bg-secondary rounded-2xl p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center" style={{ backgroundColor: achievement.color + '20' }}>
                  <achievement.icon className="w-8 h-8" style={{ color: achievement.color }} />
                </div>
                <p className="text-4xl font-bold gradient-text mb-2">{achievement.number}</p>
                <p className="text-text-secondary">{achievement.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              The dedicated professionals who make your Himalayan experience unforgettable
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-bg-secondary rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-2">
                    {Object.entries(member.social).map(([platform, link]) => (
                      <motion.a
                        key={platform}
                        href={link}
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gold hover:text-primary transition-all duration-300"
                        whileHover={{ scale: 1.2, y: -3 }}
                      >
                        {platform === 'facebook' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>}
                        {platform === 'twitter' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>}
                        {platform === 'instagram' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>}
                      </motion.a>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-gold text-sm font-medium mb-3">{member.position}</p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">{member.description}</p>
                  <Link to="/contact" className="btn btn-secondary text-sm">
                    Contact
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section bg-primary">
        <div className="container">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gold bg-opacity-20 rounded-xl flex items-center justify-center">
                <MapPin className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold gradient-text mb-2">Our Location</h3>
              <p className="text-text-secondary">
                Village Manali, Himachal Pradesh, India - 175131
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gold bg-opacity-20 rounded-xl flex items-center justify-center">
                <Phone className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold gradient-text mb-2">Contact Us</h3>
              <p className="text-text-secondary">
                +91 98765 43210<br />
                reservations@himalayanhaven.com
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gold bg-opacity-20 rounded-xl flex items-center justify-center">
                <Calendar className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold gradient-text mb-2">Opening Hours</h3>
              <p className="text-text-secondary">
                Open 24/7, 365 days a year<br />
                Check-in: 2:00 PM<br />
                Check-out: 12:00 PM
              </p>
            </div>
          </motion.div>
        </div>
      </section>

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
                Experience the Magic
              </h2>
              <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                Join us at Himalayan Haven and create memories that will last a lifetime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/booking" className="btn">
                  Book Your Stay
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
