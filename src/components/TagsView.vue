<template>
  <div class="tags-wrapper">
    <!-- tags标签 -->
    <ul class="tags">
      <li
        v-for="(item, index) in tags"
        :key="index"
        :class="{ active: $route.path === item.path }"
        @click="handleTagJump(index, item.path)"
      >
        {{ item.title }}
        <!-- 关闭叉号 :class="{ active_close: $route.path === item.path }" -->
        <span class="close" v-if="index !== 0" @click="handleTagClose(index)"
          ><i class="el-icon-close"></i
        ></span>
      </li>
    </ul>
    <!-- 放大全屏、关闭所有标签功能 -->
    <div class="functional-wrapper">
      <div class="full_screen">
        <el-tooltip
          class="item"
          effect="dark"
          content="取消全屏"
          placement="bottom"
        >
          <i class="el-icon-rank" @click="toggleFullscreen"></i>
        </el-tooltip>
      </div>
      <div>
        <el-tooltip
          class="item"
          effect="dark"
          content="关闭所有标签"
          placement="bottom"
        >
          <i class="el-icon-circle-close" @click="handleCloseAllTag"></i>
        </el-tooltip>
      </div>
      <!-- 退出登录 -->
      <login-out></login-out>
    </div>
  </div>
</template>

<script>
import LoginOut from './LoginOut'
import screenfull from 'screenfull'

export default {
  name: 'tagsview',
  components: { LoginOut },
  data() {
    return {}
  },
  created() {},
  methods: {
    // tag跳转
    handleTagJump(i, path) {
      if (this.$route.path !== path) {
        this.$router.push(path)
      }
    },
    // tag关闭
    handleTagClose(i) {
      this.$store.dispatch('tagsview/delTags', i)
    },
    // 全屏功能
    toggleFullscreen() {
      if (!screenfull.isEnabled) {
        return false
      }
      screenfull.request()
    },
    // 关闭所有tag标签
    handleCloseAllTag() {
      this.$store.dispatch('tagsview/delAlltags', 1)
      this.$router.push('/console')
    }
  },
  computed: {
    // 获取vuex的tags数据
    tags() {
      return this.$store.getters.tags
    }
  },
  // 监听路由变化
  watch: {
    $route: {
      handler(to, from) {
        console.log('to', to)
        console.log('watch', from)
        const routeObj = {
          title: to.meta.title,
          path: to.path
        }
        this.$store.dispatch('tagsview/addTags', routeObj)
      },
      immediate: true,
      deep: true
    }
  }
}
</script>
<style scoped lang="scss">
.tags-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  .tags {
    display: flex;
    align-items: center;
    justify-content: space-between;
    li {
      border: 1px solid #e6a23c;
      height: 26px;
      line-height: 26px;
      padding: 0 10px;
      border-radius: 4px;
      font-size: 12px;
      margin-left: 10px;
      box-sizing: border-box;
      white-space: nowrap;
      background-color: #ffffff;
      color: #e6a23c;
      display: flex;
      align-items: center;
      cursor: pointer;
      .close {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 16px;
        height: 16px;
        margin-left: 4px;
        border-radius: 50%;
        &:hover {
          color: #ffffff;
          background-color: #e6a23c;
        }
      }
      .active_close {
        display: none;
      }
    }
    .active {
      background-color: #e6a23c;
      border-color: #e6a23c;
      color: #fff;
    }
  }
  .functional-wrapper {
    display: flex;
    align-items: center;
    .full_screen {
      margin-right: 20px;
      transform: rotate(20deg);
    }
  }
}
.item {
  cursor: pointer;
}
</style>
