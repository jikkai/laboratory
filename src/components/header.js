/* eslint-disable */
import React from 'react'
import { UISref } from 'ui-router-react'

import Menu from './menu'
/* eslint-enable */

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
        <UISref to="home">
          <a>
            <i className="iconfont icon-keyboardbackspace"></i>
          </a>
        </UISref>

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
