import { create } from 'zustand'

export interface ThemeState {
  darkMode: boolean
  toggleDarkMode: () => void
}

const useThemeStore = create<ThemeState>((set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode }))
}))

export default useThemeStore
