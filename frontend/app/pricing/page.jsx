'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '₹999',
    period: '/month',
    description: 'Perfect for small delivery operations',
    features: [
      'Up to 5 vehicles',
      'Route optimization',
      'Basic analytics',
      '100 routes/month',
      'Email support',
      'Standard API access',
    ],
    highlighted: false,
  },
  {
    name: 'Business',
    price: '₹4,999',
    period: '/month',
    description: 'For growing logistics businesses',
    features: [
      'Up to 50 vehicles',
      'Advanced route optimization',
      'Real-time analytics',
      'Unlimited routes',
      'Priority support',
      'Premium API access',
      'Custom integrations',
      'ESG reporting',
      'Driver eco-scoring',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'For large-scale fleet operations',
    features: [
      'Unlimited vehicles',
      'AI-powered predictions',
      'White-label dashboards',
      'Dedicated support',
      'Custom compliance',
      'Advanced integrations',
      'Data analytics suite',
      'Carbon credit system',
      'Custom workflows',
    ],
    highlighted: false,
  },
]

export default function PricingPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <main className="bg-eco-darker">
      <header className="fixed top-0 w-full z-50 glass-dark border-b border-eco-green/20">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative">
                <div className="relative bg-eco-green/10 px-3 py-1 rounded-lg border border-eco-green/50">
                  <span className="text-lg font-bold text-gradient">EcoRoute</span>
                </div>
              </div>
            </Link>
            <Link href="/" className="text-eco-green hover:text-eco-lime transition-colors">
              ← Back
            </Link>
          </div>
        </nav>
      </header>

      <div className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-white">Simple, Transparent</span>
              <br />
              <span className="text-gradient">Pricing</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the perfect plan for your business. Scale as you grow.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`relative p-8 rounded-lg border-2 transition-all duration-300 ${
                  plan.highlighted
                    ? 'card border-eco-green shadow-eco-glow-strong bg-eco-green/5 transform md:scale-105'
                    : 'card border-eco-green/30 hover:border-eco-green'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-6 right-6 bg-eco-green text-eco-dark px-3 py-1 rounded-full text-sm font-bold">
                    POPULAR
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-eco-green">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  {plan.price !== 'Custom' && (
                    <p className="text-gray-500 text-sm mt-2">Billed monthly</p>
                  )}
                </div>

                <button
                  className={`w-full py-3 font-semibold rounded-lg mb-8 transition-all ${
                    plan.highlighted
                      ? 'btn-primary'
                      : 'btn-secondary'
                  }`}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </button>

                <div className="space-y-4">
                  {plan.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-start space-x-3">
                      <Check size={20} className="text-eco-green flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-b from-eco-dark to-eco-darker rounded-lg p-8 border border-eco-green/20"
          >
            <h2 className="text-2xl font-bold mb-8 text-center text-white">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  q: 'Can I switch plans?',
                  a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.',
                },
                {
                  q: 'What is included in support?',
                  a: 'All plans include email support. Business and Enterprise plans get priority and phone support.',
                },
                {
                  q: 'Do you offer a free trial?',
                  a: '14-day free trial available for all plans. No credit card required.',
                },
                {
                  q: 'Can I use API access?',
                  a: 'API access is included with all plans at appropriate rate limits for your tier.',
                },
              ].map((item, idx) => (
                <div key={idx}>
                  <h3 className="font-semibold text-white mb-2">{item.q}</h3>
                  <p className="text-gray-400 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
