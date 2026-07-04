import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  Users, 
  Clock, 
  Mail, 
  Phone, 
  MapPin, 
  CreditCard, 
  Check, 
  X, 
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Home,
  Tent,
  Star
} from 'lucide-react';
import AvailabilityCalendar from '../components/AvailabilityCalendar';

const accommodationOptions = [
  {
    id: 'dome',
    name: 'Geodesic Dome',
    description: 'Transparent dome with 360° mountain views',
    price: 12000,
    capacity: 4,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
    icon: Tent,
    color: '#d4af37',
  },
  {
    id: 'private',
    name: 'Private Room',
    description: 'Elegant room with mountain or garden view',
    price: 8000,
    capacity: 3,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    icon: Home,
    color: '#f4e4bc',
  },
  {
    id: 'suite',
    name: 'Mountain Suite',
    description: 'Premium suite with private jacuzzi and butler service',
    price: 20000,
    capacity: 4,
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&h=300&fit=crop',
    icon: Star,
    color: '#0f3460',
  },
];

const servicesOptions = [
  { id: 'trekking', name: 'Guided Trekking', price: 3500, description: 'Expert-led treks to hidden waterfalls' },
  { id: 'wellness', name: 'Wellness Retreat', price: 8000, description: 'Yoga, meditation, and spa treatments' },
  { id: 'photography', name: 'Photography Tour', price: 4000, description: 'Capture stunning Himalayan landscapes' },
  { id: 'cultural', name: 'Cultural Experience', price: 2000, description: 'Traditional dance, music, and crafts' },
];

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    accommodation: '',
    checkIn: null,
    checkOut: null,
    adults: 2,
    children: 0,
    services: [],
    fullName: '',
    email: '',
    phone: '',
    specialRequests: '',
    paymentMethod: 'credit-card',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [expandedAccommodation, setExpandedAccommodation] = useState(null);

  // Parse URL parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const accommodation = params.get('accommodation');
    const service = params.get('service');
    
    if (accommodation) {
      setFormData(prev => ({ ...prev, accommodation }));
    }
    if (service) {
      setFormData(prev => ({ ...prev, services: [service] }));
    }
  }, [location.search]);

  const handleDateSelect = (date, accommodationType) => {
    if (!formData.accommodation) {
      setFormData(prev => ({ ...prev, accommodation: accommodationType }));
    }
    setFormData(prev => ({ ...prev, checkIn: date }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (serviceId) => {
    setFormData(prev => {
      const services = prev.services.includes(serviceId)
        ? prev.services.filter(id => id !== serviceId)
        : [...prev.services, serviceId];
      return { ...prev, services };
    });
  };

  const handleIncrement = (field) => {
    setFormData(prev => ({ ...prev, [field]: prev[field] + 1 }));
  };

  const handleDecrement = (field) => {
    if (formData[field] > 0) {
      setFormData(prev => ({ ...prev, [field]: prev[field] - 1 }));
    }
  };

  const validateStep = () => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.accommodation) newErrors.accommodation = 'Please select accommodation';
      if (!formData.checkIn) newErrors.checkIn = 'Please select check-in date';
      if (!formData.checkOut) newErrors.checkOut = 'Please select check-out date';
      if (formData.checkIn && formData.checkOut && formData.checkOut <= formData.checkIn) {
        newErrors.checkOut = 'Check-out must be after check-in';
      }
    }
    
    if (step === 2) {
      if (!formData.fullName) newErrors.fullName = 'Full name is required';
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      }
      if (!formData.phone) newErrors.phone = 'Phone number is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setBookingSuccess(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setBookingSuccess(false);
      setStep(1);
      setFormData({
        accommodation: '',
        checkIn: null,
        checkOut: null,
        adults: 2,
        children: 0,
        services: [],
        fullName: '',
        email: '',
        phone: '',
        specialRequests: '',
        paymentMethod: 'credit-card',
      });
      setErrors({});
    }, 5000);
  };

  const selectedAccommodation = accommodationOptions.find(acc => acc.id === formData.accommodation);
  const selectedServices = servicesOptions.filter(service => formData.services.includes(service.id));
  
  // Calculate total
  const accommodationPrice = selectedAccommodation ? selectedAccommodation.price : 0;
  const servicesPrice = selectedServices.reduce((sum, service) => sum + service.price, 0);
  const nights = formData.checkIn && formData.checkOut 
    ? Math.ceil((formData.checkOut - formData.checkIn) / (1000 * 60 * 60 * 24))
    : 0;
  const totalGuests = formData.adults + formData.children;
  const totalPrice = (accommodationPrice * nights * Math.ceil(totalGuests / (selectedAccommodation?.capacity || 1))) + servicesPrice;

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&h=600&fit=crop"
            alt="Book Your Stay"
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
          <h1 className="text-5xl font-bold gradient-text mb-4">Book Your Stay</h1>
          <p className="text-xl text-white/80">Secure your Himalayan adventure today</p>
        </motion.div>
      </section>

      {/* Booking Steps */}
      <section className="section bg-primary">
        <div className="container">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Progress Bar */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-4">
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} className="flex flex-col items-center">
                    <motion.div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        step >= s 
                          ? 'bg-gold text-primary' 
                          : 'bg-bg-secondary text-text-secondary'
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {step > s ? <Check className="w-6 h-6" /> : s}
                    </motion.div>
                    <p className={`text-sm mt-2 ${
                      step >= s ? 'text-gold' : 'text-text-secondary'
                    }`}>
                      {s === 1 ? 'Accommodation' : s === 2 ? 'Details' : s === 3 ? 'Extras' : 'Confirmation'}
                    </p>
                  </div>
                ))}
              </div>
              <div className="h-1 bg-bg-secondary rounded-full relative">
                <motion.div
                  className="absolute top-0 left-0 h-1 bg-gold rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: `${(step - 1) * 33.33}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Booking Form */}
            <AnimatePresence mode='wait'>
              {bookingSuccess ? (
                <motion.div
                  key="success"
                  className="text-center py-12"
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
                    <Check className="w-10 h-10 text-gold" />
                  </motion.div>
                  <h2 className="text-4xl font-bold gradient-text mb-4">Booking Confirmed!</h2>
                  <p className="text-xl text-text-secondary mb-8">
                    Thank you for choosing Himalayan Haven. Your booking has been successfully confirmed.
                  </p>
                  <div className="bg-bg-secondary rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-semibold text-gold mb-4">Booking Summary</h3>
                    <div className="space-y-2 text-text-secondary">
                      {selectedAccommodation && (
                        <p>🏠 {selectedAccommodation.name} - {nights} nights</p>
                      )}
                      {formData.checkIn && (
                        <p>📅 Check-in: {formData.checkIn.toLocaleDateString()}</p>
                      )}
                      {formData.checkOut && (
                        <p>📅 Check-out: {formData.checkOut.toLocaleDateString()}</p>
                      )}
                      <p>👥 Guests: {formData.adults} adults, {formData.children} children</p>
                      {selectedServices.length > 0 && (
                        <p>✨ Services: {selectedServices.map(s => s.name).join(', ')}</p>
                      )}
                      <p className="text-xl text-gold font-semibold mt-4">
                        Total: ₹{totalPrice.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/" className="btn">
                      Back to Home
                    </Link>
                    <button onClick={() => window.print()} className="btn btn-secondary">
                      Print Confirmation
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key={step}
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Step 1: Accommodation */}
                  {step === 1 && (
                    <div>
                      <h2 className="text-2xl font-bold gradient-text mb-6">Select Your Accommodation</h2>
                      
                      {/* Accommodation Options */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {accommodationOptions.map((option) => (
                          <motion.div
                            key={option.id}
                            className={`relative bg-bg-secondary rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                              formData.accommodation === option.id ? 'ring-2 ring-gold' : 'hover:ring-2 hover:ring-gold/50'
                            }`}
                            onClick={() => setFormData(prev => ({ ...prev, accommodation: option.id }))}
                            whileHover={{ scale: 1.02 }}
                          >
                            <img
                              src={option.image}
                              alt={option.name}
                              className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                              <div className="flex items-center space-x-3 mb-2">
                                <option.icon className="w-6 h-6" style={{ color: option.color }} />
                                <h3 className="text-lg font-semibold text-white">{option.name}</h3>
                              </div>
                              <p className="text-text-secondary text-sm mb-3">{option.description}</p>
                              <div className="flex justify-between items-center">
                                <p className="text-gold font-semibold">₹{option.price.toLocaleString()}/night</p>
                                <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                  formData.accommodation === option.id 
                                    ? 'border-gold bg-gold' 
                                    : 'border-white/50'
                                }`}>
                                  {formData.accommodation === option.id && <Check className="w-4 h-4 text-primary" />}
                                </span>
                              </div>
                            </div>
                            
                            {/* Expandable Details */}
                            {expandedAccommodation === option.id && (
                              <motion.div
                                className="absolute inset-0 bg-black/80 backdrop-blur-sm z-10 flex items-center justify-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                              >
                                <div className="text-center p-6">
                                  <h4 className="text-xl font-semibold text-white mb-4">{option.name} Details</h4>
                                  <ul className="text-text-secondary space-y-2 mb-6">
                                    <li>✓ Capacity: {option.capacity} guests</li>
                                    <li>✓ Price: ₹{option.price.toLocaleString()}/night</li>
                                    <li>✓ Mountain view</li>
                                    <li>✓ Free Wi-Fi</li>
                                    <li>✓ Complimentary breakfast</li>
                                  </ul>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setExpandedAccommodation(null);
                                    }}
                                    className="btn btn-secondary"
                                  >
                                    Close
                                  </button>
                                </div>
                              </motion.div>
                            )}
                          </motion.div>
                        ))}
                      </div>

                      {/* Availability Calendar */}
                      <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gold mb-4">Select Your Dates</h3>
                        <AvailabilityCalendar onDateSelect={handleDateSelect} />
                      </div>

                      {/* Guest Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div>
                          <label className="block text-text-secondary mb-2">Adults</label>
                          <div className="flex items-center space-x-4 bg-bg-secondary rounded-lg p-3">
                            <button
                              type="button"
                              onClick={() => handleDecrement('adults')}
                              className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-text hover:bg-gold hover:text-primary transition-all duration-300"
                            >
                              <span>-</span>
                            </button>
                            <span className="text-xl font-semibold text-white">{formData.adults}</span>
                            <button
                              type="button"
                              onClick={() => handleIncrement('adults')}
                              className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-text hover:bg-gold hover:text-primary transition-all duration-300"
                            >
                              <span>+</span>
                            </button>
                          </div>
                          {errors.adults && <p className="text-red-500 text-sm mt-1">{errors.adults}</p>}
                        </div>
                        <div>
                          <label className="block text-text-secondary mb-2">Children (0-12 years)</label>
                          <div className="flex items-center space-x-4 bg-bg-secondary rounded-lg p-3">
                            <button
                              type="button"
                              onClick={() => handleDecrement('children')}
                              className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-text hover:bg-gold hover:text-primary transition-all duration-300"
                            >
                              <span>-</span>
                            </button>
                            <span className="text-xl font-semibold text-white">{formData.children}</span>
                            <button
                              type="button"
                              onClick={() => handleIncrement('children')}
                              className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-text hover:bg-gold hover:text-primary transition-all duration-300"
                            >
                              <span>+</span>
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <button type="button" onClick={() => navigate('/accommodation')} className="btn btn-secondary">
                          View All Options
                        </button>
                        <button type="button" onClick={handleNext} className="btn">
                          Continue
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Guest Details */}
                  {step === 2 && (
                    <div>
                      <h2 className="text-2xl font-bold gradient-text mb-6">Guest Information</h2>
                      
                      <div className="space-y-6">
                        <div>
                          <label className="block text-text-secondary mb-2">Full Name *</label>
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className={`w-full px-4 py-3 bg-bg-secondary rounded-lg text-white placeholder-text-secondary focus:outline-none focus:ring-2 ${
                              errors.fullName ? 'ring-red-500' : 'ring-gold'
                            }`}
                          />
                          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-text-secondary mb-2">Email *</label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Enter your email"
                              className={`w-full px-4 py-3 bg-bg-secondary rounded-lg text-white placeholder-text-secondary focus:outline-none focus:ring-2 ${
                                errors.email ? 'ring-red-500' : 'ring-gold'
                              }`}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                          </div>
                          <div>
                            <label className="block text-text-secondary mb-2">Phone *</label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="Enter your phone number"
                              className={`w-full px-4 py-3 bg-bg-secondary rounded-lg text-white placeholder-text-secondary focus:outline-none focus:ring-2 ${
                                errors.phone ? 'ring-red-500' : 'ring-gold'
                              }`}
                            />
                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                          </div>
                        </div>

                        <div>
                          <label className="block text-text-secondary mb-2">Special Requests</label>
                          <textarea
                            name="specialRequests"
                            value={formData.specialRequests}
                            onChange={handleChange}
                            placeholder="Any special requests or requirements?"
                            rows={4}
                            className="w-full px-4 py-3 bg-bg-secondary rounded-lg text-white placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                          />
                        </div>
                      </div>

                      <div className="flex justify-between mt-8">
                        <button type="button" onClick={handleBack} className="btn btn-secondary">
                          Back
                        </button>
                        <button type="button" onClick={handleNext} className="btn">
                          Continue
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Additional Services */}
                  {step === 3 && (
                    <div>
                      <h2 className="text-2xl font-bold gradient-text mb-6">Add Extra Services</h2>
                      
                      <p className="text-text-secondary mb-6">
                        Enhance your stay with our premium services and experiences
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {servicesOptions.map((service) => (
                          <motion.div
                            key={service.id}
                            className={`bg-bg-secondary rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                              formData.services.includes(service.id) ? 'ring-2 ring-gold' : 'hover:ring-2 hover:ring-gold/50'
                            }`}
                            onClick={() => handleServiceToggle(service.id)}
                            whileHover={{ scale: 1.02 }}
                          >
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                                <p className="text-text-secondary text-sm mt-1">{service.description}</p>
                              </div>
                              <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                                formData.services.includes(service.id) 
                                  ? 'border-gold bg-gold' 
                                  : 'border-white/50'
                              }`}>
                                {formData.services.includes(service.id) && <Check className="w-4 h-4 text-primary" />}
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <p className="text-gold font-semibold">₹{service.price.toLocaleString()}</p>
                              {formData.services.includes(service.id) && (
                                <span className="badge">Selected</span>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Booking Summary */}
                      <div className="bg-bg-secondary rounded-xl p-6 mb-8">
                        <h3 className="text-lg font-semibold text-gold mb-4">Booking Summary</h3>
                        <div className="space-y-3 text-text-secondary">
                          {selectedAccommodation && (
                            <div className="flex justify-between">
                              <span>{selectedAccommodation.name} ({nights} nights)</span>
                              <span>₹{(accommodationPrice * nights * Math.ceil(totalGuests / selectedAccommodation.capacity)).toLocaleString()}</span>
                            </div>
                          )}
                          {selectedServices.map((service) => (
                            <div key={service.id} className="flex justify-between">
                              <span>{service.name}</span>
                              <span>₹{service.price.toLocaleString()}</span>
                            </div>
                          ))}
                          <div className="border-t border-white/10 pt-3 mt-3">
                            <div className="flex justify-between text-lg font-semibold text-white">
                              <span>Total</span>
                              <span className="gradient-text">₹{totalPrice.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <button type="button" onClick={handleBack} className="btn btn-secondary">
                          Back
                        </button>
                        <button type="button" onClick={handleNext} className="btn">
                          Continue to Payment
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Confirmation */}
                  {step === 4 && (
                    <div>
                      <h2 className="text-2xl font-bold gradient-text mb-6">Confirm Your Booking</h2>
                      
                      <div className="bg-bg-secondary rounded-xl p-6 mb-8">
                        <h3 className="text-lg font-semibold text-gold mb-4">Booking Details</h3>
                        
                        <div className="space-y-4 text-text-secondary">
                          <div className="flex items-center space-x-3">
                            <Home className="w-5 h-5 text-gold" />
                            <span>{selectedAccommodation?.name || 'Not selected'}</span>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center space-x-3">
                              <Calendar className="w-5 h-5 text-gold" />
                              <span>Check-in: {formData.checkIn?.toLocaleDateString() || 'Not selected'}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <Calendar className="w-5 h-5 text-gold" />
                              <span>Check-out: {formData.checkOut?.toLocaleDateString() || 'Not selected'}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <Users className="w-5 h-5 text-gold" />
                            <span>{formData.adults} adults, {formData.children} children</span>
                          </div>
                          
                          {selectedServices.length > 0 && (
                            <div>
                              <h4 className="text-gold font-medium mb-2">Additional Services:</h4>
                              <ul className="space-y-1 pl-6">
                                {selectedServices.map((service) => (
                                  <li key={service.id} className="flex items-center space-x-2">
                                    <Check className="w-4 h-4 text-gold" />
                                    <span>{service.name} - ₹{service.price.toLocaleString()}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          <div className="border-t border-white/10 pt-4 mt-4">
                            <div className="flex justify-between text-xl font-semibold">
                              <span className="text-white">Total Amount:</span>
                              <span className="gradient-text">₹{totalPrice.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Guest Information */}
                      <div className="bg-bg-secondary rounded-xl p-6 mb-8">
                        <h3 className="text-lg font-semibold text-gold mb-4">Guest Information</h3>
                        <div className="space-y-3 text-text-secondary">
                          <div className="flex items-center space-x-3">
                            <Users className="w-5 h-5 text-gold" />
                            <span>{formData.fullName}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Mail className="w-5 h-5 text-gold" />
                            <span>{formData.email}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Phone className="w-5 h-5 text-gold" />
                            <span>{formData.phone}</span>
                          </div>
                          {formData.specialRequests && (
                            <div className="flex items-center space-x-3">
                              <Heart className="w-5 h-5 text-gold" />
                              <span>Special Requests: {formData.specialRequests}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Payment Method */}
                      <div className="bg-bg-secondary rounded-xl p-6 mb-8">
                        <h3 className="text-lg font-semibold text-gold mb-4">Payment Method</h3>
                        <div className="space-y-4">
                          <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name="paymentMethod"
                              value="credit-card"
                              checked={formData.paymentMethod === 'credit-card'}
                              onChange={handleChange}
                              className="w-5 h-5"
                            />
                            <div className="flex items-center space-x-3">
                              <CreditCard className="w-5 h-5 text-gold" />
                              <span className="text-white">Credit/Debit Card</span>
                            </div>
                          </label>
                          <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name="paymentMethod"
                              value="net-banking"
                              checked={formData.paymentMethod === 'net-banking'}
                              onChange={handleChange}
                              className="w-5 h-5"
                            />
                            <div className="flex items-center space-x-3">
                              <span className="w-5 h-5 bg-gold bg-opacity-20 rounded flex items-center justify-center">
                                <span className="text-gold font-bold text-xs">NB</span>
                              </span>
                              <span className="text-white">Net Banking</span>
                            </div>
                          </label>
                          <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name="paymentMethod"
                              value="upi"
                              checked={formData.paymentMethod === 'upi'}
                              onChange={handleChange}
                              className="w-5 h-5"
                            />
                            <div className="flex items-center space-x-3">
                              <span className="w-5 h-5 bg-gold bg-opacity-20 rounded flex items-center justify-center">
                                <span className="text-gold font-bold text-xs">UPI</span>
                              </span>
                              <span className="text-white">UPI Payment</span>
                            </div>
                          </label>
                          <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name="paymentMethod"
                              value="pay-on-arrival"
                              checked={formData.paymentMethod === 'pay-on-arrival'}
                              onChange={handleChange}
                              className="w-5 h-5"
                            />
                            <div className="flex items-center space-x-3">
                              <Calendar className="w-5 h-5 text-gold" />
                              <span className="text-white">Pay on Arrival</span>
                            </div>
                          </label>
                        </div>
                      </div>

                      {/* Terms and Conditions */}
                      <div className="bg-bg-secondary rounded-xl p-6 mb-8">
                        <label className="flex items-start space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            required
                            className="w-5 h-5 mt-1"
                          />
                          <div>
                            <h4 className="text-gold font-semibold mb-2">Terms and Conditions</h4>
                            <p className="text-text-secondary text-sm">
                              I agree to the terms and conditions, cancellation policy, and privacy policy of Himalayan Haven. 
                              I understand that a deposit may be required to confirm my booking.
                            </p>
                          </div>
                        </label>
                      </div>

                      <div className="flex justify-between">
                        <button type="button" onClick={handleBack} className="btn btn-secondary">
                          Back
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn flex items-center space-x-2"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="spinner"></div>
                              <span>Processing...</span>
                            </>
                          ) : (
                            <>
                              <Check className="w-5 h-5" />
                              <span>Confirm Booking</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section bg-bg-secondary">
        <div className="container">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold gradient-text mb-4">Need Help with Your Booking?</h2>
            <p className="text-text-secondary mb-8">
              Our team is available 24/7 to assist you with any questions or special requests.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-primary rounded-xl p-6">
                <div className="w-12 h-12 bg-gold bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-gold mb-2">Call Us</h3>
                <p className="text-white">+91 98765 43210</p>
              </div>
              <div className="bg-primary rounded-xl p-6">
                <div className="w-12 h-12 bg-gold bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-gold mb-2">Email Us</h3>
                <p className="text-white">reservations@himalayanhaven.com</p>
              </div>
              <div className="bg-primary rounded-xl p-6">
                <div className="w-12 h-12 bg-gold bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-gold mb-2">WhatsApp</h3>
                <p className="text-white">+91 98765 43210</p>
              </div>
            </div>
            <Link to="/contact" className="btn">
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Booking;
