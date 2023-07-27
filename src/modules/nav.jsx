import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import logo from '../img/logo.png'
import logoBlack from '../img/logo-black.png'
import moon from '../img/icon/moon.svg'
import sun from '../img/icon/sun.svg'
import ThemeContext from '../modules/theme'

function Nav() {
  const [visible, setVisible] = useState(false)
  const [isTheme, setIsTheme] = useState(false)
  const { toggleTheme } = useContext(ThemeContext)

  const onChangeTheme = () => {
    setIsTheme(!isTheme === true ? !isTheme : false)
  }

  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        {!isTheme ? (
          <img className="logo__image" src={logo} alt="logo" />
        ) : (
          <img className="logo__image" src={logoBlack} alt="logo" />
        )}
      </div>
      <div
        className="nav__burger burger"
        onClick={() => setVisible((prev) => !prev)}
      >
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>

      {visible && (
        <div className="nav__menu menu ">
          <ul className="menu__list">
            <li className="menu__item">
              <a href="#" className="menu__link">
                Главное
              </a>
            </li>
            <li className="menu__item">
              <Link to="/play-list" className="menu__link">
                Мой плейлист
              </Link>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                Войти
              </a>
            </li>
            <li className="menu__item" onClick={toggleTheme}>
              <a href="#" className="menu__link" onClick={onChangeTheme}>
                {!isTheme ? (
                  <img className="moon" src={moon} alt="moon" />
                ) : (
                  <img className="moon" src={sun} alt="moon" />
                )}
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Nav
