"use client"

import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import BadgeComponent from './BadgeComponent'

const NavComponent = () => {

  return (
    <header className="border-b border-palette-lighter sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between mx-auto max-w-6xl px-6 pb-2 pt-4 md:pt-6">
        <Link href="/" passHref>
          <span className=" cursor-pointer">
            <h1 className="flex no-underline">
              <Image height={52} width={52} alt="logo" className="h-8 w-8 mr-1 object-contain" src="/ball.png" />
              <span className="text-xl font-primary font-bold tracking-tight pt-1">
                {process.env.siteTitle}
              </span>
            </h1>
          </span>
        </Link>
        <div>
          <Link className="relative" href="/cart" passHref>
            <span className="text-2xl">
              <FontAwesomeIcon className="text-palette-primary" icon={faShoppingCart} />
              <BadgeComponent /> 
            </span>
          </Link>
        </div>
      </div>
    </header >
  )
}

export default NavComponent