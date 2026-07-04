import { motion } from 'framer-motion';
import GalleryComponent from '../components/Gallery';

const Gallery = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=600&fit=crop"
            alt="Himalayan Haven Gallery"
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
          <h1 className="text-5xl font-bold gradient-text mb-4">Himalayan Gallery</h1>
          <p className="text-xl text-white/80">Explore the beauty of our retreat and the stunning landscapes</p>
        </motion.div>
      </section>

      {/* Gallery Component */}
      <GalleryComponent />
    </>
  );
};

export default Gallery;
