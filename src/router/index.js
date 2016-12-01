/* eslint-disable */
import React, { Component } from 'react'
import { Router, IndexRoute, Route, hashHistory } from 'react-router'

import Layout from './Layout'
import Home from './Home'
import Album from './Album'
import List from './List'
/* eslint-enable */

class Routers extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home}/>
          <Route path="album" component={Album}/>
          <Route path="list" component={List}/>
          <Route path="*" component={Home}/>
        </Route>
      </Router>
    )
  }
}

export default Routers
