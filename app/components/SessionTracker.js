'use client';

import { motion } from 'framer-motion';
import { Flame, Heart, Moon } from 'lucide-react';

const sessions = [
  {
    icon: Flame,
    title: 'Focus',
    progress: 75,
    startColor: '#fb923c', // orange-400
    endColor: '#facc15', // yellow-400
  },
  {
    icon: Heart,
    title: 'Relax',
    progress: 60,
    startColor: '#ec4899', // pink-400
    endColor: '#a855f7', // purple-400
  },
  {
    icon: Moon,
    title: 'Sleep',
    progress: 85,
    startColor: '#60a5fa', // blue-400
    endColor: '#6366f1', // indigo-400
  },
];

export default function SessionTracker() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Your Progress</h2>
          <p className="section-subtitle">
            Track your meditation journey and see how far you've come.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {sessions.map((session, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-8 text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  {/* Background Circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="8"
                  />
                  {/* Progress Circle */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke={`url(#gradient-${index})`}
                    strokeWidth="8"
                    strokeLinecap="round"
                    initial={{ strokeDashoffset: 283 }}
                    whileInView={{ strokeDashoffset: 283 - (283 * session.progress) / 100 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  />
                  <defs>
                    <linearGradient
                      id={`gradient-${index}`}
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" style={{ stopColor: session.startColor }} />
                      <stop offset="100%" style={{ stopColor: session.endColor }} />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <session.icon className="w-12 h-12 text-gray-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{session.title}</h3>
              <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                {session.progress}%
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 