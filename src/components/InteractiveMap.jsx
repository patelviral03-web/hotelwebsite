import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mountain, Compass, Ruler, Water, TreePine, Sun, Moon, Navigation, Info } from 'lucide-react';

// Mock data for locations and hidden gems
const locations = [
  {
    id: 1,
    name: 'Himalayan Haven Retreat',
    type: 'retreat',
    coordinates: { lat: 32.2432, lng: 77.1891 },
    description: 'Our main luxury retreat with geodesic domes and private rooms',
    distance: '0 km',
    difficulty: 'Easy',
    icon: Mountain,
    color: '#d4af37',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=400&h=300&fit=crop',
    ],
  },
  {
    id: 2,
    name: 'Hidden Waterfall',
    type: 'waterfall',
    coordinates: { lat: 32.2512, lng: 77.1756 },
    description: 'A secret waterfall hidden in the forest, perfect for a refreshing dip',
    distance: '2.5 km',
    difficulty: 'Moderate',
    icon: Water,
    color: '#0f3460',
    images: [
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=400&h=300&fit=crop',
    ],
  },
  {
    id: 3,
    name: 'Sunrise Point',
    type: 'viewpoint',
    coordinates: { lat: 32.2389, lng: 77.1923 },
    description: 'The best spot to catch the sunrise over the Himalayan peaks',
    distance: '1.8 km',
    difficulty: 'Easy',
    icon: Sun,
    color: '#f4e4bc',
    images: [
      'https://images.unsplash.com/photo-1547099276-74b480d48d3a?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    ],
  },
  {
    id: 4,
    name: 'Ancient Temple',
    type: 'cultural',
    coordinates: { lat: 32.2456, lng: 77.1812 },
    description: 'A 500-year-old temple with stunning architecture and spiritual significance',
    distance: '3.2 km',
    difficulty: 'Moderate',
    icon: TreePine,
    color: '#16213e',
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit=crop',
    ],
  },
  {
    id: 5,
    name: 'Moonlight Meadow',
    type: 'nature',
    coordinates: { lat: 32.2545, lng: 77.1878 },
    description: 'A serene meadow perfect for stargazing and night photography',
    distance: '4.1 km',
    difficulty: 'Challenging',
    icon: Moon,
    color: '#8b5cf6',
    images: [
      'https://images.unsplash.com/photo-1506318139828-209972930b61?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
    ],
  },
  {
    id: 6,
    name: 'Trekking Base Camp',
    type: 'adventure',
    coordinates: { lat: 32.2345, lng: 77.1989 },
    description: 'Starting point for multi-day trekking expeditions',
    distance: '5.3 km',
    difficulty: 'Challenging',
    icon: Compass,
    color: '#ef4444',
    images: [
      'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1551524164-6cf2ac531fb4?w=400&h=300&fit=crop',
    ],
  },
];

const mapStyles = [
  { id: 'standard', name: 'Standard', icon: MapPin },
  { id: 'satellite', name: 'Satellite', icon: Navigation },
  { id: 'terrain', name: 'Terrain', icon: Mountain },
];

const filters = [
  { id: 'all', name: 'All', icon: Info },
  { id: 'waterfall', name: 'Waterfalls', icon: Water },
  { id: 'viewpoint', name: 'Viewpoints', icon: Sun },
  { id: 'cultural', name: 'Cultural', icon: TreePine },
  { id: 'nature', name: 'Nature', icon: Mountain },
  { id: 'adventure', name: 'Adventure', icon: Compass },
];

const InteractiveMap = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedMapStyle, setSelectedMapStyle] = useState('standard');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [zoomLevel, setZoomLevel] = useState(12);
  const [showDirections, setShowDirections] = useState(false);

  const filteredLocations = selectedFilter === 'all' 
    ? locations 
    : locations.filter(loc => loc.type === selectedFilter);

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  const handleCloseModal = () => {
    setSelectedLocation(null);
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 1, 20));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 1, 8));
  };

  // Simulate map center based on locations
  const centerCoordinates = {
    lat: locations.reduce((sum, loc) => sum + loc.coordinates.lat, 0) / locations.length,
    lng: locations.reduce((sum, loc) => sum + loc.coordinates.lng, 0) / locations.length,
  };

  return (
    <section className="section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Explore Hidden Gems</h2>
          <p className="section-subtitle">
            Interactive map of nearby attractions, secret waterfalls, and scenic spots
          </p>
        </motion.div>

        {/* Map Controls */}
        <motion.div
          className="flex flex-col lg:flex-row gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {/* Map Style Selector */}
          <div className="bg-bg-secondary rounded-xl p-4">
            <h4 className="text-lg font-semibold text-gold mb-4 flex items-center space-x-2">
              <Navigation className="w-5 h-5" />
              <span>Map Style</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {mapStyles.map((style) => (
                <motion.button
                  key={style.id}
                  onClick={() => setSelectedMapStyle(style.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedMapStyle === style.id
                      ? 'bg-gold text-primary'
                      : 'bg-primary text-text-secondary hover:bg-bg-secondary'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <style.icon className="w-4 h-4" />
                  <span>{style.name}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Filters */}
          <div className="bg-bg-secondary rounded-xl p-4">
            <h4 className="text-lg font-semibold text-gold mb-4 flex items-center space-x-2">
              <Compass className="w-5 h-5" />
              <span>Filter by Type</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <motion.button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedFilter === filter.id
                      ? 'bg-gold text-primary'
                      : 'bg-primary text-text-secondary hover:bg-bg-secondary'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <filter.icon className="w-4 h-4" />
                  <span>{filter.name}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Zoom Controls */}
          <div className="bg-bg-secondary rounded-xl p-4">
            <h4 className="text-lg font-semibold text-gold mb-4 flex items-center space-x-2">
              <Ruler className="w-5 h-5" />
              <span>Zoom Level</span>
            </h4>
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={handleZoomOut}
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-text hover:bg-bg-secondary transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-xl">−</span>
              </motion.button>
              <span className="text-gold font-semibold">{zoomLevel}x</span>
              <motion.button
                onClick={handleZoomIn}
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-text hover:bg-bg-secondary transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-xl">+</span>
              </motion.button>
            </div>
            <div className="mt-4">
              <button
                onClick={() => setShowDirections(!showDirections)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  showDirections
                    ? 'bg-gold text-primary'
                    : 'bg-primary text-text-secondary hover:bg-bg-secondary'
                }`}
              >
                <Navigation className="w-4 h-4" />
                <span>{showDirections ? 'Hide Directions' : 'Show Directions'}</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Map Container */}
        <motion.div
          className="relative bg-bg-secondary rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ minHeight: '600px' }}
        >
          {/* Map Background - Using a placeholder image since we can't use Google Maps API key */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url(https://maps.googleapis.com/maps/api/staticmap?center=${centerCoordinates.lat},${centerCoordinates.lng}&zoom=${zoomLevel}&size=1200x600&maptype=${selectedMapStyle === 'satellite' ? 'satellite' : selectedMapStyle === 'terrain' ? 'terrain' : 'roadmap'}&key=AIzaSyD3qV3qL8n8n8n8n8n8n8n8n8n8n8n)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'grayscale(20%) brightness(0.8)',
            }}
          >
            {/* Fallback background */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-blue-900 to-purple-900"></div>
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>

          {/* Location Markers */}
          {filteredLocations.map((location, index) => {
            // Calculate position based on coordinates (simplified for demo)
            const latDiff = location.coordinates.lat - centerCoordinates.lat;
            const lngDiff = location.coordinates.lng - centerCoordinates.lng;
            const xPos = 50 + (lngDiff * 100);
            const yPos = 50 + (latDiff * -100);

            return (
              <motion.div
                key={location.id}
                className="absolute cursor-pointer"
                style={{
                  left: `${xPos}%`,
                  top: `${yPos}%`,
                  transform: 'translate(-50%, -100%)',
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.2, y: -5 }}
                onClick={() => handleLocationClick(location)}
              >
                {/* Marker */}
                <div className="relative">
                  {/* Pulse Effect */}
                  <div className="absolute -inset-4 bg-gold bg-opacity-20 rounded-full animate-ping"></div>
                  
                  {/* Marker Pin */}
                  <motion.div
                    className="relative w-12 h-12 flex flex-col items-center justify-center"
                    style={{ color: location.color }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-gold/50">
                      <location.icon className="w-5 h-5" />
                    </div>
                    <div className="w-1 h-4 bg-gold/50"></div>
                    <div className="w-3 h-3 bg-gold rounded-full"></div>
                  </motion.div>

                  {/* Label */}
                  <motion.div
                    className="absolute -top-2 left-1/2 transform -translate-x-1/2 mt-8 bg-primary px-3 py-2 rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                  >
                    <p className="text-sm font-medium text-white whitespace-nowrap">{location.name}</p>
                    <p className="text-xs text-text-secondary">{location.distance} • {location.difficulty}</p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}

          {/* Map Controls Overlay */}
          <div className="absolute top-4 left-4 flex flex-col space-y-2">
            <motion.button
              onClick={handleZoomIn}
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-xl">+</span>
            </motion.button>
            <motion.button
              onClick={handleZoomOut}
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-xl">−</span>
            </motion.button>
          </div>

          {/* Current Location Button */}
          <motion.button
            className="absolute top-4 right-4 w-10 h-10 bg-gold rounded-full flex items-center justify-center text-primary hover:bg-gold-light transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <MapPin className="w-5 h-5" />
          </motion.button>

          {/* Map Style Toggle */}
          <div className="absolute bottom-4 right-4 flex space-x-2">
            {mapStyles.map((style) => (
              <motion.button
                key={style.id}
                onClick={() => setSelectedMapStyle(style.id)}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  selectedMapStyle === style.id
                    ? 'bg-gold text-primary'
                    : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <style.icon className="w-5 h-5" />
              </motion.button>
            ))}
          </div>

          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-sm rounded-lg p-3">
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <div key={filter.id} className="flex items-center space-x-1">
                  <div className={`w-3 h-3 rounded-full ${selectedFilter === filter.id ? 'bg-gold' : 'bg-white/50'}`}></div>
                  <span className="text-xs text-white">{filter.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Location Details Modal */}
        <AnimatePresence>
          {selectedLocation && (
            <motion.div
              className="fixed inset-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
            >
              <motion.div
                className="max-w-2xl w-full bg-bg-secondary rounded-2xl overflow-hidden max-h-[90vh]"
                initial={{ scale: 0.9, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 50 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="relative p-6 border-b border-white/10">
                  <motion.button
                    onClick={handleCloseModal}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                  
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center bg-${selectedLocation.color}-200`}>
                      <selectedLocation.icon className="w-8 h-8" style={{ color: selectedLocation.color }} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold gradient-text">{selectedLocation.name}</h3>
                      <div className="flex items-center space-x-4 text-text-secondary text-sm mt-1">
                        <span className="capitalize">{selectedLocation.type}</span>
                        <span>•</span>
                        <span>{selectedLocation.distance} from retreat</span>
                        <span>•</span>
                        <span className="flex items-center space-x-1">
                          <Compass className="w-4 h-4" />
                          <span>{selectedLocation.difficulty}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gallery */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {selectedLocation.images.map((image, index) => (
                      <motion.div
                        key={index}
                        className="rounded-xl overflow-hidden"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <img
                          src={image}
                          alt={`${selectedLocation.name} ${index + 1}`}
                          className="w-full h-40 object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Description */}
                  <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h4 className="text-lg font-semibold text-gold mb-3">Description</h4>
                    <p className="text-text-secondary leading-relaxed">
                      {selectedLocation.description}
                    </p>
                  </motion.div>

                  {/* Coordinates */}
                  <motion.div
                    className="bg-primary rounded-xl p-4 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-text-secondary text-sm mb-1">Latitude</p>
                        <p className="text-gold font-semibold">{selectedLocation.coordinates.lat.toFixed(4)}</p>
                      </div>
                      <div>
                        <p className="text-text-secondary text-sm mb-1">Longitude</p>
                        <p className="text-gold font-semibold">{selectedLocation.coordinates.lng.toFixed(4)}</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    className="flex space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <button className="flex-1 btn btn-secondary">
                      Save to Favorites
                    </button>
                    <button className="flex-1 btn">
                      Get Directions
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Location List */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {filteredLocations.map((location, index) => (
            <motion.div
              key={location.id}
              className="bg-bg-secondary rounded-xl p-6 cursor-pointer hover:bg-primary transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onClick={() => handleLocationClick(location)}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`} style={{ backgroundColor: location.color + '20' }}>
                  <location.icon className="w-6 h-6" style={{ color: location.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg font-semibold text-white mb-1">{location.name}</h4>
                  <p className="text-text-secondary text-sm mb-2 line-clamp-2">{location.description}</p>
                  <div className="flex items-center space-x-4 text-text-secondary text-xs">
                    <span className="capitalize">{location.type}</span>
                    <span>•</span>
                    <span>{location.distance}</span>
                    <span>•</span>
                    <span>{location.difficulty}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveMap;
