import React from 'react'
import { useSelector } from 'react-redux'

const DrinkingsList = () => {
  const drinkings = useSelector((state) => state.drinkings)

  return (
    <div className="bg-amber-100 flex flex-col gap-5 border-2">
      {drinkings.map((drinking) => (
        <div className="flex gap-2 border-4 border-slate-600" key={drinking.id}>
          <div>{drinking.type}</div>
          <div>{drinking.volume}</div>
          <div>{drinking.day}</div>
        </div>
      ))}
    </div>
  )
}

export default DrinkingsList
