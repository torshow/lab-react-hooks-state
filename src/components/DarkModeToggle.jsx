import React from 'react'

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <div>
      <button aria-label="toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
      </button>
    </div>
  )
}

export default DarkModeToggle