import React from 'react'
import { Link } from 'react-router'

import Menu from './Menu'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false
    }
  }

  render () {
    return (
      <header className="rega-header dark">
        {
          location.hash.substring(1) === '/'
          ? <a href="/">
              <i className="iconfont icon-keyboardbackspace"></i>
              返回博客
            </a>
          : <Link to="/">
              <i className="iconfont icon-keyboardbackspace"></i>
              返回
            </Link>
        }

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
