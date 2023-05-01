import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addDrinkingAction } from '../store/reducers/drinkingsReducer'
import { v4 as uuid } from 'uuid'
import moment from 'moment'
import glass from '../imgs/medium-glass.svg'
import SelectVolume from './SelectVolume'
import Triangle from '../ui/Triangle'
import SelectWithSearch from '../ui/SelectWithSearch'

const AddDrinking = () => {
  const dispatch = useDispatch()
  const types = useSelector((state) => state.types)
  const volumes = useSelector((state) => state.volumes)

  const [newDrinking, setNewDrinking] = useState({
    id: uuid(),
    type: types[0],
    volume: volumes[0].name,
    day: moment().format('YYYY-MM-DD'),
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setNewDrinking({ ...newDrinking, id: uuid() })
    dispatch(addDrinkingAction(newDrinking))
  }

  const handleSelect = (value, field) => {
    setNewDrinking({ ...newDrinking, [field]: value })
  }

  return (
    <div className="absolute left-4">
      <div className="ml-5">
        <Triangle />
      </div>
      <div className="w-96 rounded-xl bg-slate-100 p-5 shadow-2xl">
        <form onSubmit={handleSubmit}>
          <SelectWithSearch
            selectItems={types}
            displayedItem={newDrinking.type}
            changeSelected={handleSelect}
            filed="type"
          />
          <select value={newDrinking.volume.name} onChange={(e) => handleSelect(e, 'volume')}>
            {volumes.map((volume) => (
              <option key={volume.name} value={volume.name}>
                {volume.name}
              </option>
            ))}
          </select>
          <input type="date" value={newDrinking.day} onChange={(e) => handleSelect(e, 'day')} />
          <div>
            <label htmlFor="today">Today</label>
            <input
              className="w-0"
              id="today"
              type="radio"
              name="date"
              value="today"
              onChange={() => setNewDrinking({ ...newDrinking, day: moment().format('YYYY-MM-DD') })}
              checked
            />
            <label htmlFor="yesterday">Yesterday</label>
            <input
              className="w-0"
              id="yesterday"
              type="radio"
              name="date"
              value="yesterday"
              onChange={() =>
                setNewDrinking({ ...newDrinking, day: moment().subtract(1, 'days').format('YYYY-MM-DD') })
              }
            />
          </div>

          <button type="submit">Add drinking</button>
          <SelectVolume />
        </form>
      </div>
    </div>
  )
}

export default AddDrinking
