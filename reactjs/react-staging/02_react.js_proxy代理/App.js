import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  getData1 = () => {
    axios.get('/api1/users').then(
      res => {
        if (res.code == 200) {
          console.log('获取数据：', res)
        }
      },
      error => {
        console.log('获取数据失败：', error)
      }
    )
  }
  render() {
    return (
      <div>
        <button onClick={this.getData1}>点击获取service1的数据</button>
        <button>点击获取service2的数据</button>
      </div>
    )
  }
}
