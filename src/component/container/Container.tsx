import React from 'react'

import bg1 from '@/assets/images/iOS/1.jpg'
import bg2 from '@/assets/images/iOS/2.jpg'
import bg3 from '@/assets/images/iOS/3.jpg'
import bg4 from '@/assets/images/iOS/4.jpg'
import bg6 from '@/assets/images/iOS/6.jpg'
import bg7 from '@/assets/images/iOS/7.jpg'
import bg8 from '@/assets/images/iOS/8.jpg'

import Marquee from '../marquee/Marquee'
import Mar from '../marquee/Mar'
import M from '../marquee/M'

const images = [bg1, bg2, bg3, bg4, bg6, bg7, bg8]

const data = new Array(5).fill(0).map((item, index) => {
  return { num: index }
})

console.log('data', data)
export interface ItemProps {
  num: number
}
const itemStyle = {
  border: '1px solid #ccc',
  background: '#fff',
  height: '50px',
  color: 'red',
  marginRight: '15px'
}

const Container: React.FC = () => {
  const Item = (item: ItemProps) => {
    return <div style={itemStyle}>{item.num}</div>
  }
  return (
    <div className="flex items-center flex-col">
      <h1 className="text-4xl font-bold m-10">Shape your Imagination</h1>
      <span className="text-2xl font-semibold">
        What kind of world do you want to shape ?
      </span>
      {/* <div className="flex overflow-hidden">
        <Marquee
          Item={Item}
          containerWidth={500}
          showNum={5}
          speed={8}
          data={images}
        />
      </div>
      <Mar arr={images} /> */}
    </div>
  )
}

export default Container
