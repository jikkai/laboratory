import React from 'react'

import Header from 'components/Header'

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
