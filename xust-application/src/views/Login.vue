<template>
  <div class="login-container">
    <div class="login">
      <div class="title">登录</div>
      <el-divider></el-divider>
      <el-form ref="form" class="content" :model="form" label-width="80px">
        <el-form-item label="账户">
          <el-input
            placeholder="请输入学号或工号"
            v-model="form.account"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input placeholder="请输入密码" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="warning" size="medium" @click="onSubmit"
            >登录</el-button
          >
        </el-form-item>
      </el-form>

      <router-link to="/register">
        <el-link type="primary" style="margin-left: 80px;"
          >点击此处注册</el-link
        >
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {},
    };
  },
  methods: {
    async onSubmit() {
      // console.log(this.form);
      const res = await this.$http.post(`/user/login`, this.form);
      if (res.data.status == 1) {
        this.$message({
          type: "success",
          message: "登陆成功",
        });
        console.log(res.data.data);
        const isLogin = res.data.data.account;
        const uuid = res.data.data.uuid;
        this.$store.state.isLogin = isLogin;
        localStorage.setItem("isLogin", isLogin);
        localStorage.setItem("uuid", uuid);
        this.$router.push("/home");
      } else {
        this.$message.error("登录失败，请检查账户或密码是否输入正确");
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
.title {
  padding-left: 30px;
  margin-bottom: 40px;
  font-size: 24px;
  /* font-weight: bold; */
}
.content {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.login {
  width: 350px;

  /* background-color: red; */
  box-shadow: 0px 0px 2px grey;
  border-radius: 20px;
  padding: 20px;
}
</style>
