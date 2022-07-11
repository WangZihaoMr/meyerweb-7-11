/*
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-11 15:59:17
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-11 21:59:03
 * @FilePath: \meyerweb\src\utils\request.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 引入axios
import axios from 'axios'
// 引入消息提示组件
import { Message } from 'element-ui'
// 引入枚举消息值
import enumerationObj from '../enumeration/request-message'

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000,
  headers: { 'X-Custom-Header': 'foobar' }
})

instance.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  function (response) {
    console.log(response)
    if (response.data.code === 200) {
      const { data } = response.data
      console.log(data)
      return data
    }
    // 消息提示
    _ShowErrorMessage(response.data.code, response.data.msg)
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 错误消息提示
function _ShowErrorMessage(code, msg) {
  const message = enumerationObj[code] || msg || '发生未知错误'
  Message({
    message,
    type: 'error'
  })
}

// 统一请求传参问题
function request(options) {
  options.method = options.method || 'GET'
  options.method.toLocaleUpperCase() === 'GET' ? options.data : {}
  return instance(options)
}

export default request
