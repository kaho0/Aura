'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

const poses = [
  {
    id: 1,
    name: 'Lotus Pose',
    sanskritName: 'Padmasana',
    difficulty: 'Intermediate',
    benefits: 'Improves posture, calms the mind',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=300&h=200&fit=crop',
    category: 'Seated'
  },
  {
    id: 2,
    name: 'Child\'s Pose',
    sanskritName: 'Balasana',
    difficulty: 'Beginner',
    benefits: 'Relieves stress, gentle hip opener',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=300&h=200&fit=crop',
    category: 'Resting'
  },
  {
    id: 3,
    name: 'Mountain Pose',
    sanskritName: 'Tadasana',
    difficulty: 'Beginner',
    benefits: 'Improves posture and balance',
    image: 'https://images.unsplash.com/photo-1506126279646-a697353d3166?q=80&w=300&h=200&fit=crop',
    category: 'Standing'
  },
  {
    id: 4,
    name: 'Warrior I',
    sanskritName: 'Virabhadrasana I',
    difficulty: 'Intermediate',
    benefits: 'Strengthens legs and core',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=300&h=200&fit=crop',
    category: 'Standing'
  }
];

const categories = ['All', 'Seated', 'Standing', 'Resting', 'Balancing'];
const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export default function PosesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const filteredPoses = poses.filter(pose => {
    const matchesSearch = pose.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pose.sanskritName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || pose.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || pose.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-purple-900 dark:text-purple-100 mb-8">Yoga Poses</h1>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="relative max-w-md">
          <input
            type="text"
            placeholder="Search poses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-purple-700 bg-white dark:bg-purple-900 text-purple-900 dark:text-purple-100"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-purple-400" />
        </div>

        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm font-medium text-purple-700 dark:text-purple-300 mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white dark:bg-purple-900 border border-gray-300 dark:border-purple-700 text-purple-900 dark:text-purple-100 rounded-lg px-4 py-2"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-700 dark:text-purple-300 mb-2">Difficulty</label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="bg-white dark:bg-purple-900 border border-gray-300 dark:border-purple-700 text-purple-900 dark:text-purple-100 rounded-lg px-4 py-2"
            >
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>{difficulty}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Poses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPoses.map((pose) => (
          <div
            key={pose.id}
            className="bg-white dark:bg-purple-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48">
              <img
                src={pose.image}
                alt={pose.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-semibold text-white">{pose.name}</h3>
                <p className="text-gray-200 text-sm">{pose.sanskritName}</p>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  pose.difficulty === 'Beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                  pose.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                  'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                }`}>
                  {pose.difficulty}
                </span>
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-200">
                  {pose.category}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{pose.benefits}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 