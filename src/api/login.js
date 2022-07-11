/*
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-11 18:20:31
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-11 22:07:57
 * @FilePath: \meyerweb\src\api\login.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request'

/**
 * 获取验证码接口
 */
const getCaptchaCode = () => {
  return request({ url: '/sys/captcha', method: 'GET' })
}

/**
 * 登录接口
 */
const login = (data = {}) => {
  return request({
    url: `/sys/login?username=${data.username}&password=${data.password}&code=${data.code}&token=${data.token}`,
    method: 'POST'
  })
}

/**
 * 退出登录接口
 */
const loginOut = () => {
  return request({ url: '/sys/logout', method: 'POST' })
}

/**
 * 生成密码接口
 */
const setPwd = () => {
  return request({ url: '/sys/setpwd', method: 'GET' })
}

// 导出方法
export default {
  getCaptchaCode,
  login,
  loginOut,
  setPwd
}
