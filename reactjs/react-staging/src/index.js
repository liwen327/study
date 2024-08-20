/*
 * @Author: liwz
 * @Date: 2024-01-26 11:18:03
 * @LastEditors: liwz
 * @LastEditTime: 2024-02-20 15:06:30
 * @FilePath: /IndexedDB/Users/liwenzhi/study/study/reactjs/react-staging/src/index.js
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
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// )
// store.subscribe(() => {
//   root.render(
//     <React.StrictMode>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </React.StrictMode>
//   )
// })

// 这里text/babel必须要写，因为要把jsx语法转化为js
// 1、创建类组件
class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHot: true
    }
    this.changeWeather = this.changeWeather.bind(this) //利用bind解决MyComponent组件实例的changeWeather的指向问题，指向了组件实例的原型对象
  }
  changeWeather() {
    // changeWeather放在哪里？----  MyComponent的原型对象上，供实例使用
    // 由于changeWeather是作为onClick的回调调用的，因此，是直接调用
    // 类中的方法默认开启了严格模式，所以changeWeather中的this为undefined,(严格模式下不指向window，而是undefined)
    console.log(this)
  }
  /*
    render()是放在哪里的？是放在MyComponent的原型对象上的，供实例使用
    render中的this是谁，是MyComponent的实例对象 === MyComponent的组件实例对象
     */
  render() {
    let { isHot } = this.props
    return (
      <div>
        <em>我是一个类组件</em>

        <span onClick={this.changeWeather}>今天天气很{isHot ? '炎热' : '凉爽'}</span>
      </div>
    )
  }
}

//2、把虚拟Dom渲染到页面上
// ReactDOM.render(<MyComponent />, document.getElementById('test'))
root.render(
  <React.StrictMode>
    <MyComponent />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
