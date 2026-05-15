'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll be in touch soon.')
    setFormData({ name: '', email: '', phone: '', company: '', message: '' })
  }

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
              <span className="text-white">Get in Touch</span>
              <br />
              <span className="text-gradient">We&apos;d Love to Hear From You</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have questions about EcoRoute? Our team is here to help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="card p-8"
            >
              <h2 className="text-2xl font-bold mb-6 text-white">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-eco-dark/50 border border-eco-green/30 rounded px-4 py-2 text-white focus:outline-none focus:border-eco-green transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-eco-dark/50 border border-eco-green/30 rounded px-4 py-2 text-white focus:outline-none focus:border-eco-green transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-eco-dark/50 border border-eco-green/30 rounded px-4 py-2 text-white focus:outline-none focus:border-eco-green transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-eco-dark/50 border border-eco-green/30 rounded px-4 py-2 text-white focus:outline-none focus:border-eco-green transition-colors"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-eco-dark/50 border border-eco-green/30 rounded px-4 py-2 text-white focus:outline-none focus:border-eco-green transition-colors resize-none"
                    placeholder="Tell us about your needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center space-x-2 py-3"
                >
                  <span>Send Message</span>
                  <Send size={18} />
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>

              {[
                {
                  icon: Mail,
                  title: 'Email',
                  value: 'hello@ecoroute.com',
                  href: 'mailto:hello@ecoroute.com',
                },
                {
                  icon: Phone,
                  title: 'Phone',
                  value: '+1 (800) ECO-ROUTE',
                  href: 'tel:+1800326786883',
                },
                {
                  icon: MapPin,
                  title: 'Address',
                  value: 'San Francisco, California, USA',
                  href: '#',
                },
              ].map((contact, idx) => (
                <motion.a
                  key={idx}
                  href={contact.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  className="card p-6 group hover:bg-eco-green/10 transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-eco-green/10 rounded-lg group-hover:bg-eco-green/20 transition-colors">
                      <contact.icon className="w-6 h-6 text-eco-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{contact.title}</h3>
                      <p className="text-gray-400">{contact.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="card p-6 bg-eco-green/5"
              >
                <h3 className="font-semibold text-white mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <p className="flex justify-between">
                    <span className="text-gray-400">Monday - Friday</span>
                    <span className="text-eco-green">9:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-gray-400">Saturday</span>
                    <span className="text-eco-green">10:00 AM - 4:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-gray-400">Sunday</span>
                    <span className="text-gray-600">Closed</span>
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
}
