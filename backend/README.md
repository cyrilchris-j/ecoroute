# EcoRoute Backend API

Express.js backend server for EcoRoute sustainable logistics platform.

## Quick Start

```bash
npm install
npm run dev
```

Server runs on `http://localhost:5000`

## API Routes

### Health Check
- `GET /health` - Server status

### Routes
- `GET /api/routes` - Get all routes
- `GET /api/routes/:id` - Get route by ID
- `POST /api/routes` - Create route
- `PUT /api/routes/:id` - Update route
- `DELETE /api/routes/:id` - Delete route

### Vehicles
- `GET /api/vehicles` - Get all vehicles
- `GET /api/vehicles/:id` - Get vehicle by ID
- `POST /api/vehicles` - Add vehicle
- `PUT /api/vehicles/:id` - Update vehicle
- `DELETE /api/vehicles/:id` - Delete vehicle

### Analytics
- `GET /api/analytics` - Get all analytics
- `GET /api/analytics/:metric` - Get specific metric
- `GET /api/analytics/trends/emissions` - Emissions trend
- `GET /api/analytics/trends/fuel` - Fuel consumption trend

### Optimization
- `POST /api/optimize` - Optimize routes
- `POST /api/optimize/calculate/emissions` - Calculate emissions

## Environment Variables

```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/ecoroute
JWT_SECRET=your_secret_key
```

## Dependencies

- express - Web framework
- cors - Cross-origin resource sharing
- dotenv - Environment variables
- axios - HTTP client

## Development

```bash
npm run dev  # Start with nodemon
npm start    # Start production server
```

---

**EcoRoute**: Smarter Deliveries. Lower Emissions.
