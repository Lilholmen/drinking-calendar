import { useState } from 'react'
import full from '../imgs/full-glass.svg'
import low from '../imgs/low-glass.svg'
import medium from '../imgs/medium-glass.svg'

const SelectVolume = () => {
  const [volume, setVolume] = useState(full)
  return (
    <div className="relative w-52">
      <div className="absolute flex flex-col justify-around h-full items-end w-full">
        <div
          className="w-1/3 border-slate-800 border-t-2 border-dashed text-end hover:bg-slate-50"
          onMouseEnter={() => setVolume(full)}
        >
          0.5
        </div>
        <div
          className="w-1/3 border-slate-800 border-t-2 border-dashed text-end"
          onMouseEnter={() => setVolume(medium)}
        >
          0.33
        </div>
        <div className="w-1/3 border-slate-800 border-t-2 border-dashed text-end" onMouseEnter={() => setVolume(low)}>
          0.25
        </div>
      </div>
      <div className="w-32 h-32">
        <img src={volume} alt="full" />
      </div>
    </div>
  )
}

export default SelectVolume
