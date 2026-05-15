const express = require('express')
const router = express.Router()

// Mock database
let vehicles = [
  {
    id: 1,
    name: 'Van-001',
    type: 'Van',
    fuelType: 'Diesel',
    mileage: 45000,
    emissionFactor: 2.31,
    ecoScore: 72,
    status: 'Active',
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
  },
]

// GET all vehicles
router.get('/', (req, res) => {
  res.json(vehicles)
})

// GET vehicle by ID
router.get('/:id', (req, res) => {
  const vehicle = vehicles.find(v => v.id === parseInt(req.params.id))
  if (!vehicle) return res.status(404).json({ message: 'Vehicle not found' })
  res.json(vehicle)
})

// POST create new vehicle
router.post('/', (req, res) => {
  const { name, type, fuelType, mileage, emissionFactor } = req.body

  const newVehicle = {
    id: vehicles.length + 1,
    name,
    type,
    fuelType,
    mileage,
    emissionFactor,
    ecoScore: 75,
    status: 'Active',
  }

  vehicles.push(newVehicle)
  res.status(201).json(newVehicle)
})

// PUT update vehicle
router.put('/:id', (req, res) => {
  const vehicle = vehicles.find(v => v.id === parseInt(req.params.id))
  if (!vehicle) return res.status(404).json({ message: 'Vehicle not found' })

  Object.assign(vehicle, req.body)
  res.json(vehicle)
})

// DELETE vehicle
router.delete('/:id', (req, res) => {
  vehicles = vehicles.filter(v => v.id !== parseInt(req.params.id))
  res.json({ message: 'Vehicle deleted' })
})

module.exports = router
