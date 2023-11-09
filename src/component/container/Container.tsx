import { motion } from 'framer-motion'
import React, { useState } from 'react'

const Container: React.FC = () => {
  const [y, setY] = useState(0)

  return (
    <div className=" absolute bg-black h-screen w-full">
      <h1 className="relative text-white text-9xl top-10 left-6">
        <strong>Ciao.</strong>

        <div>
          <motion.div
            className="box"
            animate={{ y }}
            transition={{ type: 'spring' }}
          />
        </div>
      </h1>
    </div>
  )
}

export default Container
