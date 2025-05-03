"use client";

import React from "react";
import { motion } from "framer-motion";

function DeveloperCard({
  image,
  name,
  skills,
  experience,
  address,
  qualification,
  bio,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-[#0d0d0d] text-white max-w-md w-full mx-auto rounded-3xl overflow-hidden shadow-[0_8px_24px_rgba(4,172,170,0.2)] backdrop-blur-md border border-[#ffffff1a] hover:shadow-[0_0_30px_#04acaa80] transition-all duration-500 p-6"
    >
      <div className="flex flex-col items-center">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-32 h-32 rounded-full object-cover border-4 border-[#04acaa] shadow-lg  transition-transform duration-300 ease-in-out hover:scale-105"
        />

        <h2 className="text-2xl font-bold mt-4 text-[#04acaa] tracking-wide">
          {name}
        </h2>

        <p className="text-sm text-gray-400 mt-1 italic">{qualification}</p>
        <p className="mt-3 text-center text-gray-300 px-2">{bio}</p>
      </div>

      <div className="mt-6 space-y-3 text-sm text-gray-200">
        <div>
          <strong className="text-white">Experience:</strong> {experience}
        </div>

        <div>
          <strong className="text-white">Address:</strong> {address}
        </div>

        <div>
          <strong className="text-white">Skills:</strong>
          <span className="flex flex-wrap gap-2 mt-1">
            {skills &&
              skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-[#04acaa1f] border border-[#04acaa80] px-3 py-1 rounded-full text-sm text-[#04acaa] hover:bg-[#04acaa33] transition-all"
                >
                  {skill}
                </span>
              ))}
          </span>
        </div>
      </div>

      <div className="mt-6 text-center">
        <button className="bg-[#04acaa] hover:bg-[#048a88] px-6 py-2 rounded-full text-white font-semibold transition-all shadow-lg">
          Connect Now
        </button>
      </div>
    </motion.div>
  );
}

export default DeveloperCard;
