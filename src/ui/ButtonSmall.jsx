import React from 'react'

const ButtonSmall = ({ children, action }) => (
  <button
    className="rounded-md bg-sky-300 px-2 py-1 text-xs font-semibold text-slate-700 transition-colors duration-100 hover:bg-sky-200 hover:text-slate-600"
    type="button"
    onClick={action}
  >
    {children}
  </button>
)

export default ButtonSmall
