import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { LIST_DATA } from '../../data'

function LinkItems({ classes }) {
  const { asPath } = useRouter()
  return (
    <>
      {LIST_DATA.map((elem) => {
        return (
          <Link href={elem.hrefName} key={elem.id} passHref>
            <li
              className={`cursor-pointer ${
                asPath === elem.hrefName ? classes : ''
              }`}
            >
              {elem.name}
            </li>
          </Link>
        )
      })}
    </>
  )
}

export default LinkItems
