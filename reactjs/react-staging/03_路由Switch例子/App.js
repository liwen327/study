import React, { Component } from 'react'
import axios from 'axios'
import { Link, Route, Routes, NavLink, Switch, Redirect } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import ABC from './components/ABC'
import Test from './components/Test'

export default class App extends Component {
  render() {
    return (
      <div>
        <h2 className="headerName">使用react.js的router</h2>
        <NavLink to="/home">Home</NavLink> <br />
        <NavLink to="/about">About</NavLink>
        {/* react-router-dom@6的写法 */}
        {/* <Routes>
          <Route component={Home} path="/home"></Route>
          <Route component={About} path="/about"></Route>
        </Routes> */}
        {/* <Routes> */}
        {/* react-router-dom@5的写法 */}
        <Switch>
          <Route component={Home} path="/home" />
          <Route component={About} path="/about" />
          <Route component={ABC} path="/a" />
          <Route component={ABC} path="/a" />
          <Route component={ABC} path="/a" />
          <Route component={ABC} path="/a" />
          <Route component={ABC} path="/a" />
          <Route component={Test} path="/home" />
          <Redirect to="/home" />
        </Switch>
        {/* </Routes> */}
      </div>
    )
  }
}
