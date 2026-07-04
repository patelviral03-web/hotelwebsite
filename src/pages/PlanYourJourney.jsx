import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Calendar, 
  Sun, 
  Snowflake, 
  Umbrella, 
  Wind, 
  Mountain, 
  Compass, 
  Map, 
  Clock, 
  Users, 
  Car, 
  Plane, 
  Train, 
  Bus,
  Heart,
  Check,
  X,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import InteractiveMap from '../components/InteractiveMap';

const seasons = [
  {
    id: 'spring',
    name: 'Spring',
    months: 'March - May',
    temperature: '10°C - 25°C',
    description: 'Spring brings blooming flowers, pleasant weather, and perfect conditions for trekking and outdoor activities.',
    icon: Sun,
    color: '#10b981',
    packingList: [
      { category: 'Clothing', items: ['Light jackets', 'Long-sleeve shirts', 'Comfortable pants', 'Hiking boots', 'Sun hat'] },
      { category: 'Accessories', items: ['Sunglasses', 'Sunscreen (SPF 50+)', 'Scarf', 'Gloves (for early mornings)'] },
      { category: 'Gear', items: ['Backpack', 'Trekking poles', 'Water bottle', 'Camera'] },
      { category: 'Essentials', items: ['Medications', 'First aid kit', 'Travel documents', 'Cash'] },
    ],
    activities: ['Trekking', 'Nature walks', 'Photography', 'Cultural tours', 'Yoga sessions'],
    tips: [
      'Layer your clothing as temperatures can vary throughout the day',
      'Carry a good pair of hiking boots for trekking',
      'Stay hydrated and carry a reusable water bottle',
      'Book accommodations in advance as spring is a popular season',
    ],
  },
  {
    id: 'summer',
    name: 'Summer',
    months: 'June - August',
    temperature: '15°C - 30°C',
    description: 'Summer offers warm days and cool nights, ideal for adventure activities and exploring the region.',
    icon: Sun,
    color: '#f59e0b',
    packingList: [
      { category: 'Clothing', items: ['Light cotton clothes', 'Shorts', 'T-shirts', 'Sun dress', 'Comfortable sandals'] },
      { category: 'Accessories', items: ['Sunglasses', 'Sun hat', 'Sunscreen (SPF 50+)', 'Swimwear'] },
      { category: 'Gear', items: ['Backpack', 'Water bottle', 'Portable fan', 'Camera'] },
      { category: 'Essentials', items: ['Medications', 'Insect repellent', 'Travel documents', 'Cash'] },
    ],
    activities: ['Trekking', 'River rafting', 'Paragliding', 'Mountain biking', 'Waterfall visits'],
    tips: [
      'Wear light, breathable fabrics to stay cool',
      'Protect yourself from the strong mountain sun',
      'Stay hydrated, especially during outdoor activities',
      'Evenings can be cool, so carry a light jacket',
    ],
  },
  {
    id: 'autumn',
    name: 'Autumn',
    months: 'September - November',
    temperature: '5°C - 20°C',
    description: 'Autumn brings crisp air, golden landscapes, and clear skies, perfect for photography and peaceful retreats.',
    icon: Wind,
    color: '#d97706',
    packingList: [
      { category: 'Clothing', items: ['Warm jackets', 'Sweaters', 'Long pants', 'Thermal wear', 'Hiking boots'] },
      { category: 'Accessories', items: ['Scarf', 'Gloves', 'Beanie', 'Sunglasses'] },
      { category: 'Gear', items: ['Backpack', 'Trekking poles', 'Water bottle', 'Camera'] },
      { category: 'Essentials', items: ['Medications', 'Lip balm', 'Travel documents', 'Cash'] },
    ],
    activities: ['Trekking', 'Photography', 'Nature walks', 'Cultural experiences', 'Yoga retreats'],
    tips: [
      'Layer your clothing as temperatures can drop significantly in the evenings',
      'Carry warm accessories like gloves and beanies',
      'Autumn is perfect for photography with its golden landscapes',
      'Book early as this is a popular season for travelers',
    ],
  },
  {
    id: 'winter',
    name: 'Winter',
    months: 'December - February',
    temperature: '-5°C - 10°C',
    description: 'Winter transforms the Himalayas into a snow-covered wonderland, perfect for snow activities and cozy retreats.',
    icon: Snowflake,
    color: '#06b6d4',
    packingList: [
      { category: 'Clothing', items: ['Heavy winter coat', 'Thermal wear', 'Woolen sweaters', 'Insulated boots', 'Snow pants'] },
      { category: 'Accessories', items: ['Woolen cap', 'Gloves', 'Scarf', 'Sunglasses', 'Ski goggles'] },
      { category: 'Gear', items: ['Backpack', 'Snow shoes', 'Hand warmers', 'Camera'] },
      { category: 'Essentials', items: ['Medications', 'Lip balm', 'Moisturizer', 'Travel documents'] },
    ],
    activities: ['Snow trekking', 'Skiing', 'Snowboarding', 'Cozy dome stays', 'Hot spring visits'],
    tips: [
      'Dress in layers to stay warm and comfortable',
      'Carry proper snow gear and insulated footwear',
      'Check road conditions as some routes may be closed',
      'Book accommodations with heating facilities',
      'Stay hydrated even in cold weather',
    ],
  },
  {
    id: 'monsoon',
    name: 'Monsoon',
    months: 'July - September',
    temperature: '12°C - 22°C',
    description: 'Monsoon brings lush green landscapes, waterfalls at their peak, and a serene, misty atmosphere.',
    icon: Umbrella,
    color: '#8b5cf6',
    packingList: [
      { category: 'Clothing', items: ['Waterproof jacket', 'Quick-dry clothes', 'Long pants', 'Waterproof shoes', 'Umbrella'] },
      { category: 'Accessories', items: ['Rain cover for backpack', 'Waterproof phone case', 'Extra socks', 'Rain hat'] },
      { category: 'Gear', items: ['Backpack', 'Trekking poles', 'Waterproof bag covers', 'Camera'] },
      { category: 'Essentials', items: ['Medications', 'First aid kit', 'Travel documents', 'Cash'] },
    ],
    activities: ['Waterfall visits', 'Nature walks', 'Photography', 'Indoor wellness activities', 'Cultural experiences'],
    tips: [
      'Carry waterproof gear to stay dry',
      'Be cautious of slippery trails during treks',
      'Check weather forecasts before planning outdoor activities',
      'Monsoon is perfect for experiencing lush green landscapes',
      'Carry extra plastic bags to protect your belongings',
    ],
  },
];

const travelOptions = [
  {
    id: 'air',
    name: 'By Air',
    description: 'The nearest airport is Bhuntar Airport (Kullu-Manali Airport), approximately 50 km from our retreat.',
    icon: Plane,
    color: '#3b82f6',
    details: [
      'Bhuntar Airport (Kullu-Manali Airport) is well-connected to major Indian cities',
      'From the airport, you can take a taxi or pre-arranged transfer to our retreat',
      'Flight duration from Delhi is approximately 1 hour 15 minutes',
      'We can arrange airport pickup for our guests',
    ],
    time: '1h 15m flight + 2h drive',
    cost: '₹3,000 - ₹8,000 (one way)',
  },
  {
    id: 'road',
    name: 'By Road',
    description: 'Well-connected road network from major cities in North India.',
    icon: Car,
    color: '#ef4444',
    details: [
      'Delhi to Manali: Approximately 550 km, 12-14 hours drive',
      'Chandigarh to Manali: Approximately 310 km, 7-8 hours drive',
      'Shimla to Manali: Approximately 250 km, 6-7 hours drive',
      'We recommend breaking the journey with stops at scenic locations',
      'Private taxis and buses are available from major cities',
    ],
    time: '12-14h from Delhi',
    cost: '₹2,000 - ₹10,000 (depending on vehicle)',
  },
  {
    id: 'train',
    name: 'By Train',
    description: 'The nearest railway stations are Joginder Nagar and Pathankot, with connections to major Indian cities.',
    icon: Train,
    color: '#10b981',
    details: [
      'Joginder Nagar Railway Station: Approximately 160 km from our retreat',
      'Pathankot Railway Station: Approximately 250 km from our retreat',
      'From the railway station, you can take a taxi or bus to Manali',
      'Overnight trains are available from Delhi and other major cities',
      'We can arrange railway station pickup for our guests',
    ],
    time: '8-10h train + 4-6h drive',
    cost: '₹1,000 - ₹4,000 (one way)',
  },
  {
    id: 'bus',
    name: 'By Bus',
    description: 'Regular bus services connect Manali to major cities in North India.',
    icon: Bus,
    color: '#8b5cf6',
    details: [
      'Delhi to Manali: Overnight buses available, journey time 12-14 hours',
      'Chandigarh to Manali: Regular buses, journey time 7-8 hours',
      'Shimla to Manali: Frequent buses, journey time 6-7 hours',
      'Both government and private buses are available',
      'We recommend booking in advance, especially during peak seasons',
    ],
    time: '12-14h from Delhi',
    cost: '₹800 - ₹2,500 (one way)',
  },
];

const faqs = [
  {
    question: 'What is the best time to visit Himalayan Haven?',
    answer: 'The best time to visit is from March to June (spring and summer) and September to November (autumn). These months offer pleasant weather, clear skies, and perfect conditions for outdoor activities. Winter (December-February) is ideal for snow lovers, while monsoon (July-August) offers lush green landscapes.',
  },
  {
    question: 'Do I need to book in advance?',
    answer: 'Yes, we recommend booking in advance, especially during peak seasons (spring, summer, and autumn). Our geodesic domes and premium suites are in high demand. You can check real-time availability on our website and make reservations online.',
  },
  {
    question: 'What should I pack for my trip?',
    answer: 'Packing depends on the season of your visit. Check our seasonal packing lists above for detailed recommendations. Generally, we recommend layering clothing, comfortable hiking shoes, sun protection, and essential medications. Don\'t forget your camera to capture the stunning landscapes!',
  },
  {
    question: 'Are there any age restrictions for activities?',
    answer: 'Most of our activities are suitable for all ages, but some adventure activities like trekking and river rafting may have age and health restrictions. We offer customized experiences based on your preferences and physical abilities. Please inform us in advance about any specific requirements.',
  },
  {
    question: 'Is it safe to travel to the Himalayas?',
    answer: 'Yes, the Himalayan region is generally safe for travelers. We take all necessary precautions to ensure your safety and comfort. Our guides are experienced and certified, and we follow strict safety protocols for all activities. We also provide travel insurance options for added peace of mind.',
  },
  {
    question: 'What kind of food is served at the retreat?',
    answer: 'We serve a variety of cuisines including authentic Himachali dishes, North Indian cuisine, and international options. Our meals are prepared using fresh, local ingredients. We also offer vegetarian, vegan, and special dietary options upon request. Don\'t miss our traditional Himachali dinner experience!',
  },
];

const PlanYourJourney = () => {
  const [selectedSeason, setSelectedSeason] = useState('spring');
  const [selectedTravelOption, setSelectedTravelOption] = useState('air');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('packing');

  const selectedSeasonData = seasons.find(s => s.id === selectedSeason);
  const selectedTravelData = travelOptions.find(t => t.id === selectedTravelOption);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=600&fit=crop"
            alt="Plan Your Journey"
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
          <h1 className="text-5xl font-bold gradient-text mb-4">Plan Your Journey</h1>
          <p className="text-xl text-white/80">Everything you need to know for your Himalayan adventure</p>
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
            {['packing', 'travel', 'map', 'tips'].map((tab) => (
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
                {tab === 'packing' && <Calendar className="w-5 h-5" />}
                {tab === 'travel' && <Car className="w-5 h-5" />}
                {tab === 'map' && <Map className="w-5 h-5" />}
                {tab === 'tips' && <Heart className="w-5 h-5" />}
                <span className="capitalize">{tab === 'packing' ? 'Packing Lists' : tab === 'travel' ? 'Travel Options' : tab === 'map' ? 'Interactive Map' : 'Travel Tips'}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Seasonal Packing Lists */}
      <AnimatePresence mode='wait'>
        {activeTab === 'packing' && (
          <section className="section" key="packing">
            <div className="container">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <h2 className="section-title">Seasonal Packing Lists</h2>
                <p className="section-subtitle">
                  Pack smart for your Himalayan adventure with our season-specific recommendations
                </p>
              </motion.div>

              {/* Season Selector */}
              <motion.div
                className="flex flex-wrap justify-center gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {seasons.map((season) => (
                  <motion.button
                    key={season.id}
                    onClick={() => setSelectedSeason(season.id)}
                    className={`flex items-center space-x-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                      selectedSeason === season.id
                        ? 'bg-gold text-primary ring-2 ring-gold'
                        : 'bg-bg-secondary text-text-secondary hover:bg-primary'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <season.icon className="w-6 h-6" style={{ color: selectedSeason === season.id ? season.color : 'inherit' }} />
                    <div className="text-left">
                      <p className="font-semibold">{season.name}</p>
                      <p className="text-sm">{season.months}</p>
                    </div>
                  </motion.button>
                ))}
              </motion.div>

              {/* Selected Season Details */}
              <AnimatePresence mode='wait'>
                {selectedSeasonData && (
                  <motion.div
                    key={selectedSeasonData.id}
                    className="bg-bg-secondary rounded-2xl p-8"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Season Header */}
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-8">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-16 h-16 bg-gold bg-opacity-20 rounded-xl flex items-center justify-center">
                            <selectedSeasonData.icon className="w-8 h-8" style={{ color: selectedSeasonData.color }} />
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold gradient-text">{selectedSeasonData.name}</h3>
                            <p className="text-text-secondary">{selectedSeasonData.months} | {selectedSeasonData.temperature}</p>
                          </div>
                        </div>
                        <p className="text-text-secondary leading-relaxed">{selectedSeasonData.description}</p>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <div className="bg-primary rounded-xl p-6">
                          <h4 className="text-lg font-semibold text-gold mb-4">Recommended Activities</h4>
                          <ul className="space-y-2">
                            {selectedSeasonData.activities.map((activity, index) => (
                              <li key={index} className="flex items-center space-x-2 text-text-secondary">
                                <Check className="w-4 h-4 text-gold" />
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Travel Tips */}
                    <motion.div
                      className="bg-primary rounded-xl p-6 mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h4 className="text-lg font-semibold text-gold mb-4 flex items-center space-x-2">
                        <Heart className="w-5 h-5" />
                        <span>Seasonal Tips</span>
                      </h4>
                      <ul className="space-y-3">
                        {selectedSeasonData.tips.map((tip, index) => (
                          <li key={index} className="flex items-start space-x-3 text-text-secondary">
                            <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Packing List */}
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {selectedSeasonData.packingList.map((category, index) => (
                        <div key={category.category} className="bg-primary rounded-xl p-6">
                          <h4 className="text-lg font-semibold text-gold mb-4 pb-2 border-b border-white/10">
                            {category.category}
                          </h4>
                          <ul className="space-y-2">
                            {category.items.map((item, i) => (
                              <li key={i} className="flex items-center space-x-2 text-text-secondary">
                                <span className="w-2 h-2 bg-gold rounded-full"></span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>
        )}
      </AnimatePresence>

      {/* Travel Options */}
      <AnimatePresence mode='wait'>
        {activeTab === 'travel' && (
          <section className="section" key="travel">
            <div className="container">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <h2 className="section-title">Travel Options</h2>
                <p className="section-subtitle">
                  Choose the best way to reach Himalayan Haven from your location
                </p>
              </motion.div>

              {/* Travel Option Selector */}
              <motion.div
                className="flex flex-wrap justify-center gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {travelOptions.map((option) => (
                  <motion.button
                    key={option.id}
                    onClick={() => setSelectedTravelOption(option.id)}
                    className={`flex items-center space-x-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                      selectedTravelOption === option.id
                        ? 'bg-gold text-primary ring-2 ring-gold'
                        : 'bg-bg-secondary text-text-secondary hover:bg-primary'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <option.icon className="w-6 h-6" style={{ color: selectedTravelOption === option.id ? option.color : 'inherit' }} />
                    <div className="text-left">
                      <p className="font-semibold">{option.name}</p>
                      <p className="text-sm">{option.time}</p>
                    </div>
                  </motion.button>
                ))}
              </motion.div>

              {/* Selected Travel Option Details */}
              <AnimatePresence mode='wait'>
                {selectedTravelData && (
                  <motion.div
                    key={selectedTravelData.id}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Main Info */}
                    <motion.div
                      className="lg:col-span-2 bg-bg-secondary rounded-2xl p-8"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-gold bg-opacity-20 rounded-xl flex items-center justify-center">
                          <selectedTravelData.icon className="w-8 h-8" style={{ color: selectedTravelData.color }} />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold gradient-text">{selectedTravelData.name}</h3>
                          <p className="text-text-secondary">{selectedTravelData.description}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-primary rounded-xl p-6">
                          <h4 className="text-lg font-semibold text-gold mb-4">Travel Details</h4>
                          <ul className="space-y-3">
                            {selectedTravelData.details.map((detail, index) => (
                              <li key={index} className="flex items-start space-x-3 text-text-secondary">
                                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-primary rounded-xl p-6">
                          <h4 className="text-lg font-semibold text-gold mb-4">Quick Info</h4>
                          <div className="space-y-4">
                            <div className="flex justify-between">
                              <span className="text-text-secondary">Estimated Time:</span>
                              <span className="text-white">{selectedTravelData.time}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-text-secondary">Estimated Cost:</span>
                              <span className="text-white">{selectedTravelData.cost}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-text-secondary">Best For:</span>
                              <span className="text-white">
                                {selectedTravelData.id === 'air' ? 'Quick travel' : 
                                 selectedTravelData.id === 'road' ? 'Flexibility' : 
                                 selectedTravelData.id === 'train' ? 'Budget travel' : 'Economical'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <motion.div
                        className="bg-primary rounded-xl p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h4 className="text-lg font-semibold text-gold mb-4">Tips for {selectedTravelData.name}</h4>
                        <ul className="space-y-3">
                          {selectedTravelData.id === 'air' && [
                            'Book flights in advance for better prices',
                            'Check baggage allowances as mountain flights may have restrictions',
                            'Arrive at the airport early for security checks',
                            'Consider booking a window seat for stunning aerial views',
                          ].map((tip, index) => (
                            <li key={index} className="flex items-start space-x-3 text-text-secondary">
                              <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                              <span>{tip}</span>
                            </li>
                          ))}
                          {selectedTravelData.id === 'road' && [
                            'Start early to avoid traffic and enjoy the scenic route',
                            'Take breaks at viewpoints and local eateries',
                            'Carry motion sickness medication if needed',
                            'Check vehicle condition before the journey',
                            'Keep emergency contacts handy',
                          ].map((tip, index) => (
                            <li key={index} className="flex items-start space-x-3 text-text-secondary">
                              <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                              <span>{tip}</span>
                            </li>
                          ))}
                          {selectedTravelData.id === 'train' && [
                            'Book lower berths for more comfortable overnight journeys',
                            'Carry snacks and water for the train journey',
                            'Secure your belongings with locks',
                            'Arrange for pickup from the railway station in advance',
                            'Check train schedules as they may change',
                          ].map((tip, index) => (
                            <li key={index} className="flex items-start space-x-3 text-text-secondary">
                              <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                              <span>{tip}</span>
                            </li>
                          ))}
                          {selectedTravelData.id === 'bus' && [
                            'Book seats in advance, especially for overnight buses',
                            'Carry a neck pillow and blanket for comfort',
                            'Keep valuables close to you during the journey',
                            'Check bus schedules as they may vary by season',
                            'Arrive at the bus stand early for boarding',
                          ].map((tip, index) => (
                            <li key={index} className="flex items-start space-x-3 text-text-secondary">
                              <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </motion.div>

                    {/* Booking Info */}
                    <motion.div
                      className="bg-gradient-to-br from-gold/20 to-gold/10 rounded-2xl p-8"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <h4 className="text-xl font-semibold gradient-text mb-6">Need Help?</h4>
                      <p className="text-text-secondary mb-6">
                        Our team can help you plan your journey and arrange transportation.
                      </p>
                      <Link to="/contact" className="btn w-full mb-4">
                        Contact Us
                      </Link>
                      <Link to="/booking" className="btn btn-secondary w-full">
                        Book Now
                      </Link>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>
        )}
      </AnimatePresence>

      {/* Interactive Map */}
      <AnimatePresence mode='wait'>
        {activeTab === 'map' && (
          <section className="section" key="map">
            <div className="container">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <h2 className="section-title">Explore the Region</h2>
                <p className="section-subtitle">
                  Interactive map of nearby attractions, hidden waterfalls, and scenic spots
                </p>
              </motion.div>
              <InteractiveMap />
            </div>
          </section>
        )}
      </AnimatePresence>

      {/* Travel Tips */}
      <AnimatePresence mode='wait'>
        {activeTab === 'tips' && (
          <section className="section" key="tips">
            <div className="container">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <h2 className="section-title">Travel Tips & FAQs</h2>
                <p className="section-subtitle">
                  Essential information to make your Himalayan adventure smooth and memorable
                </p>
              </motion.div>

              {/* General Tips */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="bg-bg-secondary rounded-2xl p-8">
                  <div className="w-12 h-12 bg-gold bg-opacity-20 rounded-xl flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold gradient-text mb-3">Best Time to Visit</h3>
                  <p className="text-text-secondary mb-4">
                    March to June and September to November offer the best weather for outdoor activities.
                  </p>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-gold" />
                      <span>Spring: Blooming flowers, pleasant weather</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-gold" />
                      <span>Summer: Warm days, cool nights</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-gold" />
                      <span>Autumn: Clear skies, golden landscapes</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-bg-secondary rounded-2xl p-8">
                  <div className="w-12 h-12 bg-gold bg-opacity-20 rounded-xl flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold gradient-text mb-3">Health & Safety</h3>
                  <p className="text-text-secondary mb-4">
                    Your well-being is our top priority. Follow these guidelines for a safe journey.
                  </p>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-gold" />
                      <span>Stay hydrated, especially at high altitudes</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-gold" />
                      <span>Carry necessary medications</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-gold" />
                      <span>Follow guide instructions during activities</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-bg-secondary rounded-2xl p-8">
                  <div className="w-12 h-12 bg-gold bg-opacity-20 rounded-xl flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold gradient-text mb-3">Cultural Etiquette</h3>
                  <p className="text-text-secondary mb-4">
                    Respect local customs and traditions to enhance your experience.
                  </p>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-gold" />
                      <span>Dress modestly when visiting temples</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-gold" />
                      <span>Ask before taking photographs of locals</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-gold" />
                      <span>Remove shoes before entering homes and temples</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* FAQ Section */}
              <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <h3 className="text-2xl font-bold gradient-text mb-8 text-center">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      className="bg-bg-secondary rounded-xl overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-6 text-left flex justify-between items-center hover:bg-primary transition-all duration-300"
                      >
                        <span className="font-semibold text-white">{faq.question}</span>
                        {expandedFaq === index ? (
                          <ChevronUp className="w-5 h-5 text-gold" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gold" />
                        )}
                      </button>
                      <AnimatePresence>
                        {expandedFaq === index && (
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
                  ))}
                </div>
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
                Ready for Your Adventure?
              </h2>
              <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                Plan your journey with confidence. Our team is here to help you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/booking" className="btn">
                  Book Your Stay
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Get Travel Assistance
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PlanYourJourney;
