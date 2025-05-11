'use client';

import React, { useEffect, Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text } from '@react-three/drei';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

function LaptopModel() {
  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
      <group>
        {/* Laptop Body */}
        <mesh position={[0, -1, 0]}>
          <boxGeometry args={[4, 0.3, 3]} />
          <meshStandardMaterial color="#222" metalness={0.6} roughness={0.3} />
        </mesh>

        {/* Laptop Screen */}
        <mesh position={[0, 1, -1]}>
          <planeGeometry args={[3.5, 2]} />
          <meshStandardMaterial color="#0d0d0d" metalness={0.8} roughness={0.2} emissive="#00ffcc" emissiveIntensity={0.2} />
        </mesh>

        {/* Coding Text */}
        <Text
          position={[0, 1, -0.9]}
          fontSize={0.18}
          color="#00ff99"
          maxWidth={3}
          lineHeight={1.3}
          anchorX="center"
          anchorY="middle"
        >
          {`> npm install
> compiling...
> build successful!`}
        </Text>
      </group>
    </Float>
  );
}

function Background3D({ show }) {
  if (!show) return null;

  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <LaptopModel />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Landing() {
  const [show3D, setShow3D] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1200 });

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Jab tak 2500px scroll hua hai, 3D dikhana
      if (scrollPosition < 2500) {
        setShow3D(true);
      } else {
        setShow3D(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-[#0c0c0c] to-black text-white font-[Poppins] overflow-hidden">

      {/* 3D Background */}
      <Background3D show={show3D} />

      {/* HERO SECTION */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-6 md:px-16">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#04acaa] via-white to-[#ec630e]"
        >
          Elevate Your Business
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-lg md:text-2xl text-gray-400 max-w-2xl"
        >
          Stunning websites and apps to scale your business digitally.
        </motion.p>

        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 bg-[#04acaa] hover:bg-[#048a88] px-10 py-4 rounded-full text-lg font-semibold shadow-lg"
        >
          Get Started
        </motion.button>
      </div>

      {/* ABOUT COMPANY SECTION */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 md:px-20">
        <motion.h2 
          data-aos="fade-up"
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          About Our Company
        </motion.h2>
        <motion.p
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl"
        >
          We specialize in full-stack development solutions, building web and app products that drive business success.
        </motion.p>
      </div>

      {/* WHO WE ARE SECTION */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 md:px-20">
        <motion.h2 
          data-aos="fade-up"
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Who We Are
        </motion.h2>
        <motion.p
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl"
        >
          A passionate team of developers, designers and innovators who transform ideas into digital reality.
        </motion.p>
      </div>

      {/* WHY SHIFT ONLINE SECTION */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 md:px-20">
        <motion.h2 
          data-aos="fade-up"
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Why Move Online?
        </motion.h2>
        <motion.div 
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-10 grid md:grid-cols-3 gap-10 max-w-5xl"
        >
          <div className="bg-[#111] p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-[#04acaa] mb-4">Global Market</h3>
            <p className="text-gray-400">Reach customers beyond borders anytime, anywhere.</p>
          </div>

          <div className="bg-[#111] p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-[#04acaa] mb-4">Revenue Boost</h3>
            <p className="text-gray-400">Unlock exponential growth through digital exposure.</p>
          </div>

          <div className="bg-[#111] p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-[#04acaa] mb-4">Innovation Ready</h3>
            <p className="text-gray-400">Stay competitive by embracing digital technologies.</p>
          </div>
        </motion.div>
      </div>

      {/* FUTURE SECTIONS (NO 3D from here) */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 md:px-20 bg-[#0c0c0c]">
        <motion.h2 
          data-aos="fade-up"
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Our Services
        </motion.h2>
        <motion.p
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl"
        >
          {/* Future Content */}
        </motion.p>
      </div>

    </section>
  );
}

export default Landing;
