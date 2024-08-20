/*
 * @Author: liwz
 * @Date: 2024-01-22 10:49:40
 * @LastEditors: liwz
 * @LastEditTime: 2024-01-26 11:01:30
 * @FilePath: /react-staging/src/components/List/index.jsx
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import React, { Component } from 'react'
import Item from '../Item'

export default class List extends Component {
  render() {
    const { todos, updateTodo, todoDelete } = this.props
    return (
      <div>
        {todos.map(item => {
          return <Item todo={item} key={item.id} updateTodo={updateTodo} todoDelete={todoDelete}></Item>
        })}
      </div>
    )
  }
}
