/* eslint-disable */
import React from 'react'
import UIRouterReact, { UISref } from 'ui-router-react'
/* eslint-enable */

class List extends React.Component {
  render () {
    return (
      <div>
        <h1>List Page</h1>
        <UISref to="album">
          <button className="danger">
            <a>Go Back</a>
          </button>
        </UISref>
      </div>
    )
  }
}

export default List
