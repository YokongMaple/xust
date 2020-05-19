<template>
  <div class="container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>登录</span>
      </div>
      <el-form @submit.native.prevent="save">
        <el-form-item label="账号">
          <el-input v-model="form.account" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="form.password"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        account: "",
        password: "",
      },
    };
  },
  //   http://49.232.138.118:8080/yunzhi/user/login
  methods: {
    async save() {
      const res = await this.$http.post(
        `http://server.versewow.cn/yunzhi/user/login`,
        this.form
      );
      console.log(res);
      if (res.data.status !== 1) {
        this.$message({
          type: "error",
          message: "请检查用户名或密码是否正确",
        });
      } else if (res.data.data.status == 2) {
        this.$message({
          type: "success",
          message: "登陆成功",
        });

        const isLogin = res.data.data.account;
        const token = res.data.token;
        const status = res.data.status;
        this.$store.state.isLogin = isLogin;
        localStorage.setItem("isLogin", isLogin);
        localStorage.setItem("token", token);
        localStorage.setItem("status", status);
        this.$router.push("/");
      } else {
        this.$message.error("登录失败，请输入管理员账户");
      }
    },
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
