import Nav from '../../src/modules/nav'
import Centerblock from '../../src/modules/centerBlock'
import Sidebar from '../../src/modules/sideBar'
import Bar from '../../src/modules/bar'
import { useState } from 'react'
import { ThemeContext, themes } from '../../src/modules/theme'

export function Main() {
  const [currentTheme, setCurrentTheme] = useState(themes.light)

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light)
      return
    }

    setCurrentTheme(themes.dark)
  }
  return (
    <div className="wrapper">
      <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
        <div className="container">
          <main className="main">
            <button onClick={toggleTheme}>fsdfsd</button>
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
