import React from 'react';

'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'heavy';
  border?: boolean;
  shadow?: boolean;
}

export default function GlassCard({ 
  children, 
  className, 
  intensity = 'medium',
  border = true,
  shadow = true 
}: GlassCardProps) {
  const intensityClasses = {
    light: 'bg-white/5 backdrop-blur-sm',
    medium: 'bg-white/10 backdrop-blur-lg',
    heavy: 'bg-white/20 backdrop-blur-xl'
  };

  return (
    <motion.div
      className={cn(
        'rounded-2xl p-6 transition-all duration-300',
        intensityClasses[intensity],
        border && 'border border-white/20',
        shadow && 'shadow-lg shadow-black/20',
        'hover:bg-white/15 hover:border-purple-400/30',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl pointer-events-none" />
    </motion.div>
  );
}