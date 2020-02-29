<template>
  <div class="about">
    <h2>{{ id ? "编辑" : "新建" }}专家 {{ id }}</h2>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="头像">
        <el-upload
          class="avatar-uploader"
          :action="$http.defaults.baseURL + 'image'"
          :show-file-list="false"
          :on-success="afterUpload"
        >
          <img v-if="model.image" :src="model.image" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>

      <el-form-item label="描述">
        <vue-editor v-model="model.content"></vue-editor>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="save">保存</el-button>
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
        // 编辑
        res = await this.$http.post(`/edit_teacher?id=${this.id}`, this.model);
        this.$message({
          type: "success",
          message: "编辑成功"
        });
        //  await this.$http.put(`rest/items/${this.id}`, this.model);
      } else {
        // 注册
        res = await this.$http.post(`/teacher`, this.model);
        this.$message({
          type: "success",
          message: "注册成功"
        });
        // console.log(res);
      }
      // const res = await this.$http.post(`/teacher`, this.model);
    },
    // 获取所编辑分类信息的方法
    async fetch() {
      const res = await this.$http.get(`/query_teacher?id=${this.id}`);
      this.model = res.data.data;

      console.log(res.data.data);
    },
    afterUpload(res) {
      console.log(res);
      this.$set(this.model, "image", res.data);
      console.log(this.model.image);
    }
  },
  created() {
    this.id && this.fetch();
  }
};
</script>
<style scoped>
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
