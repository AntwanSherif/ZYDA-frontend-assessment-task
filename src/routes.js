import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

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