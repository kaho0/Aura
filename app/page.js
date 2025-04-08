'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Lottie from 'lottie-react';
import meditationAnimation from '../public/meditation.json';
import AboutSection from './components/AboutSection';
import SessionTracker from './components/SessionTracker';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
    <HeroSection></HeroSection>

      {/* About Section */}
      <AboutSection />

      {/* Session Tracker */}
      <SessionTracker />

      {/* Testimonials */}
      <Testimonials />

      {/* Pricing */}
      <Pricing />

      {/* Footer */}
      <Footer />
    </main>
  );
}
