/*
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-11 16:05:38
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-11 16:30:32
 * @FilePath: \meyerweb\src\api\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request'

/**
 * 获取验证码接口
 */
const getCode = () => {
  return request({ url: '/sys/captcha', method: 'GET' })
}

/**
 * 登录接口
 */
const login = (data = {}) => {
  return request({ url: '/sys/login', method: 'POST', data })
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
const setLoginPwd = () => {
  return request({ url: '/sys/setpwd', method: 'GET' })
}
/sys/setpwd

export default {
  getCode,
  login,
  loginOut,
  setLoginPwd
}
