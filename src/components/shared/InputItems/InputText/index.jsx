import React from 'react'

function InputItems({ types, text, placeholder }) {
  return (
    <div className="mb-12">
      <label className="pl-2.5 text-stone-1000 font-medium text-base leading-7.5">
        {text}
      </label>
      <input
        type={types}
        placeholder={placeholder}
        className="mt-1.5 py-3.5 px-4 border-2 border-gray rounded-lg w-full placeholder:text-gray-550 hover:border-cyan-850 focus:outline-none focus:border-[#008594] focus:shadow-[#008594]/40 focus:shadow-lg"
      />
    </div>
  )
}

export default InputItems
