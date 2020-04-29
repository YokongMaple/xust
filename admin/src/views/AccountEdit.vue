<template>
  <div class="about">
    <h2>账号详情</h2>
    <el-row class="detial" style="width:60%">
      <el-col :span="8">
        <div class="block">
          <el-image
            style="width: 200px; height: 300px"
            :fit="fit"
            :src="model.avatarUrl"
          ></el-image>
        </div>
      </el-col>
      <el-col :span="5">
        <el-form>
          <el-form-item size="medium" label="学号">
            <span>{{ model.account }}</span>
          </el-form-item>
          <el-form-item size="medium" label="姓名">
            <span>{{ model.realName }}</span>
          </el-form-item>
          <el-form-item size="medium" label="学院">
            <span>{{ model.collegeName }}</span>
          </el-form-item>
          <el-form-item size="medium" label="专业">
            <span>{{ model.majorName }}</span>
          </el-form-item>
          <el-form-item size="medium" label="身份">
            <span>{{ model.status == 0 ? "学生" : "教师" }}</span>
          </el-form-item>
          <el-form-item size="medium" label="邮箱">
            <span>{{ model.email }}</span>
          </el-form-item>
        </el-form>
        <el-button @click="$router.push('/accounts/list')">返回</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import { VueEditor } from "vue2-editor";
export default {
  props: {
    // 从路由那里接收到的
    uuid: {},
  },
  components: {
    // VueEditor,
  },
  data() {
    return {
      model: {},
      active: false,
      fit: "fill",
    };
  },
  methods: {
    async fetch() {
      //49.232.138.118:8080/yunzhi/admin/detail_user?uuid=5
      const res = await this.$http.get(
        `http://49.232.138.118:8080/yunzhi/admin/detail_user?uuid=${this.uuid}`
      );

      this.model = res.data.data;
      console.log(this.model);
    },
  },
  created() {
    this.fetch();
  },
};
</script>
<style scoped>
.detial {
  margin-top: 50px;
  box-shadow: 0 0 5px black;
  padding: 50px;
}
</style>
