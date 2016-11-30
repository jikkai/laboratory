/* eslint-disable */
import React, { Component } from 'react'
import UIRouterReact, { UIView } from 'ui-router-react'

import Home from './home'
import Album from './album'
import List from './list'

import Header from 'components/header'
/* eslint-enable */

const router = new UIRouterReact()

router.stateRegistry.register({
  name: 'home',
  url: '/home',
  component: Home
})
router.stateRegistry.register({
  name: 'album',
  url: '/album',
  component: Album
})
router.stateRegistry.register({
  name: 'list',
  url: '/list',
  component: List
})

router.start()

class Router extends Component {
  render () {
    return (
      <div>
        <Header />
        <UIView/>
      </div>
    )
  }
}

export default Router
