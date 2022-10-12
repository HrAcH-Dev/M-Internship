import React from 'react'
import Container from '../../../shared/Container'
import ContactsPages from '../../../shared/Layout/Footer/ContactsPages'
import { URL } from '../data'
import Button from '../../../shared/Button'

function ContactMap() {
  return (
    <div className="bg-cyan-850 mt-88">
      <Container>
        <div className="mt-20 h-341 col-span-full lg:mt-50 lg:col-span-5 xl:mt-44 2xl:h-448 2xl:mt-29">
          <iframe src={URL} className="w-full h-full" />
        </div>
        <div className="lg:mt-49 lg:col-start-7 lg:col-span-full text-white col-span-full mt-72 mb-28">
          <h1 className="font-semibold text-6 leading-72 mb-72">
            Get in touch
          </h1>
          <ContactsPages classes="pb-9" />
        </div>
        <div>
          <Button>Submit</Button>
        </div>
      </Container>
    </div>
  )
}

export default ContactMap
