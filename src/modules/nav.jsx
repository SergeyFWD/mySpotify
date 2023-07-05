import { useState } from 'react'
import logo from '../img/logo.png'

import { Link } from 'react-router-dom'

function Nav() {
  const [visible, setVisible] = useState(false)

  return (
    <nav className="main__nav nav">
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
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Nav
