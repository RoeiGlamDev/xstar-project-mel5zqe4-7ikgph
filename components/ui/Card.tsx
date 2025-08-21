import React from 'react';

'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export default function Card({ children, className, hover = true, glass = true }: CardProps) {
  return (
    <motion.div
      className={cn(
        'rounded-2xl p-6 border transition-all duration-300',
        glass 
          ? 'bg-white/5 backdrop-blur-lg border-purple-500/20' 
          : 'bg-gray-900 border-gray-700',
        hover && 'hover:border-purple-400/40 hover:shadow-lg hover:shadow-purple-500/10',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
    >
      {children}
    </motion.div>
  );
}