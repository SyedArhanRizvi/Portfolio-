'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaLaptopCode } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#000000] border-b-1 border-[#9a999962] text-white w-full px-6 md:px-16 py-4 flex justify-between items-center fixed top-0 z-50 shadow-md">

      {/* Logo */}
      <div className="flex items-center space-x-3">
        <FaLaptopCode className="text-3xl text-[#04acaa]" />
        <h1 className="text-2xl font-bold tracking-wide">TechStudios</h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-10">
        <a href="#" className="hover:text-[#04acaa] transition-all">Home</a>
        <a href="#" className="hover:text-[#04acaa] transition-all">Projects</a>
        <a href="#" className="hover:text-[#04acaa] transition-all">About Us</a>
        <button className="bg-[#04acaa] hover:bg-[#048a88] transition px-6 py-2 rounded-full font-semibold">
          Enquiry Now
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-[#000000] flex flex-col items-center overflow-hidden md:hidden"
          >
            <a href="#" className="py-3 text-lg hover:text-[#04acaa] w-full text-center border-b border-gray-700">Home</a>
            <a href="#" className="py-3 text-lg hover:text-[#04acaa] w-full text-center border-b border-gray-700">Projects</a>
            <a href="#" className="py-3 text-lg hover:text-[#04acaa] w-full text-center border-b border-gray-700">About Us</a>
            <button className="my-4 bg-[#04acaa] hover:bg-[#048a88] transition px-6 py-2 rounded-full font-semibold">
              Enquiry Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}

export default Navbar;
