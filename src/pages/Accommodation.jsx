import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mountain, Star, Users, Calendar, ArrowRight, Heart, Wifi, Snowflake, Sun, Coffee, Tv, Bath, Home } from 'lucide-react';

const accommodationTypes = [
  {
    id: 'domes',
    name: 'Geodesic Domes',
    description: 'Experience the ultimate in luxury glamping with our transparent geodesic domes, offering 360° panoramic views of the Himalayan peaks.',
    price: '₹12,000 - ₹18,000 per night',
    capacity: '2-4 guests',
    size: '400 sq. ft.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    ],
    amenities: [
      { name: 'King-size bed', icon: Home },
      { name: 'Private deck', icon: Sun },
      { name: 'Heated flooring', icon: Snowflake },
      { name: 'Free Wi-Fi', icon: Wifi },
      { name: 'Complimentary breakfast', icon: Coffee },
      { name: 'Flat-screen TV', icon: Tv },
      { name: 'Private bathroom', icon: Bath },
      { name: 'Mountain view', icon: Mountain },
    ],
    features: [
      'Transparent ceiling for stargazing',
      'Modern amenities with rustic charm',
      'Private outdoor seating area',
      '24/7 room service',
      'Daily housekeeping',
      'Luxury toiletries',
    ],
    rating: 4.9,
    reviews: 287,
  },
  {
    id: 'private-rooms',
    name: 'Private Rooms',
    description: 'Elegant and spacious private rooms with modern amenities and stunning mountain or garden views.',
    price: '₹8,000 - ₹15,000 per night',
    capacity: '2-3 guests',
    size: '350 sq. ft.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit=crop',
    ],
    amenities: [
      { name: 'King or twin beds', icon: Home },
      { name: 'Private balcony', icon: Sun },
      { name: 'Air conditioning', icon: Snowflake },
      { name: 'Free Wi-Fi', icon: Wifi },
      { name: 'Mini fridge', icon: Coffee },
      { name: 'Flat-screen TV', icon: Tv },
      { name: 'En-suite bathroom', icon: Bath },
      { name: 'Mountain or garden view', icon: Mountain },
    ],
    features: [
      'Spacious and well-appointed rooms',
      'Modern decor with local touches',
      'Private balcony or terrace',
      '24/7 room service',
      'Daily housekeeping',
      'Premium toiletries',
    ],
    rating: 4.8,
    reviews: 342,
  },
  {
    id: 'suites',
    name: 'Mountain Suites',
    description: 'Premium suites offering the ultimate in luxury and comfort with private butler service and exclusive amenities.',
    price: '₹20,000 - ₹35,000 per night',
    capacity: '2-4 guests',
    size: '600-800 sq. ft.',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
    ],
    amenities: [
      { name: 'Separate living area', icon: Home },
      { name: 'Private jacuzzi', icon: Bath },
      { name: 'Private butler', icon: Users },
      { name: 'Free Wi-Fi', icon: Wifi },
      { name: 'Complimentary minibar', icon: Coffee },
      { name: 'Smart TV', icon: Tv },
      { name: 'Luxury bathroom', icon: Bath },
      { name: 'Panoramic mountain view', icon: Mountain },
    ],
    features: [
      'Separate living and bedroom areas',
      'Private jacuzzi with mountain views',
      'Personal butler service',
      'Complimentary minibar and snacks',
      'Exclusive access to wellness facilities',
      'Daily turndown service',
      'Premium bath amenities',
      'Private check-in/check-out',
    ],
    rating: 5.0,
    reviews: 192,
  },
];

const roomCategories = ['All', 'Geodesic Domes', 'Private Rooms', 'Mountain Suites'];

const Accommodation = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const filteredAccommodations = selectedCategory === 'All' 
    ? accommodationTypes 
    : accommodationTypes.filter(acc => acc.name === selectedCategory);

  const openGallery = (accommodation, index = 0) => {
    setSelectedAccommodation(accommodation);
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setSelectedAccommodation(null);
    document.body.style.overflow = 'auto';
  };

  const navigateGallery = (direction) => {
    if (!selectedAccommodation) return;
    
    let newIndex;
    if (direction === 'next') {
      newIndex = (selectedImageIndex + 1) % selectedAccommodation.gallery.length;
    } else {
      newIndex = (selectedImageIndex - 1 + selectedAccommodation.gallery.length) % selectedAccommodation.gallery.length;
    }
    setSelectedImageIndex(newIndex);
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=600&fit=crop"
            alt="Our Accommodations"
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
          <h1 className="text-5xl font-bold gradient-text mb-4">Our Accommodations</h1>
          <p className="text-xl text-white/80">Discover your perfect mountain retreat</p>
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
            {roomCategories.map((category) => (
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

      {/* Accommodation Grid */}
      <section className="section">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Choose Your Perfect Stay</h2>
            <p className="section-subtitle">
              From luxurious domes to premium suites, find the accommodation that suits your style
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {filteredAccommodations.map((accommodation, index) => (
              <motion.div
                key={accommodation.id}
                className="card group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={accommodation.image}
                    alt={accommodation.name}
                    className="card-img"
                  />
                  <div className="absolute inset-0 overlay"></div>
                  <div className="absolute top-4 left-4">
                    <span className="badge">⭐ {accommodation.rating} ({accommodation.reviews} reviews)</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="text-2xl font-bold gradient-text">{accommodation.price.split(' ')[0]}</span>
                  </div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <button
                      onClick={() => openGallery(accommodation)}
                      className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white hover:bg-white/30 transition-all duration-300"
                    >
                      <Camera className="w-4 h-4" />
                      <span>View Gallery</span>
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <h3 className="card-title">{accommodation.name}</h3>
                  <p className="card-text">{accommodation.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 my-6">
                    <div className="text-center">
                      <p className="text-sm text-text-secondary mb-1">Capacity</p>
                      <p className="font-semibold text-gold">{accommodation.capacity}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-text-secondary mb-1">Size</p>
                      <p className="font-semibold text-gold">{accommodation.size}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-text-secondary mb-1">Rating</p>
                      <p className="font-semibold text-gold">{accommodation.rating}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm text-text-secondary mb-3">Amenities:</p>
                    <div className="flex flex-wrap gap-2">
                      {accommodation.amenities.slice(0, 4).map((amenity, i) => (
                        <span key={i} className="flex items-center space-x-1 bg-primary px-3 py-1 rounded-full text-xs text-text-secondary">
                          <amenity.icon className="w-3 h-3" />
                          <span>{amenity.name}</span>
                        </span>
                      ))}
                      {accommodation.amenities.length > 4 && (
                        <span className="bg-primary px-3 py-1 rounded-full text-xs text-gold">+{accommodation.amenities.length - 4} more</span>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <Link to={`/booking?accommodation=${accommodation.id}`} className="btn">
                      Book Now
                    </Link>
                    <Link to={`/accommodation/${accommodation.id}`} className="text-gold hover:text-gold-light transition-all duration-300">
                      View Details →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredAccommodations.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-xl text-text-secondary">No accommodations found in this category.</p>
              <button onClick={() => setSelectedCategory('All')} className="btn mt-4">
                View All Accommodations
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section bg-primary">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Compare Our Accommodations</h2>
            <p className="section-subtitle">
              Find the perfect match for your needs and preferences
            </p>
          </motion.div>

          <motion.div
            className="overflow-x-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <table className="w-full min-w-[1000px] bg-bg-secondary rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-gold bg-opacity-20">
                  <th className="text-left p-4 text-gold font-semibold">Feature</th>
                  {accommodationTypes.map((acc) => (
                    <th key={acc.id} className="text-center p-4 text-gold font-semibold">
                      {acc.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-white/10">
                  <td className="p-4 text-text-secondary">Price Range</td>
                  {accommodationTypes.map((acc) => (
                    <td key={acc.id} className="text-center p-4 text-white">{acc.price}</td>
                  ))}
                </tr>
                <tr className="border-t border-white/10">
                  <td className="p-4 text-text-secondary">Capacity</td>
                  {accommodationTypes.map((acc) => (
                    <td key={acc.id} className="text-center p-4 text-white">{acc.capacity}</td>
                  ))}
                </tr>
                <tr className="border-t border-white/10">
                  <td className="p-4 text-text-secondary">Size</td>
                  {accommodationTypes.map((acc) => (
                    <td key={acc.id} className="text-center p-4 text-white">{acc.size}</td>
                  ))}
                </tr>
                <tr className="border-t border-white/10">
                  <td className="p-4 text-text-secondary">Rating</td>
                  {accommodationTypes.map((acc) => (
                    <td key={acc.id} className="text-center p-4 text-white">
                      <span className="flex items-center justify-center space-x-1">
                        <span>⭐ {acc.rating}</span>
                      </span>
                    </td>
                  ))}
                </tr>
                <tr className="border-t border-white/10">
                  <td className="p-4 text-text-secondary">Private Deck/Balcony</td>
                  {accommodationTypes.map((acc) => (
                    <td key={acc.id} className="text-center p-4">
                      {acc.amenities.some(a => a.name.includes('deck') || a.name.includes('balcony')) ? (
                        <span className="text-green-500">✓</span>
                      ) : (
                        <span className="text-red-500">✗</span>
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="border-t border-white/10">
                  <td className="p-4 text-text-secondary">Heated Flooring</td>
                  {accommodationTypes.map((acc) => (
                    <td key={acc.id} className="text-center p-4">
                      {acc.amenities.some(a => a.name.includes('Heated')) ? (
                        <span className="text-green-500">✓</span>
                      ) : (
                        <span className="text-red-500">✗</span>
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="border-t border-white/10">
                  <td className="p-4 text-text-secondary">Private Jacuzzi</td>
                  {accommodationTypes.map((acc) => (
                    <td key={acc.id} className="text-center p-4">
                      {acc.amenities.some(a => a.name.includes('jacuzzi')) ? (
                        <span className="text-green-500">✓</span>
                      ) : (
                        <span className="text-red-500">✗</span>
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="border-t border-white/10">
                  <td className="p-4 text-text-secondary">Personal Butler</td>
                  {accommodationTypes.map((acc) => (
                    <td key={acc.id} className="text-center p-4">
                      {acc.amenities.some(a => a.name.includes('butler')) ? (
                        <span className="text-green-500">✓</span>
                      ) : (
                        <span className="text-red-500">✗</span>
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="border-t border-white/10">
                  <td className="p-4 text-text-secondary">Best For</td>
                  {accommodationTypes.map((acc) => (
                    <td key={acc.id} className="text-center p-4 text-white">
                      {acc.id === 'domes' ? 'Adventure Seekers' : 
                       acc.id === 'private-rooms' ? 'Couples/Families' : 'Luxury Travelers'}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </motion.div>

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link to="/booking" className="btn">
              Book Your Stay
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery Modal */}
      <AnimatePresence>
        {selectedAccommodation && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-95 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeGallery}
          >
            <motion.div
              className="max-w-4xl w-full max-h-[90vh] relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={closeGallery}
                className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-2xl">×</span>
              </motion.button>

              {/* Navigation Buttons */}
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateGallery('prev');
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span>←</span>
              </motion.button>

              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateGallery('next');
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span>→</span>
              </motion.button>

              {/* Image */}
              <img
                src={selectedAccommodation.gallery[selectedImageIndex]}
                alt={`${selectedAccommodation.name} ${selectedImageIndex + 1}`}
                className="w-full h-full object-contain max-h-[80vh] rounded-xl"
              />

              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
                  {selectedImageIndex + 1} / {selectedAccommodation.gallery.length}
                </span>
              </div>

              {/* Accommodation Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <h3 className="text-xl font-bold gradient-text mb-2">{selectedAccommodation.name}</h3>
                <p className="text-white/80 text-sm">{selectedAccommodation.description}</p>
              </div>
            </motion.div>
          </motion.div>
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
                Find Your Perfect Retreat
              </h2>
              <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                Whether you prefer the transparency of our domes or the luxury of our suites, 
                we have the perfect accommodation for your Himalayan adventure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/booking" className="btn">
                  Book Now
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Get Personalized Recommendations
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Accommodation;
