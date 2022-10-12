import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import style from './style.module.scss'
import { COUNTRY_DATA } from '../../../../pages/contact/data'

function InputCountry() {
  const inpRef = useRef(null)
  const [countryShow, setCountryShow] = useState(false)
  const [text, setText] = useState('')
  const [currentCountry, setCurrentCountry] = useState({
    id: 2,
    name: 'America',
    flag: '/images/america-icon.svg',
    code: '+1',
  })

  useEffect(() => {
    inpRef.current.addEventListener('keydown', (event) => {
      if (event.code === 'KeyE') {
        event.preventDefault()
      }
    })
  }, [inpRef])

  const handleToogle = () => {
    setCountryShow(!countryShow)
    console.log(countryShow)
  }

  const handleClick = (item) => {
    setCurrentCountry(item)
    setCountryShow(false)
  }

  return (
    <div className="h-40">
      <label className="pl-2.5 text-stone-1000 font-medium text-base leading-7.5">
        Phone
      </label>
      <div className="w-full border-2 border-gray-350 py-4 px-3.5 flex justify-start items-center rounded-lg mt-1.5">
        <div
          className="flex gap-2 items-center mr-4 cursor-pointer"
          onClick={handleToogle}
        >
          <Image
            src={currentCountry.flag}
            width={24}
            height={16}
            alt={'country-icon'}
          />
          <Image
            src={'/images/tell-icon.svg'}
            alt={'arrow'}
            width={24}
            height={24}
          />
        </div>
        <p>{currentCountry.code}</p>
        <input
          type="number"
          ref={inpRef}
          value={text}
          placeholder={'XX-XXX-XXX'}
          onChange={(e) => setText(e.target.value)}
          className={`focus:outline-none ml-1.5 ${style.inp}`}
        />
      </div>
      {countryShow
        ? COUNTRY_DATA.map((elem) => {
            if (currentCountry.name === elem.name) return null
            return (
              <div
                className="w-full border-2 border-gray-350 rounded-lg py-4 px-3.5 flex justify-start items-center cursor-pointer"
                key={elem.id}
                onClick={() => handleClick(elem)}
              >
                <div className="mr-4">
                  <Image src={elem.flag} alt={'icon'} width={24} height={16} />
                </div>
                <p>{elem.name}</p>
              </div>
            )
          })
        : null}
    </div>
  )
}

export default InputCountry
