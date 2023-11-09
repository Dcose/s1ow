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
        <div className="relative flex items-center justify-between h-16">
          <span className="flex items-center justify-center">
            <span className=" text-xs m-3 font-bold text-white">s1ow</span>
            <span className=" text-xs m-3 font-bold text-white">s1ow</span>
          </span>
          {/* <a
              href="#"
              className="
                font-bold
                px-3
                py-2
                relative
                hover:text-blue-300
                after:absolute
                after:-bottom-1
                after:left-1/2
                after:w-full
                after:h-px
                after:origin-left
                after:transform
                after:-translate-x-1/2
                after:bg-gray-800
                after:transition-all
                after:duration-300
                hover:after:w-0
              "
            >
              Home
            </a> */}

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
