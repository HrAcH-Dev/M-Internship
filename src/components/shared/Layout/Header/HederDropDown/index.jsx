import React, { useEffect } from 'react'
import styles from './index.module.scss'
import LinkItems from '../LinkItems'

function HeaderDropDown({ show, setShow }) {
  useEffect(() => {
    const handleShow = () => {
      if (window.scrollY > 0) {
        setShow(false)
      }
    }
    window.addEventListener('scroll', handleShow)
    return () => {
      window.removeEventListener('scroll', handleShow)
    }
  }, [setShow])
  return (
    <div
      className={`w-full bg-cyan-550 fixed left-0 top-88 transition ease-in-out duration-500 -z-10 md:hidden ${
        !show ? 'opacity-0 -translate-y-52' : 'opacity-100 translate-y-0'
      }`}
    >
      <div className="w-full">
        <ul className={`${styles.items}`}>
          <LinkItems classes={'text-white bg-cyan-850'} />
        </ul>
      </div>
    </div>
  )
}

export default HeaderDropDown
