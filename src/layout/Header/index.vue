<template>
  <div class="header-wrapper">
    <!-- 侧边栏的伸缩按钮 -->
    <div class="openBtn" @click="handleFlex">
      <i class="el-icon-s-fold aside_icon" v-if="isIconStatus"></i>
      <i class="el-icon-s-unfold aside_icon" v-else></i>
    </div>
    <!-- tags标签 -->
    <tags-view></tags-view>
  </div>
</template>

<script>
// 引入tags组件
import TagsView from '../../components/TagsView'

export default {
  name: '',
  components: {
    TagsView
  },
  data() {
    return {
      isIconStatus: true,
      isIcon: ''
    }
  },
  created() {},
  methods: {
    handleFlex() {
      this.isIconStatus = !this.isIconStatus
      this.$bus.$emit('handleFlex', this.isIconStatus)
    }
  }
}
</script>
<style scoped lang="scss">
.header-wrapper,
.aside_icon {
  display: flex;
  height: 60px;
  align-items: center;
  font-size: 25px;
  color: #ffffff;
  cursor: pointer;
}
</style>
