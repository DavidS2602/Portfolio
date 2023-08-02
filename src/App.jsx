import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Content from './Components/content'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [darkMode])

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <div className='w-full h-full font-sans overflow-y-hidden bg-gradient-to-r from-blue-600 via-sky-400 to-sky-300  dark:bg-gradient-to-r dark:from-slate-800 dark:via-blue-900 dark:to-blue-700'>
      <Navbar darkMode={darkMode} onClick={handleDarkMode} />
      <Content />
    </div>
  )
}

export default App
