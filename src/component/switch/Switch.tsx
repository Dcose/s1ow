import React, { useState } from 'react'

interface SwitchProps {
  initialState?: boolean
  onClick?: () => void
}

const Switch: React.FC<SwitchProps> = ({ initialState = true, onClick }) => {
  const [isOff, setIsOff] = useState(initialState)

  const toggleSwitch = () => {
    setIsOff(!isOff)
    onClick && onClick()
  }

  return (
    <label className="w-12 h-7 flex items-center justify-center">
      <div
        className={`w-full h-full border-solid border border-black dark:border-white rounded-full`}
      >
        <div
          className={`w-5 h-5 bg-black dark:bg-white rounded-full m-1  inset-0 transition-transform ${
            isOff ? 'transform translate-x-full' : ''
          }`}
        >
          <input type="checkbox" className="hidden" onChange={toggleSwitch} />
        </div>
      </div>
    </label>
  )
}

export default Switch
