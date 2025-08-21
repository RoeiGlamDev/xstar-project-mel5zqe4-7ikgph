import React from 'react';

'use client';

import { motion } from 'framer-motion';

interface GradientBackgroundProps {
  variant?: 'cosmic' | 'ocean' | 'sunset' | 'aurora';
  animated?: boolean;
  children?: React.ReactNode;
}

export default function GradientBackground({ 
  variant = 'cosmic', 
  animated = true,
  children 
}: GradientBackgroundProps) {
  const gradients = {
    cosmic: 'bg-gradient-to-br from-purple-900 via-black to-blue-900',
    ocean: 'bg-gradient-to-br from-blue-900 via-teal-800 to-cyan-900',
    sunset: 'bg-gradient-to-br from-orange-900 via-red-800 to-pink-900',
    aurora: 'bg-gradient-to-br from-green-900 via-purple-800 to-blue-900'
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <motion.div
        className={`absolute inset-0 ${gradients[variant]}`}
        animate={animated ? {
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
        } : {}}
        transition={animated ? {
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        } : {}}
        style={{
          backgroundSize: '400% 400%'
        }}
      />
      
      {/* Animated overlay */}
      {animated && (
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)'
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}