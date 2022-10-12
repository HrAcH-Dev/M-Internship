import React from 'react'
import Button from '../../../Button'

function InputArea() {
  return (
    <div>
      <div className="mb-12">
        <label className="pl-2.5 text-stone-1000 font-medium text-base leading-7.5">
          Message
        </label>
        <textarea
          className="mt-1 w-full h-44 rounded-lg border-2 border-gray-350 pt-3.5 pl-4 hover:border-cyan-850 focus:outline-none focus:border-cyan-850 focus:shadow-cyan-850/40 focus:shadow-lg"
          placeholder="Message"
        />
      </div>
      <div className="flex justify-end">
        <Button text={'Submit'} />
      </div>
    </div>
  )
}

export default InputArea
