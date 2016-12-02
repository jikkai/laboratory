import React from 'react'
import { Link } from 'react-router'

class List extends React.Component {
  render () {
    return (
      <div className="fadein">
        <h4>List Page</h4>
        <button className="danger">
          <Link to="album">Go Back</Link>
        </button>
      </div>
    )
  }
}

export default List
