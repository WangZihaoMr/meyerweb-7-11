/*
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-13 20:49:48
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-13 20:50:07
 * @FilePath: \meyerweb\meyerweb\src\views\user\rules.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
  avatar: [{ required: true, message: '请输入头像', trigger: 'blur' }],
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
  status: [{ required: true, message: '请选择状态', trigger: 'change' }]
}
