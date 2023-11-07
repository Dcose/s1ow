import React from 'react'

import Navbar from '@/component/navbar/Navbar'
import Container from '@/component/container/Container'

const data1 = new Array(5).fill(0).map((_, index) => {
  return { num: index }
})
console.log('%c Line:10 🥪 data', 'color:#42b983', data1)

function HomePage() {
  return (
    <>
      <Navbar />
      <Container />
    </>
  )
}

export default HomePage
