import React, { useState } from 'react'
import { Combobox } from '@headlessui/react'

const SelectWithSearch = ({ selectItems, displayedItem, changeSelected, field }) => {
  const [query, setQuery] = useState('')

  const filteredItems =
    query === ''
      ? selectItems
      : selectItems.filter((item) => {
          return item.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Combobox value={displayedItem} onChange={(value) => changeSelected(value, field)}>
      <Combobox.Input
        className="w-full border-none py-2 pl-3 pr-10 focus:outline-none focus:ring-0"
        onChange={(event) => setQuery(event.target.value)}
      />
      <Combobox.Options className="bg-teal-700">
        {filteredItems.map((item) => (
          <Combobox.Option key={item} value={item}>
            {item}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  )
}

export default SelectWithSearch
