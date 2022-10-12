import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function SocialIcons({ socialIcons }) {
  return (
    <>
      {socialIcons.map((elem) => {
        return (
          <div key={elem.id}>
            <Link href={elem.hrefName} passHref>
              <a>
                <Image src={elem.src} alt={elem.alt} width={32} height={32} />
              </a>
            </Link>
          </div>
        )
      })}
    </>
  )
}

export default SocialIcons
