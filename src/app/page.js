import Header from '@/components/Header'
import GameFilters from '@/components/GameFilters'
import GameGrid from '@/components/GameGrid'
import Categories from '@/components/Categories'
import Footer from '@/components/Footer'
import { GameProvider } from '@/components/GameContext'

export default function Home() {
  return (
    <GameProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <GameFilters />
          <GameGrid />
          <Categories />
        </main>
        <Footer />
      </div>
    </GameProvider>
  )
}
