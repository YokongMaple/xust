<template>
  <div class="about">
    <h2>{{ id ? "编辑" : "新建" }}案例 {{ id }}</h2>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.introduction"></el-input>
      </el-form-item>
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
      let res;
      if (this.id) {
        res = await this.$http.post(`/edit_example?id=${this.id}`, this.model);

        this.$message({
          type: "success",
          message: "编辑成功"
        });
      } else {
        // 注册
        res = await this.$http.post(`/example`, this.model);
        // console.log("注册", res);
        this.$message({
          type: "success",
          message: "保存成功"
        });
      }
    },
    // 获取所编辑分类信息的方法
    async fetch() {
      const res = await this.$http.get(`/query_example?exampleId=${this.id}`);
      // console.log(res);
      this.model = res.data.data;
      // console.log(res.data.data);
    }
  },
  created() {
    this.id && this.fetch();
  }
};
</script>
<style scoped></style>
