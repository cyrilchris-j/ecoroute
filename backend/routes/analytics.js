const express = require('express')
const router = express.Router()

// Mock analytics data
const getAnalyticsData = () => ({
  totalEmissionsSaved: 2450,
  fuelSaved: 1250,
  costSaved: 4850,
  treesSaved: 89,
  routesOptimized: 8500,
  averageEcoScore: 81,
  weeklyEmissions: [450, 420, 380, 350, 340],
  dailyFuelConsumption: [120, 115, 108, 105, 100, 95, 98],
  fleetEfficiency: {
    optimized: 8500,
    standard: 1500,
  },
  monthlyGoals: {
    co2: 78,
    fuel: 85,
    delivery: 92,
  },
})

// GET all analytics
router.get('/', (req, res) => {
  res.json(getAnalyticsData())
})

// GET specific metric
router.get('/:metric', (req, res) => {
  const data = getAnalyticsData()
  const metric = req.params.metric

  if (data[metric]) {
    res.json({ [metric]: data[metric] })
  } else {
    res.status(404).json({ message: 'Metric not found' })
  }
})

// GET emissions trend
router.get('/trends/emissions', (req, res) => {
  const data = getAnalyticsData()
  res.json({ weeklyEmissions: data.weeklyEmissions })
})

// GET fuel consumption trend
router.get('/trends/fuel', (req, res) => {
  const data = getAnalyticsData()
  res.json({ dailyFuelConsumption: data.dailyFuelConsumption })
})

module.exports = router
