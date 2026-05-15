const express = require('express')
const router = express.Router()

// Mock database
let routes = [
  {
    id: 1,
    startLocation: 'San Francisco, CA',
    endLocation: 'Oakland, CA',
    distance: 25.5,
    fuelUsed: 2.04,
    co2Emission: 4.7,
    ecoScore: 72,
    createdAt: new Date(),
  },
]

// GET all routes
router.get('/', (req, res) => {
  res.json(routes)
})

// GET route by ID
router.get('/:id', (req, res) => {
  const route = routes.find(r => r.id === parseInt(req.params.id))
  if (!route) return res.status(404).json({ message: 'Route not found' })
  res.json(route)
})

// POST create new route
router.post('/', (req, res) => {
  const { startLocation, endLocation, distance, fuelUsed, co2Emission, ecoScore } = req.body

  const newRoute = {
    id: routes.length + 1,
    startLocation,
    endLocation,
    distance,
    fuelUsed,
    co2Emission,
    ecoScore,
    createdAt: new Date(),
  }

  routes.push(newRoute)
  res.status(201).json(newRoute)
})

// PUT update route
router.put('/:id', (req, res) => {
  const route = routes.find(r => r.id === parseInt(req.params.id))
  if (!route) return res.status(404).json({ message: 'Route not found' })

  Object.assign(route, req.body)
  res.json(route)
})

// DELETE route
router.delete('/:id', (req, res) => {
  routes = routes.filter(r => r.id !== parseInt(req.params.id))
  res.json({ message: 'Route deleted' })
})

module.exports = router
