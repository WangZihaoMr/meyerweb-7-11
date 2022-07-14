<!--
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-12 09:01:22
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-14 23:41:30
 * @FilePath: \meyerweb\meyerweb\src\views\role\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="role-wrapper">
    <!-- 面包屑 -->
    <bread-crumb></bread-crumb>
    <div class="role-content">
      <!-- 头部 -->
      <div class="header">
        <el-form :inline="true" :model="userForm" class="demo-form-inline">
          <el-form-item label="角色">
            <el-input
              v-model.trim="userForm.name"
              placeholder="请输入角色"
              clearable
              @clear="loadRoleList"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="success"
              icon="el-icon-search"
              @click="handleUserFormQuery"
              >查询</el-button
            >
          </el-form-item>
        </el-form>
        <!-- 新增 -->
        <el-button
          type="primary"
          icon="el-icon-edit"
          @click="handleOpenDialogForm('add')"
          >新增</el-button
        >
      </div>

      <!-- 表格 -->
      <el-table
        v-loading="loadingStatus"
        :data="roleList"
        border
        stripe
        style="width: 100%"
      >
        <el-table-column align="center" type="index" label="序号" width="60">
        </el-table-column>
        <el-table-column align="center" prop="code" label="编码" width="150">
        </el-table-column>
        <el-table-column align="center" prop="name" label="角色" width="150">
        </el-table-column>
        <el-table-column align="center" prop="remark" label="描述" width="200">
        </el-table-column>
        <el-table-column align="center" prop="status" label="状态">
          <template slot-scope="scope">
            <el-switch
              :value="scope.row.status == 1 ? true : false"
              active-color="#13ce66"
              inactive-color="#ff4949"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="createTime"
          label="注册时间"
          width="200"
        >
        </el-table-column>
        <el-table-column align="center" label="操作" width="260">
          <template slot-scope="scope">
            <el-button
              size="mini"
              plain
              type="success"
              @click="handleOpenDialogForm('edit', scope.row.id)"
              >编辑</el-button
            >
            <el-button size="mini" plain type="warning">分配角色</el-button>
            <el-button
              size="mini"
              type="danger"
              plain
              @click="handleDelUser(scope.row.id)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="current"
        :page-sizes="[20, 30, 50, 70]"
        :page-size="20"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>

      <!-- <el-popover
        placement="bottom"
        title="标题"
        width="200"
        trigger="click"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      >
        <el-button slot="reference">click 激活</el-button>
      </el-popover> -->

      <!-- 弹出框 -->
      <el-dialog
        :title="dialog_Title"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleResetForm"
        center
      >
        <el-form
          :model="dialogForm"
          :rules="rules"
          ref="dialogFormRef"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="角色" prop="name">
            <el-input
              v-model.trim="dialogForm.name"
              placeholder="请输入角色"
            ></el-input>
          </el-form-item>
          <el-form-item label="编码" prop="code">
            <el-input
              v-model.trim="dialogForm.code"
              placeholder="请输入编码"
            ></el-input>
          </el-form-item>
          <el-form-item label="描述" prop="remark">
            <el-input
              type="textarea"
              v-model.trim="dialogForm.remark"
            ></el-input>
          </el-form-item>
          <el-form-item label="状态" prop="status">
            <el-radio-group v-model.trim="dialogForm.status">
              <el-radio :value="1">启用</el-radio>
              <el-radio :value="0">禁用</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button @click="handleResetForm">取消</el-button>
            <el-button type="success" @click="handleSureDialogForm"
              >确定</el-button
            >
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import breadCrumb from '../../components/Breadcrumb'
import RoleApi from '../../api/roles'
import rules from './rules'

export default {
  name: '',
  components: { breadCrumb },
  data() {
    return {
      userForm: { name: '' },
      size: 20,
      current: 1,
      total: 0,
      roleList: [],
      dialogVisible: false,
      dialogForm: {
        name: '',
        remark: '',
        code: '',
        status: 2
      },
      dialog_Title: '新增角色',
      rules,
      loadingStatus: false
    }
  },
  created() {
    this.loadRoleList()
  },
  methods: {
    async loadRoleList() {
      try {
        this.loadingStatus = true
        const { size, current, total, records } = await RoleApi.getRoleList({
          size: this.size,
          current: this.current,
          name: this.userForm.name
        })
        this.loadingStatus = false
        this.pageSize = size
        this.pageNum = current
        this.total = total
        this.roleList = records
      } catch (error) {
        this.loadingStatus = false
        console.log(error)
      }
    },
    // 查询用户
    async handleUserFormQuery() {
      try {
        this.loadRoleList()
      } catch (error) {
        console.log(error)
      }
    },
    // 删除用户
    handleDelUser(id) {},
    // 关闭模态框
    handleResetForm() {
      this.dialogVisible = false
      this.$refs.dialogFormRef.resetFields()
    },
    // 打开对话框
    handleOpenDialogForm(action, id) {
      this.dialogVisible = true
      this.dialog_Title = action === 'add' ? '新增角色' : '编辑角色'
      if (action === 'edit') return this.handleBackfill(id)
    },
    // 添加用户
    async handleAddDialogForm() {
      try {
        const response = await RoleApi.addRole(this.dialogForm)
        this.dialogVisible = false
        this.loadRoleList()
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
    // 数据回填
    async handleBackfill(id) {
      try {
        const row = await RoleApi.findUser(id)
        this.dialogForm = row
      } catch (error) {
        console.log(error)
      }
    },
    // 编辑用户
    async handleEditDialogForm() {
      try {
        const res = await RoleApi.updateUser(this.dialogForm)
        this.loadRoleList()
        this.dialogVisible = false
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    },
    // 确定按钮
    handleSureDialogForm() {
      this.dialog_Title === '新增角色'
        ? this.handleAddDialogForm()
        : this.handleEditDialogForm()
    },
    // 分页
    handleSizeChange(size) {
      this.size = size
      this.loadRoleList()
    },
    handleCurrentChange(current) {
      this.current = current
      this.loadRoleList()
    }
  }
}
</script>
<style scoped lang="scss">
.role-wrapper {
  width: 100%;
  height: 100%;
  .role-content {
    padding: 20px;
    width: 100%;
    // height: calc(100vh - 152px);
    background-color: #ffffff;
    box-sizing: border-box;
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
::v-deep(.el-table .cell) {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-break: break-all;
  line-height: 23px;
  padding-left: 10px;
  padding-right: 10px;
}
.el-tag {
  margin-left: 10px;
  margin-top: 10px;
}
</style>
