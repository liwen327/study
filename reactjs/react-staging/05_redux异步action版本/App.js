import React, { Component } from 'react'
import axios from 'axios'
import { Link, Route, Routes, NavLink, Switch, Redirect } from 'react-router-dom'

import Count from './components/Count'

export default class App extends Component {
  render() {
    return (
      <div>
        <Count></Count>
      </div>
    )
  }
}
