"use client";
import React from "react";
import { motion } from "framer-motion";
import DeveloperCard from "../components/Cards/DeveloperCard";

function DeveloperSection() {
  return (
    <section className="bg-[#111111] text-white py-16 px-6 md:px-16 min-h-screen">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-[#04acaa] tracking-wider">
          Meet Our Talented Developers
        </h1>

        <p className="mt-4 text-lg text-gray-400">
          Our developers are the backbone of every project. With a passion for
          innovation, they bring ideas to life.
        </p>
      </motion.div>
      {/* Developer Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Developer Card 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <DeveloperCard />
        </motion.div>
        {/* Developer Card 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <DeveloperCard />
        </motion.div>
        {/* Developer Card 3 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <DeveloperCard />
        </motion.div>
      </div>
    </section>
  );
}

export default DeveloperSection;
