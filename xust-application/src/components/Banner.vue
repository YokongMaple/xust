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
    <div class="logo-login">
      <router-link to="/login">登录</router-link>
      <router-link to="/register">注册</router-link>
    </div>
    <div class="logo-r">
      欢迎您，&nbsp;
      <!-- <a href="index6.html">某某某</a>&nbsp;同学！ -->
    </div>
  </div>
</template>

<script>
export default {};
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
  margin-left: 75%;
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
