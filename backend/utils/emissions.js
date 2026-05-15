/**
 * Emissions Calculation Module
 * Calculates CO2 emissions based on vehicle and route data
 */

const calculateCO2Emissions = (distance, fuelType, vehicleType) => {
  const emissionFactors = {
    diesel: 2.31,      // kg CO2 per liter
    petrol: 2.15,      // kg CO2 per liter
    hybrid: 1.5,       // kg CO2 per liter
    electric: 0.05,    // kg CO2 per kWh equivalent
    lng: 1.8,          // kg CO2 per liter
  }

  const fuelConsumption = {
    bike: 0.05,        // liters per km
    van: 0.08,         // liters per km
    truck: 0.12,       // liters per km
    'e-bike': 0.02,    // kWh per km
  }

  const factor = emissionFactors[fuelType] || 2.15
  const consumption = fuelConsumption[vehicleType] || 0.08

  return distance * consumption * factor
}

const calculateEcoScore = (distance, time, fuelUsed, co2, trafficDensity) => {
  // Eco score calculation (0-100)
  const distanceScore = Math.max(0, 100 - (distance / 50)) // Penalize longer distances
  const fuelScore = Math.max(0, 100 - (fuelUsed / 5) * 10) // Penalize fuel usage
  const co2Score = Math.max(0, 100 - (co2 / 10) * 10) // Penalize emissions
  const trafficScore = Math.max(0, 100 - trafficDensity * 2) // Penalize traffic

  // Weighted average
  const ecoScore = (distanceScore * 0.2 + fuelScore * 0.3 + co2Score * 0.3 + trafficScore * 0.2)

  return Math.round(Math.max(0, Math.min(100, ecoScore)))
}

const calculateFuelUsage = (distance, vehicleType) => {
  const fuelConsumption = {
    bike: 0.05,
    van: 0.08,
    truck: 0.12,
    'e-bike': 0.02,
  }

  const consumption = fuelConsumption[vehicleType] || 0.08
  return distance * consumption
}

module.exports = {
  calculateCO2Emissions,
  calculateEcoScore,
  calculateFuelUsage,
}
