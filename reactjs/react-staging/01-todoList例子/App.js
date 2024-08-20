/*
 * @Author: liwz
 * @Date: 2024-01-11 15:03:04
 * @LastEditors: liwz
 * @LastEditTime: 2024-01-26 11:16:26
 * @FilePath: /react-staging/src/App.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

import React, { Component } from 'react'

export default class App extends Component {
  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: true },
      { id: '003', name: '打代码', done: false }
    ]
  }
  // 增加一个todo
  addTodo = todoObj => {
    let { todos } = this.state
    console.log('todoObj:', todoObj)
    const newTodos = [todoObj, ...todos]
    this.setState({
      todos: newTodos
    })
  }
  // 修改鼠标移入的状态
  updateTodo = (id, done) => {
    console.log('id: ', id)
    let { todos } = this.state
    let newTodos = todos.map(todoObj => {
      if (todoObj.id === id) {
        return { ...todoObj, done: done }
      } else {
        return todoObj
      }
    })
    // 更新状态
    this.setState({
      todos: newTodos
    })
  }
  // 删除todo的回调
  todoDelete = id => {
    let { todos } = this.state
    let newTodos = todos.filter(item => {
      return item.id !== id
    })
    // 更新状态
    this.setState({
      todos: newTodos
    })
  }
  // 清除所有已完成的
  clearAllDone = () => {
    let { todos } = this.state
    let newTodos = todos.filter(item => {
      return item.done != true
    })
    console.log('222: ', newTodos)
    //更新状态
    this.setState({
      todos: newTodos
    })
  }
  render() {
    const { todos } = this.state
    return (
      <div className="App">
        <Header todos={todos} addTodo={this.addTodo}></Header>
        <List todos={todos} updateTodo={this.updateTodo} todoDelete={this.todoDelete}></List>
        <Footer todos={todos} clearAllDone={this.clearAllDone}></Footer>
      </div>
    )
  }
}
