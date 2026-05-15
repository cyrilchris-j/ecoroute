'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Fleet Manager, DeliverFast',
    image: '👩‍💼',
    text: 'EcoRoute reduced our fuel costs by 32% in just 3 months. Our drivers love how the app integrates with their existing workflows.',
    rating: 5,
  },
  {
    name: 'Marcus Williams',
    role: 'CEO, Green Logistics Co.',
    image: '👨‍💼',
    text: 'The sustainability reports have helped us achieve our ESG goals. Our clients specifically request EcoRoute-optimized deliveries now.',
    rating: 5,
  },
  {
    name: 'Priya Patel',
    role: 'Operations Director, EcoCourier',
    image: '👩‍💼',
    text: 'The real-time traffic integration and predictive analytics are game-changers. We\'ve cut our delivery times and emissions simultaneously.',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-eco-darker relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-eco-purple/5 rounded-full blur-3xl -translate-x-1/2"></div>
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
            <span className="text-white">Trusted by</span>
            <br />
            <span className="text-gradient">Leading Logistics Companies</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="card p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-eco-green text-eco-green" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 italic">&quot;{testimonial.text}&quot;</p>

              <div className="flex items-center space-x-4 pt-4 border-t border-eco-green/20">
                <div className="text-3xl">{testimonial.image}</div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
