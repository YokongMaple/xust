<template>
  <div>
    <top></top>
    <banner></banner>
    <my-nav></my-nav>
    <img src="../assets/images/index2.jpg" style="width:100%" alt />
    <div class="option">意见反馈</div>
    <div class="option-content">
      <el-form>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="问题名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>

          <el-form-item label="问题描述">
            <el-input type="textarea" v-model="form.content"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
          </el-form-item>
        </el-form>
      </el-form>
    </div>
  </div>
</template>

<script>
import Top from "../components/Home/Top";

import Banner from "../components/Banner";
import Nav from "../components/Nav";
export default {
  components: {
    Top,
    Banner,
    MyNav: Nav
  },
  data() {
    return {
      form: {
        type: [],

        desc: ""
      }
    };
  },
  methods: {
    async onSubmit() {
      // console.log("submit!");
      if (this.form.name === undefined || this.form.content === undefined) {
        return alert("问题名称和问题描述不能为空！");
      } else {
        const res = await this.$http.post(`/user/feedBack`, this.form);
        this.$message({
          type: "success",
          message: "反馈成功"
        });
      }
      this.$message({
        type: "success",
        message: "反馈成功"
      });
    }
  }
};
</script>

<style scoped>
body {
  /* background: url(); */
}
.option {
  height: 50px;
  text-align: center;
  line-height: 50px;
  background-color: #2268b3;
  color: white;
  font-size: 24px;
  font-weight: bold;
}
.option-content {
  width: 640px;
  margin: 0 auto;
  padding-top: 50px;
}
</style>
