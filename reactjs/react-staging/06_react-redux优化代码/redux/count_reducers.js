/*
 * @Author: liwz liwz@yonyou.com
 * @Date: 2024-02-03 06:32:48
 * @LastEditors: liwz
 * @LastEditTime: 2024-02-03 14:46:12
 * @FilePath: /react-staging/src/redux/count_reducers.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
  1、该文件用于创建一个为Count组件服务的reducer,reducer的本质是一个函数
  2、reducer函数会接到两个参数，分别为：之前的状态（preState）,动作对象（action）
*/

import { INCREMENT, DECREMENT } from './constant'
const initState = 0
export default function countReducer(preState = initState, action) {
  // 从action对象是获取type, data
  const { type, data } = action
  // 根据type决定如何加工数据
  switch (type) {
    case INCREMENT:
      return preState + data
    case DECREMENT:
      return preState - data
    default:
      return preState
  }
}
