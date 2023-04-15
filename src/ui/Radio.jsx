import moment from 'moment'
import React from 'react'

const Radio = ({ func, data }) => {
  return (
    <div>
      <label htmlFor="yesterday">Yesterday</label>
      <input
        className="w-0"
        id="yesterday"
        type="radio"
        name="date"
        value="yesterday"
        onChange={() => func({ ...data, day: moment().subtract(1, 'days').format('YYYY-MM-DD') })}
      />
    </div>
  )
}

export default Radio
