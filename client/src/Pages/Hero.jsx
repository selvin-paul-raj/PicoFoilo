import { motion } from 'framer-motion';
import { Cover } from '../Components/ui/cover';

const Hero = () => {
  return (
    
    <section className="relative flex justify-center items-center h-screen  text-white bg-rd-500 z-[99] top-0 align-middle">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bg-gradient-radial from-blue-400 via-transparent to-transparent rounded-full w-[40rem] h-[40rem] top-20 left-1/3 transform -translate-x-1/2"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse', delay: 1 }}
          className="absolute bg-gradient-radial from-pink-400 via-transparent to-transparent rounded-full w-[30rem] h-[30rem] top-32 right-1/3 transform translate-x-1/2"
        ></motion.div>
      </div>

      <div className="container mx-auto text-center px-6 md:px-12 lg:px-20 relative z-10">
        {/* Title Animation */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          Welcome to <Cover>PicoFolio</Cover>
        </motion.h1>

        {/* Description Animation */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
          className="mt-6 text-md sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto"
        >
          Experience seamless photo management like never before! With our cutting-edge AI-powered facial recognition, PicoFolio makes it effortless for you to access and manage your event photos
        </motion.p>

        {/* Button Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
          className="mt-8"
        >
          <a
            href="#"
            className="inline-block py-3 px-6 bg-white/10 backdrop-blur-lg text-white font-medium rounded-md hover:bg-gray-800 transition duration-300 transform hover:scale-105"
          >
            Get started for free &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
