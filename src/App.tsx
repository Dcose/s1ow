import React from 'react'
import useThemeStore, { ThemeState } from './redux/store'

import HomePage from './views/HomePage'

function App() {
  const { darkMode } = useThemeStore<ThemeState>((state) => state)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <HomePage />
    </div>
  )
}

export default App
