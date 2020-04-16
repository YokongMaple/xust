<template>
  <div class="about">
    <h2>{{ id ? "xxx" : "新建" }}账号 {{ id }}</h2>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-row>
        <el-col :span="12">
          <el-form-item label="账号">
            <el-input v-model="model.introduction"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="密码">
            <el-input v-model="model.content"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="身份">
            <el-input v-model="model.content"></el-input> </el-form-item
        ></el-col>
        <el-col :span="12">
          <el-form-item label="激活状况">
            <el-switch
              style="display: block,margin-top:1em"
              v-model="active"
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-text="已激活"
              inactive-text="未激活"
            >
            </el-switch> </el-form-item
        ></el-col>
      </el-row>

      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { VueEditor } from "vue2-editor";
export default {
  props: {
    // 从路由那里接收到的
    id: {},
  },
  components: {
    // VueEditor,
  },
  data() {
    return {
      model: {},
      active: false,
    };
  },
  methods: {
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.post(`/edit_example?id=${this.id}`, this.model);

        this.$message({
          type: "success",
          message: "编辑成功",
        });
      } else {
        // 注册
        res = await this.$http.post(`/example`, this.model);
        // console.log("注册", res);
        this.$message({
          type: "success",
          message: "保存成功",
        });
      }
    },
    // 获取所编辑分类信息的方法
    async fetch() {
      const res = await this.$http.get(`/query_example?exampleId=${this.id}`);
      // console.log(res);
      this.model = res.data.data;
      // console.log(res.data.data);
    },
  },
  created() {
    this.id && this.fetch();
  },
};
</script>
<style scoped></style>
