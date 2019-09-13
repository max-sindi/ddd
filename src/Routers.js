import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as Pages from './pages'

class Routers extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Pages.Home} />
          <Route component={Pages.NotFound404} />
        </Switch>
      </Router>
    )
  }

}

export default Routers
