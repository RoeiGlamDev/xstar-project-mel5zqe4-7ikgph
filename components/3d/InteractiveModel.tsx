'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box } from '@react-three/drei';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

function InteractiveBox() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Box
      ref={meshRef}
      args={[1, 1, 1]}
      scale={clicked ? 1.5 : 1}
      onClick={() => setClicked(!clicked)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshStandardMaterial color={hovered ? '#EC4899' : '#8B5CF6'} />
    </Box>
  );
}

export default function InteractiveModel() {
  return (
    <motion.div
      className="w-full h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900 via-black to-blue-900"
      initial={{ opacity: 0, rotateY: -90 }}
      whileInView={{ opacity: 1, rotateY: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <InteractiveBox />
        <Text
          position={[0, -2, 0]}
          fontSize={0.5}
          color="#FFFFFF"
          anchorX="center"
          anchorY="middle"
        >
          Click & Drag to Interact
        </Text>
        <OrbitControls />
      </Canvas>
    </motion.div>
  );
}