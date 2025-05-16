
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const stockData = [
  { time: '09:00', price: 140 },
  { time: '10:00', price: 142 },
  { time: '11:00', price: 141 },
  { time: '12:00', price: 144 },
  { time: '13:00', price: 143 },
]

export default function StockChart() {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-2">AAPL Stock Price</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={stockData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#4ade80" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
