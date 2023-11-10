import React from 'react'
import { useScroll, useSpring, motion } from 'framer-motion'

import { colors } from '@/style/color'

interface ProgressProps {
  color?: string
}

const Progress: React.FC<ProgressProps> = ({ color = 'neutral' }) => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 ${colors[color]}
      transform origin-left`}
      style={{ scaleX }}
    />
  )
}

export default Progress
