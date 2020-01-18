<template>
  <div class="left_body">
    <div class="teac">
      <b>{{title}}</b>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String }
  },
  data() {
    return {};
  }
};
</script>

<style>
.left-body {
}
.teac {
  height: 100%;
  width: 267px;
  background: url("../assets/images/sidetitbg.png") no-repeat;
  color: #0d59a7;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  padding-top: 30px;
  border: 1px solid grey;
  margin-bottom: 20px;
}
</style>