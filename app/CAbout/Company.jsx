"use client";

import React from "react";
import { motion } from "framer-motion";

function Company() {
  return (
    <section className="min-h-screen bg-[#0d0d0d] text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 overflow-hidden">
      {/* Left Side - Text */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex-1 space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#04acaa] leading-tight">
          Empowering Innovation: <br /> Our Tech Journey
        </h1>

        <p className="text-gray-300 text-lg md:text-xl">
          At TechStudios, we transform ideas into reality. With a legacy of
          excellence, we have successfully delivered hundreds of innovative
          projects across industries. Our passion drives us to build smarter
          solutions for a better tomorrow.
        </p>

        <button className="mt-4 bg-[#04acaa] hover:bg-[#048a88] transition px-8 py-3 rounded-full text-lg font-semibold">
          Enquiry Now
        </button>
      </motion.div>
      {/* Right Side - Image */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex-1 flex justify-center mt-12 md:mt-0"
      >
        <img
          src="developer.jpeg"
          alt="Developer"
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </motion.div>
    </section>
  );
}

export default Company;
