"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=600&h=400&fit=crop",
      title: "Weight Loss Journey",
      quote: "Meditation helped me develop a healthier relationship with food and my body. Lost 20kg in 6 months!",
      author: "Sarah M.",
      location: "Toronto, Canada"
    },
    {
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&h=400&fit=crop",
      title: "Stress Management",
      quote: "Daily meditation reduced my anxiety levels significantly. I feel more in control of my emotions.",
      author: "Michael L.",
      location: "Sydney, Australia"
    },
    {
      image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=600&h=400&fit=crop",
      title: "Better Sleep",
      quote: "The guided sleep meditations helped me fall asleep faster and wake up more refreshed.",
      author: "Jamie K.",
      location: "London, UK"
    }
  ];
  
  // Auto-cycle through testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-purple-900 dark:text-purple-100 mb-4">
            Real Results from Our Community
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-purple-700 dark:text-purple-300 max-w-2xl mx-auto">
            See how meditation has transformed the lives of people just like you
          </p>
        </div>
        
        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-purple-900 rounded-2xl overflow-hidden shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent z-10"></div>
                <Image
                  src={item.image}
                  alt={`${item.author}'s transformation`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-8 relative">
                <div className="absolute -top-10 left-6 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11 9.275C11 13.076 8.599 15 5.599 15c-.953 0-1.976-.207-2.977-.56C3.432 17.022 5.102 19 8.599 19c3.75 0 7-3.75 7-9.151C15.599 5.25 13.349 2 8.599 2 4.651 2 .25 5.625.25 11.525.25 16.307 3.599 22 8.599 22c.835 0 1.625-.094 2.355-.266.551-.13.711-.582.394-1.015-.316-.433-.707-.815-1.118-1.088-.412-.273-.905-.193-1.333-.039-.286.103-.605.156-.958.156-3.290 0-5.187-3.208-5.187-8.348 0-3.721 1.794-6.643 4.647-6.643 2.853 0 3.601 2.398 3.601 4.518zM22.003 9.275C22.003 13.076 19.602 15 16.602 15c-.953 0-1.976-.207-2.977-.56.809 2.582 2.479 4.56 5.977 4.56 3.75 0 7-3.75 7-9.151C26.602 5.25 24.351 2 19.602 2c-3.949 0-8.35 3.625-8.35 9.525 0 4.782 3.35 10.475 8.35 10.475.835 0 1.625-.094 2.355-.266.551-.13.711-.582.394-1.015-.316-.433-.707-.815-1.118-1.088-.412-.273-.905-.193-1.333-.039-.286.103-.605.156-.958.156-3.290 0-5.187-3.208-5.187-8.348 0-3.721 1.794-6.643 4.647-6.643 2.853 0 3.601 2.398 3.601 4.518z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-4">
                  {item.title}
                </h3>
                <p className="text-purple-700 dark:text-purple-300 italic mb-6">
                  {item.quote}
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center">
                    <span className="text-purple-800 font-bold">{item.author[0]}</span>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-purple-900 dark:text-purple-100">{item.author}</p>
                    <p className="text-sm text-purple-600 dark:text-purple-400">{item.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Carousel View */}
        <div className="md:hidden">
          <div className="relative bg-white dark:bg-purple-900 rounded-2xl overflow-hidden shadow-xl">
            <div className="relative h-64">
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent z-10"></div>
              <Image
                src={testimonials[activeIndex].image}
                alt={`${testimonials[activeIndex].author}'s transformation`}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div className="p-8 relative">
              <div className="absolute -top-10 left-6 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11 9.275C11 13.076 8.599 15 5.599 15c-.953 0-1.976-.207-2.977-.56C3.432 17.022 5.102 19 8.599 19c3.75 0 7-3.75 7-9.151C15.599 5.25 13.349 2 8.599 2 4.651 2 .25 5.625.25 11.525.25 16.307 3.599 22 8.599 22c.835 0 1.625-.094 2.355-.266.551-.13.711-.582.394-1.015-.316-.433-.707-.815-1.118-1.088-.412-.273-.905-.193-1.333-.039-.286.103-.605.156-.958.156-3.290 0-5.187-3.208-5.187-8.348 0-3.721 1.794-6.643 4.647-6.643 2.853 0 3.601 2.398 3.601 4.518zM22.003 9.275C22.003 13.076 19.602 15 16.602 15c-.953 0-1.976-.207-2.977-.56.809 2.582 2.479 4.56 5.977 4.56 3.75 0 7-3.75 7-9.151C26.602 5.25 24.351 2 19.602 2c-3.949 0-8.35 3.625-8.35 9.525 0 4.782 3.35 10.475 8.35 10.475.835 0 1.625-.094 2.355-.266.551-.13.711-.582.394-1.015-.316-.433-.707-.815-1.118-1.088-.412-.273-.905-.193-1.333-.039-.286.103-.605.156-.958.156-3.290 0-5.187-3.208-5.187-8.348 0-3.721 1.794-6.643 4.647-6.643 2.853 0 3.601 2.398 3.601 4.518z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-4">
                {testimonials[activeIndex].title}
              </h3>
              <p className="text-purple-700 dark:text-purple-300 italic mb-6">
                {testimonials[activeIndex].quote}
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center">
                  <span className="text-purple-800 font-bold">{testimonials[activeIndex].author[0]}</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium text-purple-900 dark:text-purple-100">{testimonials[activeIndex].author}</p>
                  <p className="text-sm text-purple-600 dark:text-purple-400">{testimonials[activeIndex].location}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Carousel Controls */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-purple-600 w-6' : 'bg-purple-300'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}