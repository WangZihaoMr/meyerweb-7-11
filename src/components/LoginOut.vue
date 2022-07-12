<template>
  <div class="loginOut-wrapper">
    <el-avatar class="avatar" :size="40" :src="userAvatarUrl"></el-avatar>
    <el-dropdown @command="handleOptions">
      <span class="el-dropdown-link">
        duck<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="settings">个人设置</el-dropdown-item>
        <el-dropdown-item command="loginOut">安全退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      userAvatarUrl: ''
    }
  },
  created() {},
  methods: {
    // 下拉菜单
    handleOptions(command) {
      console.log(command)
      if (command === 'settings') {
        this.handleSettings()
      } else {
        this.handleLoginOut()
      }
    },
    // 个人设置
    handleSettings() {},
    // 退出登录
    async handleLoginOut() {
      this.$store.dispatch('user/loginOut')
      this.$router.push('/login')
    }
  }
}
</script>
<style scoped lang="scss">
.loginOut-wrapper {
  height: 60px;
  display: flex;
  align-items: center;
  .avatar {
    margin: 10px;
  }
  .el-dropdown-link {
    cursor: pointer;
    font-size: 18px;
    color: white;
    font-weight: bold;
  }
}
</style>
