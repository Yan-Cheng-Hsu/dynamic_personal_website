import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from '@/styles/Landing.module.css'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Check for saved preference or system preference
    const saved = localStorage.getItem('theme')
    if (saved) {
      setIsDark(saved === 'dark')
    } else {
      setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
  }, [])

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <motion.button
      className={styles.themeToggle}
      onClick={() => setIsDark(!isDark)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <motion.span
        key={isDark ? 'dark' : 'light'}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 180, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? '🌙' : '☀️'}
      </motion.span>
    </motion.button>
  )
}
