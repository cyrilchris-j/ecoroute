'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import mapboxgl from 'mapbox-gl'
import { MapPin, Package, Truck, ArrowRight } from 'lucide-react'

// Set Mapbox token
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || 'pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjbGw0a3l6MGcwMDAwIn0.example'

export default function RouteMap() {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [startLocation, setStartLocation] = useState('San Francisco, CA')
  const [deliveryStops, setDeliveryStops] = useState(2)
  const [vehicleType, setVehicleType] = useState('van')

  useEffect(() => {
    if (!mapContainer.current) return

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [-122.4194, 37.7749], // San Francisco
      zoom: 12,
    })

    // Add some demo markers
    new mapboxgl.Marker({ color: '#00d084' })
      .setLngLat([-122.4194, 37.7749])
      .addTo(map.current)

    new mapboxgl.Marker({ color: '#00d4ff' })
      .setLngLat([-122.3985, 37.7849])
      .addTo(map.current)

    return () => {
      if (map.current) map.current.remove()
    }
  }, [])

  return (
    <div className="flex flex-col lg:flex-row gap-6 h-screen pt-20">
      {/* Left Panel - Controls */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-full lg:w-96 p-6 glass-dark overflow-y-auto"
      >
        <h2 className="text-2xl font-bold mb-6">Route Planner</h2>

        <div className="space-y-6">
          {/* Start Location */}
          <div>
            <label className="block text-sm font-medium mb-2">Start Location</label>
            <div className="flex items-center space-x-2 mb-2">
              <MapPin className="text-eco-green" size={20} />
              <input
                type="text"
                value={startLocation}
                onChange={(e) => setStartLocation(e.target.value)}
                className="flex-1 bg-eco-dark/50 border border-eco-green/30 rounded px-3 py-2 text-white focus:outline-none focus:border-eco-green"
                placeholder="Enter start location"
              />
            </div>
          </div>

          {/* Delivery Stops */}
          <div>
            <label className="block text-sm font-medium mb-2">Delivery Stops</label>
            <div className="flex items-center space-x-3">
              <input
                type="range"
                min="1"
                max="10"
                value={deliveryStops}
                onChange={(e) => setDeliveryStops(parseInt(e.target.value))}
                className="flex-1 h-2 bg-eco-dark rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-eco-green font-bold min-w-12">{deliveryStops}</span>
            </div>
            <p className="text-xs text-gray-400 mt-2">{deliveryStops} stops</p>
          </div>

          {/* Vehicle Type */}
          <div>
            <label className="block text-sm font-medium mb-2">Vehicle Type</label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { value: 'bike', label: '🚴 Bike' },
                { value: 'van', label: '🚐 Van' },
                { value: 'truck', label: '🚚 Truck' },
                { value: 'ev', label: '🔌 Electric' },
              ].map((vehicle) => (
                <button
                  key={vehicle.value}
                  onClick={() => setVehicleType(vehicle.value)}
                  className={`py-2 px-3 rounded border-2 transition-all text-sm font-medium ${
                    vehicleType === vehicle.value
                      ? 'border-eco-green bg-eco-green/20 text-eco-green'
                      : 'border-eco-green/30 bg-transparent text-gray-400 hover:border-eco-green/50'
                  }`}
                >
                  {vehicle.label}
                </button>
              ))}
            </div>
          </div>

          {/* Route Options */}
          <div className="pt-4 border-t border-eco-green/20">
            <h3 className="font-semibold mb-3">Route Options</h3>
            <div className="space-y-2">
              {[
                { name: 'Fastest Route', time: '25 min', eco: 45 },
                { name: 'Eco Route', time: '29 min', eco: 92 },
                { name: 'Balanced', time: '27 min', eco: 78 },
              ].map((route, idx) => (
                <button
                  key={idx}
                  className="w-full text-left p-3 glass rounded hover:border-eco-green transition-all"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">{route.name}</p>
                      <p className="text-xs text-gray-400">{route.time}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-eco-green font-bold">{route.eco}</p>
                      <p className="text-xs text-gray-400">eco score</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <button className="btn-primary w-full flex items-center justify-center space-x-2">
            <span>Optimize Route</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </motion.div>

      {/* Map Container */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex-1 relative rounded-lg overflow-hidden"
      >
        <div ref={mapContainer} className="w-full h-full" />
      </motion.div>
    </div>
  )
}
