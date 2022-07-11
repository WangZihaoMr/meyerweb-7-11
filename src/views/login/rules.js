/*
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-11 18:18:05
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-11 18:18:32
 * @FilePath: \meyerweb\src\views\login\rules.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
  username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
}
