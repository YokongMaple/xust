<template>
  <div>
    <top></top>
    <banner></banner>
    <my-nav></my-nav>
    <img src="../assets/images/index2.jpg" style="width:100%" alt />
    <div class="introduction">驿站简介</div>
    <div class="introduction-content">
      <div
        class="content-inner"
      >基于当前网络信息技术发展、人际交往空间变化，当代大学生从入校到毕业，在校期间面临的学校认同、专业认知、角色定位，学业规划、课程选择、学习方法、学习目标，人际交往、父母沟通、异性相处、师生关系处理，四六级等考证，参加科技竞赛、社团、文体活动、社会实践、创新创业比赛等，培养兴趣、涵养性格、自我完善、发挥特长，择业就业、考研，考公务员职业确定等各种各样问题，发挥高校教职工学术、心理疏导、思想引导、培养子女、丰富人生阅历等各方面专家特长，通过微信网络平台，实施一对一谈心交流沟通，通过摆事实、讲道理、说要求、分享经历、列举案例等，帮助学生解决认识疑惑，加强心理疏导，确定目标，寻找方法，达到全方位网络育人效果。</div>
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
  }
};
</script>

<style scoped>
body {
  /* background: url(); */
}
.introduction {
  height: 50px;
  text-align: center;
  line-height: 50px;
  background-color: #2268b3;
  color: white;
  font-size: 24px;
  font-weight: bold;
}
.content-inner {
  width: 660px;
  margin: 50px auto;
  padding: 0 50px;
  line-height: 50px;
  font-size: 18px;
  text-indent: 2em;
  border-left: 2px solid lightblue;
  border-right: 2px solid lightblue;
}
</style>