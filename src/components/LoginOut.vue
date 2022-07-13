<template>
  <div class="loginOut-wrapper">
    <el-avatar class="avatar" :size="40" :src="userInfo.avatar"></el-avatar>
    <el-dropdown @command="handleOptions">
      <span class="el-dropdown-link">
        {{ userInfo.username }}<i class="el-icon-arrow-down el-icon--right"></i>
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
    return {}
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
      this.$confirm('您确定要退出系统吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      })
        .then(() => {
          this.$notify({
            title: '提示',
            message: '退出登录...',
            type: 'success',
            duration: 2000
          })
          this.$store.dispatch('user/loginOut')
          // 延时两秒退出
          setTimeout(() => {
            this.$router.push('/login')
          }, 2000)
        })
        .catch(() => {})
    }
  },
  computed: {
    userInfo() {
      return this.$store.getters.userInfo
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
