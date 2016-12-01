/* eslint-disable */
import React from 'react'
import { Link } from 'react-router'
/* eslint-enable */

class List extends React.Component {
  render () {
    return (
      <div>
        <h1>List Page</h1>
        <button className="danger">
          <Link to="album">Go Back</Link>
        </button>
      </div>
    )
  }
}

export default List
