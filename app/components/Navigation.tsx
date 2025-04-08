'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Heart, Moon, Sun, Search } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // This would be connected to your actual dark mode implementation
  };

  const navItems = [
    { href: '/sessions', label: 'Sessions' },
    { href: '/music', label: 'Music' },
    { href: '/poses', label: 'Poses' },
    { href: '/settings', label: 'Settings' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-purple-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative">
              <Heart className="h-8 w-8 text-purple-600 dark:text-purple-400 fill-purple-100" />
            </div>
            <span className="text-xl font-semibold text-purple-700 dark:text-purple-300">Flow</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg ${
                    isActive
                      ? 'bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-100'
                      : 'text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-800/70'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Search Button */}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-800/70 rounded-lg"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-800/70 rounded-lg"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-purple-700 dark:text-purple-300"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            
            <button
              onClick={toggleDarkMode}
              className="p-2 text-purple-700 dark:text-purple-300"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-purple-700 dark:text-purple-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="border-t border-gray-200 dark:border-purple-800 py-3 px-4 bg-white dark:bg-purple-900">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-purple-700 bg-white dark:bg-purple-800 dark:text-white"
                autoFocus
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-purple-400" />
              <button 
                className="absolute right-3 top-2 text-gray-500 dark:text-purple-300"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-purple-900 border-t border-gray-200 dark:border-purple-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-white'
                      : 'text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-800/70'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="px-4 py-3 border-t border-gray-200 dark:border-purple-800">
            <a 
              href="#" 
              className="block w-full text-center py-2 px-4 rounded-md bg-purple-600 text-white font-medium hover:bg-purple-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Start Meditating
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}