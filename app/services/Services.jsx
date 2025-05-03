"use client";
import React from "react";
import ServiceCard from "../components/Cards/ServiceCard";
import { FaCode, FaShoppingCart, FaMobileAlt, FaPalette } from "react-icons/fa";
import { FaBullhorn, FaTools } from "react-icons/fa"; 
// import { FaTools } from 'react-icons/fa'; 
function ServicesPage() {
  return (
    <section className="bg-[#0b0b0b] text-white py-20 px-6 md:px-20">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#04acaa]">
          Our Services
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          We deliver high-quality digital solutions tailored to your business
          needs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ServiceCard
          icon={<FaCode />}
          title="Website Development"
          description="Modern and responsive websites tailored to your brand's goals."
        />
        <ServiceCard
          icon={<FaShoppingCart />}
          title="E-Commerce Development"
          description="Custom online stores that convert visitors into customers."
        />
        <ServiceCard
          icon={<FaMobileAlt />}
          title="App Development"
          description="iOS and Android mobile apps with rich features and great UX."
        />
        <ServiceCard
          icon={<FaPalette />}
          title="UI/UX Designing"
          description="Beautiful and intuitive design for your websites and apps."
        />

        <ServiceCard
          icon={<FaBullhorn />}
          title="Advertisement Management"
          description="Grow your business with our strategic ad campaigns and performance tracking."
        />
        

<ServiceCard
  icon={<FaTools />}
  title="Bug Fixing & Website Scalability"
  description="We fix bugs and optimize outdated websites to make them fast, modern, and scalable."
/>

      </div>
    </section>
  );
}

export default ServicesPage;
