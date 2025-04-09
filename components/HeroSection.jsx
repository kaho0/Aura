'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Play, Sparkles, Leaf, Moon } from 'lucide-react';

export default function HeroSection() {
  const [dimensions, setDimensions] = useState({ width: 1000, height: 800 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Generate particles with memoization to prevent unnecessary re-renders
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      duration: 5 + Math.random() * 15,
      delay: Math.random() * 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Main background */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-purple-950 to-black z-0" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.5, 1],
              y: [0, -20, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: particle.duration,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Interactive gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-indigo-800/20 z-0"
        animate={{
          backgroundPosition: `${mousePosition.x * 0.02}px ${mousePosition.y * 0.02}px`
        }}
        transition={{ type: "spring", damping: 50 }}
      />
      
      {/* Light orbs */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-1/4 bottom-1/3 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute left-2/3 top-1/4 h-40 w-40 rounded-full bg-violet-500/15 blur-3xl"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Ornamental element */}
          <motion.div 
            className="mb-6 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </motion.div>
          
          {/* Main heading */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-indigo-200">
              Find Your Inner Peace
            </span>
          </h1>
          
          {/* Ornamental element */}
          <motion.div 
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </motion.div>
          
          {/* Subheading */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Discover the perfect meditation experience with guided sessions, 
            calming music, and yoga poses tailored to your needs.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/sessions"
                className="flex items-center gap-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 group"
              >
                <span className="bg-white/20 p-1 rounded-full group-hover:bg-white/30 transition-colors">
                  <Play className="h-5 w-5" />
                </span>
                <span>Start Meditating</span>
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/poses"
                className="flex items-center gap-3 border border-white/20 bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 hover:border-white/30 transition-all duration-300 group"
              >
                <span className="bg-white/10 p-1 rounded-full group-hover:bg-white/20 transition-colors">
                  <Leaf className="h-5 w-5" />
                </span>
                <span>Explore Poses</span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Features section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: <Moon className="h-6 w-6 text-purple-300" />,
                title: "Sleep Better",
                description: "Fall asleep faster with soothing guided meditation."
              },
              {
                icon: <Sparkles className="h-6 w-6 text-indigo-300" />,
                title: "Reduce Anxiety",
                description: "Calm your mind and find relief from daily stress."
              },
              {
                icon: <Leaf className="h-6 w-6 text-teal-300" />,
                title: "Improve Focus",
                description: "Enhance concentration with mindfulness practices."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="group relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300 overflow-hidden h-full">
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-500" />
                  <div className="relative">
                    <div className="flex items-center justify-center mb-6 w-16 h-16 bg-gradient-to-br from-purple-900 to-indigo-900 p-4 rounded-2xl mx-auto">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-24 max-w-4xl mx-auto"
        >
          <div className="relative px-10 py-12 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-3xl border border-white/10">
            <div className="absolute -top-4 -left-4 text-6xl text-purple-400 opacity-50">"</div>
            <blockquote className="text-2xl md:text-3xl font-light italic mb-4 text-gray-200">
              Peace begins with a smile.
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-10 bg-purple-500/50"></div>
              <cite className="text-sm font-medium text-purple-300">Mother Teresa</cite>
              <div className="h-px w-10 bg-purple-500/50"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 text-6xl text-purple-400 opacity-50">"</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}