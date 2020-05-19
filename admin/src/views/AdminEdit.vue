<template>
  <div class="about">
    <h2>添加账户</h2>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-row>
        <el-col :span="9">
          <el-form-item label="账号身份">
            <el-select v-model="model.status" placeholder="请选择身份">
              <el-option
                v-for="item in identity"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item label="学号或工号">
            <el-input v-model="model.account"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9">
          <el-form-item label="姓名">
            <el-input v-model="model.realName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item label="密码">
            <el-input type="password" v-model="model.password"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item label="邮箱">
            <el-input type="email" v-model="model.email"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9">
          <el-form-item label="学院">
            <el-select v-model="collegeName" placeholder="请选择学院">
              <el-option
                v-for="item in collegeList.data"
                :key="item.id"
                :label="item.collegeName"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item label="专业">
            <el-select
              class="options"
              v-model="model.major"
              placeholder="请选择专业"
            >
              <el-option
                v-for="item in acadamyList.data"
                :key="item.id"
                :label="item.majorName"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    // 从路由那里接收到的
    id: {},
  },
  components: {},
  data() {
    return {
      model: {},
      value: "",

      major: [],
      // 存放大学学院信息
      collegeList: {},
      // 大学学院具体名称
      collegeName: "",
      // 存放具体专业名称,
      acadamyList: {},

      identity: [
        {
          value: 0,
          label: "学生",
        },
        {
          value: 1,
          label: "教师",
        },
        {
          value: 2,
          label: "管理员",
        },
      ],
    };
  },
  methods: {
    async save() {
      const res = await this.$http.post(
        `http://server.versewow.cn/yunzhi/admin/add_user`,
        this.model
      );
      console.log("res=-===", res);
      if (res.data.status === 1) {
        this.$message({
          type: "success",
          message: "添加成功",
        });
      } else if (res.data.status === 0) {
        this.$message({
          type: "error",
          message: "该账户已存在，请修改后添加",
        });
      }
    },

    // 获取学院列表
    async fetchCollage() {
      const res = await this.$http.get(
        `http://server.versewow.cn/yunzhi/user/getAcadamy`
      );
      this.collegeList = res.data;
      console.log(this.collegeList.data);
    },
    // 获取专业列表
    async fetchAcadamy(id) {
      const res = await this.$http.get(
        `http://server.versewow.cn/yunzhi/user/getMajor?acadamyId=${id}`
      );
      this.acadamyList = res.data;
    },
  },
  watch: {
    collegeName: function(newVal) {
      this.fetchAcadamy(newVal);
      // console.log(newVal);
    },
  },
  created() {
    this.fetchCollage();
  },
};
</script>
<style scoped></style>
