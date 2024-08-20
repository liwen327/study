/*
 * @Author: liwz
 * @Date: 2024-02-03 16:16:09
 * @LastEditors: liwz
 * @LastEditTime: 2024-02-03 17:18:48
 * @FilePath: /react-staging/src/container/Count/index.jsx
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
// 引入Count的UI组件
import CountUI from '../../components/Count'

// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

// 引入action
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_actions'

//  怎么跟容器组件的子组件component中的Count UI组件联系起来？怎么通过props给它传值 与操作state的方法？？
// 传递状态
function mapStateToProps(state) {
  return { count: state }
}

// 传递改变状态的方法
function mapDispatchToProps(dispatch) {
  return {
    increment: number => {
      dispatch(createIncrementAction(number))
    },
    decrement: number => {
      dispatch(createDecrementAction(number))
    },
    incrementAsync: (number, time) => {
      dispatch(createIncrementAsyncAction(number, time))
    }
  }
}

// 使用connect()()创建并暴露一个Count的容器组件
// export default const CountContainer = connect()(CountUI)
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
