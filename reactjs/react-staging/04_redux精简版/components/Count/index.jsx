/*
 * @Author: liwz
 * @Date: 2024-02-02 09:19:44
 * @LastEditors: liwz
 * @LastEditTime: 2024-02-03 11:08:41
 * @FilePath: /react-staging/src/components/Count/index.jsx
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import React, { Component } from 'react'
import store from '../../redux/store'

export default class Count extends Component {
  // state = {
  //   count: 0
  // }
  // 状态一改变就去调用render,更新视图，如果这样写，那每一个用到store状态时都要这样写一下，太麻烦，直接在index.js中写即可
  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.setState({})
  //   })
  // }
  // 加1
  increment = () => {
    const { value } = this.selectNumber
    // let { count } = this.state
    // this.setState({
    //   count: count + Number(value)
    // })
    // 通知redux加
    store.dispatch({ type: 'increment', data: Number(value) })
    // this.setState({})
  }

  // 减1
  decrement = () => {
    const { value } = this.selectNumber
    // let { count } = this.state
    // this.setState({
    //   count: count - +Number(value)
    // })
    store.dispatch({ type: 'decrement', data: Number(value) })
    // this.setState({})
  }
  // 如果和是奇数时加1
  incrementAsOdd = () => {
    const { value } = this.selectNumber
    let count = store.getState()
    if (count % 2 === 1) {
      store.dispatch({ type: 'increment', data: Number(value) })
    }
    // let { count } = this.state
    // this.setState({
    //   count: count % 2 === 1 ? count + +Number(value) : count
    // })
  }
  // 异步加
  incrementAsync = () => {
    const { value } = this.selectNumber
    // let { count } = this.state
    setTimeout(() => {
      // this.setState({
      //   count: count + +Number(value)
      // })

      store.dispatch({ type: 'increment', data: Number(value) })
    }, 500)
  }
  render() {
    return (
      <div>
        {/* <h2>求的和是：{this.state.count}</h2> */}
        <h2>求的和是：{store.getState()}</h2>
        <select ref={c => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp; &nbsp;
        <button onClick={this.increment}>点击加</button> &nbsp;
        <button onClick={this.decrement}>点击减</button> &nbsp;
        <button onClick={this.incrementAsOdd}>和是奇数时加</button> &nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}
