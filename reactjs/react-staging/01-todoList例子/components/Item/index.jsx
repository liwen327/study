/*
 * @Author: liwz
 * @Date: 2024-01-22 10:50:54
 * @LastEditors: liwz
 * @LastEditTime: 2024-01-26 11:05:18
 * @FilePath: /react-staging/src/components/Item/index.jsx
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import React, { Component } from 'react'
import './item.css'

export default class Item extends Component {
  // this.props.updateTodo()
  state = {
    mouse: false
  }
  // 更新已完成的回调
  handleCheck = id => {
    return event => {
      let { target } = event
      console.log('target: ', target)
      this.props.updateTodo(id, target.checked)
    }
  }
  changeMouse = flag => {
    return () => {
      // console.log('flag: ', flag)
      this.setState({
        mouse: flag
      })
    }
  }
  handleDelete = id => {
    return () => {
      console.log('id1111: ', id)
      if (window.confirm('确定要删除吗？')) {
        this.props.todoDelete(id)
      }
    }
  }

  render() {
    const { id, name, done } = this.props.todo
    const { mouse } = this.state
    return (
      <div style={{ backgroundColor: mouse ? '#ddd' : 'white' }} onMouseEnter={this.changeMouse(true)} onMouseLeave={this.changeMouse(false)}>
        <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)} />
        <span>{name}</span>
        <button className="del_btn" style={{ display: mouse ? 'inline-block' : 'none' }} onClick={this.handleDelete(id)}>
          删除
        </button>
      </div>
    )
  }
}
