import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Routes API
export const routesAPI = {
  getAll: () => api.get('/routes'),
  getById: (id) => api.get(`/routes/${id}`),
  create: (data) => api.post('/routes', data),
  update: (id, data) => api.put(`/routes/${id}`, data),
  delete: (id) => api.delete(`/routes/${id}`),
}

// Vehicles API
export const vehiclesAPI = {
  getAll: () => api.get('/vehicles'),
  getById: (id) => api.get(`/vehicles/${id}`),
  create: (data) => api.post('/vehicles', data),
  update: (id, data) => api.put(`/vehicles/${id}`, data),
  delete: (id) => api.delete(`/vehicles/${id}`),
}

// Analytics API
export const analyticsAPI = {
  getAll: () => api.get('/analytics'),
  getMetric: (metric) => api.get(`/analytics/${metric}`),
  getEmissionsTrend: () => api.get('/analytics/trends/emissions'),
  getFuelTrend: () => api.get('/analytics/trends/fuel'),
}

// Optimization API
export const optimizationAPI = {
  optimizeRoutes: (data) => api.post('/optimize', data),
  calculateEmissions: (data) => api.post('/optimize/calculate/emissions', data),
}

export default api
