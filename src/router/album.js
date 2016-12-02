import React from 'react'
import { Link } from 'react-router'

import { albums } from 'action/get'

class Album extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      albums: []
    }
    this.init()
  }

  init () {
    albums.then((resp) => {
      const { dirs } = resp.data
      const regFile = /\.(jpg|png|gif|jpeg)(\?.*)?$/
      const albums = []
      for (let i = 0; i < dirs.length; i++) {
        if (!regFile.test(dirs[i])) {
          const albumArr = dirs[i].split('/')
          const album = albumArr[albumArr.length - 1]
          albums.push(album)
        }
      }
      console.log(albums)
    })
  }

  render () {
    return (
      <div className="fadein">
        <button className="danger">
          <Link to="/">Go Back</Link>
        </button>
        <button className="info">
          <Link to="list">Go List</Link>
        </button>
      </div>
    )
  }
}

export default Album
