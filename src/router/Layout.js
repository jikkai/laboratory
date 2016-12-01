/* eslint-disable */
import React from 'react'
import { Link } from 'react-router'

import Header from 'components/header'
/* eslint-enable */

class Layout extends React.Component {
  render () {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}

export default Layout
