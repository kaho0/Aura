'use client';

import { useState } from 'react';
import { Bell, Volume2, Moon, Sun, Globe } from 'lucide-react';

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-purple-900 dark:text-purple-100 mb-8">Settings</h1>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-purple-900 rounded-xl shadow-lg overflow-hidden">
          {/* Notifications */}
          <div className="p-6 border-b border-gray-200 dark:border-purple-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Bell className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                <div>
                  <h3 className="text-lg font-medium text-purple-900 dark:text-purple-100">Notifications</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Get reminders for your meditation sessions</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={notifications}
                  onChange={() => setNotifications(!notifications)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
              </label>
            </div>
          </div>

          {/* Sound Effects */}
          <div className="p-6 border-b border-gray-200 dark:border-purple-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Volume2 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                <div>
                  <h3 className="text-lg font-medium text-purple-900 dark:text-purple-100">Sound Effects</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Enable meditation bells and ambient sounds</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={soundEnabled}
                  onChange={() => setSoundEnabled(!soundEnabled)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
              </label>
            </div>
          </div>

          {/* Dark Mode */}
          <div className="p-6 border-b border-gray-200 dark:border-purple-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {darkMode ? (
                  <Moon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                ) : (
                  <Sun className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                )}
                <div>
                  <h3 className="text-lg font-medium text-purple-900 dark:text-purple-100">Dark Mode</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Toggle dark mode for better night viewing</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
              </label>
            </div>
          </div>

          {/* Language */}
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Globe className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                <div>
                  <h3 className="text-lg font-medium text-purple-900 dark:text-purple-100">Language</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Choose your preferred language</p>
                </div>
              </div>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 p-2.5 dark:bg-purple-800 dark:border-purple-700 dark:text-white"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
              </select>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-6 flex justify-end">
          <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
} 