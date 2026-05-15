# EcoRoute Development Guide

## Project Setup Instructions

This is a full-stack sustainable logistics platform built with Next.js (frontend) and Express.js (backend).

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager
- Mapbox account (for map functionality)
- Git (optional)

### Installation Steps

#### 1. Frontend Setup

```bash
cd frontend
npm install
```

**Configure Environment Variables** (`frontend/.env.local`):
```
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_api_token_here
NEXT_PUBLIC_API_URL=http://localhost:5000
```

#### 2. Backend Setup

```bash
cd backend
npm install
```

**Configure Environment Variables** (`backend/.env`):
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/ecoroute
JWT_SECRET=your_jwt_secret_key_here
```

### Running the Application

**Start Backend Server** (Terminal 1):
```bash
cd backend
npm run dev
```

Expected output: `EcoRoute API server running on port 5000`

**Start Frontend Server** (Terminal 2):
```bash
cd frontend
npm run dev
```

Expected output: `http://localhost:3000` is now available

### Project Structure

```
ecoroute/
├── frontend/                 # Next.js React app
│   ├── app/
│   │   ├── layout.jsx       # Root layout
│   │   ├── page.jsx         # Home page
│   │   ├── planner/         # Route planner page
│   │   ├── dashboard/       # Analytics dashboard
│   │   ├── fleet/           # Fleet management
│   │   ├── pricing/         # Pricing page
│   │   └── contact/         # Contact page
│   ├── components/          # Reusable React components
│   ├── lib/                 # Libraries and utilities
│   ├── utils/               # Helper functions
│   ├── styles/              # Global CSS
│   ├── package.json
│   ├── next.config.js
│   └── tailwind.config.js
├── backend/                 # Express.js API server
│   ├── routes/              # API route handlers
│   ├── controllers/         # Business logic
│   ├── middleware/          # Custom middleware
│   ├── utils/               # Helper utilities
│   ├── models/              # Data models
│   ├── index.js             # Express app entry point
│   └── package.json
├── README.md
└── .gitignore
```

## Key Features Implemented

### Frontend
- ✅ Landing page with hero section
- ✅ Route optimizer with Mapbox integration
- ✅ Analytics dashboard with Recharts
- ✅ Fleet management interface
- ✅ Pricing page
- ✅ Contact form
- ✅ Responsive design
- ✅ Dark eco-tech theme
- ✅ Framer Motion animations

### Backend
- ✅ Route optimization API
- ✅ Vehicle management endpoints
- ✅ Analytics data endpoints
- ✅ Emission calculation engine
- ✅ CORS enabled
- ✅ Error handling middleware

## API Endpoints

### Routes
- `GET /api/routes` - List all routes
- `POST /api/routes` - Create new route
- `PUT /api/routes/:id` - Update route
- `DELETE /api/routes/:id` - Delete route

### Vehicles
- `GET /api/vehicles` - List all vehicles
- `POST /api/vehicles` - Add vehicle to fleet
- `PUT /api/vehicles/:id` - Update vehicle
- `DELETE /api/vehicles/:id` - Remove vehicle

### Analytics
- `GET /api/analytics` - Get all metrics
- `GET /api/analytics/:metric` - Get specific metric
- `GET /api/analytics/trends/emissions` - Emissions trend data
- `GET /api/analytics/trends/fuel` - Fuel consumption data

### Optimization
- `POST /api/optimize` - Optimize delivery routes
- `POST /api/optimize/calculate/emissions` - Calculate CO2 emissions

## Development Workflow

### Making Changes

1. **Frontend Changes**
   - Edit files in `frontend/app/` or `frontend/components/`
   - Hot reload automatically updates the browser
   - Use `npm run build` to test production build

2. **Backend Changes**
   - Edit files in `backend/routes/` or `backend/utils/`
   - Server automatically restarts with nodemon
   - Test endpoints using Postman or curl

### Building for Production

**Frontend:**
```bash
cd frontend
npm run build
npm start
```

**Backend:**
```bash
cd backend
npm start
```

## Technology Stack

### Frontend
- Next.js 14 (React framework)
- Tailwind CSS (styling)
- Framer Motion (animations)
- Mapbox GL (maps)
- Recharts (charts)
- Lucide React (icons)
- Axios (HTTP client)

### Backend
- Node.js (runtime)
- Express.js (web framework)
- CORS (cross-origin support)
- dotenv (environment variables)

## Configuration Files

### Frontend
- `next.config.js` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS theme
- `tsconfig.json` - TypeScript configuration
- `postcss.config.js` - PostCSS configuration
- `.env.local` - Environment variables

### Backend
- `.env` - Environment variables
- `package.json` - Dependencies and scripts

## Customization

### Change API URL
Update `NEXT_PUBLIC_API_URL` in `frontend/.env.local`

### Add Mapbox Token
Get your token from [mapbox.com](https://mapbox.com) and add to `frontend/.env.local`

### Update Colors
Modify Tailwind config in `frontend/tailwind.config.js`:
```js
colors: {
  'eco-green': '#00d084',
  'eco-teal': '#00d4ff',
  // ... add more colors
}
```

### Add New Routes
1. Create page in `frontend/app/newpage/page.jsx`
2. Import components
3. Add navigation link in Navbar

## Troubleshooting

### Port Already in Use
- Backend: `lsof -i :5000` then `kill -9 <PID>`
- Frontend: `lsof -i :3000` then `kill -9 <PID>`

### Mapbox Not Loading
- Check token in `.env.local`
- Ensure token has map viewing permissions

### API Not Responding
- Ensure backend server is running
- Check `NEXT_PUBLIC_API_URL` matches backend URL
- Verify CORS is enabled in backend

### Dependencies Issues
- Clear node_modules: `rm -rf node_modules`
- Reinstall: `npm install`

## Next Steps & Enhancements

1. **Database Integration**
   - Connect MongoDB or PostgreSQL
   - Implement user authentication
   - Add persistent data storage

2. **Advanced Features**
   - Real-time traffic data integration
   - Weather API integration
   - Air quality monitoring
   - Driver performance analytics

3. **Deployment**
   - Deploy frontend to Vercel
   - Deploy backend to Heroku/AWS
   - Set up CI/CD pipeline

4. **Testing**
   - Add unit tests (Jest)
   - Add E2E tests (Cypress)
   - Add API tests

5. **Performance**
   - Implement caching strategies
   - Add database indexing
   - Optimize images and assets

## Support

For questions or issues:
- Check README.md files in each directory
- Review component documentation
- Check API endpoint examples

---

**EcoRoute**: Smarter Deliveries. Lower Emissions.

Built for the modern, sustainable logistics business.
