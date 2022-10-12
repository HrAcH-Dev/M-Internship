import React from 'react'
import { ACCORDION_DATA } from '../data'
import AccordionItem from './AccordionItem'
import Container from '../../../shared/Container'

function Accordion() {
  return (
    <Container>
      <div className="col-span-full col-start-1 lg:col-span-8 lg:col-start-3 2xl:col-span-8 2xl:col-start-3">
        {ACCORDION_DATA.map((elem) => {
          return (
            <AccordionItem
              key={elem.id}
              title={elem.title}
              description={elem.description}
            />
          )
        })}
      </div>
    </Container>
  )
}

export default Accordion
