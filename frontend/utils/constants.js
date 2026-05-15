/**
 * Constants for the application
 */

export const VEHICLE_TYPES = {
  BIKE: 'bike',
  VAN: 'van',
  TRUCK: 'truck',
  EV_BIKE: 'e-bike',
}

export const FUEL_TYPES = {
  DIESEL: 'diesel',
  PETROL: 'petrol',
  HYBRID: 'hybrid',
  ELECTRIC: 'electric',
  LNG: 'lng',
}

export const ROUTE_TYPES = {
  FASTEST: 'fastest',
  CHEAPEST: 'cheapest',
  ECO: 'eco',
}

export const VEHICLE_LABELS = {
  bike: '🚴 Bike',
  van: '🚐 Van',
  truck: '🚚 Truck',
  'e-bike': '🔌 Electric',
}

export const FUEL_LABELS = {
  diesel: 'Diesel',
  petrol: 'Petrol',
  hybrid: 'Hybrid',
  electric: 'Electric',
  lng: 'LNG',
}

export const EMISSION_FACTORS = {
  diesel: 2.31,
  petrol: 2.15,
  hybrid: 1.5,
  electric: 0.05,
  lng: 1.8,
}

export const FUEL_CONSUMPTION = {
  bike: 0.05,
  van: 0.08,
  truck: 0.12,
  'e-bike': 0.02,
}

export const SUBSCRIPTION_PLANS = [
  {
    name: 'Starter',
    price: 999,
    period: 'month',
    vehicles: 5,
    routes: 100,
  },
  {
    name: 'Business',
    price: 4999,
    period: 'month',
    vehicles: 50,
    routes: 'Unlimited',
  },
  {
    name: 'Enterprise',
    price: null,
    period: 'custom',
    vehicles: 'Unlimited',
    routes: 'Unlimited',
  },
]
