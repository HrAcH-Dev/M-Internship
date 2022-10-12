import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './index.module.scss'
import Container from '../../Container'
import HeaderDropDown from './HederDropDown'
import LinkItems from './LinkItems'

function Header() {
  const [scrollShow, setScrollShow] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    let lastScrollTop = 0
    const handleScroll = () => {
      let scroll = window.scrollY

      if (scroll > lastScrollTop) {
        setScrollShow(true)
      } else {
        setScrollShow(false)
      }

      lastScrollTop = scroll <= 0 ? 0 : scroll
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggle = () => {
    setShow(!show)
  }
  return (
    <header
      className={`w-full h-88 fixed top-0 left-0 box-content z-50 duration-350 ease-in-out ease-linear transition-all ${
        scrollShow ? '-translate-y-22' : 'translate-y-0 '
      }`}
    >
      <div className="bg-cyan-550 z-50 pt-3">
        <Container>
          <div className="flex justify-between col-span-full">
            <div className="cursor-pointer">
              <Link href={'/'} passHref>
                <a>
                  <Image
                    src={'/images/logo.svg'}
                    alt="logo"
                    width={72}
                    height={72}
                  />
                </a>
              </Link>
            </div>
            <ul
              className={`hidden justify-evenly items-center md:flex ${styles.listItems}`}
            >
              <LinkItems classes={'text-cyan-850'} />
            </ul>
            <div
              className={`mt-5 cursor-pointer h-12 w-12 md:hidden`}
              onClick={toggle}
            >
              <div
                className={`w-6 h-1 bg-stone-1000 transition duration-500 ease-out ${
                  show
                    ? 'translate-y-6 rotate-45 -translate-x-4 ml-2 '
                    : 'w-6 h-1 bg-black mr-4'
                }`}
              />
              <div
                className={`w-6 h-1 bg-stone-1000 mt-1.5 ml-2 transition-all duration-500 ease-out ${
                  show ? '-translate-y-4 -rotate-45 ml-1 mr-3' : ''
                }`}
              />
            </div>
          </div>
        </Container>
      </div>
      <HeaderDropDown show={show} setShow={setShow} />
    </header>
  )
}

export default Header
