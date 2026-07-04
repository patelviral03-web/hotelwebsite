import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Mountain, Image, Camera, Heart } from 'lucide-react';

const galleryCategories = [
  { id: 'all', name: 'All', icon: Image },
  { id: 'domes', name: 'Domes', icon: Mountain },
  { id: 'rooms', name: 'Rooms', icon: Camera },
  { id: 'nature', name: 'Nature', icon: Mountain },
  { id: 'activities', name: 'Activities', icon: Heart },
];

const galleryImages = [
  {
    id: 1,
    title: 'Geodesic Dome Exterior',
    category: 'domes',
    url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
    description: 'Luxurious geodesic dome with panoramic mountain views',
    likes: 124,
  },
  {
    id: 2,
    title: 'Dome Interior',
    category: 'domes',
    url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&h=600&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=400&h=300&fit=crop',
    description: 'Cozy interior with modern amenities',
    likes: 89,
  },
  {
    id: 3,
    title: 'Private Room',
    category: 'rooms',
    url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=600&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&h=300&fit=crop',
    description: 'Elegant private room with mountain view',
    likes: 76,
  },
  {
    id: 4,
    title: 'Mountain Suite',
    category: 'rooms',
    url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    description: 'Spacious suite with private balcony',
    likes: 95,
  },
  {
    id: 5,
    title: 'Himalayan Sunrise',
    category: 'nature',
    url: 'https://images.unsplash.com/photo-1547099276-74b480d48d3a?w=800&h=600&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1547099276-74b480d48d3a?w=400&h=300&fit=crop',
    description: 'Breathtaking sunrise over the Himalayas',
    likes: 210,
  },
  {
    id: 6,
    title: 'Snow-Capped Peaks',
    category: 'nature',
    url: 'https://images.unsplash.com/photo-1551524164-6cf2ac531fb4?w=800&h=600&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1551524164-6cf2ac531fb4?w=400&h=300&fit=crop',
    description: 'Majestic snow-covered mountains',
    likes: 187,
  },
  {
    id: 7,
    title: 'Trekking Adventure',
    category: 'activities',
    url: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop',
    description: 'Guided trekking through scenic trails',
    likes: 142,
  },
  {
    id: 8,
    title: 'Yoga Session',
    category: 'activities',
    url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop',
    description: 'Morning yoga with mountain views',
    likes: 108,
  },
  {
    id: 9,
    title: 'Hidden Waterfall',
    category: 'nature',
    url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop',
    description: 'Secret waterfall near our retreat',
    likes: 165,
  },
  {
    id: 10,
    title: 'Campfire Evening',
    category: 'activities',
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    description: 'Warm campfire under the stars',
    likes: 134,
  },
  {
    id: 11,
    title: 'Local Cuisine',
    category: 'activities',
    url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    description: 'Authentic Himachali cuisine experience',
    likes: 98,
  },
  {
    id: 12,
    title: 'Starry Night',
    category: 'nature',
    url: 'https://images.unsplash.com/photo-1506318139828-209972930b61?w=800&h=600&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1506318139828-209972930b61?w=400&h=300&fit=crop',
    description: 'Clear starry skies over the mountains',
    likes: 203,
  },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedImages, setLikedImages] = useState({});

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(filteredImages.findIndex(img => img.id === image.id));
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateLightbox = (direction) => {
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const toggleLike = (imageId) => {
    setLikedImages(prev => ({
      ...prev,
      [imageId]: !prev[imageId]
    }));
  };

  const handleKeyDown = (e) => {
    if (!selectedImage) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') navigateLightbox('next');
    if (e.key === 'ArrowLeft') navigateLightbox('prev');
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
          <h2 className="section-title">Himalayan Gallery</h2>
          <p className="section-subtitle">
            Explore the beauty of our retreat and the stunning landscapes that surround us
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {galleryCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gold text-primary'
                  : 'bg-primary text-text-secondary hover:bg-bg-secondary'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Image Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="relative group overflow-hidden rounded-xl cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              onClick={() => openLightbox(image, index)}
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <motion.img
                  src={image.thumbnail}
                  alt={image.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-4 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex justify-end">
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(image.id);
                    }}
                    className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                      likedImages[image.id] || image.likes > 0
                        ? 'text-red-500 bg-white/20'
                        : 'text-white/70 bg-white/10'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart className={`w-5 h-5 ${likedImages[image.id] ? 'fill-current' : ''}`} />
                  </motion.button>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
                  <p className="text-white/80 text-sm mb-2">{image.description}</p>
                  <div className="flex items-center space-x-2 text-white/60 text-sm">
                    <span className="capitalize">{image.category}</span>
                    <span>•</span>
                    <span>{image.likes + (likedImages[image.id] ? 1 : 0)} likes</span>
                  </div>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="badge text-xs">
                  {galleryCategories.find(c => c.id === image.category)?.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        {filteredImages.length > 8 && (
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <button className="btn btn-secondary">
              View All {galleryImages.length} Photos
            </button>
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-95 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
              onClick={closeLightbox}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Navigation Buttons */}
            <motion.button
              className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('prev');
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <motion.button
              className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('next');
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            {/* Image Container */}
            <motion.div
              className="max-w-4xl max-h-[90vh] relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-full object-contain max-h-[80vh] rounded-xl"
              />

              {/* Image Info */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-xl"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                    <p className="text-white/80 mb-2">{selectedImage.description}</p>
                    <div className="flex items-center space-x-4 text-white/60 text-sm">
                      <span className="capitalize flex items-center space-x-1">
                        <Image className="w-4 h-4" />
                        <span>{selectedImage.category}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{selectedImage.likes + (likedImages[selectedImage.id] ? 1 : 0)} likes</span>
                      </span>
                    </div>
                  </div>
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(selectedImage.id);
                    }}
                    className={`p-3 rounded-full backdrop-blur-sm transition-all duration-300 ${
                      likedImages[selectedImage.id]
                        ? 'text-red-500 bg-white/20'
                        : 'text-white/70 bg-white/10'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart className={`w-5 h-5 ${likedImages[selectedImage.id] ? 'fill-current' : ''}`} />
                  </motion.button>
                </div>
              </motion.div>

              {/* Counter */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
                <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
                  {currentIndex + 1} / {filteredImages.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
