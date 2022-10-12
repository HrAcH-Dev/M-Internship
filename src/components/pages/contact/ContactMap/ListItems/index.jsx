import React from 'react'
import { socialIcons } from '../../../../../common/front/FooterData'
import Link from 'next/link'

function ListItems() {
  return (
    <ul>
      {socialIcons.map((elem) => {
        return (
          <li key={elem.id}>
            <Link href={elem.hrefName} passHref>
              <a>{elem.title}</a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default ListItems
