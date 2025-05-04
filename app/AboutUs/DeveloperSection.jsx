"use client";
import React from "react";
import { motion } from "framer-motion";
import DeveloperCard from "../components/Cards/DeveloperCard";

function DeveloperSection() {
  const developers = [
    {
      image: "/basit.jpg",
      name: "Basit Manzoor",
      skills: [
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "NextJS",
        "Java",
        "Python",
      ],
      experience: "5+ Years",
      address: "Sri Nagar, Kashmir, India",
      qualification: "Full Stack Software Engineer",
      bio: "Passionate full-stack developer with a knack for building scalable web apps and elegant UIs.",
    },
    {
      image: "/arhan.jpg",
      name: "Syed Arhan Rizvi",
      skills: [
        "JavaScript",
        "Ai/Ml",
        "Node.js",
        "MongoDB",
        "ReactNative",
        "NextJS",
        "Java",
        "C",
      ],
      experience: "3+ Years",
      address: "Greater Noida, U.P, India",
      qualification: "Mobile App Developer",
      bio: "Passionate full-stack mobile app and ai/ml developer with a knack for building scalable apps and ai/ml models.",
    },
    {
      image: "/demo.jpg",
      name: "Mehreen Fatema",
      skills: [
        "Figma Design",
        "Canvas",
        "Graphic Designs",
        "Image Editing",
        "Logo Designs",
        "Content Writing",
        "Typography",
        "Composition",
      ],
      experience: "2+ Years",
      address: "Okhla Vihar, New Delhi, India",
      qualification: "Application Designer",
      bio: "UI/UX and logo designer crafting clean, modern designs.",
    },
  ];
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    

        {developers &&
          developers.map((dev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.3 + 0.3 }}
            >
              <DeveloperCard
                image={dev.image}
                name={dev.name}
                skills={dev.skills}
                experience={dev.experience}
                address={dev.address}
                qualification={dev.qualification}
                bio={dev.bio}
              />
            </motion.div>
          ))}
      </div>
    </section>
  );
}

export default DeveloperSection;
