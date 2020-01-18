<template>
  <div>
    <top></top>
    <banner></banner>
    <my-nav></my-nav>
    <img src="../../assets/images/index2.jpg" style="width:100%" alt />
    <div class="policy-content">
      <left-side title="政策"></left-side>
      <message title="政策1" content="12sdadas3123123"></message>
    </div>
  </div>
</template>

<script>
import Top from "../../components/Home/Top";

import Banner from "../../components/Banner";
import Nav from "../../components/Nav";
import SideBar from "../../components/SideBar";
import Message from "../../components/Message";
export default {
  components: {
    Top,
    Banner,
    MyNav: Nav,
    LeftSide: SideBar,
    Message
  },
  data() {
    return {
      fits: ["fill", "contain", "cover", "none", "scale-down"],
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    };
  }
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
.policy-content {
  width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.teacher {
  flex: 1;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 40px;
}
.pic {
  width: 33%;

  padding: 25px;
  text-align: center;
  /* margin: 10px; */
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
