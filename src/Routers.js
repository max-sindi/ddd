import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as Pages from './pages'
import Header from './partials/header/Header'

class Routers extends Component {

  render() {
    return (
      <Router>
        <div>
            <Header></Header>
            <Switch>
                <Route exact path="/" component={Pages.Home} />
                <Route component={Pages.NotFound404} />
            </Switch>
        </div>
      </Router>
    )
  }

}

export default Routers
