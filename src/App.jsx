import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddDrinking from './components/AddDrinking'
import DrinkingsList from './components/DrinkingsList'
import Header from './components/Header'

function App() {
  const [showAddDrinking, setShowAddDrinking] = useState(false)
  const types = useSelector((state) => state.types)
  const drinkings = useSelector((state) => state.drinkings)
  const volumes = useSelector((state) => state.volumes)

  return (
    <div className="relative min-h-screen w-full bg-slate-800">
      <Header plusAction={() => setShowAddDrinking(!showAddDrinking)} />
      {showAddDrinking && <AddDrinking />}
      <main className="w-full">
        <DrinkingsList />
      </main>
    </div>
  )
}

export default App
