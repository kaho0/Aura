'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for beginners',
    features: [
      'Basic meditation timer',
      'Limited guided sessions',
      'Basic pose library',
      'Community support'
    ],
    buttonText: 'Get Started',
    buttonHref: '/sessions',
    popular: false
  },
  {
    name: 'Pro',
    price: '$9.99',
    period: '/month',
    description: 'For dedicated practitioners',
    features: [
      'Unlimited guided sessions',
      'Advanced meditation timer',
      'Full pose library',
      'Custom ambient sounds',
      'Progress tracking',
      'Premium support'
    ],
    buttonText: 'Start Free Trial',
    buttonHref: '/settings',
    popular: true
  },
  {
    name: 'Lifetime',
    price: '$199',
    description: 'One-time payment',
    features: [
      'All Pro features',
      'Lifetime access',
      'Priority support',
      'Early access to new features',
      'Custom meditation plans',
      'Offline access'
    ],
    buttonText: 'Get Lifetime Access',
    buttonHref: '/settings',
    popular: false
  }
];

export default function PricingSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white dark:from-purple-950 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-purple-900 dark:text-purple-100 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-purple-700 dark:text-purple-300 max-w-2xl mx-auto">
            Choose the plan that best fits your meditation journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white'
                  : 'bg-white dark:bg-purple-800'
              } shadow-lg`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white text-purple-600 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-purple-900 dark:text-purple-100'}`}>
                {plan.name}
              </h3>
              
              <div className="mb-6">
                <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-purple-900 dark:text-purple-100'}`}>
                  {plan.price}
                </span>
                {plan.period && (
                  <span className={`text-lg ${plan.popular ? 'text-white/80' : 'text-purple-700 dark:text-purple-300'}`}>
                    {plan.period}
                  </span>
                )}
              </div>
              
              <p className={`mb-6 ${plan.popular ? 'text-white/90' : 'text-purple-700 dark:text-purple-300'}`}>
                {plan.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className={`w-5 h-5 mr-2 ${plan.popular ? 'text-white' : 'text-purple-500 dark:text-purple-300'}`} />
                    <span className={plan.popular ? 'text-white/90' : 'text-purple-700 dark:text-purple-300'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Link href={plan.buttonHref}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-white text-purple-600 hover:bg-purple-50'
                      : 'bg-purple-600 text-white hover:bg-purple-700'
                  }`}
                >
                  {plan.buttonText}
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 