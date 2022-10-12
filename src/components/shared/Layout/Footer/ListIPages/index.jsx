import React from 'react'
import styles from '../styles.module.scss'
import Link from 'next/link'

function ListPages({ pagesData }) {
  return (
    <>
      {pagesData.map((elem) => {
        return (
          <ul className={`${styles.links}`} key={elem.id}>
            <li>
              <Link href={elem.hrefName} passHref>
                <a>{elem.title}</a>
              </Link>
            </li>
          </ul>
        )
      })}
    </>
  )
}

export default ListPages
