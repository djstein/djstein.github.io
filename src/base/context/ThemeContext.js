import React, { createContext } from 'react'
import { Theme } from './../../ui/Theme'
import { DarkTheme } from './../../ui/DarkTheme'
import useTheme from '../hooks/useTheme'

export const ThemeContext = createContext({
  theme: Theme,
  switchTheme: () => {},
})

export default function ThemeContextProvider({ children }) {
  let { theme, setTheme } = useTheme()

  function switchTheme() {
    if (theme.theme === 'light') {
      setTheme(DarkTheme)
    } else {
      setTheme(Theme)
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
