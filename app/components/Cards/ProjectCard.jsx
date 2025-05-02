"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-[#1a1a1a] rounded-2xl shadow-xl p-6 md:p-8 text-white max-w-3xl mx-auto my-10"
    >
      {/* Project Image */}

      <img
        src="https://www.searchenginejournal.com/wp-content/uploads/2023/08/best-landing-page-examples-64e6080f990bb-sej.png" // <-- replace with actual path
        alt="Project Screenshot"
        className="rounded-xl w-full h-64 object-cover mb-6"
      />
      {/* Project Info */}
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold text-[#04acaa]">
          My Premium Project Name
        </h2>

        <p className="text-gray-300 text-lg">
          This is a powerful and modern web application built for real-time
          performance. It solves real-world problems using scalable architecture
          and smooth UI.
        </p>
        {/* Tech Stack */}
        <div className="text-sm text-gray-400">
          <span className="font-semibold text-white">Tech Stack:</span> ReactJS,
          Tailwind CSS, Node.js, Express, MongoDB
        </div>
        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-4">
          <a
            href="https://your-live-project-link.com" // <-- replace with actual link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#04acaa] border border-[#04acaa] hover:bg-[#04acaa] hover:text-black transition px-5 py-2 rounded-full"
          >
            Live Site <FaExternalLinkAlt size={14} />
          </a>

          <button className="bg-[#04acaa] hover:bg-[#048a88] text-black font-semibold px-6 py-2 rounded-full transition">
            Enquiry Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
