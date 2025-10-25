import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export function useTheme(){
  return useContext(ThemeContext)
}

export function ThemeProvider({ children }){
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('tm_theme') || 'light'
    } catch {
      return 'light'
    }
  })

  useEffect(() => {
    const root = document.documentElement
    if(theme === 'dark'){
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    try {
      localStorage.setItem('tm_theme', theme)
    } catch {}
  }, [theme])

  function toggleTheme(){
    setTheme(t => t === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
