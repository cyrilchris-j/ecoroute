'use client'

import { motion } from 'framer-motion'
import { Truck, Zap, Gauge, Wind, MapPin, AlertCircle } from 'lucide-react'

const vehicles = [
  {
    id: 1,
    name: 'Van-001',
    type: 'Van',
    fuelType: 'Diesel',
    mileage: 45000,
    emissionFactor: 2.31,
    ecoScore: 72,
    status: 'Active',
    co2Weekly: 145,
  },
  {
    id: 2,
    name: 'EV-Bike-001',
    type: 'E-Bike',
    fuelType: 'Electric',
    mileage: 8500,
    emissionFactor: 0.05,
    ecoScore: 98,
    status: 'Active',
    co2Weekly: 2,
  },
  {
    id: 3,
    name: 'Truck-001',
    type: 'Truck',
    fuelType: 'Diesel',
    mileage: 120000,
    emissionFactor: 3.45,
    ecoScore: 58,
    status: 'Maintenance',
    co2Weekly: 240,
  },
  {
    id: 4,
    name: 'Van-002',
    type: 'Van',
    fuelType: 'Hybrid',
    mileage: 32000,
    emissionFactor: 1.5,
    ecoScore: 85,
    status: 'Active',
    co2Weekly: 98,
  },
]

export default function FleetManagement() {
  return (
    <div className="space-y-6">
      {/* Fleet Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        {[
          { icon: Truck, label: 'Total Vehicles', value: '12' },
          { icon: Zap, label: 'Electric Vehicles', value: '3' },
          { icon: Gauge, label: 'Avg Eco Score', value: '81' },
          { icon: Wind, label: 'Weekly CO₂', value: '485kg' },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="card p-6"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-eco-green">{stat.value}</p>
              </div>
              <div className="p-3 bg-eco-green/10 rounded-lg">
                <stat.icon className="w-6 h-6 text-eco-green" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Vehicle List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="card p-6"
      >
        <h3 className="text-xl font-semibold mb-6">Fleet Vehicles</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-eco-green/20">
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Vehicle</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Type</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Fuel Type</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Mileage</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Eco Score</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Status</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Weekly CO₂</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map((vehicle, idx) => (
                <motion.tr
                  key={vehicle.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + idx * 0.05 }}
                  className="border-b border-eco-green/10 hover:bg-eco-green/5 transition-colors"
                >
                  <td className="py-4 px-4 font-medium">{vehicle.name}</td>
                  <td className="py-4 px-4 text-gray-400">{vehicle.type}</td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      vehicle.fuelType === 'Electric'
                        ? 'bg-eco-green/20 text-eco-green'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {vehicle.fuelType}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-400">{vehicle.mileage.toLocaleString()} km</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-eco-dark rounded-full">
                        <div
                          className="h-full bg-eco-green rounded-full"
                          style={{ width: `${vehicle.ecoScore}%` }}
                        ></div>
                      </div>
                      <span className="text-eco-green font-semibold">{vehicle.ecoScore}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      vehicle.status === 'Active'
                        ? 'bg-eco-green/20 text-eco-green'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {vehicle.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-eco-green font-semibold">{vehicle.co2Weekly}kg</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Add Vehicle Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="btn-primary w-full py-4"
      >
        + Add New Vehicle
      </motion.button>
    </div>
  )
}
