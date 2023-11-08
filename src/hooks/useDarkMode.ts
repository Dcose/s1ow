import { useState } from 'react'

export function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode)
  }

  return { darkMode, toggleDarkMode }
}
