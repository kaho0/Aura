'use client';

import { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface TimerProps {
  defaultMinutes?: number;
}

export default function Timer({ defaultMinutes = 10 }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(defaultMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedTime, setSelectedTime] = useState(defaultMinutes);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      // Play sound when timer ends
      const audio = new Audio('/meditation-bell.mp3');
      audio.play();
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(selectedTime * 60);
  };

  const handleTimeChange = (minutes: number) => {
    setSelectedTime(minutes);
    setTimeLeft(minutes * 60);
    setIsRunning(false);
  };

  return (
    <div className="bg-white dark:bg-purple-900 rounded-xl shadow-lg p-6 max-w-sm mx-auto">
      <div className="text-center">
        <div className="text-6xl font-bold mb-8 text-purple-700 dark:text-purple-300">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => handleTimeChange(5)}
            className={`px-4 py-2 rounded-lg ${
              selectedTime === 5
                ? 'bg-purple-600 text-white'
                : 'bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-300'
            }`}
          >
            5 min
          </button>
          <button
            onClick={() => handleTimeChange(10)}
            className={`px-4 py-2 rounded-lg ${
              selectedTime === 10
                ? 'bg-purple-600 text-white'
                : 'bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-300'
            }`}
          >
            10 min
          </button>
          <button
            onClick={() => handleTimeChange(15)}
            className={`px-4 py-2 rounded-lg ${
              selectedTime === 15
                ? 'bg-purple-600 text-white'
                : 'bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-300'
            }`}
          >
            15 min
          </button>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={toggleTimer}
            className="p-4 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
          >
            {isRunning ? <Pause size={24} /> : <Play size={24} />}
          </button>
          <button
            onClick={resetTimer}
            className="p-4 rounded-full bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-700 transition-colors"
          >
            <RotateCcw size={24} />
          </button>
        </div>
      </div>
    </div>
  );
} 