import React from 'react'
import { useSelector } from 'react-redux'
import DrinkingItem from './DrinkingItem'

const DrinkingsList = () => {
  const drinkings = useSelector((state) => state.drinkings)

  return (
    <div className="container m-auto shadow-xl">
      <div className="w-full rounded-t-xl bg-stone-700 px-8">
        <button className="px-2 py-1 text-slate-200 hover:bg-red-700">today</button>
        <button className="px-2 py-1 text-slate-200 hover:bg-red-700">week</button>
        <button className="px-2 py-1 text-slate-200 hover:bg-red-700">month</button>
      </div>
      {drinkings.length ? (
        <div className="flex w-full flex-col items-start gap-3 bg-slate-100 p-2">
          {drinkings.map((drinking) => (
            <DrinkingItem key={drinking.id} info={drinking} />
          ))}
        </div>
      ) : (
        <div className="flex h-full items-center justify-center py-8 text-5xl text-stone-500">Add drinkings</div>
      )}
    </div>
  )
}

export default DrinkingsList
