import { useState } from 'react'
import search from '../img/icon/search.svg'
import watch from '../img/icon/watch.svg'
import note from '../img/icon/note.svg'
import like from '../img/icon/like.svg'

function Centerblock() {
  const [visible, setVisible] = useState(null)
  const toggleVisibility = (filter) =>
    setVisible(visible === filter ? null : filter)
  return (
    <div className="main__centerblock centerblock">
      <div className="centerblock__search search">
        <img className="search__svg" src={search} />
        <input
          className="search__text"
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className="centerblock__h2">Треки</h2>

      <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <div className="filter__wrap">
          <div
            className="filter__button button-author _btn-text"
            onClick={() => toggleVisibility('author')}
          >
            исполнителю
          </div>
          {visible === 'author' && (
            <div className="box">
              <div className="filter-author">
                <a href="#" className="filter__link-author active">
                  Michael Jackson
                </a>
                <a href="#" className="filter__link-author">
                  Nero
                </a>
                <a href="#" className="filter__link-author">
                  Ali Bakgor
                </a>
                <a href="#" className="filter__link-author">
                  Jaded, Will Clarke, AR/CO
                </a>
                <a href="#" className="filter__link-author">
                  Blue Foundation, Zeds Dead
                </a>
                <a href="#" className="filter__link-author">
                  HYBIT, Mr. Black, Offer Nissim, Hi Profile
                </a>
                <a href="#" className="filter__link-author">
                  minthaze
                </a>
                <a href="#" className="filter__link-author">
                  Calvin Harris, Disciples
                </a>
                <a href="#" className="filter__link-author">
                  Tom Boxer
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="filter__wrap">
          <div
            className="filter__button button-year _btn-text"
            onClick={() => toggleVisibility('year')}
          >
            году выпуска
          </div>
          {visible === 'year' && (
            <div className="filter-year">
              <input
                className="radio"
                type="radio"
                placeholder="Более новый"
                id="new"
                name="r"
              />
              <span className="fake"></span>
              <label htmlFor="new">Более новый</label>
              <input
                className="radio"
                type="radio"
                placeholder="Более старые"
                id="old"
                name="r"
              />
              <span className="fake"></span>
              <label htmlFor="old">Более старые</label>
            </div>
          )}
        </div>

        <div className="filter__wrap">
          <div
            className="filter__button button-genre _btn-text"
            onClick={() => toggleVisibility('genre')}
          >
            жанру
          </div>
          {visible === 'genre' && (
            <div className="box">
              <div className="filter-author">
                <a href="#" className="filter__link-author active">
                  Рок
                </a>
                <a href="#" className="filter__link-author">
                  Хип-хоп
                </a>
                <a href="#" className="filter__link-author">
                  Поп-музыка
                </a>
                <a href="#" className="filter__link-author">
                  Техно
                </a>
                <a href="#" className="filter__link-author">
                  Инди
                </a>
                <a href="#" className="filter__link-author">
                  регтайм
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="centerblock__content">
        <div className="content__title playlist-title">
          <div className="playlist-title__col col01">Трек</div>
          <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
          <div className="playlist-title__col col03">АЛЬБОМ</div>
          <div className="playlist-title__col col04">
            <img className="playlist-title__svg" src={watch} alt="time" />
          </div>
        </div>
        <div className="content__playlist playlist">
          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <img className="track__title-svg" src={note} alt="music" />
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="#">
                    Guilt <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="#">
                  Nero
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="#">
                  Welcome Reality
                </a>
              </div>
              <div className="track__time">
                <img className="track__time-svg" src={like} alt="like" />
                <span className="track__time-text">4:44</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <img className="track__title-svg" src={note} alt="music" />
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="#">
                    Elektro <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="#">
                  Dynoro, Outwork, Mr. Gee
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="#">
                  Elektro
                </a>
              </div>
              <div className="track__time">
                <img className="track__time-svg" src={like} alt="like" />
                <span className="track__time-text">2:22</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <img className="track__title-svg" src={note} alt="music" />
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="#">
                    I’m Fire <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="#">
                  Ali Bakgor
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="#">
                  I’m Fire
                </a>
              </div>
              <div className="track__time">
                <img className="track__time-svg" src={like} alt="like" />
                <span className="track__time-text">2:22</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <img className="track__title-svg" src={note} alt="music" />
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="#">
                    Non Stop <span className="track__title-span">(Remix)</span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="#">
                  Стоункат, Psychopath
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="#">
                  Non Stop
                </a>
              </div>
              <div className="track__time">
                <img className="track__time-svg" src={like} alt="like" />
                <span className="track__time-text">4:12</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <img className="track__title-svg" src={note} alt="music" />
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="#">
                    Run Run{' '}
                    <span className="track__title-span">(feat. AR/CO)</span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="#">
                  Jaded, Will Clarke, AR/CO
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="#">
                  Run Run
                </a>
              </div>
              <div className="track__time">
                <img className="track__time-svg" src={like} alt="like" />
                <span className="track__time-text">2:54</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <img className="track__title-svg" src={note} alt="music" />
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="#">
                    Eyes on Fire{' '}
                    <span className="track__title-span">(Zeds Dead Remix)</span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="#">
                  Blue Foundation, Zeds Dead
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="#">
                  Eyes on Fire
                </a>
              </div>
              <div className="track__time">
                <img className="track__time-svg" src={like} alt="like" />
                <span className="track__time-text">5:20</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <img className="track__title-svg" src={note} alt="music" />
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="#">
                    Mucho Bien{' '}
                    <span className="track__title-span">
                      (Hi Profile Remix)
                    </span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="#">
                  HYBIT, Mr. Black, Offer Nissim, Hi Profile
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="#">
                  Mucho Bien
                </a>
              </div>
              <div className="track__time">
                <img className="track__time-svg" src={like} alt="like" />
                <span className="track__time-text">3:41</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <img className="track__title-svg" src={note} alt="music" />
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="#">
                    Knives n Cherries{' '}
                    <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="#">
                  minthaze
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="#">
                  Captivating
                </a>
              </div>
              <div className="track__time">
                <img className="track__time-svg" src={like} alt="like" />
                <span className="track__time-text">1:48</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <img className="track__title-svg" src={note} alt="music" />
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="#">
                    How Deep Is Your Love{' '}
                    <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="#">
                  Calvin Harris, Disciples
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="#">
                  How Deep Is Your Love
                </a>
              </div>
              <div className="track__time">
                <img className="track__time-svg" src={like} alt="like" />
                <span className="track__time-text">3:32</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <img className="track__title-svg" src={note} alt="music" />
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="#">
                    Morena <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="#">
                  Tom Boxer
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="#">
                  Soundz Made in Romania
                </a>
              </div>
              <div className="track__time">
                <img className="track__time-svg" src={like} alt="like" />
                <span className="track__time-text">3:36</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Centerblock
