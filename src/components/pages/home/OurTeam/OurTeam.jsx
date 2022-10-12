import React from 'react'
import { OURTEAM_DATA } from '../data'
import Image from 'next/image'
import Container from '../../../shared/Container'

function OurTeam() {
  return (
    <div className="mt-38 mb-48">
      <Container>
        <div className="col-span-full lg:col-start-3 lg:col-span-8 md:col-span-full md:col-start-1 text-center mb-28">
          <h1 className="font-semibold text-5xl leading-20 text-stone-1000 pb-4">
            Our team
          </h1>
          <p className="font-normal text-base leading-26 text-stone-1000">
            This website has been developed by a group of brilliant software
            engineering interns at Mamble Labs. During this internship, we are
            going to gain fundamental practical skills in coding and structured
            thinking, become constructive, proactive, enthusiastic and caring
            team-players, stay humble and always strive for professional
            advancement.
          </p>
        </div>
        <div className="col-span-full lg:col-start-2 lg:col-span-10 xl:col-span-full flex justify-center flex-wrap gap-x-6">
          {OURTEAM_DATA.map((elem) => {
            return (
              <div
                className="flex justify-center flex-wrap text-center mb-14 group"
                key={elem.id}
              >
                <div className="pt-3 px-10">
                  <div className="relative w-62 h-62 absolute z-10">
                    <Image
                      src={elem.src}
                      alt={elem.alt}
                      width={248}
                      height={248}
                    />
                    <div className="w-30 h-30 bg-rose-850 rounded-full absolute top-5.5 right-3 -z-10 group-hover:-top-3.5 group-hover:-right-0.8 transition-all duration-300" />
                    <div className="w-11 h-11 bg-yellow-350 rounded-full absolute left-4.5 bottom-4 -z-10 group-hover:-bottom-3.5 group-hover:-left-0.8 transition-all duration-300" />
                  </div>
                  <h3 className="mt-0.8 font-medium text-xxl leading-24 text-stone-1000">
                    {elem.title}
                  </h3>
                  <p className="text-gray-550 font-normal text-base leading-26">
                    {elem.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

export default OurTeam
