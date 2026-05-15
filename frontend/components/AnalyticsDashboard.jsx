'use client'

import { motion } from 'framer-motion'
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { TrendingDown, Leaf, Droplet, TreePine } from 'lucide-react'

const emissionsData = [
  { week: 'W1', emissions: 450, target: 400 },
  { week: 'W2', emissions: 420, target: 400 },
  { week: 'W3', emissions: 380, target: 400 },
  { week: 'W4', emissions: 350, target: 400 },
  { week: 'W5', emissions: 340, target: 400 },
]

const fuelData = [
  { day: 'Mon', consumption: 120 },
  { day: 'Tue', consumption: 115 },
  { day: 'Wed', consumption: 108 },
  { day: 'Thu', consumption: 105 },
  { day: 'Fri', consumption: 100 },
  { day: 'Sat', consumption: 95 },
  { day: 'Sun', consumption: 98 },
]

const efficiencyData = [
  { name: 'Routes Optimized', value: 8500, fill: '#00d084' },
  { name: 'Standard Routes', value: 1500, fill: '#6b7280' },
]

export default function AnalyticsDashboard() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const stats = [
    { icon: TreePine, label: 'CO₂ Reduced', value: '2,450 kg', change: '+18%' },
    { icon: Droplet, label: 'Fuel Saved', value: '1,250 L', change: '+22%' },
    { icon: TrendingDown, label: 'Cost Saved', value: '$4,850', change: '+25%' },
    { icon: Leaf, label: 'Trees Saved', value: '89', change: '+18%' },
  ]

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="card p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
              </div>
              <div className="p-3 bg-eco-green/10 rounded-lg">
                <stat.icon className="w-6 h-6 text-eco-green" />
              </div>
            </div>
            <p className="text-eco-green text-sm font-medium">{stat.change} this month</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Emissions Trend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card p-6"
        >
          <h3 className="text-lg font-semibold mb-4">Weekly Emissions Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={emissionsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="week" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: '1px solid #00d084',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="emissions"
                stroke="#00d084"
                strokeWidth={2}
                dot={{ fill: '#00d084' }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="target"
                stroke="#6b7280"
                strokeWidth={2}
                strokeDasharray="5 5"
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Daily Fuel Consumption */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card p-6"
        >
          <h3 className="text-lg font-semibold mb-4">Daily Fuel Consumption</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={fuelData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="day" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: '1px solid #00d084',
                  borderRadius: '8px',
                }}
              />
              <Bar dataKey="consumption" fill="#00d084" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Route Efficiency */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="card p-6"
        >
          <h3 className="text-lg font-semibold mb-4">Route Optimization Rate</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={efficiencyData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                paddingAngle={2}
                dataKey="value"
              >
                {efficiencyData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: '1px solid #00d084',
                  borderRadius: '8px',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {efficiencyData.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between text-sm">
                <span className="text-gray-400">{item.name}</span>
                <span className="font-semibold text-white">{item.value.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Sustainability Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="card p-6"
        >
          <h3 className="text-lg font-semibold mb-6">Monthly Sustainability Goals</h3>
          <div className="space-y-6">
            {[
              { label: 'CO₂ Reduction', current: 78, target: 100 },
              { label: 'Fuel Efficiency', current: 85, target: 100 },
              { label: 'On-time Delivery', current: 92, target: 95 },
            ].map((goal, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">{goal.label}</span>
                  <span className="text-eco-green font-bold">{goal.current}%</span>
                </div>
                <div className="w-full bg-eco-dark rounded-full h-3">
                  <div
                    className="h-full bg-gradient-to-r from-eco-green to-eco-lime rounded-full transition-all duration-500"
                    style={{ width: `${goal.current}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
