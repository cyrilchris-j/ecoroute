'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnalyticsDashboard from '@/components/AnalyticsDashboard'
import ProtectedRoute from '@/components/ProtectedRoute'

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <main className="bg-eco-darker">
        <Navbar />
        <div className="pt-20 pb-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-2">
                <span className="text-white">Sustainability</span>
                <br />
                <span className="text-gradient">Analytics Dashboard</span>
              </h1>
              <p className="text-gray-400">Track your environmental impact and operational efficiency metrics.</p>
            </div>
            <AnalyticsDashboard />
          </div>
        </div>
        <Footer />
      </main>
    </ProtectedRoute>
  )
}
