'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

const Swipper = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const goToProductPage = () => {
    // Navigate to the product page
    navigate('/products'); // Adjust the path to your product page
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Swiper */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop
        slidesPerView={1}
        className="h-full w-full"
      >
        {['donation3', 'donation5', 'donation7', 'donate1', 'image1'].map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={`/donation/${img}.jpg`}
              alt={`Slide ${i + 1}`}
              className="object-cover h-full w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Foreground Animated Text */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-white text-4xl md:text-5xl font-bold mb-4"
        >
          SHOP4DONATE Blogs
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-gray-200 text-lg md:text-xl max-w-2xl mb-2"
        >
          Shopping with purpose. Stories that inspire.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-gray-300 md:text-lg max-w-xl mb-6"
        >
          Discover how your everyday purchases fuel real-world impact — one click, one cause at a time.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
            type: 'spring',
            stiffness: 120,
          }}
          onClick={goToProductPage} // Handle navigation
          className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg"
        >
          Explore Products →
        </motion.button>
      </div>
    </div>
  );
};

export default Swipper;
