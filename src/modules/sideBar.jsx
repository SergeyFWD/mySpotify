import { useState, useEffect } from 'react'
import playlist01 from '../img/playlist01.png'
import playlist02 from '../img/playlist02.png'
import playlist03 from '../img/playlist03.png'
import quadroBig from '../img/isLoading/bigQuadro.png'

function Sidebar() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__avatar"></div>
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              {loading ? (
                <img src={quadroBig} />
              ) : (
                <img
                  className="sidebar__img"
                  src={playlist01}
                  alt="day's playlist"
                />
              )}
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              {loading ? (
                <img src={quadroBig} />
              ) : (
                <img
                  className="sidebar__img"
                  src={playlist02}
                  alt="day's playlist"
                />
              )}
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              {loading ? (
                <img src={quadroBig} />
              ) : (
                <img
                  className="sidebar__img"
                  src={playlist03}
                  alt="day's playlist"
                />
              )}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
