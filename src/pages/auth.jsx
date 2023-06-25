import { Link } from 'react-router-dom'
import logo from '../img/logo-black.png'

export const Auth = () => {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="form">
            <div className="form__auth">
              <img className="form__logo" src={logo} alt="logo" />
              <input type="text" className="form__input" placeholder="Логин" />
              <input type="text" className="form__input" placeholder="Пароль" />
              <Link to="/main" className="form__login">
                Войти
              </Link>
              <Link to="/" className="form__register">
                Зарегистрироваться
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
