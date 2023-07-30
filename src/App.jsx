import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Components/Navbar'

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
    <div className='w-screen h-screen font-sans dark:bg-gray-500'>
      <Navbar darkMode={darkMode} onClick = {handleDarkMode}/>
    </div>
  )
}

export default App
