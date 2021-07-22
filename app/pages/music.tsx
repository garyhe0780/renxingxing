import { musics } from "app/core/constants/music"
import { Link, BlitzPage, useMutation, Routes } from "blitz"
import { useState } from "react"

import Layout from "../core/layouts/Layout"

const Album = () => {
  return (
    <div className="album">
      <div className="image-wrapper">
        <img src="images/IMG_1200.png" className="img" alt="img" />
        <div className="content">
          <div className="name">爱的四季物语</div>
          <div className="author">任行行</div>
          <div className="time">LOVE * 2018</div>

          <div className="btns">
            <button>播放</button>
            <button>随机</button>
          </div>
        </div>
      </div>
      <div className="song-list">
        {musics.map((e) => (
          <Song {...e} key={e.name} />
        ))}
      </div>
      <style jsx>
        {`
          .album {
            color: white;
          }
          .image-wrapper {
            width: 100vw;
            height: 220px;
            display: flex;
            align-items: flex-end;
            color: white;
          }
          .image-wrapper img {
            width: 220px;
            height: 220px;
            object-fit: cover;
            margin-right: 40px;
          }
          .btns {
            margin-top: 60px;
          }
        `}
      </style>
    </div>
  )
}

const Song = (props: { index: number; name: string; duration: string }) => {
  const { index, name, duration } = props
  return (
    <div className="song">
      <div className="no">{index}</div>
      <div className="name">{name}</div>
      <div className="duration">{duration}</div>
      <style jsx>{`
        .song {
          width: 100vw;
          height: 44px;
          display: flex;
        }
      `}</style>
    </div>
  )
}

const Audio = (props: { name: string }) => {
  const { name } = props

  return (
    <div className="audio">
      <div className="cover">
        <img src="images/IMG_1200.png" className="img" alt="img" />
      </div>
      <div className="title">{name}</div>
      <style>{`
      .audio {
        padding: 20px 4em;
        width: 100vw;
        height: 88px;
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
      }
      .audio .cover {
        width: 44px;
        height: 44px;
      }
      .audio .cover img {
        width: 44px;
        height: 44px;
      }
     `}</style>
    </div>
  )
}

const Music: BlitzPage = () => {
  const [index, setIndex] = useState(1)

  return (
    <div className="music">
      <header>
        <h1>任我行</h1>
        <ol>
          <li>首页</li>
          <li>音乐盒</li>
          <li>画廊</li>
        </ol>
      </header>
      <main>
        <div>
          <Album />
          {musics[index] && <Audio name={musics[index]?.name!} />}
        </div>
      </main>
      <footer></footer>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
        }
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          font-family: "ZCOOL XiaoWei", serif;
          box-sizing: border-box;
        }
        .app {
          min-height: 100vh;
          width: 100vw;
        }
        header {
          padding: 1em 2.5em;
          width: 100vw;
          height: 160px;
          background-color: #000;
        }
        header h1 {
          padding: 0.4em;
          color: white;
          border-bottom: 1px solid white;
        }
        header ol {
          padding-left: 0;
          display: flex;
          color: white;
          list-style: none;
        }
        header ol li {
          width: auto;
          margin-right: 1.4em;
          color: inherit;
          cursor: pointer;
        }
        .music {
          background-color: #333;
        }
        footer {
          width: 100%;
          height: 160px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #000;
        }
      `}</style>
    </div>
  )
}

Music.suppressFirstRenderFlicker = true
Music.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Music
