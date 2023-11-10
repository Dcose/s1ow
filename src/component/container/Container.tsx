import React, { useRef } from 'react'
import Progress from '../progress/Progress'

import bg1 from '@/assets/images/002.jpg'
import { motion, useInView } from 'framer-motion'

const Container: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <div className="absolute bg-black w-full">
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
            className="h-auto sm:w-4/5 lg:w-4/5 xl:w-4/5"
          />
        </motion.div>

        <motion.div
          ref={ref}
          className="flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : ''}
          transition={{ duration: 1 }}
        >
          <div className="text-white text-2xl">
            <p>
              Welcome Nice to meet you! I am a freelance designer and art
              director currently living in Berlin. I have solid experience from
              a background in UX and UI in start ups and scale ups in Europe. I
              have a broad skillset – ranging from digital design to graphic
              design and 3d renderings and much, much more.
            </p>
            <p>
              Who I Am I'm a designer, maker, nomad, and coffee lover obsessed
              with the world of digital
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Container
