'use client'

import { motion } from 'framer-motion'
import { MapPin, Leaf, Zap, BarChart3, Shield, Clock } from 'lucide-react'

const features = [
  {
    icon: MapPin,
    title: 'Smart Route Optimization',
    description: 'AI considers traffic, elevation, fuel type, and weather to find the most sustainable path.',
  },
  {
    icon: Leaf,
    title: 'Carbon Tracking',
    description: 'Real-time emissions monitoring and detailed impact analytics for every delivery.',
  },
  {
    icon: Zap,
    title: 'Fuel Efficiency',
    description: 'Reduce fuel consumption by up to 35% with intelligent route planning.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Comprehensive dashboards showing sustainability metrics and performance trends.',
  },
  {
    icon: Shield,
    title: 'ESG Reporting',
    description: 'Generate compliance reports for sustainability certifications and investor presentations.',
  },
  {
    icon: Clock,
    title: 'Real-time Updates',
    description: 'Live traffic integration and dynamic rerouting for maximum efficiency.',
  },
]

export default function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="section-padding bg-eco-darker relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-eco-green/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Powerful Features for</span>
            <br />
            <span className="text-gradient">Sustainable Logistics</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to optimize routes and track sustainability metrics in one platform.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="card group cursor-pointer hover:shadow-eco-glow"
            >
              <div className="mb-4 p-3 bg-eco-green/10 rounded-lg w-fit group-hover:bg-eco-green/20 transition-colors">
                <feature.icon className="w-6 h-6 text-eco-green" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
