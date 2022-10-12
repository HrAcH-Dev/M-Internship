import React, { useState } from 'react'
import Image from 'next/image'

function AccordionItem({ title, description }) {
  const [showIs, setShowIs] = useState(false)

  const handleClick = () => {
    setShowIs(!showIs)
  }
  return (
    <div
      className="border-b-1 border-choco-645 cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex justify-between items-center mt-9 text-stone-1000">
        <div className="w-3/4">
          <h3 className="font-semibold text-base leading-26">{title}</h3>
        </div>
        <div
          className={`transition-all w-34 duration-500 ${
            showIs ? '-rotate-180 ' : ''
          }`}
        >
          <Image
            src={'/images/arrow-top.svg'}
            alt={'arrow-bottom'}
            width={34}
            height={34}
          />
        </div>
      </div>
      <div>
        <p
          className={`font-normal text-base leading-26 transition-height duration-500 overflow-hidden mt-5 mb-2.5 md:mb-3 ease-out md:h-42 ${
            showIs ? 'max-h-19' : 'max-h-0'
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  )
}

export default AccordionItem
