'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Leaf, Users, Target, Award } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <main className="bg-eco-darker">
      <Navbar />
      <div className="pt-20 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-white">About</span>
              <br />
              <span className="text-gradient">EcoRoute</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We&apos;re on a mission to transform delivery logistics into a sustainable, efficient, and profitable business.
            </p>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-400 mb-4">
                To revolutionize the logistics industry by making sustainable, eco-friendly delivery the default choice for businesses worldwide.
              </p>
              <p className="text-gray-400 mb-4">
                We believe that profitability and environmental responsibility are not mutually exclusive. With intelligent routing and real-time emissions tracking, we help businesses reduce costs while protecting the planet.
              </p>
              <p className="text-gray-400">
                Every delivery optimized through EcoRoute represents less fuel consumed, fewer emissions, and a smaller carbon footprint for our planet.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="card p-8"
            >
              <div className="space-y-6">
                {[
                  { icon: Leaf, title: 'Sustainability First', desc: 'Every decision driven by environmental impact' },
                  { icon: Users, title: 'Community Driven', desc: 'Built with input from logistics professionals' },
                  { icon: Target, title: 'Mission Focused', desc: 'Carbon reduction is our core metric' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="p-2 bg-eco-green/10 rounded-lg flex-shrink-0">
                      <item.icon className="w-5 h-5 text-eco-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Impact Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { label: 'CO₂ Reduced', value: '2,450,000 kg' },
              { label: 'Fuel Saved', value: '1,250,000 L' },
              { label: 'Routes Optimized', value: '100,000+' },
              { label: 'Partner Companies', value: '500+' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="card p-6 text-center"
              >
                <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                <p className="text-3xl font-bold text-eco-green">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Award,
                  title: 'Excellence',
                  desc: 'We deliver the best sustainable logistics technology',
                },
                {
                  icon: Target,
                  title: 'Innovation',
                  desc: 'Continuous improvement in routing and analytics',
                },
                {
                  icon: Leaf,
                  title: 'Sustainability',
                  desc: 'Environmental impact guides every decision',
                },
                {
                  icon: Users,
                  title: 'Collaboration',
                  desc: 'Working together with partners for greater impact',
                },
              ].map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="card p-6 text-center hover:border-eco-green transition-all"
                >
                  <div className="p-3 bg-eco-green/10 rounded-lg w-fit mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-eco-green" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Join the Green Logistics Revolution</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Be part of a community transforming the delivery industry into a sustainable, profitable business.
            </p>
            <Link href="/planner" className="btn-primary">
              Start Optimizing Routes Today
            </Link>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
