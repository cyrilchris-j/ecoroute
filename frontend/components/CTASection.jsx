'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-r from-eco-dark via-eco-darker to-eco-dark relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-eco-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-eco-teal/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-white">Ready to Transform Your</span>
            <br />
            <span className="text-gradient">Delivery Operations?</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join hundreds of logistics companies reducing emissions and costs with AI-powered sustainable routing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/planner" className="btn-primary flex items-center justify-center space-x-2 text-lg">
              <span>Start Free Trial</span>
              <ArrowRight size={20} />
            </Link>
            <Link href="/contact" className="btn-secondary flex items-center justify-center text-lg">
              Schedule Demo
            </Link>
          </div>

          <p className="text-gray-500 text-sm">
            No credit card required. 14-day free trial for all features.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
