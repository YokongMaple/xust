<template>
  <div class="tabbar">
    <ul class="nav">
      <li class="nav-item">
        <router-link to="/cirno">网站首页</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/cirno">网站首页</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/cirno">驿站简介</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/cirno">专家智库</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/cirno">政策流程</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/cirno">学生案例</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/cirno">个人中心</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/cirno">线下活动</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/cirno">意见反馈</router-link>
      </li>
      <div class="slider"></div>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.tabbar {
  background-color: #000;
  z-index: -2;
}
.nav,
.nav-item {
  margin: 0;
  padding: 0;
  text-decoration: none;
}
.nav {
  display: flex;
  position: relative;
}
.nav-item {
  list-style: none;
  width: 120px;
  line-height: 40px;
  text-align: center;
}
.nav-item a {
  color: white;
  text-decoration: none;
}
.slider {
  width: 100px;
  height: 40px;
  background-color: #5352ed;
  border-radius: 4px;
  position: absolute;
  left: 10px;
  bottom: 0;
  z-index: -1;
  transition: all ease 0.4s;
}
</style>
