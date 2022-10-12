import React from 'react'
import Link from 'next/link'

function Button({ text, href }) {
  if (href) {
    return (
      <Link href={href}>
        <a className="bg-cyan-850 rounded-circle w-24 h-13 text-white font-normal text-base leading-26 flex justify-center items-center cursor-pointer">
          {text}
        </a>
      </Link>
    )
  } else {
    return (
      <a className="bg-cyan-850 rounded-circle w-24 h-13 text-white font-normal text-base leading-26 flex justify-center items-center cursor-pointer">
        {text}
      </a>
    )
  }
  return null
}

export default Button
