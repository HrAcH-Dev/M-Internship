import React from 'react'
import Container from '../../Container'
import Image from 'next/image'
import styles from './styles.module.scss'
import ListPages from './ListIPages'
import { SOCIAL_DATA, PAGES_DATA, CONTACT_DATA } from '../data'
import SocialIcons from './SocialIcons'
import ContactsPages from './ContactsPages'

function Footer() {
  return (
    <div className="w-full bg-cyan-850">
      <Container>
        <div className="mt-16 col-start-1 col-span-full md:col-start-2 md:col-span-2 ">
          <Image
            src={'/images/footer-icon.svg'}
            alt={'footericon'}
            width={132}
            height={30}
          />
        </div>
        <div
          className={`mt-16 col-span-full col-start-1 md:col-span-full md:col-start-5 lg:col-span-3 lg:col-start-7 ${styles.items}`}
        >
          <h3 className="text-white mb-6 font-semibold text-lg leading-30">
            Pages
          </h3>
          <ListPages pagesData={PAGES_DATA} />
        </div>
        <div
          className={`col-span-3 mt-14 md:mt-16 md:col-start-5 md:col-span-3 lg:col-span-3 lg:col-start-10 ${styles.items}`}
        >
          <h3 className="text-white mb-6 font-semibold text-lg leading-30">
            Contacts
          </h3>
          <ContactsPages pagesContact={CONTACT_DATA} />
          <div className={`flex pt-10 ${styles.icons}`}>
            <SocialIcons socialIcons={SOCIAL_DATA} />
          </div>
        </div>
      </Container>
      <div className="pt-6 pb-6 flex justify-center mt-123 border-t-1 border-slate-70 border-opacity-20">
        <p className="text-white font-normal text-base leading-1 tracking-base">
          © 2021 Mamble. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
