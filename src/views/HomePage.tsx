import Marquee from '@/component/marquee/Marquee'
import Navbar from '@/component/navbar/Navbar'
import React from 'react'

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

function HomePage() {
  const Item = (item: ItemProps) => {
    return <div style={itemStyle}>{item.num}</div>
  }
  return (
    <>
      <Navbar />
      {/* <Container></Container> */}
      <Marquee
        Item={Item}
        containerWidth={1000}
        showNum={7}
        speed={6}
        data={data}
      />
    </>
  )
}

export default HomePage
