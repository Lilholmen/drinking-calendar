import React from 'react'

const DrinkingItem = ({ info, dateVisable }) => {
  return (
    <div className="bg-slate-200">
      <div className="flex justify-between gap-2 text-xl">
        <div className="w-36 px-2 font-semibold text-stone-700">{info.type}</div>
        <div className="bg-sky-700 px-2 font-bold text-stone-200">
          {info.volume}
          <span className="self-end text-xs text-stone-400">ml</span>
        </div>
      </div>
      {dateVisable && <div className="pt-2 text-center">{info.day}</div>}
    </div>
  )
}

export default DrinkingItem
