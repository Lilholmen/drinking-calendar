import React from 'react'
import { useSelector } from 'react-redux'
import DrinkingItem from './DrinkingItem'

const DrinkingsList = () => {
  const drinkings = useSelector((state) => state.drinkings)

  return (
    <div className="bg-amber-100 flex flex-col gap-5 border-2">
      {drinkings.map((drinking) => (
        <DrinkingItem key={drinking.id} info={drinking} />
      ))}
    </div>
  )
}

export default DrinkingsList
