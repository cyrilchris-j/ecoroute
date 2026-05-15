import '../styles/globals.css'

export const metadata = {
  title: 'EcoRoute - AI-Powered Sustainable Logistics',
  description: 'Optimize delivery routes for sustainability. Reduce emissions, fuel costs, and delivery times with AI-driven routing.',
  keywords: ['sustainable logistics', 'route optimization', 'carbon emissions', 'green delivery'],
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css' rel='stylesheet' />
      </head>
      <body className="bg-eco-darker text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
