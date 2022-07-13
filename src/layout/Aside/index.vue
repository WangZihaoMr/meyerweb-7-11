<!--
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-11 20:44:56
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-13 18:39:37
 * @FilePath: \meyerweb\meyerweb\src\layout\Aside\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="aside-wrapper">
    <!-- {{ menus }} -->
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#222d32"
      text-color="#fff"
      active-text-color="#ffd04b"
      collapse-transition
      router
      :width="isWidth"
      :collapse="isCollapse"
    >
      <!-- unique-opened -->
      <!-- <template> </template> -->
      <MenuTree
        v-for="(item, index) in menus"
        :key="index"
        :item="item"
      ></MenuTree>
      <!-- <el-submenu index="2">
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
      </el-submenu> -->
    </el-menu>
  </div>
</template>

<script>
import MenuTree from './MenuTree'
import { filterMenus } from '../../utils/menus'
export default {
  name: '',
  components: { MenuTree },
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
  method: {},
  computed: {
    menus() {
      return filterMenus(this.$store.getters.menus)
    }
  }
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
