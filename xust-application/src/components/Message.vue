<template>
  <div class="message-content">
    <div class="content-inner">
      <div class="header">
        <img src="../assets/images/path.png" alt />
        <span class="title">{{ title }}</span>
      </div>
      <pre class="body" v-html="content"></pre>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String },
    content: { type: String },
  },
};
</script>

<style>
.message-content {
  width: 100%;
  padding: 50px;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
}
.message-content .header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 30px;
}
.message-content .title {
  padding-left: 50px;
  font-size: 20px;
}

.message-content .body {
  width: 100%;
  padding: 30px 0;
  border-top: 2px solid grey;
  border-bottom: 2px solid grey;
  word-break: break-all;
}
</style>
