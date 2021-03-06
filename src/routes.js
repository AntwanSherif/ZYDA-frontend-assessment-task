import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import DiscoveryPage from './pages/discovery'


export default class Routes extends Component {
  render() {
    return(
      <Switch>
        <Route exact path="/" component={DiscoveryPage} />
      </Switch>
    )
  }
}