import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addDrinkingAction } from '../store/reducers/drinkingsReducer'
import { v4 as uuid } from 'uuid'
import moment from 'moment'
import glass from '../imgs/medium-glass.svg'
import SelectVolume from './SelectVolume'
import Triangle from '../ui/Triangle'
import SelectWithSearch from '../ui/SelectWithSearch'
import Select from '../ui/Select'

const AddDrinking = () => {
  const dispatch = useDispatch()
  const types = useSelector((state) => state.types)
  const volumes = useSelector((state) => state.volumes)

  const [selectedType, setSelectedType] = useState(types[0])
  const [selectedVolume, setSelectedVolume] = useState(volumes[0])
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'))

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ id: uuid(), type: selectedType.name, volume: selectedVolume.name, day: selectedDate })
    dispatch(addDrinkingAction({ id: uuid(), type: selectedType.name, volume: selectedVolume.name, day: selectedDate }))
  }

  return (
    <div className="absolute left-4">
      <div className="ml-5">
        <Triangle />
      </div>
      <div className="w-96 rounded-xl bg-slate-100 p-5 shadow-2xl">
        <form className="flex flex-col gap-y-3" onSubmit={handleSubmit}>
          <div className="flex gap-1">
            <SelectWithSearch selectItems={types} selectedItem={selectedType} changeSelected={setSelectedType} />
            <Select selectItems={volumes} selectedItem={selectedVolume} changeSelected={setSelectedVolume} />
          </div>

          <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
          <div>
            <label htmlFor="today">Today</label>
            <input
              className="w-0"
              id="today"
              type="radio"
              name="date"
              value="today"
              onChange={() => setSelectedDate(moment().format('YYYY-MM-DD'))}
              checked
            />
            <label htmlFor="yesterday">Yesterday</label>
            <input
              className="w-0"
              id="yesterday"
              type="radio"
              name="date"
              value="yesterday"
              onChange={() => setSelectedDate(moment().subtract(1, 'days').format('YYYY-MM-DD'))}
            />
          </div>

          <SelectVolume />
          <button
            className="w-full rounded-lg bg-sky-600 py-2 font-semibold text-slate-200 transition-colors duration-100 hover:bg-sky-500 hover:text-slate-50 hover:shadow-md"
            type="submit"
          >
            Add drinking
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddDrinking
