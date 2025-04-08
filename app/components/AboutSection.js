'use client';

import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import lotusAnimation from '../../public/lotus.json';
import { Brain, Heart, Moon } from 'lucide-react';

const benefits = [
  {
    icon: Brain,
    title: 'Improved Focus',
    description: 'Enhance your concentration and mental clarity through regular meditation practice.',
  },
  {
    icon: Heart,
    title: 'Stress Relief',
    description: 'Reduce anxiety and stress levels with guided breathing exercises and mindfulness techniques.',
  },
  {
    icon: Moon,
    title: 'Better Sleep',
    description: 'Establish a peaceful bedtime routine and improve your sleep quality with meditation.',
  },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Why Meditate?</h2>
          <p className="section-subtitle">
            Discover the transformative power of meditation and how it can improve your daily life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-card p-6 flex items-start gap-4"
              >
                <div className="p-3 bg-purple-100 rounded-lg">
                  <benefit.icon className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <Lottie
              animationData={lotusAnimation}
              loop={true}
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 