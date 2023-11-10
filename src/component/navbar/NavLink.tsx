import React from 'react'

import { colorVariants } from '@/style/color'

interface NavLinkProps {
  href: string
  color?: string
  children: React.ReactNode
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  color = 'neutral',
  children
}) => {
  return (
    <a
      href={href}
      className={`
      text-xs
      font-bold
      relative
      py-2
      text-white
      after:absolute
      after:-bottom-1
      after:left-1/2
      after:w-0
      after:h-px
      after:origin-left
      after:transform
      after:-translate-x-1/2
      ${colorVariants[color]}
      after:transition-all
      hover:after:ease-in-out
      after:duration-300
      hover:after:w-full
      hover:text-neutral-700
      hover:ease-in-out
      hover:duration-300
      `}
    >
      {children}
    </a>
  )
}

export default NavLink
