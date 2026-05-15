'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Globe, TrendingDown, Zap } from 'lucide-react'

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-eco-green/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-10 w-96 h-96 bg-eco-teal/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-eco-purple/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="glass px-4 py-2 inline-flex items-center space-x-2">
              <div className="w-2 h-2 bg-eco-green rounded-full animate-pulse"></div>
              <span className="text-eco-green text-sm font-semibold">AI-Powered Sustainable Routing</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-white">Smarter Deliveries.</span>
            <br />
            <span className="text-gradient">Lower Emissions.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            AI-powered sustainable logistics optimization for modern businesses. Reduce carbon emissions, fuel costs, and delivery times with intelligent routing.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Link href="/planner" className="btn-primary flex items-center justify-center space-x-2 text-lg">
              <span>Optimize Route</span>
              <ArrowRight size={20} />
            </Link>
            <Link href="/dashboard" className="btn-secondary flex items-center justify-center space-x-2 text-lg">
              <span>View Dashboard</span>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 pt-12 max-w-2xl mx-auto"
          >
            {[
              { icon: Globe, label: 'Routes Optimized', value: '10K+' },
              { icon: TrendingDown, label: 'CO₂ Reduced', value: '500T' },
              { icon: Zap, label: 'Fuel Saved', value: '50K L' },
            ].map((stat, idx) => (
              <div key={idx} className="glass p-4 rounded-lg">
                <stat.icon className="w-6 h-6 text-eco-green mx-auto mb-2" />
                <p className="text-sm text-gray-400">{stat.label}</p>
                <p className="text-2xl font-bold text-eco-green">{stat.value}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
