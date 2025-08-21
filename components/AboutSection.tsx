'use client';

import { motion } from 'framer-motion';
import { Users, Target, Award, Sparkles } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import GlassCard from '@/components/GlassCard';

export default function AboutPage() {
  const stats = [
    { icon: Users, label: 'Team Members', value: '50+' },
    { icon: Target, label: 'Projects Completed', value: '200+' },
    { icon: Award, label: 'Awards Won', value: '15+' },
    { icon: Sparkles, label: 'Years Experience', value: '10+' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900">
      <div className="container mx-auto px-6 py-20">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.h1 
              className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Our Vision
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We're passionate about creating extraordinary digital experiences that push the boundaries of what's possible.
            </motion.p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <GlassCard className="text-center">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <GlassCard className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
                <p className="text-gray-300 mb-6">
                  Founded with a vision to revolutionize digital experiences, we combine cutting-edge technology 
                  with creative excellence to deliver solutions that exceed expectations.
                </p>
                <p className="text-gray-300">
                  Our team of passionate designers, developers, and strategists work together to create 
                  immersive experiences that captivate and inspire.
                </p>
              </div>
              <div className="relative">
                <motion.div
                  className="w-full h-64 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </div>
  );
}