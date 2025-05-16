
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { day: 'Mon', temp: 22 },
  { day: 'Tue', temp: 24 },
  { day: 'Wed', temp: 19 },
  { day: 'Thu', temp: 21 },
  { day: 'Fri', temp: 23 },
  { day: 'Sat', temp: 25 },
  { day: 'Sun', temp: 20 },
]

export default function WeatherCard() {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-2">7-Day Weather Forecast</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="temp" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
