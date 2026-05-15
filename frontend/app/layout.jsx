import { AuthProvider } from '../components/AuthProvider';
import InstallPrompt from '../components/InstallPrompt';
import '../styles/globals.css'

export const metadata = {
  title: 'EcoRoute - AI-Powered Sustainable Logistics',
  description: 'Optimize delivery routes for sustainability. Reduce emissions, fuel costs, and delivery times with AI-driven routing.',
  keywords: ['sustainable logistics', 'route optimization', 'carbon emissions', 'green delivery'],
  manifest: '/manifest.json',
  themeColor: '#10b981',
  openGraph: {
    title: 'EcoRoute - AI-Powered Sustainable Logistics',
    description: 'Smarter Deliveries. Lower Emissions.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css' rel='stylesheet' />
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      <body className="bg-eco-darker text-white overflow-x-hidden">
        <AuthProvider>
          <InstallPrompt />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
