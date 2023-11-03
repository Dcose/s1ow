import React, { useEffect, useState } from 'react'
import bg1 from '@/assets/images/iOS/1.jpg'
import bg2 from '@/assets/images/iOS/2.jpg'
import bg3 from '@/assets/images/iOS/3.jpg'
import bg4 from '@/assets/images/iOS/4.jpg'
import bg5 from '@/assets/images/iOS/5.jpg'
import bg6 from '@/assets/images/iOS/6.jpg'
import bg7 from '@/assets/images/iOS/7.jpg'
import bg8 from '@/assets/images/iOS/8.jpg'

const Container: React.FC = () => {
  const images = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8]

  return (
    <div className="flex items-center flex-col">
      <h1 className="text-4xl font-bold m-10">Shape your Imagination</h1>
      <span className="text-2xl font-semibold">
        What kind of world do you want to shape ?
      </span>
      <div className="flex overflow-hidden">
        <img
          src={bg1}
          alt=""
          className="h-96 w-52 rounded-2xl absolute left-0"
        />
        {/* <img src={bg2} alt="" className="w-52" />
        <img src={bg3} alt="" className="w-52" />
        <img src={bg4} alt="" className="w-52" />
        <img src={bg5} alt="" className="w-52" />
        <img src={bg6} alt="" className="w-52" />
        <img src={bg7} alt="" className="w-52" />
        <img src={bg8} alt="" className="w-52" /> */}

        {/* {images.map((src, index) => (
          <img
            src={src}
            key={index}
            alt=""
            className="h-96 w-52 rounded-2xl m-4"
          />
        ))} */}
      </div>
    </div>
  )
}

export default Container
