import React, { useRef } from 'react'
import { motion } from 'framer-motion'

import Progress from '../progress/Progress'

import bg1 from '@/assets/images/002.jpg'

const Container: React.FC = () => {
  const ref = useRef(null)

  return (
    <div className="absolute bg-black w-full h-full">
      <Progress />
      <div className="relative top-40 bg-black">
        <motion.div
          className="flex flex-col items-start"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-white" style={{ fontSize: '9.5rem' }}>
            <strong>Ciao.</strong>
          </h1>
          <img
            src={bg1}
            alt="02"
            className="h-auto sm:w-4/5 lg:w-3/5 xl:w-3/5"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Container
