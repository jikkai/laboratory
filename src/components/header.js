import React from 'react'

import Menu from './Menu'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false
    }
  }

  render () {
    const { href } = this.props

    return (
      <header className="rega-header dark">
        <a href={href}>
          <i className="iconfont icon-keyboardbackspace"></i>
        </a>

        <a onClick={this._handleToggleMenu.bind(this)}>
          <i className="iconfont icon-menu"></i>
        </a>

        <Menu active={this.state.active} handleToggleMenu={this._handleToggleMenu.bind(this)} />
      </header>
    )
  }

  _handleToggleMenu () {
    this.setState({
      active: !this.state.active
    })
  }
}

export default Header
