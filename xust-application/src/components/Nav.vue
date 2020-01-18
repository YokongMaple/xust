<template>
  <div class="nav">
    <div class="nav-inner">
      <ul>
        <li>
          <router-link to="/home">网站首页</router-link>
        </li>
        <li>
          <router-link to="/introduction">驿站简介</router-link>
        </li>
        <li>
          <router-link to="/expert">专家智库</router-link>
        </li>
        <li>
          <router-link to="/policy">政策流程</router-link>
        </li>
        <li>
          <router-link to="/case">学生案例</router-link>
        </li>
        <li>
          <router-link to="/subject">专题讨论</router-link>
        </li>
        <li>
          <router-link to="/activity">线下活动</router-link>
        </li>
        <li>
          <router-link to="/option">意见反馈</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav {
  width: 100%;
  height: 50px;
  background-color: #2268b3;
}
ul {
  margin: 0;
}
.nav-inner {
  width: 1080px;
  margin: 0 auto;
}
.nav-inner ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav a {
  display: inline-block;
  line-height: 50px;
  color: white;
  text-decoration: none;
  font-size: 19px;
}

.nav a:hover {
  text-decoration: underline;
}
</style>
