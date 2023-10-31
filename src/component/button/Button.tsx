import React from 'react'
import styles from './Button.module.scss'

const Button = () => {
  return (
    <button className={styles.button}>
      <span className={styles.title}>Title</span>
    </button>
  )
}

export default Button
