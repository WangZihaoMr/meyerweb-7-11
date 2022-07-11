/*
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-11 15:59:17
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-11 16:11:59
 * @FilePath: \meyerweb\src\utils\request.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 1000,
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
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 统一请求传参问题
function request(options) {
  options.method = options.method || 'GET'
  options.emthod =
    options.method.toLocaleUpperCase() === 'GET' ? options.data : {}
  return instance(options)
}

export default request
