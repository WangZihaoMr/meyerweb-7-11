/*
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-13 00:31:19
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-13 00:43:37
 * @FilePath: \meyerweb\meyerweb\src\api\roles.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '../utils/request'

/**
 * 获取角色列表接口
 * @param {*} data
 * @returns
 */
const getRoleList = (data = {}) => {
  return request({
    url: `/sys/role/list?current=${data.current}&size=${data.size}`,
    method: 'GET'
  })
}

// 导出
export default { getRoleList }
