import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PlayCircle, PauseCircle, Mountain, Star, Users, Calendar } from 'lucide-react';

const heroVideos = [
  'https://videos.pexels.com/video-files/4434234/4434234-hd_1920_1080_25fps.mp4',
  'https://videos.pexels.com/video-files/3769747/3769747-hd_1920_1080_25fps.mp4',
  'https://videos.pexels.com/video-files/3254074/3254074-hd_1920_1080_25fps.mp4',
];

const stats = [
  { icon: Star, value: '5.0', label: 'Rating' },
  { icon: Users, value: '1200+', label: 'Happy Guests' },
  { icon: Mountain, value: '25+', label: 'Domes' },
  { icon: Calendar, value: '10+', label: 'Years' },
];

const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const videoInterval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % heroVideos.length);
    }, 10000);

    return () => clearInterval(videoInterval);
  }, []);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        {!videoLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black animate-pulse"></div>
        )}
        <video
          autoPlay={isPlaying}
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setVideoLoaded(true)}
        >
          <source src={heroVideos[currentVideo]} type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/4434234/4434234-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Mountain className="w-5 h-5 text-gold" />
            <span className="text-white/90 text-sm font-medium">Premium Mountain Retreat</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="gradient-text">Discover Paradise</span> in the
            <br />
            Heart of the Himalayas
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Luxurious geodesic domes, breathtaking views, and unforgettable experiences 
            await you at Himalayan Haven.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/booking" className="btn">
              Book Your Stay
            </Link>
            <Link to="/plan-your-journey" className="btn btn-secondary">
              Plan Your Journey
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gold bg-opacity-20 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-white/70 text-sm">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Video Controls */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <button
          onClick={togglePlay}
          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        >
          {isPlaying ? <PauseCircle className="w-6 h-6" /> : <PlayCircle className="w-6 h-6" />}
        </button>
        <div className="flex space-x-2">
          {heroVideos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentVideo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentVideo === index ? 'bg-gold w-6' : 'bg-white/50 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 right-8 flex flex-col items-center space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-white/60 text-sm rotate-90 origin-center">Scroll</p>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-1">
          <motion.div
            className="w-1 h-2 bg-gold rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
