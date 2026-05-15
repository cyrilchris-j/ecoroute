'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RouteMap from '@/components/RouteMap'
import ProtectedRoute from '@/components/ProtectedRoute'

export default function PlannerPage() {
  return (
    <ProtectedRoute>
      <main className="bg-eco-darker">
        <Navbar />
        <RouteMap />
        <Footer />
      </main>
    </ProtectedRoute>
  )
}
