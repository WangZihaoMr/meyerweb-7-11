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
            <el-image class="code_img" :src="code_url" @click="loadGetCode">
            </el-image>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button
            class="login_button"
            type="danger"
            @click="handleLoginSubmit"
            :loading="loadingStatus"
            >{{ loadingTxt }}</el-button
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
import LoginApi from '../../api/login'
import { mapActions } from 'vuex'

export default {
  name: 'login',
  components: {},
  data() {
    return {
      // 登录表单
      loginForm: {
        username: 'duck',
        password: 'admin888',
        code: '',
        token: ''
      },
      // 规则校验
      rules,
      // 验证码路径
      code_url: '',
      // 表单校验
      loginFormRef: '',
      // 登录按钮loading加载状态
      loadingStatus: false,
      // 登录按钮文本
      loadingTxt: '立即登录'
    }
  },
  created() {
    this.loadGetCode()
  },
  methods: {
    // 验证码
    async loadGetCode() {
      try {
        const { captchaImg, token } = await LoginApi.getCaptchaCode()
        this.loginForm.token = token
        this.code_url = captchaImg
      } catch (error) {
        console.log(error)
      }
    },
    // 表单提交验证
    handleLoginSubmit() {
      this.$refs.loginFormRef.validate((valid) => {
        if (!valid) return
        this.handleLoginForm()
      })
    },
    // 登录
    async handleLoginForm() {
      this.loadingTxt = this.loadingStatus ? '登录中...' : '立即登录'
      try {
        this.loadingStatus = true
        const token = await this.login(this.loginForm)
        if (token) {
          this.$notify({
            title: '提示',
            message: '登录成功',
            type: 'success',
            duration: 3000
          })
          if (!token) return
          this.$router.push('/')
        }
      } catch (error) {
        console.log(error)
      }
      this.loadingStatus = false
    },
    // vuex登录
    ...mapActions({
      login: 'user/login'
    })
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
  cursor: pointer;
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
