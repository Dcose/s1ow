import React from 'react'
import logo from '../../../public/logo2.png'

import useThemeStore, { ThemeState } from '@/redux/store'
import Switch from '../switch/Switch'

const Navbar: React.FC = () => {
  const { toggleDarkMode } = useThemeStore<ThemeState>((state) => state)

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
                px-3
                py-2
                relative
                hover:text-blue-300
                after:absolute
                after:-bottom-1
                after:left-0
                after:h-px
                after:w-full
                after:origin-left
                after:scale-x-0
                after:bg-gray-800
                after:transition
                after:duration-300
                hover:after:scale-x-100
              "
            >
              Home
            </a>
            <a
              href="#"
              className="
                px-3
                py-2
                relative
                hover:text-gray-800
                after:absolute
                after:-bottom-1
                after:left-0
                after:h-px
                after:w-full
                after:origin-left
                after:scale-x-0
                after:bg-gray-800
                after:transition
                after:duration-300
                hover:after:scale-x-100
              "
            >
              About
            </a>
            <a
              href="#"
              className="
                px-3
                py-2
                relative
                hover:text-gray-800
                after:absolute
                after:-bottom-1
                after:left-0
                after:h-px
                after:w-full
                after:origin-left
                after:scale-x-0
                after:bg-gray-800
                after:transition
                after:duration-300
                hover:after:scale-x-100
              "
            >
              Services
            </a>
            <a
              href="#"
              className="
                px-3
                py-2
                relative
                hover:text-gray-800
                after:absolute
                after:-bottom-1
                after:left-0
                after:h-px
                after:w-full
                after:origin-left
                after:scale-x-0
                after:bg-gray-800
                after:transition
                after:duration-300
                hover:after:scale-x-100
              "
            >
              Contact
            </a>
            <Switch onClick={toggleDarkMode} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
