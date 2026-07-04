import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mountain, Star, Users, Calendar, Compass, Heart, Camera, Water, TreePine, Sun, Moon, Utensils, Spa, Music, Bike } from 'lucide-react';

const services = [
  {
    id: 'domes',
    title: 'Geodesic Domes',
    description: 'Experience the ultimate luxury camping in our transparent geodesic domes with 360° panoramic views of the Himalayan peaks.',
    features: [
      'Transparent ceiling for stargazing',
      'Private deck with mountain views',
      'Modern amenities and comfort',
      'Heated flooring for winter stays',
      'Complimentary breakfast',
    ],
    price: '₹12,000 - ₹18,000 per night',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
    icon: Mountain,
    color: '#d4af37',
    category: 'Accommodation',
  },
  {
    id: 'rooms',
    title: 'Private Rooms',
    description: 'Elegant and spacious private rooms with modern amenities and stunning mountain or garden views.',
    features: [
      'King-size or twin beds',
      'Private balcony or terrace',
      'En-suite bathroom with premium toiletries',
      'Flat-screen TV and Wi-Fi',
      '24/7 room service',
    ],
    price: '₹8,000 - ₹15,000 per night',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    icon: Star,
    color: '#f4e4bc',
    category: 'Accommodation',
  },
  {
    id: 'suites',
    title: 'Mountain Suites',
    description: 'Premium suites offering the ultimate in luxury and comfort with private butler service and exclusive amenities.',
    features: [
      'Separate living and bedroom areas',
      'Private jacuzzi with mountain views',
      'Personal butler service',
      'Complimentary minibar',
      'Exclusive access to wellness facilities',
    ],
    price: '₹20,000 - ₹35,000 per night',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=600&fit=crop',
    icon: Users,
    color: '#0f3460',
    category: 'Accommodation',
  },
  {
    id: 'trekking',
    title: 'Guided Trekking',
    description: 'Expert-led trekking expeditions to explore the hidden gems and scenic trails of the Himalayas.',
    features: [
      'Certified and experienced guides',
      'All necessary trekking equipment',
      'Packed meals and refreshments',
      'First aid and emergency support',
      'Customizable routes for all skill levels',
    ],
    price: '₹3,500 - ₹8,000 per person',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop',
    icon: Compass,
    color: '#16213e',
    category: 'Adventure',
  },
  {
    id: 'waterfall',
    title: 'Waterfall Tours',
    description: 'Discover hidden waterfalls and secret swimming spots in the heart of the Himalayas.',
    features: [
      'Exclusive access to private waterfalls',
      'Guided hikes through scenic trails',
      'Picnic lunch by the waterfall',
      'Photography opportunities',
      'Swimming in natural pools',
    ],
    price: '₹2,500 - ₹5,000 per person',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop',
    icon: Water,
    color: '#8b5cf6',
    category: 'Adventure',
  },
  {
    id: 'wellness',
    title: 'Wellness Retreats',
    description: 'Rejuvenate your mind, body, and soul with our comprehensive wellness programs.',
    features: [
      'Daily yoga and meditation sessions',
      'Ayurvedic treatments and massages',
      'Healthy gourmet meals',
      'Nature walks and breathing exercises',
      'Personalized wellness consultations',
    ],
    price: '₹8,000 - ₹15,000 per person',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
    icon: Spa,
    color: '#ec4899',
    category: 'Wellness',
  },
  {
    id: 'cuisine',
    title: 'Gourmet Dining',
    description: 'Savor authentic Himachali cuisine and international delicacies prepared by our expert chefs.',
    features: [
      'Farm-to-table fresh ingredients',
      'Traditional Himachali dishes',
      'International cuisine options',
      'Vegetarian and vegan options available',
      'Private dining experiences',
    ],
    price: '₹1,500 - ₹4,000 per person',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop',
    icon: Utensils,
    color: '#ef4444',
    category: 'Dining',
  },
  {
    id: 'cultural',
    title: 'Cultural Experiences',
    description: 'Immerse yourself in the rich culture and traditions of Himachal Pradesh.',
    features: [
      'Traditional dance and music performances',
      'Local craft workshops',
      'Temple visits and spiritual ceremonies',
      'Cooking classes with local chefs',
      'Village tours and cultural exchanges',
    ],
    price: '₹2,000 - ₹6,000 per person',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop',
    icon: Music,
    color: '#3b82f6',
    category: 'Experiences',
  },
  {
    id: 'photography',
    title: 'Photography Tours',
    description: 'Capture the stunning landscapes and cultural heritage of the Himalayas with professional guidance.',
    features: [
      'Professional photographer guide',
      'Access to exclusive photography locations',
      'Sunrise and sunset photography sessions',
      'Photo editing workshops',
      'Equipment rental available',
    ],
    price: '₹4,000 - ₹10,000 per person',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    icon: Camera,
    color: '#10b981',
    category: 'Experiences',
  },
];

const categories = ['All', 'Accommodation', 'Adventure', 'Wellness', 'Dining', 'Experiences'];

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551524164-6cf2ac531fb4?w=1920&h=600&fit=crop"
            alt="Our Services"
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
          <h1 className="text-5xl font-bold gradient-text mb-4">Our Services</h1>
          <p className="text-xl text-white/80">Discover the perfect experience for your Himalayan adventure</p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="section bg-primary">
        <div className="container">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gold text-primary'
                    : 'bg-bg-secondary text-text-secondary hover:bg-gold hover:text-primary'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Explore Our Services</h2>
            <p className="section-subtitle">
              From luxurious accommodations to thrilling adventures, we have something for everyone
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="card group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="card-img"
                  />
                  <div className="absolute inset-0 overlay"></div>
                  <div className="absolute top-4 left-4">
                    <span className="badge">{service.category}</span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-2xl font-bold gradient-text">{service.price.split(' ')[0]}</span>
                  </div>
                </div>
                <div className="card-body">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gold bg-opacity-20 rounded-lg flex items-center justify-center">
                      <service.icon className="w-5 h-5" style={{ color: service.color }} />
                    </div>
                    <h3 className="card-title">{service.title}</h3>
                  </div>
                  <p className="card-text">{service.description}</p>
                  <div className="mt-4">
                    <p className="text-sm text-text-secondary mb-3">Features:</p>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center space-x-2 text-sm text-text-secondary">
                          <span className="w-2 h-2 bg-gold rounded-full"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-sm text-gold">+{service.features.length - 3} more</li>
                      )}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center mt-6">
                    <Link to={`/booking?service=${service.id}`} className="btn">
                      Book Now
                    </Link>
                    <Link to={`/services/${service.id}`} className="text-gold hover:text-gold-light transition-all duration-300">
                      Learn More →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredServices.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-xl text-text-secondary">No services found in this category.</p>
              <button onClick={() => setSelectedCategory('All')} className="btn mt-4">
                View All Services
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Service Highlights */}
      <section className="section bg-primary">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Service Highlights</h2>
            <p className="section-subtitle">
              What sets our services apart from the rest
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-bg-secondary rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gold bg-opacity-20 rounded-xl flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold gradient-text mb-3">Premium Quality</h3>
              <p className="text-text-secondary">
                We offer only the highest quality services and accommodations, ensuring your comfort and satisfaction.
              </p>
            </motion.div>

            <motion.div
              className="bg-bg-secondary rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gold bg-opacity-20 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold gradient-text mb-3">Personalized Service</h3>
              <p className="text-text-secondary">
                Our dedicated team provides personalized attention to ensure your experience is tailored to your preferences.
              </p>
            </motion.div>

            <motion.div
              className="bg-bg-secondary rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gold bg-opacity-20 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold gradient-text mb-3">Authentic Experiences</h3>
              <p className="text-text-secondary">
                We offer authentic Himalayan experiences that connect you with the local culture and natural beauty.
              </p>
            </motion.div>
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
                Ready to Book Your Experience?
              </h2>
              <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                Choose from our wide range of services and create your perfect Himalayan getaway.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/booking" className="btn">
                  Book Now
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Customize Your Trip
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
