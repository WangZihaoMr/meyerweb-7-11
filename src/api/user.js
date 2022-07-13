/*
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-11 22:07:13
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-14 00:34:59
 * @FilePath: \meyerweb\src\api\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request'
/**
 * 新增用户接口
 * @param {*} data
 * @returns
 */
const addUser = (data = {}) => {
  return request({ url: '/sys/user/add', method: 'POST', data })
}

/**
 * 分配角色接口
 * @param {*} params
 * @returns
 */
const allocationRoles = () => {
  return request({ url: '/sys/user/assign/{userId}', method: 'POST' })
}

/**
 * 删除用户接口
 * @returns
 */
const delUser = () => {
  return request({ url: '/sys/user/del', method: 'POST' })
}

/**
 * 获取用户信息接口
 * @returns
 */
const getUserInfo = () => {
  return request({ url: '/sys/user/info', method: 'GET' })
}

/**
 * 获取用户列表接口
 * @returns
 */
const getUserList = (data = {}) => {
  return request({
    url: `/sys/user/list?current=${data.current}&size=${data.size}&username=${data.username}`,
    method: 'GET'
  })
}

/**
 * 单个用户信息
 * @returns
 */
const findUser = (id = '') => {
  return request({ url: `/sys/user/userInfo/${id}`, method: 'GET' })
}

/**
 * 更新用户接口
 * @returns
 */
const updateUser = (data = {}) => {
  return request({ url: '/sys/user/update', method: 'PUT', data })
}

export default {
  addUser,
  allocationRoles,
  delUser,
  getUserInfo,
  getUserList,
  findUser,
  updateUser
}
