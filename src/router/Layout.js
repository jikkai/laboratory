/* eslint-disable */
import React from 'react'
import { Link } from 'react-router'

import Header from 'components/Header'
/* eslint-enable */

class Layout extends React.Component {
  render () {
    return (
      <div>
        <Header href="/" />
        {this.props.children}
      </div>
    )
  }
}

export default Layout
