import React from 'react'
import logo from '../../../public/logo2.png'

import useThemeStore, { ThemeState } from '@/redux/store'
import Switch from '../switch/Switch'
import NavLink from './NavLink'

const Navbar: React.FC = () => {
  const { toggleDarkMode } = useThemeStore<ThemeState>((state) => state)
  const color = 'pink'
  return (
    <nav className="border-b dark:bg-black">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="flex items-center justify-center">
              <img src={logo} alt="" className="w-11" />
              <span className="text-2xl m-3 font-bold dark:text-white">
                s1ow
              </span>
            </span>
          </div>
          <div className="flex">
            <a
              href="#"
              className="
                font-bold
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
                after:bg-pink-300
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              Home
            </a>
            <NavLink href="#" color="pink">
              TEst
            </NavLink>{' '}
            <NavLink href="#" color="sky">
              TEst
            </NavLink>{' '}
            <NavLink href="#" color="blue">
              TEst
            </NavLink>{' '}
            <NavLink href="#" color="slate">
              TEst
            </NavLink>{' '}
            <NavLink href="#" color="gray">
              TEst
            </NavLink>{' '}
            <NavLink href="#" color="zinc">
              TEst
            </NavLink>{' '}
            <NavLink href="#" color="lime">
              TEst
            </NavLink>{' '}
            <NavLink href="#">TEst</NavLink>
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
            <a
              href="#"
              className={` font-bold
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
              About
            </a>
            {/* <Switch onClick={toggleDarkMode} /> */}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
