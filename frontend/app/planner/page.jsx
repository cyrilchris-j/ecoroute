import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RouteMap from '@/components/RouteMap'

export const metadata = {
  title: 'Route Planner - EcoRoute',
  description: 'Optimize your delivery routes for sustainability and efficiency.',
}

export default function PlannerPage() {
  return (
    <main className="bg-eco-darker">
      <Navbar />
      <RouteMap />
      <Footer />
    </main>
  )
}
