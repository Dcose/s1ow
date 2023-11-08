import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface SwitchProps {
  initialState?: boolean
  onClick?: () => void
}

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30
}

const Switch: React.FC<SwitchProps> = ({ initialState = true, onClick }) => {
  const [isOff, setIsOff] = useState(initialState)

  const toggleSwitch = () => {
    setIsOff(!isOff)
    onClick && onClick()
  }

  return (
    <>
      <div
        className={`
        w-12 h-7 flex items-center
        justify-${isOff ? 'start' : 'end'}
        border bg-black rounded-full p-1`}
        onClick={toggleSwitch}
      >
        <motion.div
          className="w-5 h-5 bg-white dark:bg-white rounded-full"
          layout
          transition={spring}
        />
      </div>
    </>
  )
}

export default Switch
