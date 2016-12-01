/* eslint-disable */
import React from 'react'
import { Link } from 'react-router'
/* eslint-enable */

class Album extends React.Component {
  render () {
    return (
      <div>
        <h4>Album Page</h4>
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
