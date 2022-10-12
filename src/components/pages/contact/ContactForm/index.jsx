import React from 'react'
import Container from '../../../shared/Container'
import InputItems from '../../../shared/InputItems/InputText'
import InputCountry from '../../../shared/InputItems/InputCountry/InputCountry'
import InputArea from '../../../shared/InputItems/InputArea/InputArea'

function ContactForm() {
  return (
    <div className="mt-36 mb-40">
      <Container>
        <div className="col-span-full lg:col-start-4 lg:col-span-6">
          <InputItems types="text" text="Name" placeholder="Your name" />
          <InputItems types="email" text="Email" placeholder="Your email" />
          <InputCountry />
          <InputArea />
        </div>
      </Container>
    </div>
  )
}

export default ContactForm
