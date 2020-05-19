<template>
  <div class="login-container">
    <div class="login">
      <span class="title">登录</span>
      <div>
        <input
          class="account"
          v-model="form.account"
          type="text"
          placeholder="账号"
        />
        <input
          class="password"
          v-model="form.password"
          type="text"
          placeholder="密码"
        />
      </div>
      <el-button @click="onSubmit" type="primary" class="login-btn"
        >登录</el-button
      >
      <div style="text-align:center;margin-top:2em">
        <router-link to="/register">
          <el-link type="primary">点击此处注册</el-link>
        </router-link>
      </div>
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
      const res = await this.$http.post(
        `http://server.versewow.cn/yunzhi/user/login`,
        this.form,
        {
          withCredentials: false,
        }
      );

      if (res.data.status == 1) {
        this.$message({
          type: "success",
          message: "登陆成功",
        });
        console.log(res.data);
        const isLogin = res.data.data.account;
        const uuid = res.data.data.uuid;
        const status = res.data.data.status;
        const major = res.data.data.major;
        const realName = res.data.data.realName;
        this.$store.state.isLogin = isLogin;
        localStorage.setItem("isLogin", isLogin);
        localStorage.setItem("uuid", uuid);
        localStorage.setItem("status", status);
        localStorage.setItem("major", major);
        localStorage.setItem("realName", realName);

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
  background: url("../assets/images/bg-login.jpg") center center;
}
.login {
  width: 350px;
  background-color: rgba(53, 52, 52, 0.89);
  border-radius: 15px;
  padding: 20px;
}
.title {
  /* padding-left: 30px; */
  margin-bottom: 40px;
  font-size: 24px;
  color: white;
  font-weight: bold;
}
.account,
.password {
  outline: none;
  border: none;
  list-style: none;
  background-color: transparent;
  border-bottom: 2px solid rgba(114, 112, 112, 0.842);
  width: 100%;
  height: 3em;
  color: white;
  margin-top: 2em;
}
.account::-webkit-input-placeholder,
.password ::-webkit-input-placeholder {
  font-size: 16px;
  color: #727f6d;
}
.login-btn {
  width: 100%;
  margin-top: 2em;
}
</style>
