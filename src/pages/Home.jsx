import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mountain, Star, Users, Calendar, ArrowRight, Sparkles, Heart, Camera } from 'lucide-react';
import Hero from '../components/Hero';
import AvailabilityCalendar from '../components/AvailabilityCalendar';
import Gallery from '../components/Gallery';

const features = [
  {
    icon: Mountain,
    title: 'Breathtaking Views',
    description: 'Panoramic views of the Himalayan peaks from every accommodation',
    color: '#d4af37',
  },
  {
    icon: Star,
    title: 'Luxury Experience',
    description: '5-star amenities and personalized service for an unforgettable stay',
    color: '#f4e4bc',
  },
  {
    icon: Users,
    title: 'Exclusive Privacy',
    description: 'Private accommodations with modern comforts in a serene setting',
    color: '#0f3460',
  },
  {
    icon: Calendar,
    title: 'Year-Round Access',
    description: 'Open throughout the year with seasonal activities and experiences',
    color: '#16213e',
  },
];

const experiences = [
  {
    title: 'Geodesic Dome Stay',
    description: 'Sleep under the stars in our transparent geodesic domes with 360° mountain views',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
    price: '₹12,000/night',
    rating: 4.9,
    reviews: 287,
  },
  {
    title: 'Private Mountain Suite',
    description: 'Luxurious suites with private balconies and premium amenities',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
    price: '₹18,000/night',
    rating: 5.0,
    reviews: 192,
  },
  {
    title: 'Guided Trekking',
    description: 'Expert-led treks to hidden waterfalls and scenic viewpoints',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop',
    price: '₹3,500/person',
    rating: 4.8,
    reviews: 415,
  },
  {
    title: 'Wellness Retreat',
    description: 'Yoga, meditation, and spa treatments in nature\'s lap',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop',
    price: '₹8,000/person',
    rating: 4.9,
    reviews: 324,
  },
];

const testimonials = [
  {
    quote: 'The most magical experience of my life. Waking up to the Himalayan sunrise from my dome was breathtaking.',
    author: 'Priya Sharma',
    location: 'Mumbai, India',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  },
  {
    quote: 'Himalayan Haven exceeded all our expectations. The service, the views, the food - everything was perfect.',
    author: 'Rahul Mehta',
    location: 'Delhi, India',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  },
  {
    quote: 'The guided trek to the hidden waterfall was the highlight of our trip. Our guide was knowledgeable and friendly.',
    author: 'Sarah Johnson',
    location: 'London, UK',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
  },
  {
    quote: 'We stayed in the private suite and it was worth every penny. The attention to detail was amazing.',
    author: 'Amit Patel',
    location: 'Ahmedabad, India',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
  },
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="section bg-primary">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">
              Discover what makes Himalayan Haven the ultimate mountain retreat
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-bg-secondary rounded-2xl p-8 text-center hover:bg-primary transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center" style={{ backgroundColor: feature.color + '20' }}>
                  <feature.icon className="w-8 h-8" style={{ color: feature.color }} />
                </div>
                <h3 className="text-xl font-semibold gradient-text mb-3">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Popular Experiences */}
      <section className="section">
        <div className="container">
          <motion.div
            className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="section-title text-left">Popular Experiences</h2>
              <p className="text-text-secondary text-left max-w-lg">
                Handpicked experiences that showcase the best of Himalayan hospitality and adventure
              </p>
            </div>
            <Link to="/services" className="btn btn-secondary">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                className="card group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="card-img"
                  />
                  <div className="absolute inset-0 overlay"></div>
                  <div className="absolute top-4 right-4">
                    <span className="badge">⭐ {experience.rating} ({experience.reviews} reviews)</span>
                  </div>
                </div>
                <div className="card-body">
                  <h3 className="card-title">{experience.title}</h3>
                  <p className="card-text">{experience.description}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-2xl font-bold gradient-text">{experience.price}</p>
                    <Link to="/booking" className="btn btn-dark">
                      Book Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Availability Calendar Section */}
      <section className="section bg-primary">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Check Availability</h2>
            <p className="section-subtitle">
              Real-time booking calendar for our geodesic domes and private rooms
            </p>
          </motion.div>

          <AvailabilityCalendar />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Himalayan Gallery</h2>
            <p className="section-subtitle">
              A visual journey through our retreat and the stunning landscapes
            </p>
          </motion.div>

          <Gallery />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-primary">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Guest Testimonials</h2>
            <p className="section-subtitle">
              Hear from our satisfied guests who experienced the magic of Himalayan Haven
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                className="bg-bg-secondary rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-gold fill-gold' : 'text-text-secondary'}`} />
                  ))}
                </div>
                <p className="text-text-secondary mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-sm text-text-secondary">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 border border-gold rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 border border-gold-light rounded-full translate-x-1/2 translate-y-1/2"></div>
            </div>

            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-block mb-6"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Sparkles className="w-12 h-12 text-gold" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Ready for Your Himalayan Adventure?
              </h2>
              <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                Book your stay at Himalayan Haven and experience the magic of the mountains 
                like never before.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/booking" className="btn">
                  Book Your Stay
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link to="/plan-your-journey" className="btn btn-secondary">
                  Plan Your Journey
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section bg-bg-secondary">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold gradient-text mb-4">Stay Updated</h2>
            <p className="text-text-secondary mb-8">
              Subscribe to our newsletter for exclusive offers, seasonal updates, and 
              insider tips on exploring Himachal Pradesh.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-primary border-2 border-transparent rounded-lg text-text placeholder-text-secondary focus:border-gold focus:outline-none transition-all duration-300"
              />
              <motion.button
                type="submit"
                className="btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
