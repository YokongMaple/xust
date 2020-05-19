<template>
  <div class="logo">
    <div class="logo-inner">
      <img
        src="../assets/images/badge.png"
        width="100px"
        class="img-logo-xust"
      />
      <img src="../assets/images/xt.jpg" id="img-logo-xt" />
      <img
        src="../assets/images/logo.png"
        width="100px"
        class="img-logo-xust2"
      />
      <a href class="logo-inner-title"
        >&nbsp;云&nbsp;智&nbsp;舒&nbsp;心&nbsp;驿&nbsp;站</a
      >
    </div>
    <div class="logo-r">
      <span>{{ status != "" ? `欢迎${status}` : "请登录" }}</span>
    </div>
    <div class="logo-login">
      <div v-if="status == ''">
        <router-link to="/login">登录</router-link>
        <router-link to="/register">注册</router-link>
      </div>
      <div v-else>
        <el-button type="text" @click="personDetail">个人中心</el-button>
        <el-link @click="signOUt">注销</el-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: this.$store.state.isLogin,
    };
  },
  methods: {
    signOUt() {
      localStorage.clear();
      localStorage.removeItem("isLogin");
      this.$router.push("/home");
      this.$router.go(0);
    },
    personDetail() {
      let uuid = localStorage.uuid;
      this.$router.push(`/person-detail/${uuid}`);
    },
  },
  mounted() {
    // this.$router.go(0);
    console.log(this.status.data);
  },
};
</script>

<style>
.logo {
  height: 135px;
  /*font-size: 30px;*/
  /*color: #2e2e2e;*/
  background-color: #fff;
}

.logo-inner-title {
  /*text-decoration: none;*/
  font-size: 40px;
  color: #2268b3; /*palevioletred*/
  position: absolute;
  margin-top: 10px;
  margin-left: 20px;
}

.img-logo-xust {
  /*border-right: #2e2e2e 2px solid;*/
  padding-right: 10px;
}

.img-logo-xust2 {
  padding-left: 10px;
}

#img-logo-xt {
  width: 2px;
  height: 59px;
}

.logo-inner {
  margin-left: 100px;
  padding-top: 35px;
}

.logo-inner img {
  width: 66px;
}

.logo-r {
  float: right;
  width: 200px;
  font-size: 15px;
  position: absolute;
  margin-left: 80%;
  margin-top: -100px;
  line-height: 30px;
  /*background-color: #2268b3;*/
  /*position: absolute;*/
}

.logo-r a {
  text-decoration: underline;
  color: #2268b3;
}

.logo-login {
  position: absolute;
  margin-left: 90%;
  margin-top: -100px;
  line-height: 30px;
}

.logo-login a {
  margin: 0px 10px 0px;
}
</style>
