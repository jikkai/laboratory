/* eslint-disable */
import React from 'react'
/* eslint-enable */

class Menu extends React.Component {
  render () {
    const { active } = this.props
    return (
      <div className={active ? 'rega-menu active' : 'rega-menu'}>
        <header className="rega-header">
          <a onClick={this._handleToggleMenu.bind(this)}>
            <i className="iconfont icon-close"></i>
          </a>
        </header>
      </div>
    )
  }

  _handleToggleMenu () {
    this.props.handleToggleMenu()
  }
}

export default Menu
