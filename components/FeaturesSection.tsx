'use client';

import { motion } from 'framer-motion';
import { Music, Activity, Timer, Settings } from 'lucide-react';

const features = [
  {
    icon: <Music className="w-8 h-8" />,
    title: 'Guided Sessions',
    description: 'Access a library of guided meditation sessions for different needs and experience levels.',
    href: '/sessions'
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: 'Yoga Poses',
    description: 'Learn and practice yoga poses with detailed instructions and visual guides.',
    href: '/poses'
  },
  {
    icon: <Timer className="w-8 h-8" />,
    title: 'Custom Timers',
    description: 'Set up personalized meditation timers with ambient sounds and gentle notifications.',
    href: '/sessions'
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: 'Personalized Settings',
    description: 'Customize your meditation experience with various themes and preferences.',
    href: '/settings'
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white dark:bg-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-purple-900 dark:text-purple-100 mb-4">
              Features to Enhance Your Practice
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-purple-700 dark:text-purple-300 max-w-2xl mx-auto">
              Discover tools and resources designed to support your meditation journey
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-purple-50 dark:bg-purple-800 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-purple-600 dark:text-purple-300 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-purple-700 dark:text-purple-300 mb-4">
                  {feature.description}
                </p>
                <a
                  href={feature.href}
                  className="text-purple-600 dark:text-purple-300 hover:text-purple-800 dark:hover:text-purple-100 font-medium inline-flex items-center"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 