'use client';

import { useState } from 'react';
import { Play, Volume2, Clock, Users } from 'lucide-react';
import Timer from '../components/Timer';
import { motion } from 'framer-motion';

// Using Unsplash images instead of placeholder API
const sessions = [
  {
    id: 1,
    title: 'Mindful Breathing',
    duration: '10 min',
    description: 'Focus on your breath to calm your mind and reduce stress.',
    category: 'Beginner',
    instructor: 'Sarah Johnson',
    practices: ['Focus', 'Breathing'],
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    title: 'Body Scan',
    duration: '15 min',
    description: 'Progressive relaxation technique to release tension.',
    category: 'Intermediate',
    instructor: 'Michael Chen',
    practices: ['Relaxation', 'Awareness'],
    image: 'https://images.unsplash.com/photo-1545205597-3d9d1c551adf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    title: 'Loving Kindness',
    duration: '10 min',
    description: 'Develop compassion for yourself and others.',
    category: 'All Levels',
    instructor: 'Leila Patel',
    practices: ['Compassion', 'Mindfulness'],
    image: 'https://images.unsplash.com/photo-1531171074112-291d5807273d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    title: 'Sound Bath Meditation',
    duration: '20 min',
    description: 'Immerse yourself in healing sounds for deep relaxation.',
    category: 'All Levels',
    instructor: 'Daniel Rivera',
    practices: ['Sound', 'Healing'],
    image: 'https://images.unsplash.com/photo-1528569937393-ee892b976859?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    title: 'Morning Mindfulness',
    duration: '5 min',
    description: 'Start your day with clarity and positive intention.',
    category: 'Beginner',
    instructor: 'Emma Wilson',
    practices: ['Morning', 'Clarity'],
    image: 'https://images.unsplash.com/photo-1476611338391-6c395b517ce9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 6,
    title: 'Deep Sleep Journey',
    duration: '25 min',
    description: 'Guided meditation to help you fall into restful sleep.',
    category: 'All Levels',
    instructor: 'James Taylor',
    practices: ['Sleep', 'Relaxation'],
    image: 'https://images.unsplash.com/photo-1574216320960-1852e38073f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  }
];

export default function SessionsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Beginner', 'Intermediate', 'All Levels'];
  
  const filteredSessions = activeFilter === 'All' 
    ? sessions 
    : sessions.filter(session => session.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50 dark:from-indigo-950 dark:via-purple-950 dark:to-black pt-20 pb-20">
      <div className="container mx-auto px-4">
        {/* Header Section with Particles */}
        <div className="relative overflow-hidden rounded-3xl mb-16 bg-gradient-to-r from-purple-600 to-indigo-600 p-10">
          {/* Background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-white rounded-full"
                style={{
                  width: 2 + Math.random() * 4,
                  height: 2 + Math.random() * 4,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  y: [0, -10, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3 + Math.random() * 5
                }}
              />
            ))}
          </div>
          
          {/* Content */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Meditation Sessions
              </h1>
              <p className="text-purple-100 max-w-2xl text-lg">
                Explore our curated collection of guided meditations designed to help you relax, 
                focus, and find balance in your daily life.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Timer Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white dark:bg-purple-900/40 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-purple-100 dark:border-purple-800/30">
            <h2 className="text-2xl font-semibold text-purple-800 dark:text-purple-200 mb-6 flex items-center">
              <Clock className="mr-2 h-6 w-6 text-purple-600 dark:text-purple-400" />
              Custom Meditation Timer
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Set your own meditation duration and begin your practice at your own pace.
            </p>
            <Timer defaultMinutes={10} />
          </div>
        </motion.div>
        
        {/* Category Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 flex flex-wrap gap-3"
        >
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20'
                  : 'bg-white dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-800/50'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        {/* Sessions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSessions.map((session, index) => (
            <motion.div
              key={session.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-purple-900/40 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-purple-100/50 dark:border-purple-800/30"
            >
              <div className="relative h-48">
                <img 
                  src={session.image} 
                  alt={session.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                
                {/* Session category badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-purple-600/90 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                    {session.category}
                  </span>
                </div>
                
                {/* Session info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{session.title}</h3>
                  <div className="flex items-center text-purple-100 text-sm gap-3">
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {session.duration}
                    </span>
                    <span className="flex items-center">
                      <Users className="h-3 w-3 mr-1" />
                      {session.instructor}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <p className="text-gray-600 dark:text-gray-300 mb-4">{session.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {session.practices.map(practice => (
                    <span 
                      key={practice} 
                      className="px-2 py-1 bg-purple-100 dark:bg-purple-800/40 text-purple-700 dark:text-purple-300 text-xs rounded-md"
                    >
                      {practice}
                    </span>
                  ))}
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all flex items-center justify-center gap-2 font-medium"
                >
                  <Play size={16} />
                  Start Session
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Quick Access Floating Button */}
        <motion.div 
          className="fixed bottom-8 right-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, type: "spring" }}
        >
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:shadow-purple-500/30 transition-all">
            <Volume2 className="h-6 w-6" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}