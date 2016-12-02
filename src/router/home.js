/* eslint-disable */
import React from 'react'
import { Link } from 'react-router'
/* eslint-enable */

class Home extends React.Component {
  render () {
    return (
      <div className="fadein">
        <button className="primary">
          <Link to="album">Go Album</Link>
        </button>
      </div>
    )
  }
}

export default Home
