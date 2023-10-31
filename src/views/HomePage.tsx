import React from 'react'
import styles from './Header.module.scss'

function HomePage() {
  return (
    <div>
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
      </main>
      <footer className={styles.footer}>Footer</footer>
    </div>
  )
}

export default HomePage
