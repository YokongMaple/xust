<template>
  <div class="foot">
    <!--底层-->
    <div>
      <img src="../../assets/images/bot-logo.png" class="img-bot" />
      <div class="bot-text">
        Copyright © 西安科技大学计算机科学与技术学院 All rights reserved.
        <br />学院地址： 陕西省西安市雁塔中路58号（雁塔校区） 陕西省西安市临潼区秦唐大道48号（临潼校区）
        <br />联系电话：02985583173（雁塔校区）02983858048（临潼校区）
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.foot {
  width: 100%;
  min-width: 1200px;
  background: #2268b3;
  font-size: 14px;
  padding: 38px 0;
  color: #afc2d8;
  overflow: hidden;
  padding-left: 100px;
}

.foot-inner {
  margin-left: 100px;
}

.img-bot {
  width: 154px;
  /*display: inline;/*/
}

.bot-text {
  display: inline;
  position: absolute;
  line-height: 26px;
  font-size: 14px;
}
</style>