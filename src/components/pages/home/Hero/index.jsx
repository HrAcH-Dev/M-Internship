import React from 'react'
import Container from '../../../shared/Container'
import Image from 'next/image'
import Button from '../../../shared/Button'

function HomeHero() {
  return (
    <div className="lg:mt-42 pt-43 mb-45">
      <Container>
        <div className="mb-5 text-center col-start-1 col-span-full md:col-span-4 md:col-start-3 lg:mt-45 lg:col-start-1 lg:col-span-6 lg:row-start-1 lg:text-left">
          <h1 className="text-6 font-semibold leading-72 text-slate-40  mt-72">
            Hero section
          </h1>
        </div>
        <div className="col-start-1 col-span-full md:col-start-2 md:col-span-6 lg:col-start-7 lg:col-span-full">
          <Image
            src={'/images/hero-img.png'}
            alt={'heroic'}
            width={724}
            height={565}
          />
        </div>
        <div className=" mt-8 col-start-1 col-span-full md:col-start-2 md:col-span-6 lg:col-start-1 lg:col-span-6 lg:row-start-1 lg:mt-68">
          <p className="font-normal text-base leading-26 text-center lg:text-left">
            “You are not done when it works, you are done when it’s right.” Keep
            this in mind now and forever.
          </p>
        </div>
        <div className="flex justify-center col-span-full md:col-start-4 md:col-span-2 md:mt-12 mt-19 lg:justify-start lg:col-start-1 lg:row-start-1 lg:mt-54  ">
          <Button href={'/sign-up'} text={'Agree'} />
        </div>
      </Container>
    </div>
  )
}

export default HomeHero
