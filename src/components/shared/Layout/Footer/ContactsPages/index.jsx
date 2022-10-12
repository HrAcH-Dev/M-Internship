import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles.module.scss'
import { CONTACT_DATA } from '../../data'

function ContactsPages({ data, classes }) {
  return (
    <>
      {CONTACT_DATA.map((elem) => {
        return (
          <ul className={`flex items-center ${styles.box}`} key={elem.id}>
            <Link href={elem.hrefName} passHref>
              <li>
                <div className="min-w-24">
                  <Image src={elem.src} alt={elem.alt} width={24} height={24} />
                </div>
                <p className={`ml-[10px] mt-[8px] ${classes ? classes : ''}`}>
                  {elem.title}
                </p>
              </li>
            </Link>
          </ul>
        )
      })}
    </>
  )
}

export default ContactsPages
