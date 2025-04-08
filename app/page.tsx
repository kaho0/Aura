'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Moon, Sun, Menu, X, Play, Activity, Music, Settings, Facebook, Twitter, Instagram } from 'lucide-react';
import FeaturesSection from '../components/FeaturesSection';
import PricingSection from '../components/PricingSection';
import HeroSection from '../components/HeroSection';
import TestimonialSection from '@/components/TestimonialSection';
import Footer from '@/components/Footer';
import Navigation from './components/Navigation';

const quotes = [
  {
    text: "Peace begins with a smile.",
    author: "Mother Teresa",
    category: "Mindfulness"
  },
  {
    text: "The present moment is filled with joy and happiness. If you are attentive, you will see it.",
    author: "Thich Nhat Hanh",
    category: "Presence"
  },
  {
    text: "In the midst of movement and chaos, keep stillness inside of you.",
    author: "Deepak Chopra",
    category: "Calm"
  }
];

export default function Home() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[randomIndex]);
    }, 24 * 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212]">
      <Navigation></Navigation>
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-900/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-800/20 blur-3xl animate-pulse" />
        <div className="absolute top-3/4 left-1/3 w-48 h-48 rounded-full bg-purple-700/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-3/4 right-1/3 w-32 h-32 rounded-full bg-purple-600/20 blur-3xl animate-pulse" />
      </div>

      {/* Main Content */}
      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <TestimonialSection></TestimonialSection>
      </main>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}