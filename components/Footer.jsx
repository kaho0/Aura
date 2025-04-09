'use client';

import { useState } from 'react';
import { Facebook, Twitter, Instagram, Mail, ArrowRight } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Mail, href: '#', label: 'Email' },
];

const footerLinks = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'Testimonials', 'FAQ'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Contact'],
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'Security', 'Cookie Policy'],
  },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-gradient-to-b from-purple-50 to-indigo-100 dark:from-purple-950 dark:to-indigo-950 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500 mb-4">
            Flow
            </h2>
            <p className="text-purple-800 dark:text-purple-300 mb-6">
              Find your inner peace and transform your life through meditation.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white dark:bg-purple-800 flex items-center justify-center text-purple-600 dark:text-purple-300 shadow-md hover:shadow-lg hover:bg-purple-100 dark:hover:bg-purple-700 transform hover:-translate-y-1 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-purple-900 dark:text-purple-200 mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-purple-700 dark:text-purple-300 hover:text-purple-500 dark:hover:text-purple-100 transition-colors flex items-center group"
                    >
                      <span className="relative">
                        {link}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
                      </span>
                      <ArrowRight className="w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Section */}
          <div>
            <h3 className="font-semibold text-purple-900 dark:text-purple-200 mb-3">Stay Updated</h3>
            <p className="text-purple-700 dark:text-purple-300 mb-4">
              Subscribe to our newsletter for the latest meditation tips and practices.
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-purple-200 dark:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-purple-900 dark:text-purple-100"
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-md px-4 py-1 hover:from-purple-700 hover:to-indigo-600 transition-all duration-300"
              >
                {isSubscribed ? 'Sent!' : 'Join'}
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-purple-200 dark:border-purple-800 pt-3 text-center text-purple-700 dark:text-purple-300">
          <p>© {new Date().getFullYear()} Meditation App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}