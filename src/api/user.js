/*
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-11 22:07:13
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-11 22:14:10
 * @FilePath: \meyerweb\src\api\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request'
/**
 * 新增用户
 */
export const addUser = (data = {}) => {
  return request({ url: '/sys/user/add', method: 'POST', data })
}
