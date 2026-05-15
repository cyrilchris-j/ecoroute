require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { errorHandler } = require('./middleware/errorHandler')
const routeRoutes = require('./routes/routes')
const vehicleRoutes = require('./routes/vehicles')
const analyticsRoutes = require('./routes/analytics')
const optimizationRoutes = require('./routes/optimization')

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/routes', routeRoutes)
app.use('/api/vehicles', vehicleRoutes)
app.use('/api/analytics', analyticsRoutes)
app.use('/api/optimize', optimizationRoutes)

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'EcoRoute API is running' })
})

// Error handling
app.use(errorHandler)

// Start server
app.listen(PORT, () => {
  console.log(`EcoRoute API server running on port ${PORT}`)
})

module.exports = app
