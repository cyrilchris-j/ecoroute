'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FleetManagement from '@/components/FleetManagement'
import ProtectedRoute from '@/components/ProtectedRoute'

export default function FleetPage() {
  return (
    <ProtectedRoute>
      <main className="bg-eco-darker">
        <Navbar />
        <div className="pt-20 pb-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-2">
                <span className="text-white">Fleet</span>
                <br />
                <span className="text-gradient">Management</span>
              </h1>
              <p className="text-gray-400">Track vehicle performance and sustainability metrics across your fleet.</p>
            </div>
            <FleetManagement />
          </div>
        </div>
        <Footer />
      </main>
    </ProtectedRoute>
  )
}
