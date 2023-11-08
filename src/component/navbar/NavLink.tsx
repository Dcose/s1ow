import React from 'react'
import clsx from 'clsx'

interface NavLinkProps {
  href: string
  color?: string
  children: React.ReactNode
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  color = 'gray',
  children
}) => {
  return (
    <a
      href={href}
      className={`font-bold
      relative
      py-2
      after:absolute
      after:-bottom-1
      after:left-1/2
      after:w-0
      after:h-1
      after:origin-left
      after:transform
      after:-translate-x-1/2
      after:bg-${color}-500
      after:transition-all
      after:duration-300
      hover:after:w-full`}
    >
      {children}
    </a>
  )
}

export default NavLink
