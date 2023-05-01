import React from 'react'

const Header = ({ plusAction }) => {
  return (
    <header className="flex w-full justify-center bg-sky-200 py-2">
      <button
        className="absolute left-9 flex h-9 w-9 items-center justify-center rounded-full bg-slate-700"
        onClick={plusAction}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="h-7 w-7 text-slate-50"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
      <h1 className="text-3xl text-slate-700">Drinking Calendar</h1>
    </header>
  )
}

export default Header
