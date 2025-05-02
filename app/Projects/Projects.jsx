"use client";

import React from "react";
import ProjectCard from "../components/Cards/ProjectCard";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section className="bg-[#0d0d0d] py-20 px-6 md:px-16 text-white">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#04acaa] mb-4">
          🚀 My Freelance Projects
        </h2>

        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Here are some of the live freelance projects I've built for real-world
          clients using modern technologies and pixel-perfect designs.
        </p>
      </motion.div>
      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        {/* Add more <ProjectCard /> as needed */}
      </motion.div>
    </section>
  );
}

export default Projects;
