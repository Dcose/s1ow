import React from 'react'

import NavLink from './NavLink'

const navLinks = [
  { href: '/', text: 'HOME' },
  { href: '/about', text: 'ABOUT', color: 'pink' },
  { href: '/contact', text: 'CONTACT', color: 'sky' }
]

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex items-center justify-between h-20">
          <div className="flex items-center justify-between">
            <NavLink href="sss">S1OW</NavLink>
            <span className=" m-3 text-xs font-bold text-neutral-700">
              ENJOY LIFE
            </span>
          </div>
          <ul className="flex">
            {navLinks.map((link) => (
              <li key={link.href} className="m-2">
                <NavLink href={link.href} color={link.color}>
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
