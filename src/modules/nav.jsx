import { useState } from 'react'
import logo from '../img/logo.png'
import moon from '../img/icon/moon.svg'
import sun from '../img/icon/sun.svg'

import { Link } from 'react-router-dom'

import { useThemeContext } from '../modules/theme'

function Nav() {
  const { theme } = useThemeContext()
  const [visible, setVisible] = useState(false)
  const [isTheme, setIsTheme] = useState(false)

  const onChangeTheme = () => {
    setIsTheme(!isTheme === true ? !isTheme : false)
  }

  return (
    <nav
      className="main__nav nav"
      style={{
        backgroundColor: theme.background,
        color: theme.color,
      }}
    >
      <div className="nav__logo logo">
        <img className="logo__image" src={logo} alt="logo" />
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
              <a
                href="#"
                className="menu__link"
                style={{
                  color: theme.color,
                }}
              >
                Главное
              </a>
            </li>
            <li className="menu__item">
              <Link
                to="/play-list"
                className="menu__link"
                style={{
                  color: theme.color,
                }}
              >
                Мой плейлист
              </Link>
            </li>
            <li className="menu__item">
              <a
                href="#"
                className="menu__link"
                style={{
                  color: theme.color,
                }}
              >
                Войти
              </a>
            </li>
            <li className="menu__item">
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
