<template>
  <div class="content">
    <div class="content-inner">
      <div class="header">
        <img src="../assets/images/path.png" alt />
        <span class="title">{{title}}</span>
      </div>
      <div class="body" v-html="content"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String },
    content: { type: String }
  }
};
</script>

<style scoped>
.content {
  width: 100%;
  padding: 50px;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 30px;
}
.title {
  padding-left: 50px;
  font-size: 20px;
}
.content-inner {
  /* background-color: yellow; */
}
.body {
  padding: 30px 0;
  border-top: 2px solid grey;
  border-bottom: 2px solid grey;
}
</style>