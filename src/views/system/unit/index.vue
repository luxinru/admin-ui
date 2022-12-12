<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="部门编码" prop="departCode">
        <el-input v-model="queryParams.departCode" placeholder="请输入部门编码" clearable @keyup.enter.native="handleQuery" />
      </el-form-item>
      <el-form-item label="部门名称" prop="departName">
        <el-input v-model="queryParams.departName" placeholder="请输入部门名称" clearable @keyup.enter.native="handleQuery" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="Search" @click="handleQuery">搜索</el-button>
        <el-button icon="Refresh" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button type="primary" plain icon="Plus" :disabled="single" @click="handleSelctDept"
          v-hasPermi="['common:userDept:add']">确定</el-button>
      </el-col>
      <!-- <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['common:userDept:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['common:userDept:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['common:userDept:export']"
        >导出</el-button>
      </el-col> -->
      <right-toolbar v-model:showSearch="showSearch" @queryTable="getList" :columns="columns"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="userDeptList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="部门编号" align="center" key="departCode" prop="departCode" v-if="columns[0].visible" />
      <el-table-column label="部门名称" align="center" key="departName" prop="departName" v-if="columns[1].visible"
        :show-overflow-tooltip="true" />
      <el-table-column label="部门简称" align="center" key="shortName" prop="shortName" v-if="columns[2].visible"
        :show-overflow-tooltip="true" />
      <el-table-column label="单位级别" align="center" key="departLevel" prop="departLevel" v-if="columns[3].visible"
        :show-overflow-tooltip="true" />
    </el-table>

    <pagination v-show="total > 0" :total="total" v-model:page="queryParams.pageNum"
      v-model:limit="queryParams.pageSize" @pagination="getList" />

    <!-- 添加或修改用户部门表对话框 -->
    <!-- <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="用户名字" prop="userName">
          <el-input v-model="form.userName" placeholder="请输入用户名字" />
        </el-form-item>
        <el-form-item label="部门名称" prop="deptName">
          <el-input v-model="form.deptName" placeholder="请输入部门名称" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog> -->
    <detailselect :show="show" @get:data="cc" @update:show="fn" :dieAway="dieAway" ref="child"
      @handleAllDetailData="handleAllDetailData" @handleDetailData="handleDetailData">
    </detailselect>
    <button @click="test">123123</button>
  </div>
</template>

<script>
import { listUserDept } from "@/api/system/unit/unit";
import useUserStore from '@/store/modules/user'

//引入组件
import Detailselect from "@/views/account/choose/choiceDetail";

// import { allowedNodeEnvironmentFlags } from "process";
export default {
  name: "UserDept",
  components: { Detailselect },
  data() {
    return {
      show: true,
      dieAway: "house",
      testBoolean: false,
      ff: false,
      // 遮罩层
      loading: true,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 用户部门表表格数据
      userDeptList: [],
      //勾选的部门
      deptInfo: {},
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        userName: null,
        queryParams: null
      },
      config: {
        ifOpen: true,
        detailParam: 'real'
      },
      // 列信息
      columns: [
        { key: 0, label: `部门编号`, visible: true },
        { key: 1, label: `部门名称`, visible: true },
        { key: 2, label: `部门简称`, visible: true },
        { key: 3, label: `单位级别`, visible: true },
      ],
      // 表单参数
      form: {},
      // 表单校验
      // rules: {
      //   userName: [
      //     { required: true, message: "用户名字不能为空", trigger: "blur" }
      //   ],
      //   deptName: [
      //     { required: true, message: "部门名称不能为空", trigger: "blur" }
      //   ]
      // }
    };

  },

  // setup() {
  //   let child = ref(null); //本质是reactive({value:null})
  //   // 需要在生命周期获取
  //   onMounted(() => {
  //     // 当界面挂载出来后就会自动执行
  //     console.log(child.value);
  //   })
  //   //接受的是null,原因是setup执行时机比mounted早,dom还没形成
  //   console.log(child.value);
  //   return { child };
  // },
  // created() {
  //   this.getList();
  // },

  methods: {
    cc(data) {
      console.log(data)
    },
    //关闭
    fn(data) {
      this.show = data
    },
    test() {
      if (this.show) {
        this.show = false
      }
      else {
        this.show = true
      }
      //  this.$refs.

      // child.openSelect(this.config)

      console.log(this.$refs.child)
      this.testBoolean = true;
    },
    handleAllDetailData(val) {
      alert(val)

      alert(111)
    },
    /** 查询用户部门表列表 */
    getList() {
      this.loading = true;
      listUserDept(this.queryParams).then(response => {
        this.userDeptList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    //选择单位
    handleSelctDept() {
      useUserStore().AglinLogin(this.deptInfo).then((rs) => {
        this.$modal.msgSuccess("选择部门成功");
      }).catch(err => {
        this.$modal.msgError("错误反馈,联系管理员");
      })

    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        userId: null,
        userName: null,
        deptId: null,
        deptName: null
      };
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.deptInfo = selection[0]
      this.ids = selection.map(item => item.userId)
      this.single = selection.length !== 1
      this.multiple = !selection.length
    },
    // /** 新增按钮操作 */
    // handleAdd() {
    //   this.reset();
    //   this.open = true;
    //   this.title = "添加用户部门表";
    // },
    // /** 修改按钮操作 */
    // handleUpdate(row) {
    //   this.reset();
    //   const userId = row.userId || this.ids
    //   getUserDept(userId).then(response => {
    //     this.form = response.data;
    //     this.open = true;
    //     this.title = "修改用户部门表";
    //   });
    // },
    // /** 提交按钮 */
    // submitForm() {
    //   this.$refs["form"].validate(valid => {
    //     if (valid) {
    //       if (this.form.userId != null) {
    //         updateUserDept(this.form).then(response => {
    //           this.$modal.msgSuccess("修改成功");
    //           this.open = false;
    //           this.getList();
    //         });
    //       } else {
    //         addUserDept(this.form).then(response => {
    //           this.$modal.msgSuccess("新增成功");
    //           this.open = false;
    //           this.getList();
    //         });
    //       }
    //     }
    //   });
    // },
    // /** 删除按钮操作 */
    // handleDelete(row) {
    //   const userIds = row.userId || this.ids;
    //   this.$modal.confirm('是否确认删除用户部门表编号为"' + userIds + '"的数据项？').then(function () {
    //     return delUserDept(userIds);
    //   }).then(() => {
    //     this.getList();
    //     this.$modal.msgSuccess("删除成功");
    //   }).catch(() => { });
    // },
    // /** 导出按钮操作 */
    // handleExport() {
    //   this.download('common/userDept/export', {
    //     ...this.queryParams
    //   }, `userDept_${new Date().getTime()}.xlsx`)
    // }
  }
};
</script>
