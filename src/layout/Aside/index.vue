<!--
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-11 20:44:56
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-13 00:03:11
 * @FilePath: \meyerweb\meyerweb\src\layout\Aside\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="aside-wrapper">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#222d32"
      text-color="#fff"
      active-text-color="#ffd04b"
      unique-opened
      collapse-transition
      router
      :width="isWidth"
      :collapse="isCollapse"
    >
      <el-menu-item index="/console">
        <i class="el-icon-s-home"></i>
        <span slot="title">控制台</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-grid"></i>
          <span>系统管理</span>
        </template>
        <el-menu-item index="/user">
          <i class="el-icon-user"></i>
          <span slot="title">用户管理</span>
        </el-menu-item>
        <el-menu-item index="/role">
          <i class="el-icon-user"></i>
          <span slot="title">角色管理</span>
        </el-menu-item>
        <el-menu-item index="/menu">
          <i class="el-icon-menu"></i>
          <span slot="title">菜单管理</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      isCollapse: false,
      isWidth: '40px'
    }
  },
  created() {
    this.$bus.$on('handleFlex', (res) => {
      console.log(res)
      this.isCollapse = res
      this.isWidth = this.isCollapse ? '200px' : '40px'
    })
  },
  method: {}
}
</script>
<style scoped lang="scss">
.aside-wrapper {
  height: 100%;
  .el-menu {
    border-right: 0;
    // background-color: $aside-bg-color;
    background-color: #1b2428;
  }
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
