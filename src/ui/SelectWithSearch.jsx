import React, { useState } from 'react'
import { Combobox } from '@headlessui/react'

const SelectWithSearch = ({ selectItems, selectedItem, changeSelected }) => {
  const [query, setQuery] = useState('')

  const filteredItems =
    query === ''
      ? selectItems
      : selectItems.filter((item) => {
          return item.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <div className="w-3/4">
      <Combobox value={selectedItem} onChange={changeSelected}>
        <div className="relative">
          <div className="relative">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 focus:outline-none focus:ring-0"
              onChange={(event) => setQuery(event.target.value)}
              displayValue={(item) => item.name}
            />
            <Combobox.Button className="absolute inset-y-0 right-1 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                />
              </svg>
            </Combobox.Button>
          </div>
          <Combobox.Options className="absolute mt-1 w-full rounded-lg bg-white py-1">
            {filteredItems.map((item) => (
              <Combobox.Option className="px-4 py-1 hover:bg-sky-300" key={item.name} value={item}>
                {item.name}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </div>
      </Combobox>
    </div>
  )
}

export default SelectWithSearch
