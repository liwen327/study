/*
 * @Author: liwz
 * @Date: 2024-01-22 10:50:01
 * @LastEditors: liwz
 * @LastEditTime: 2024-01-26 11:14:32
 * @FilePath: /react-staging/src/components/Footer/index.jsx
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import React, { Component } from 'react'
import './footer.css'

export default class Footer extends Component {
  clearAll = () => {
    this.props.clearAllDone()
  }
  render() {
    const { todos } = this.props
    let allDoneArr = todos.filter(item => {
      return item.done === true
    })
    let allDoneLength = allDoneArr.length
    let total = todos.length
    return (
      <div className="footerWrap">
        <div>
          已勾选：{allDoneLength}/{total}
        </div>
        <button className="clear-btn" onClick={this.clearAll}>
          清除已完成的
        </button>
      </div>
    )
  }
}
