import Nav from '../../src/modules/nav'
import Centerblock from '../../src/modules/centerBlock'
import Sidebar from '../../src/modules/sideBar'
import Bar from '../../src/modules/bar'
import { useState } from 'react'
import ThemeContext from '../../src/modules/theme'

export function Main() {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () =>
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'))
  document.documentElement.setAttribute('data-theme', theme)

  return (
    <div className="wrapper">
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="container">
          <main className="main">
            <Nav />
            <Centerblock />
            <Sidebar />
            <Bar />
          </main>
        </div>
      </ThemeContext.Provider>
    </div>
  )
}
