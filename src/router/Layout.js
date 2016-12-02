/* eslint-disable */
import React from 'react'
import { Link } from 'react-router'

import Header from 'components/Header'
/* eslint-enable */

class Layout extends React.Component {
  render () {
    return (
      <main>
        <Header href="/" />
        {this.props.children}
      </main>
    )
  }
}

export default Layout
