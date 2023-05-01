import React from 'react'

const DrinkingItem = ({ info }) => {
  return (
    <div className="flex w-56 flex-col gap-2 divide-y-2 divide-slate-400 rounded-md bg-slate-300 px-6 py-2 text-stone-700">
      <div className="flex items-start gap-4">
        <div className="rounded bg-sky-200 px-2 py-1 text-xl font-bold">{info.type}</div>
        <div className="text-5xl">{info.volume}</div>
      </div>
      <div className="pt-2 text-center">{info.day}</div>
    </div>
  )
}

export default DrinkingItem
