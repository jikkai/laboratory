import React from 'react'
import { Router, IndexRoute, Route, hashHistory } from 'react-router'

import Layout from './Layout'
import Home from './Home'
import Work from './Work'
import About from './About'

class Routers extends React.Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home}/>
          <Route path="work" component={Work}/>
          <Route path="about" component={About}/>
          <Route path="*" component={Home}/>
        </Route>
      </Router>
    )
  }
}

export default Routers
