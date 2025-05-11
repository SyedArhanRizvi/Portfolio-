'use client';

import React, { useEffect, Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Text } from '@react-three/drei';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

function LaptopModel() {
  const screenRef = useRef();

  useFrame(({ clock }) => {
    if (screenRef.current) {
      screenRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.4) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
      <group>
        {/* Laptop Body */}
        <mesh position={[0, -1, 0]}>
          <boxGeometry args={[4, 0.2, 3]} />
          <meshStandardMaterial color="#222" metalness={0.8} roughness={0.3} />
        </mesh>

        {/* Laptop Screen */}
        <mesh ref={screenRef} position={[0, 1, -1]}>
          <planeGeometry args={[4, 2.5]} />
          <meshStandardMaterial color="#111" metalness={0.9} roughness={0.2} />
        </mesh>

        {/* Coding Text on Screen */}
        <Text
          position={[0, 1, -0.9]}
          fontSize={0.2}
          color="#00ff99"
          maxWidth={3}
          lineHeight={1.3}
          anchorX="center"
          anchorY="middle"
        >
{`> npm install
> starting server...
> deploying code...`}
        </Text>
      </group>
    </Float>
  );
}

function Background3D() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 2, 5]} />
        <Suspense fallback={null}>
          <LaptopModel />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Landing() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="relative min-h-[400vh] bg-gradient-to-b from-black via-[#0c0c0c] to-black text-white font-[Poppins] overflow-hidden">

      {/* 3D Laptop Background */}
      <Background3D />

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 md:px-16">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#04acaa] via-white to-[#ec630e]"
        >
          Elevate Your Business<br /> with Digital Power
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-lg md:text-2xl text-gray-400 max-w-2xl"
        >
          We create stunning websites & apps to move your business online and ahead.
        </motion.p>

        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 bg-[#04acaa] hover:bg-[#048a88] px-10 py-4 rounded-full text-lg font-semibold shadow-lg"
        >
          Get Started
        </motion.button>
      </div>

      {/* About Company */}
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
          We are a full stack web & app development company that builds scalable, modern, and dynamic digital solutions for businesses.
        </motion.p>
      </div>

      {/* Why Shift Online */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 md:px-20">
        <motion.h2 
          data-aos="fade-up"
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Why Move Your Business Online?
        </motion.h2>
        <motion.div 
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-10 grid md:grid-cols-3 gap-10 max-w-5xl"
        >
          <div className="bg-[#0d0d0d] p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-[#04acaa] mb-4">Global Reach</h3>
            <p className="text-gray-400">Access customers worldwide, 24/7.</p>
          </div>

          <div className="bg-[#0d0d0d] p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-[#04acaa] mb-4">Boost Revenue</h3>
            <p className="text-gray-400">Increase visibility and grow your business.</p>
          </div>

          <div className="bg-[#0d0d0d] p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-[#04acaa] mb-4">Future Ready</h3>
            <p className="text-gray-400">Stay ahead with digital innovation.</p>
          </div>
        </motion.div>
      </div>

    </section>
  );
}

export default Landing;
