'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, LogOut, User } from 'lucide-react'
import { useAuth } from './AuthProvider'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Route Planner', href: '/planner' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Fleet', href: '/fleet' },
    { label: 'About', href: '/about' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 glass-dark border-b border-eco-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-eco-green/20 blur-md rounded-lg group-hover:bg-eco-green/30 transition-all"></div>
              <div className="relative bg-eco-green/10 px-3 py-1 rounded-lg border border-eco-green/50">
                <span className="text-xl font-bold text-gradient">EcoRoute</span>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-eco-green transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons / Auth State */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt={user.displayName} className="w-6 h-6 rounded-full border border-eco-green/50" />
                  ) : (
                    <User size={18} className="text-eco-green" />
                  )}
                  <span className="text-sm font-medium text-gray-200">{user.displayName?.split(' ')[0]}</span>
                </div>
                <button 
                  onClick={logout}
                  className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                  title="Logout"
                >
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <>
                <Link href="/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                  Sign In
                </Link>
                <Link href="/login" className="btn-primary text-sm">
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-sm text-gray-300 hover:text-eco-green hover:bg-white/5 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10">
              {user ? (
                <div className="space-y-4 px-3">
                  <div className="flex items-center space-x-3">
                    <img src={user.photoURL} alt={user.displayName} className="w-8 h-8 rounded-full" />
                    <div>
                      <p className="text-sm font-medium text-white">{user.displayName}</p>
                      <p className="text-xs text-gray-400">{user.email}</p>
                    </div>
                  </div>
                  <button onClick={logout} className="btn-secondary w-full text-sm flex items-center justify-center gap-2">
                    <LogOut size={16} /> Sign Out
                  </button>
                </div>
              ) : (
                <div className="space-y-2 px-3">
                  <Link href="/login" className="block text-center py-2 text-sm text-gray-300 border border-white/10 rounded">
                    Sign In
                  </Link>
                  <Link href="/login" className="block text-center btn-primary py-2 text-sm rounded">
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
