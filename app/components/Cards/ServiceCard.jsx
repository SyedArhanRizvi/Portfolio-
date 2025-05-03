'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaShoppingCart, FaMobileAlt, FaPalette } from 'react-icons/fa';

function ServiceCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="bg-[#111111] border border-[#2a2a2a] text-white rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-sm hover:border-[#04acaa] transition-all duration-300"
    >
      <div className="text-[#04acaa] text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <button className="mt-auto cursor-pointer bg-[#04acaa] hover:bg-[#048a88] transition px-5 py-2 rounded-full font-medium">
        Enquiry Now
      </button>
    </motion.div>
  );
}

export default ServiceCard;
