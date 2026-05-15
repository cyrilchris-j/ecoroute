'use client'

import { motion } from 'framer-motion'
import { Check, Gauge, Droplet, TreePine } from 'lucide-react'

const routes = [
  {
    name: 'Fastest Route',
    time: '25 mins',
    fuel: '2.3L',
    co2: '5.1kg',
    ecoScore: 45,
    tag: 'Default',
  },
  {
    name: 'Eco Route',
    time: '29 mins',
    fuel: '1.4L',
    co2: '3.0kg',
    ecoScore: 92,
    tag: 'Recommended',
    highlighted: true,
  },
  {
    name: 'Balanced Route',
    time: '27 mins',
    fuel: '1.8L',
    co2: '4.1kg',
    ecoScore: 78,
    tag: 'Alternative',
  },
]

export default function ComparisonSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-eco-darker to-eco-dark relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Multiple Route Options</span>
            <br />
            <span className="text-gradient">Choose Your Priority</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Compare speed, efficiency, and sustainability metrics for every delivery route.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {routes.map((route, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative p-6 rounded-lg border-2 transition-all duration-300 ${
                route.highlighted
                  ? 'card border-eco-green shadow-eco-glow-strong bg-eco-green/5'
                  : 'card border-eco-green/30 hover:border-eco-green'
              }`}
            >
              {route.highlighted && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-eco-green text-eco-dark text-xs font-bold rounded-full">
                    {route.tag}
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold mb-6 text-white pt-4">{route.name}</h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Duration</span>
                  <span className="text-eco-green font-semibold">{route.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Droplet size={16} className="text-blue-400" />
                    <span className="text-gray-400 text-sm">Fuel Usage</span>
                  </div>
                  <span className="font-semibold">{route.fuel}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <TreePine size={16} className="text-eco-green" />
                    <span className="text-gray-400 text-sm">CO₂ Emissions</span>
                  </div>
                  <span className="font-semibold">{route.co2}</span>
                </div>
              </div>

              <div className="pt-6 border-t border-eco-green/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Eco Score</span>
                  <span className="text-lg font-bold text-eco-green">{route.ecoScore}/100</span>
                </div>
                <div className="w-full bg-eco-dark rounded-full h-2">
                  <div
                    className="h-full bg-gradient-to-r from-eco-green to-eco-lime rounded-full transition-all duration-500"
                    style={{ width: `${route.ecoScore}%` }}
                  ></div>
                </div>
              </div>

              {route.highlighted && (
                <button className="btn-primary w-full mt-6 flex items-center justify-center space-x-2">
                  <Check size={18} />
                  <span>Choose This Route</span>
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
