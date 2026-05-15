/**
 * Formatting utilities
 */

export const formatNumber = (num, decimals = 0) => {
  return num.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

export const formatDistance = (km) => {
  return `${formatNumber(km, 1)} km`
}

export const formatTime = (minutes) => {
  if (minutes < 60) {
    return `${minutes} min`
  }
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  return `${hours}h ${mins}min`
}

export const formatCO2 = (kg) => {
  return `${formatNumber(kg, 1)} kg CO₂`
}

export const formatFuel = (liters) => {
  return `${formatNumber(liters, 1)}L`
}

/**
 * Validation utilities
 */

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

export const validatePhone = (phone) => {
  const regex = /^[\d\s\-\+\(\)]{10,}$/
  return regex.test(phone)
}

/**
 * Color utilities for eco scores
 */

export const getEcoScoreColor = (score) => {
  if (score >= 80) return '#00d084' // Green
  if (score >= 60) return '#fbbf24' // Yellow
  if (score >= 40) return '#f97316' // Orange
  return '#ef4444' // Red
}

export const getEcoScoreLabel = (score) => {
  if (score >= 80) return 'Excellent'
  if (score >= 60) return 'Good'
  if (score >= 40) return 'Fair'
  return 'Poor'
}
