import React, { useEffect, useState } from 'react'
import styles from './Header.module.scss'
import abhm from '@/assets/images/abhm.webp'

import ssa from '@/assets/images/ssa.png'
import xsk from '@/assets/images/xsk.webp'

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = [ssa, ssa, ssa, ssa, ssa, ssa, ssa, ssa, ssa, ssa, ssa]

  useEffect(() => {
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => prevIndex - 1)
    }

    const interval = setInterval(nextSlide, 10) // 调整轮播速度

    return () => {
      clearInterval(interval)
    }
  })
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <header className={styles.header}>
        <div>slow</div>
        <nav>
          <ul className={styles.nav}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="login-cart-section">login</div>
      </header>

      <main className={styles.main}>
        <h2>s1ow</h2>
        <p>What kind of world do you want to shape ?</p>
        <div style={{ display: 'flex', overflow: 'hidden' }}>
          {images.map((src) => (
            <img
              src={src}
              style={{
                width: '273px',
                height: '340px',
                borderRadius: '26px',
                transform: `translateX(${currentIndex}%)`
              }}
            />
          ))}
        </div>
      </main>
      <footer className={styles.footer}>Footer</footer>
    </div>
  )
}

export default HomePage
