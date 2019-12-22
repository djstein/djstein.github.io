import { useEffect, useState } from 'react'
import { Theme } from './../../ui/Theme'
import { DarkTheme } from './../../ui/DarkTheme'

export default function useTheme() {
  const [theme, setTheme] = useState(Theme)
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme(DarkTheme)
    }
  }, [])

  return { theme, setTheme }
}
