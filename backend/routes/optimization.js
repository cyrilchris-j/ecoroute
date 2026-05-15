const express = require('express')
const router = express.Router()
const { generateMultipleRoutes } = require('../utils/routeOptimizer')
const { calculateCO2Emissions, calculateEcoScore, calculateFuelUsage } = require('../utils/emissions')

// POST optimize route
router.post('/', (req, res) => {
  try {
    const { startLocation, stops, vehicleType } = req.body

    if (!startLocation || !stops || !vehicleType) {
      return res.status(400).json({ message: 'Missing required fields' })
    }

    // Generate multiple route options
    const routes = generateMultipleRoutes(startLocation, stops, vehicleType)

    // Calculate metrics for each route
    const routesWithMetrics = routes.map(route => {
      const fuelUsed = calculateFuelUsage(route.distance, vehicleType)
      const co2 = calculateCO2Emissions(route.distance, 'diesel', vehicleType)
      const ecoScore = calculateEcoScore(route.distance, route.estimatedTime, fuelUsed, co2, Math.random() * 100)

      return {
        ...route,
        fuelUsed: Math.round(fuelUsed * 100) / 100,
        co2Emission: Math.round(co2 * 100) / 100,
        ecoScore,
      }
    })

    res.json({
      success: true,
      routes: routesWithMetrics,
      message: 'Routes optimized successfully',
    })
  } catch (error) {
    res.status(500).json({ message: 'Error optimizing routes', error: error.message })
  }
})

// POST calculate emissions
router.post('/calculate/emissions', (req, res) => {
  try {
    const { distance, fuelType, vehicleType } = req.body

    if (!distance || !fuelType || !vehicleType) {
      return res.status(400).json({ message: 'Missing required fields' })
    }

    const co2 = calculateCO2Emissions(distance, fuelType, vehicleType)
    const fuel = calculateFuelUsage(distance, vehicleType)

    res.json({
      success: true,
      distance,
      fuelType,
      vehicleType,
      fuelUsed: Math.round(fuel * 100) / 100,
      co2Emission: Math.round(co2 * 100) / 100,
    })
  } catch (error) {
    res.status(500).json({ message: 'Error calculating emissions', error: error.message })
  }
})

module.exports = router
