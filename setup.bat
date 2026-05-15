@echo off
REM EcoRoute Setup Script for Windows
REM This script installs all dependencies for both frontend and backend

echo.
echo 🌱 EcoRoute Setup Script
echo ======================================

REM Check if Node.js is installed
node -v >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js 18 or higher.
    exit /b 1
)

echo ✅ Node.js version: 
node -v
echo ✅ npm version: 
npm -v

REM Install frontend dependencies
echo.
echo 📦 Installing frontend dependencies...
cd frontend
call npm install
if errorlevel 1 (
    echo ❌ Failed to install frontend dependencies
    cd ..
    exit /b 1
)
echo ✅ Frontend dependencies installed
cd ..

REM Install backend dependencies
echo.
echo 📦 Installing backend dependencies...
cd backend
call npm install
if errorlevel 1 (
    echo ❌ Failed to install backend dependencies
    cd ..
    exit /b 1
)
echo ✅ Backend dependencies installed
cd ..

echo.
echo ======================================
echo ✅ Setup complete!
echo.
echo Next steps:
echo 1. Add your Mapbox token to: frontend\.env.local
echo 2. Start backend: cd backend ^&^& npm run dev
echo 3. Start frontend: cd frontend ^&^& npm run dev
echo.
echo Frontend: http://localhost:3000
echo Backend: http://localhost:5000
