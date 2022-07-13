<template>
  <div class="menu-wrapper">
    <el-menu-item
      v-if="!item.children || (item.children && item.children.length <= 0)"
      :index="item.path"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>

    <el-submenu
      v-if="item.children && item.children.length > 0"
      :index="item.path"
    >
      <template slot="title">
        <i :class="'el-icon' + item.icon"></i>
        <span>{{ item.label }}</span>
      </template>
      <!-- <el-menu-item :index="item.path">
        <i :class="'el-icon' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item> -->
      <MenuTree
        v-for="(child, i) in item.children"
        :key="i"
        :item="child"
      ></MenuTree>
    </el-submenu>
  </div>
</template>

<script>
import MenuTree from './MenuTree'
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  name: 'MenuTree',
  components: { MenuTree },
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
