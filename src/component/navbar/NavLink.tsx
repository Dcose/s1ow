import React from 'react'

interface NavLinkProps {
  href: string
  color?: string
  children: React.ReactNode
}

const colorVariants: {
  [key: string]: string
} = {
  slate: 'after:bg-slate-500',
  gray: 'after:bg-gray-500',
  zinc: 'after:bg-zinc-500',
  neutral: 'after:bg-neutral-300',
  stone: 'after:bg-stone-500',
  red: 'after:bg-red-500',
  orange: 'after:bg-orange-500',
  amber: 'after:bg-amber-500',
  yellow: 'after:bg-yellow-500',
  lime: 'after:bg-lime-500',
  green: 'after:bg-green-500',
  emerald: 'after:bg-emerald-500',
  teal: 'after:bg-teal-500',
  cyan: 'after:bg-cyan-500',
  sky: 'after:bg-sky-500',
  blue: 'after:bg-blue-500',
  indigo: 'after:bg-indigo-500',
  violet: 'after:bg-violet-500',
  purple: 'after:bg-purple-500',
  fuchsia: 'after:bg-fuchsia-500',
  pink: 'after:bg-pink-500',
  rose: 'after:bg-rose-500'
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  color = 'neutral',
  children
}) => {
  console.log(color)

  return (
    <a
      href={href}
      className={`
      text-xs
      relative
      py-2
      text-white
      after:absolute
      after:-bottom-1
      after:left-1/2
      after:w-0
      after:h-1
      after:origin-left
      after:transform
      after:-translate-x-1/2
      ${colorVariants[color]}
      after:transition-all
      after:ease-in-out
      after:duration-300
      hover:after:w-full`}
    >
      {children}
    </a>
  )
}

export default NavLink
