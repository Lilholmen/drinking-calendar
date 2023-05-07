import { useState } from 'react'
import AddDrinking from './components/AddDrinking'
import DrinkingsList from './components/DrinkingsList'
import Header from './components/Header'

function App() {
  const [showAddDrinking, setShowAddDrinking] = useState(false)

  return (
    <div className="relative min-h-screen w-full bg-sky-100">
      <Header plusAction={() => setShowAddDrinking(!showAddDrinking)} />
      {showAddDrinking && <AddDrinking />}
      <main className="w-full py-6">
        <DrinkingsList />
      </main>
    </div>
  )
}

export default App
