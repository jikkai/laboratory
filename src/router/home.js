/* eslint-disable */
import React from 'react'
import UIRouterReact, { UISref } from 'ui-router-react'
/* eslint-enable */

class Home extends React.Component {
  render () {
    return (
      <div>
        <h1>Home Page</h1>
        <UISref to="album">
          <button className="primary">
            <a>Go Album</a>
          </button>
        </UISref>
      </div>
    )
  }
}

export default Home
