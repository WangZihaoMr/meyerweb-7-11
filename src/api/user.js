import request from '@/utils/request'

/**
 * 获取验证码接口
 */
const getCaptchaCode = () => {
  return request({ url: '/captcha', method: 'GET' })
}

/**
 * 登录接口
 */
const login = (data = {}) => {
  return request({ url: '/login', method: 'POST', data })
}

/**
 * 退出登录接口
 */
const loginOut = () => {
  return request({ url: '/logout', method: 'POST' })
}

/**
 * 生成密码接口
 */
const setPwd = () => {
  return request({ url: '/setpwd', method: 'GET' })
}

// 导出方法
export default {
  getCaptchaCode,
  login,
  loginOut,
  setPwd
}
