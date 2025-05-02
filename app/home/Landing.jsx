'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import 'aos/dist/aos.css';
import AOS from 'aos';

function Landing() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="bg-gradient-to-b from-black via-[#0c0c0c] to-black text-white min-h-screen flex flex-col justify-center items-center px-6 md:px-16 relative overflow-hidden font-[Poppins]">

      {/* Blurred Background Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#04acaa] opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#ec630e] opacity-20 rounded-full blur-3xl"></div>

      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mt-28"
      >
        <p className="text-xl md:text-3xl font-light tracking-wide">
          Welcome to the world of <span className="text-[#04acaa] font-semibold">Technology</span>
        </p>
      </motion.div>

      {/* Main Heading */}
      <motion.div
        data-aos="fade-up"
        className="text-center mt-10"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          We Transform Your <span className="text-[#04acaa]">Ideas</span> Into <br /> Digital <span className="text-[#ec630e]">Reality</span>
        </h1>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 bg-[#04acaa] cursor-pointer hover:bg-[#048a88] transition-all px-10 py-4 rounded-full text-lg font-semibold shadow-lg"
        >
          Enquiry Now
        </motion.button>
      </motion.div>

      {/* Business Growth Section */}
      <motion.div
        data-aos="fade-up"
        data-aos-delay="400"
        className="text-center mt-20"
      >
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Grow Your Business with the Power of <span className="text-[#ec630e]">Technology</span>
        </h1>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 cursor-pointer bg-[#ec630e] hover:bg-[#d55205] transition-all px-10 py-4 rounded-full text-lg font-semibold shadow-lg"
        >
          Enquiry Now
        </motion.button>
      </motion.div>

      {/* Scroll Down Icon */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 right-10 cursor-pointer animate-bounce"
      >
        <FaArrowDown className="text-4xl  text-[#04acaa]" />
      </motion.div>

    </section>
  );
}

export default Landing;
