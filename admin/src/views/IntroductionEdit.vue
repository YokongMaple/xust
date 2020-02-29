<template>
  <div class="about">
    <h2>简介编辑</h2>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="内容">
        <vue-editor v-model="model.content"></vue-editor>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  props: {
    // 从路由那里接收到的
    id: {}
  },
  components: {
    VueEditor
  },
  data() {
    return {
      model: {}
    };
  },
  methods: {
    async save() {
      const res = await this.$http.post(`/edit_introduction`, this.model);
      // console.log("注册", res);
      this.$message({
        type: "success",
        message: "保存成功"
      });
      // this.fetch();
    },

    // 查询简介
    async fetch() {
      const res = await this.$http.get(`/query_introduction`);
      this.model = res.data.data;
      // console.log(res.data.data);
    }
  },
  created() {
    this.fetch();
  }
};
</script>
<style >
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
