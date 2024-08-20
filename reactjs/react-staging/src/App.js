import React, { Component } from 'react'
import axios from 'axios'
import { Link, Route, Routes, NavLink, Switch, Redirect } from 'react-router-dom'

// import Count from './components/Count'
import Count from './container/Count'
import store from './redux/store'

export default class App extends Component {
  render() {
    return (
      <div>
        <Count store={store}></Count>
      </div>
    )
  }
}
