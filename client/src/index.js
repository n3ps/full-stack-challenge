import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Reviews from './components/Reviews'
import Employees from './components/Employees'
import Feedback from './components/Feedback'
import Home from './components/Home'
import 'bulma/css/bulma.css'

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/employees' component={Employees} />
      <Route path='/reviews/:userid?' component={Reviews} />
      <Route path='/feedback/:userid' component={Feedback} />
    </Switch>
  </Router>,
  document.getElementById('root')
)
