/*
 * @Author: liwz
 * @Date: 2024-02-03 14:34:29
 * @LastEditors: liwz
 * @LastEditTime: 2024-02-03 15:32:37
 * @FilePath: /react-staging/src/redux/count_actions.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
/*
  该文件专门为count组件生成Action对象

*/
import { INCREMENT, DECREMENT } from './constant'
export const createIncrementAction = data => ({ type: INCREMENT, data })

export const createDecrementAction = data => ({ type: DECREMENT, data })
// 异步action指action的值为函数，异步Action中一般都会调用同步action，异步action不是必须的，如果不想在自己组件中写，可以使用它。
export const createIncrementAsyncAction = (data, time) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(createIncrementAction(data))
    }, time)
  }
}
