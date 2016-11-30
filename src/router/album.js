/* eslint-disable */
import React from 'react'
import UIRouterReact, { UISref } from 'ui-router-react'
/* eslint-enable */

class Album extends React.Component {
  render () {
    return (
      <div>
        <h1>Album Page</h1>
        <UISref to="home">
          <button className="danger">
            <a>Go Back</a>
          </button>
        </UISref>
        <UISref to="list">
          <button className="info">
            <a>Go List</a>
          </button>
        </UISref>
      </div>
    )
  }
}

export default Album
