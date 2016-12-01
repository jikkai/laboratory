/* eslint-disable */
import React from 'react'
import { Link } from 'react-router'
/* eslint-enable */

class Album extends React.Component {
  render () {
    return (
      <div>
        <h1>Album Page</h1>
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
