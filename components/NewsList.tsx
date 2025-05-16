
import React from 'react'

const news = [
  { title: 'AI Revolution', summary: 'AI is changing the world...', source: 'BBC' },
  { title: 'Stocks Up', summary: 'Markets rallied today...', source: 'Reuters' },
  { title: 'Weather Alert', summary: 'Heavy rains expected...', source: 'CNN' },
]

export default function NewsList() {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-4">Top News</h2>
      {news.map((item, index) => (
        <div key={index} className="mb-4 p-2 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-md font-semibold">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.summary}</p>
          <span className="text-xs text-blue-500">{item.source}</span>
        </div>
      ))}
    </div>
  )
}
