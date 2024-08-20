/*
 * @Author: liwz liwz@yonyou.com
 * @Date: 2024-02-03 06:32:12
 * @LastEditors: liwz
 * @LastEditTime: 2024-02-03 08:47:16
 * @FilePath: /react-staging/src/redux/store.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
  该文件专门用于暴露一个store对象，整个应用只有一个store对象

*/
// 引入createStore对象
import { createStore } from 'redux'
import countReducer from './count_reducers'
export default createStore(countReducer)
