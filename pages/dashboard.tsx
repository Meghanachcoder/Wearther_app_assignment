
import WeatherCard from '../components/WeatherCard'
import StockChart from '../components/StockChart'
import NewsList from '../components/NewsList'

export default function Dashboard() {
  return (
    <div className="p-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gray-100 min-h-screen">
      <WeatherCard />
      <StockChart />
      <NewsList />
    </div>
  )
}
