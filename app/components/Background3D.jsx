'use client';

import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Text } from '@react-three/drei';

function CodeModel() {
  const ref = useRef();

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(clock.elapsedTime * 0.5) * 0.8;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
      <mesh ref={ref} position={[0, 0, 0]}>
        <planeGeometry args={[4, 3]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.5} metalness={0.9} />
      </mesh>

      {/* Text on Screen */}
      <Text
        fontSize={0.25}
        color="#00ff99"
        maxWidth={3}
        lineHeight={1.4}
        position={[0, 0, 0.05]}
        anchorX="center"
        anchorY="middle"
      >
{`> npm run dev
> Building your Dream...`}
      </Text>
    </Float>
  );
}

export default function Background3D() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 2, 5]} />
        <Suspense fallback={null}>
          <CodeModel />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}
