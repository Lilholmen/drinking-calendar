import { useDispatch, useSelector } from 'react-redux'
import AddDrinking from './components/AddDrinking'
import DrinkingsList from './components/DrinkingsList'

function App() {
  const types = useSelector((state) => state.types)
  const drinkings = useSelector((state) => state.drinkings)
  const volumes = useSelector((state) => state.volumes)

  return (
    <div className="w-full min-h-screen bg-slate-700">
      <AddDrinking />
      <DrinkingsList />
    </div>
  )
}

export default App
