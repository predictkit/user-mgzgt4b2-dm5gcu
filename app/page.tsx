import { Header } from '@/components/header'
import { Navigation } from '@/components/navigation'
import { FilterBar } from '@/components/filter-bar'
import { PredictionGrid } from '@/components/prediction-grid'

export default function Home() {
  return (
    <div className="min-h-screen bg-background dark">
      <Header />
      <Navigation />
      <FilterBar />
      <main className="container mx-auto px-4 py-6">
        <PredictionGrid />
      </main>
    </div>
  )
}
