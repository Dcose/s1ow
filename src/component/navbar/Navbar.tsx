import React from 'react'
import logo from '../../../public/logo2.png'

import useThemeStore, { ThemeState } from '@/redux/store'
import Switch from '../switch/Switch'
import NavLink from './NavLink'

const navLinks = [
  { href: '/', text: 'Home' },
  { href: '/about', text: 'About', color: 'pink' },
  { href: '/contact', text: 'Contact', color: 'sky' }
]

const Navbar: React.FC = () => {
  const { toggleDarkMode } = useThemeStore<ThemeState>((state) => state)
  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="flex items-center justify-center">
              <span className="text-2xl m-3 font-bold dark:text-white">
                s1ow
              </span>
            </span>
          </div>
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

          {/* <Switch onClick={toggleDarkMode} /> */}

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
