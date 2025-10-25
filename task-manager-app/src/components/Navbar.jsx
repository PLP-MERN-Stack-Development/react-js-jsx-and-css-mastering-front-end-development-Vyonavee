import React from 'react'
import { useTheme } from '../context/ThemeContext'
import Button from './ui/Button'

export default function Navbar(){
  const { theme, toggleTheme } = useTheme()
  return (
    <nav className="w-full py-4 bg-transparent">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white shadow-lg transform animate-float">
            ✨
          </div>
          <div>
            <h1 className="text-xl font-semibold">Lovely Tasks</h1>
            <p className="text-sm text-muted-foreground">A cute, smooth task manager</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" onClick={toggleTheme}>
            {theme === 'light' ? 'Dark' : 'Light'} Mode
          </Button>
        </div>
      </div>
    </nav>
  )
}
