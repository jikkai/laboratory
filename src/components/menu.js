import React from 'react'

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

        <section className="rega-menu-content">
          <h4 className="center">还没想好在这里放什么……</h4>
        </section>
      </div>
    )
  }

  _handleToggleMenu () {
    this.props.handleToggleMenu()
  }
}

export default Menu
