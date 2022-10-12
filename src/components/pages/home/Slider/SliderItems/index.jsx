import React from 'react'
import { SLIDER_DATA } from '../../data'

function SliderItems({ slider }) {
  return (
    <>
      {SLIDER_DATA.map((elem, index) => {
        return (
          <div
            className="bg-cyan-850 w-full shrink-0 rounded-2xl break-words md:h-120 h-140 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10 lg:max-w-full lg:mx-auto gap-4 xl:gap-6 lg:gap-6"
            key={elem.id}
          >
            <div className="w-full lg:col-start-3 lg:col-span-5 md:col-start-2 md:col-span-6 col-start-1 col-span-full md:mx-0 px-6">
              <div className="md:w-145 break-words md:mt-72 mt-6">
                <div className="mb-6">
                  <h1 className="font-semibold text-5xl leading-72 text-white  break-words">
                    {elem.title}
                  </h1>
                </div>
                <ul className="ml-7.5 break-words">
                  {elem.description.map((elem, index) => (
                    <li
                      className="font-normal text-base leading-7.5 text-white marker:text-white list-disc"
                      key={index}
                    >
                      {elem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default SliderItems
