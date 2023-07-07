import { useState, useEffect, useRef } from 'react'
import prev from '../img/icon/prev.svg'
import play from '../img/icon/play.svg'
// import stop from '../img/icon/stop.svg'
import next from '../img/icon/next.svg'
import repeat from '../img/icon/repeat.svg'
import shuffle from '../img/icon/shuffle.svg'
import like from '../img/icon/like.svg'
import dislike from '../img/icon/dislike.svg'
import note from '../img/icon/note.svg'
import volume from '../img/icon/volume.svg'
import quadro from '../img/isLoading/quadro.png'
import rectangle from '../img/isLoading/rectangle.png'
import basta from '../../src/audio/1.mp3'

function Bar() {
  const [loading, setLoading] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [percentage, setPercentage] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  // const [image, setImage] = useState(false)

  const ref = useRef(null)

  useEffect(() => {}, [percentage])

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  const onChange = (e) => {
    const audio = ref.current
    audio.currentTime = (audio.duration / 100) * e.target.value
    setPercentage(e.target.value)
  }

  // const onChangeImage = () => {
  //   const imagesPath = {
  //     play: `${play}`,
  //     stop: `${stop}`,
  //   }
  // }

  const playing = () => {
    const audio = ref.current
    audio.volume = 0.1

    if (!isPlaying) {
      setIsPlaying(true)
      ref.current.play()
    }

    if (isPlaying) {
      setIsPlaying(false)
      ref.current.pause()
    }
  }

  const timeUpdate = (e) => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2)
    const time = e.currentTarget.currentTime

    setPercentage(+percent)
    setCurrentTime(time.toFixed(2))
  }

  return (
    <div className="bar">
      <div className="bar__content">
        <div className="">
          <input
            type="range"
            className="bar__player-progress"
            onChange={onChange}
            value={currentTime}
          />
          <audio ref={ref} src={basta} onTimeUpdate={timeUpdate} />
        </div>
        <div className="bar__player-block">
          <div className="bar__player player">
            <div className="player__controls">
              <div className="player__btn-prev">
                <img className="player__btn-prev-svg" src={prev} alt="prev" />
              </div>
              <div className="player__btn-play _btn">
                <img
                  className="player__btn-play-svg"
                  src={play}
                  alt="play"
                  onClick={playing}
                />
              </div>

              <div className="player__btn-next">
                <img className="player__btn-next-svg" src={next} alt="next" />
              </div>
              <div className="player__btn-repeat _btn-icon">
                <img
                  className="player__btn-repeat-svg"
                  src={repeat}
                  alt="repeat"
                />
              </div>
              <div className="player__btn-shuffle _btn-icon">
                <img
                  className="player__btn-shuffle-svg"
                  src={shuffle}
                  alt="shuffle"
                />
              </div>
            </div>
            <div className="player__track-play track-play">
              <div className="track-play__contain">
                <div className="track-play__image">
                  {loading ? (
                    <img src={quadro} />
                  ) : (
                    <img className="track-play__svg" src={note} alt="music" />
                  )}
                </div>
                <div className="track-play__author">
                  {loading ? (
                    <img src={rectangle} />
                  ) : (
                    <a className="track-play__author-link" href="#">
                      Ты та...
                    </a>
                  )}
                </div>
                <div className="track-play__album">
                  {loading ? (
                    <img src={rectangle} />
                  ) : (
                    <a className="track-play__album-link" href="#">
                      Баста
                    </a>
                  )}
                </div>
              </div>

              <div className="track-play__like-dis">
                <div className="track-play__like _btn-icon">
                  <img className="track-play__like-svg" src={like} alt="like" />
                </div>
                <div className="track-play__dislike _btn-icon">
                  <img
                    className="track-play__dislike-svg"
                    src={dislike}
                    alt="dislike"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bar__volume-block volume">
            <div className="volume__content">
              <div className="volume__image">
                <img className="volume__svg" src={volume} alt="volume" />
              </div>
              <div className="volume__progress _btn">
                <input
                  className="volume__progress-line _btn"
                  type="range"
                  name="range"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bar
