import React from 'react'
import { useSpring, animated } from 'react-spring'

interface MarqueeProps {
  arr: string[]
}

const Mar: React.FC<MarqueeProps> = ({ arr }) => {
  const [style] = useSpring(() => ({
    from: { opacity: 0, transform: 'translateX(0%)' },
    to: { opacity: 1, transform: 'translateX(-100%)' },

    config: { opacity: 0, duration: 1000 },
    reset: true,
    loop: true,
    unique: true
  }))

  return (
    <ul className="flex w-full overflow-hidden relative">
      {arr.map((src, index) => (
        <animated.li
          key={index}
          className="whitespace-nowrap m-3"
          style={style}
        >
          <img
            src={src}
            alt={`bg-${index}`}
            className="w-32 h-70 rounded-3xl"
          />
        </animated.li>
      ))}
    </ul>
  )
}

export default Mar
