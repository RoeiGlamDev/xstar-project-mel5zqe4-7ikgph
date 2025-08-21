'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ParallaxSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900"
      />
      
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]) }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="text-center">
          <motion.h2
            style={{ y: useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]) }}
            className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6"
          >
            Parallax Magic
          </motion.h2>
          <motion.p
            style={{ y: useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]) }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Experience smooth parallax scrolling with beautiful depth effects
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}