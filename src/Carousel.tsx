import React, { useState, useEffect } from 'react'
import bg1 from '@/assets/images/iOS/1.jpg'
import bg2 from '@/assets/images/iOS/2.jpg'
import bg3 from '@/assets/images/iOS/3.jpg'
import bg4 from '@/assets/images/iOS/4.jpg'
import bg5 from '@/assets/images/iOS/5.jpg'
import bg6 from '@/assets/images/iOS/6.jpg'
import bg7 from '@/assets/images/iOS/7.jpg'
import bg8 from '@/assets/images/iOS/8.jpg'

const images = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8]

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="relative">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index}`}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  )
}

export default Carousel
