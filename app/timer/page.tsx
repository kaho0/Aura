'use client';

import Timer from '../components/Timer';

export default function TimerPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-purple-900 dark:text-purple-100 mb-8">Meditation Timer</h1>
      
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-300 text-center text-lg">
            Set your meditation duration and focus on your practice. 
            The timer will gently notify you when your session is complete.
          </p>
        </div>

        <Timer defaultMinutes={10} />

        <div className="mt-12 space-y-6">
          <div className="bg-white dark:bg-purple-900 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-4">Tips for Your Practice</h2>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>• Find a quiet, comfortable place to sit</li>
              <li>• Keep your back straight but not rigid</li>
              <li>• Focus on your breath</li>
              <li>• Let thoughts come and go without judgment</li>
              <li>• Start with shorter sessions and gradually increase duration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 