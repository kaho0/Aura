'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';
import { motion } from 'framer-motion';

const tracks = [
  {
    id: 1,
    title: 'Peaceful Rain',
    duration: '5:30',
    category: 'Nature Sounds',
    image: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=300&h=200&fit=crop',
    audioSrc: '/rain.mp3',
    practices: ['Sleep', 'Relaxation']
  },
  {
    id: 2,
    title: 'Ocean Waves',
    duration: '6:15',
    category: 'Nature Sounds',
    image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=300&h=200&fit=crop',
    audioSrc: '/wave.mp3',
    practices: ['Focus', 'Relaxation']
  },
  {
    id: 3,
    title: 'Forest Ambience',
    duration: '7:20',
    category: 'Nature Sounds',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=300&h=200&fit=crop',
    audioSrc: '/forest.mp3',
    practices: ['Mindfulness', 'Focus']
  },
  {
    id: 4,
    title: 'Zen Garden',
    duration: '8:45',
    category: 'Instrumental',
    image: 'https://images.unsplash.com/photo-1580196969807-cc6de06c05be?q=80&w=300&h=200&fit=crop',
    audioSrc: '/zen.mp3',
    practices: ['Meditation', 'Healing']
  }
];

export default function MusicPage() {
  const [playing, setPlaying] = useState<number | null>(null);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Nature Sounds', 'Instrumental'];
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const filteredTracks = activeFilter === 'All' 
    ? tracks 
    : tracks.filter(track => track.category === activeFilter);

  useEffect(() => {
    // Create audio element when a track is selected
    if (playing !== null) {
      const track = tracks.find(t => t.id === playing);
      if (track) {
        audioRef.current = new Audio(track.audioSrc);
        audioRef.current.muted = muted;
        audioRef.current.play();

        // Update progress
        audioRef.current.addEventListener('timeupdate', () => {
          if (audioRef.current) {
            setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
          }
        });

        // Loop the track
        audioRef.current.loop = true;
      }
    }

    // Cleanup function
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [playing]);

  // Update muted state
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = muted;
    }
  }, [muted]);

  const togglePlay = (id: number) => {
    if (playing === id) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setPlaying(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setPlaying(id);
    }
  };

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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center">
                <Music className="mr-3 h-8 w-8" />
                Meditation Music
              </h1>
              <p className="text-purple-100 max-w-2xl text-lg">
                Immerse yourself in soothing sounds designed to enhance your meditation 
                practice and create a peaceful atmosphere.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Now Playing Section (appears when a track is playing) */}
        {playing !== null && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="bg-white dark:bg-purple-900/40 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-purple-100 dark:border-purple-800/30">
              <h2 className="text-2xl font-semibold text-purple-800 dark:text-purple-200 mb-6 flex items-center">
                <Volume2 className="mr-2 h-6 w-6 text-purple-600 dark:text-purple-400" />
                Now Playing: {tracks.find(t => t.id === playing)?.title}
              </h2>
              
              <div className="flex items-center gap-4 mb-4">
                <button
                  onClick={() => togglePlay(playing)}
                  className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition-colors"
                >
                  <Pause size={24} />
                </button>
                
                <button
                  onClick={() => setMuted(!muted)}
                  className="text-purple-600 dark:text-purple-400 p-2 hover:bg-purple-100 dark:hover:bg-purple-800/40 rounded-full transition-colors"
                >
                  {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
                
                <div className="flex-1 h-2 bg-purple-100 dark:bg-purple-800/60 rounded-full">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                
                <span className="text-purple-800 dark:text-purple-200">
                  {tracks.find(t => t.id === playing)?.duration}
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300">
                Continue browsing music while this track plays in the background.
              </p>
            </div>
          </motion.div>
        )}
        
        {/* Category Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 flex flex-wrap gap-3"
        >
          {categories.map((category) => (
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

        {/* Music Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTracks.map((track, index) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-purple-900/40 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-purple-100/50 dark:border-purple-800/30"
            >
              <div className="relative h-48">
                <img 
                  src={track.image}
                  alt={track.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                
                {/* Track category badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-purple-600/90 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                    {track.category}
                  </span>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => togglePlay(track.id)}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="bg-purple-600/80 backdrop-blur-sm text-white p-4 rounded-full">
                    {playing === track.id ? (
                      <Pause size={24} />
                    ) : (
                      <Play size={24} />
                    )}
                  </div>
                </motion.button>
                
                {/* Track info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{track.title}</h3>
                  <div className="flex items-center justify-between text-purple-100 text-sm">
                    <span>{track.category}</span>
                    <span>{track.duration}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {track.practices.map(practice => (
                    <span 
                      key={practice} 
                      className="px-2 py-1 bg-purple-100 dark:bg-purple-800/40 text-purple-700 dark:text-purple-300 text-xs rounded-md"
                    >
                      {practice}
                    </span>
                  ))}
                </div>
                
                {/* Track progress bar (only shown when playing) */}
                {playing === track.id && (
                  <div className="mt-4">
                    <div className="h-1 bg-purple-100 dark:bg-purple-800 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"
                        style={{ width: `${progress}%` }}
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                )}
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