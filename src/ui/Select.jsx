import React from 'react'
import { Listbox } from '@headlessui/react'

const Select = ({ selectItems, selectedItem, changeSelected }) => {
  return (
    <div className="flex-0 w-16">
      <Listbox value={selectedItem} onChange={changeSelected}>
        <div className="relative">
          <Listbox.Button className="h-full w-full items-center justify-center rounded-lg bg-white px-3 py-2">
            {selectedItem.name}
          </Listbox.Button>
          <Listbox.Options className="absolute mt-1 w-full rounded-md bg-white py-2 shadow-lg">
            {selectItems.map((item) => (
              <Listbox.Option className="px-4 py-1 hover:bg-sky-300 hover:text-slate-100" key={item.name} value={item}>
                {item.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  )
}

export default Select
