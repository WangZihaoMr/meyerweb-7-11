/*
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-11 15:59:17
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-12 09:35:33
 * @FilePath: \meyerweb\src\utils\request.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 引入axios
import axios from 'axios'
// 引入消息提示组件
import { Message } from 'element-ui'
// 引入枚举消息值
import enumerationObj from '../enumeration/request-message'
// 引入loading加载方法
// import Loading from './loading'
// 创建axios实例
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000
  // headers: {
  //   token
  // }
})

// 请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 开启loading加载
    // Loading.open()
    // console.log(store.token)
    const token = this.$store.getters.token
    if (token) config.headers.Authorization = token
    return config
  },
  function (error) {
    // 关闭loading加载
    // Loading.close()
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  function (response) {
    console.log(response)
    if (response.data.code === 200) {
      const { data } = response.data
      console.log(data)
      // 关闭loading加载
      // Loading.close()
      return data
    }

    // 消息提示
    _ShowErrorMessage(response.data.code, response.data.msg)
  },
  function (error) {
    // 关闭loading加载
    // Loading.close()
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

// 导出axios实例
export default request
