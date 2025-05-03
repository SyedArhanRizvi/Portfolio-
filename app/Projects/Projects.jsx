"use client";

import React from "react";
import ProjectCard from "../components/Cards/ProjectCard";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      websiteName: "Agera Capital",
      websiteDetails:
        "A full-stack capital management web app that allows users to manage investments, view portfolios, and track financial trends with real-time updates and secure authentication.",
      tackStackUsed:
        "NextJS, MongoDB, Tailwind CSS, ExpressJS, React Charts",
      websiteUrl: "https://www.ageracapital.co.in",
      img:"/ageraCapital.png"
    },
    {
      websiteName: "K.R Furniture",
      websiteDetails:
        "A responsive front-end website for a furniture business showcasing products, user testimonials, and inquiry form with a clean UI for local clients.",
      tackStackUsed: "NextJS, Tailwind CSS, GSAP, NodeMailer, ExpressJS",
      websiteUrl: "https://krfurniture.com", 
      img:"/krFurniture.png"
    },
    {
      websiteName: "Isband E-Commerce",
      websiteDetails:
        "An e-commerce platform for traditional and ethnic products with cart, wishlist, chat assistance, and interactive product pages.",
      tackStackUsed: "ReactJS, Tailwind CSS, React Router, LocalStorage",
      websiteUrl: "https://isband-client.vercel.app/",
      img:"/isband.png"
    },
    {
      websiteName: "Noida Sofa Maker",
      websiteDetails:
        "A custom furniture service website with a gallery, customer testimonials, quote request form, and local SEO optimization.",
      tackStackUsed: "NextJS, MongoDB, GSAP, Tailwind CSS, ExpressJS",
      websiteUrl: "https://noidasofamaker.com", 
      img:"/noidaSofa.png"
    },
    {
      websiteName: "Aishwarya Foods And Exports",
      websiteDetails:
        "A business website for a wholesale food export company, displaying their products like rice, pulses, and oils, with inquiry and contact form integration.",
      tackStackUsed: "ReactJS, Tailwind CSS, GSAP, MongoDB, ExpressJS, NodeJS",
      websiteUrl: "https://aishwaryafoodsandexports.com",
      img:"/aishwaryaFoods.png"
    },
    {
      websiteName: "Studio Now",
      websiteDetails:
        "A highly animated personal portfolio website for a web developer showcasing their work, skills, tech stack, and contact section with smooth scroll and GSAP-based animations.",
      tackStackUsed: "ReactJS, Tailwind CSS, GSAP, Framer Motion, EmailJS",
      websiteUrl: "https://studio-flow-rewrite.vercel.app/#hero", 
      img:"/studioHow.png"
    },
  ];

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
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#04acaa] mb-4 tracking-tight">
          🚀 Crafted Solutions for Ambitious Brands
        </h2>

        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          A showcase of high-impact freelance projects built with scalable tech
          stacks, refined UI/UX, and a focus on real-world business growth.
          Every line of code, designed to deliver results.
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
       {
        projects && projects.map((project, idx)=>{
          return  <ProjectCard name={project.websiteName} desc={project.websiteDetails} img={project.img} link={project.websiteUrl} techStack={project.tackStackUsed} key={idx}/>
        })
       }
      </motion.div>
    </section>
  );
}

export default Projects;
