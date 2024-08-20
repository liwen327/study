/*
 * @Author: liwz
 * @Date: 2024-02-02 09:19:44
 * @LastEditors: liwz
 * @LastEditTime: 2024-02-03 17:17:50
 * @FilePath: /react-staging/src/components/Count/index.jsx
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import React, { Component } from 'react'

export default class Count extends Component {
  // 加1
  increment = () => {
    const { value } = this.selectNumber
    this.props.increment(value * 1)
  }
  // 减1
  decrement = () => {
    const { value } = this.selectNumber
    this.props.decrement(value * 1)
  }
  // 如果和是奇数时加1
  incrementAsOdd = () => {
    const { value } = this.selectNumber
    let { count, increment } = this.props
    if (count % 2 === 1) {
      increment(value * 1)
    }
  }
  // 异步加
  incrementAsync = () => {
    const { value } = this.selectNumber

    this.props.incrementAsync(value * 1, 500)
  }
  render() {
    console.log('props: ', this.props)
    return (
      <div>
        {/* <h2>求的和是：{this.state.count}</h2> */}
        <h2>求的和是：{this.props.count}</h2>
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
