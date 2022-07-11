<template>
  <div class="login-container">
    <div class="login_title">智慧服务平台</div>
    <div class="login-wrapper">
      <h2 class="welcome_title">欢迎登录</h2>
      <el-form
        :model="loginForm"
        :rules="rules"
        ref="loginFormRef"
        class="demo-ruleForm"
      >
        <el-form-item prop="username">
          <el-input
            v-model.trim="loginForm.username"
            suffix-icon="el-icon-user-solid"
            placeholder="请输入账号"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model.trim="loginForm.password"
            show-password
            suffix-icon="el-icon-s-goods"
            placeholder="请输入密码"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <div class="code_box">
            <el-input
              v-model.trim="loginForm.code"
              placeholder="请输入验证码"
              clearable
            >
            </el-input>
            <el-image class="code_img" :src="code_url" @click="getCaptchaCode">
            </el-image>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button class="login_button" type="danger" @click="handleLoginForm"
            >立即登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <p class="bottom_title">
      © 2022 浙ICP备16028135号-1 All Rights Reserved | DUCK
    </p>
  </div>
</template>

<script>
import rules from './rules'
import UserApi from '../../api/user'

export default {
  name: 'login',
  components: {},
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        code: '',
        token: ''
      },
      rules,
      code_url: ''
    }
  },
  created() {
    this.loadGetCode()
  },
  methods: {
    // 验证码
    async loadGetCode() {
      try {
        const { captchaImg, token } = await UserApi.getCaptchaCode()
        this.loginForm.token = token
        this.code_url = captchaImg
      } catch (error) {
        console.log(error)
      }
    },
    // 表单提交验证

    // 登录
    handleLoginForm() {},
    // 点击更换验证码
    getCaptchaCode() {}
  }
}
</script>
<style scoped lang="scss">
.login-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-family: Verdana;
  background: url('../../assets/login_bg.jpg') no-repeat 0 0;
  .login_title {
    text-align: center;
    font-size: 42px;
    margin-top: 50px;
    color: #fff;
    text-transform: uppercase;
    // 字间距
    letter-spacing: 5px;
  }
  .login-wrapper {
    width: 20%;
    margin: 10% auto 13%;
  }
  .login_button {
    width: 100%;
  }
  .welcome_title {
    color: #fff;
    font-size: 30px;
    margin-bottom: 30px;
  }
}
::v-deep(.el-input) {
  padding: 2px 2px 2px 2px;
  border: 1px solid #eee;
  border-radius: 4px;
  background: white;
}
.code_box {
  display: flex;
  justify-content: space-between;
}
.code_img {
  width: 200px;
  margin-left: 10px;
  vertical-align: top;
  border-radius: 4px;
  color: #ffffff;
}
::v-deep(.el-input__icon) {
  line-height: 45px !important;
}
.bottom_title {
  font-size: 14px;
  line-height: 25px;
  color: #fff;
  text-align: center;
  margin-bottom: 15px;
}
</style>
