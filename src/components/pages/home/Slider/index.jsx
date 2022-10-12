import React, { useEffect, useRef, useState } from 'react'
import Container from '../../../shared/Container'
import SliderItems from './SliderItems'
import styles from './styles.module.scss'
import { SLIDER_DATA } from '../data'

function HomeSlider() {
  const slider = useRef(null)
  const [active, setActive] = useState(0)
  let intervalID

  const handleDots = (id) => {
    if (slider.current) {
      slider.current.scrollLeft =
        id * slider.current.childNodes[0].getBoundingClientRect().width +
        id * 26
      setActive(id)
    }
  }

  useEffect(() => {
    intervalID = setTimeout(() => {
      if (active === SLIDER_DATA.length - 1) {
        handleDots(0)
      } else {
        handleDots(active + 1)
      }
    }, 3000)
    return () => {
      clearTimeout(intervalID)
    }
  }, [active])
  return (
    <Container>
      <div className="lg:col-start-2 lg:col-span-10 col-span-full flex justify-center flex-wrap mt-38 mb-42">
        <div className="">
          <div
            className={`border-red-500 overflow-x-auto flex gap-7.5 scroll-smooth col-span-full ${styles.scrollItem}`}
            ref={slider}
          >
            <SliderItems slider={slider} />
          </div>
        </div>
        <div className="flex justify-center">
          {SLIDER_DATA.map((elem, index) => (
            <div
              key={elem.id}
              onClick={() => handleDots(index)}
              className={`cursor-pointer mr-4 mt-8 w-[16px] h-[16px] rounded-full ${
                active === index ? 'bg-cyan-850' : 'bg-stone-350'
              }`}
            />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default HomeSlider
