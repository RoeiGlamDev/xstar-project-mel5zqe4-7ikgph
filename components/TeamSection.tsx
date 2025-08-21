'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function TeamSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900 p-8"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-purple-400" />
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            TeamSection
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">

          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}