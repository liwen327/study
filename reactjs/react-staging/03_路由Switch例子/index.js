/*
 * @Author: liwz
 * @Date: 2024-01-26 11:18:03
 * @LastEditors: liwz
 * @LastEditTime: 2024-01-31 09:03:51
 * @FilePath: /react-staging/src/index.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router, BrowserRouter, HashRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
