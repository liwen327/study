/*
 * @Author: liwz
 * @Date: 2024-01-22 10:48:28
 * @LastEditors: liwz
 * @LastEditTime: 2024-01-26 11:17:33
 * @FilePath: /react-staging/src/components/Header/index.jsx
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import React, { Component } from 'react'
import { nanoid } from 'nanoid'

export default class Header extends Component {
  onKeyUp = event => {
    let { target, keyCode } = event
    if (keyCode !== 13) return
    if (target.value.trim() === '') {
      alert('输入不能为空!')
      return
    }
    let todoObj = {
      id: nanoid(),
      name: target.value,
      done: false
    }
    this.props.addTodo(todoObj)
    target.value = ''
  }
  render() {
    return (
      <div>
        <input type="text" onKeyUp={this.onKeyUp} />
      </div>
    )
  }
}
