<template>
  <div class="ql-editor message-content">
    <div class="content-inner">
      <div class="header">
        <img src="../assets/images/path.png" alt />
        <span class="title">{{ title }}</span>
      </div>
      <pre class=" body ql-editor" v-html="content"></pre>
      <vue-editor style="display:none"></vue-editor>
    </div>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  props: {
    title: { type: String },
    content: { type: String },
  },
  components: {
    VueEditor,
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
}

.ql-editor {
  min-height: 200px;
  font-size: 16px;
}
.ql-snow .ql-stroke.ql-thin,
.ql-snow .ql-thin {
  stroke-width: 1px !important;
}
.quillWrapper .ql-snow.ql-toolbar {
  padding-top: 8px;
  padding-bottom: 4px;
}
.quillWrapper .ql-snow.ql-toolbar .ql-formats {
  margin-bottom: 10px;
}
.ql-snow .ql-toolbar button svg,
.quillWrapper .ql-snow.ql-toolbar button svg {
  width: 22px;
  height: 22px;
}
.quillWrapper .ql-editor ul[data-checked="false"] > li::before,
.quillWrapper .ql-editor ul[data-checked="true"] > li::before {
  font-size: 1.35em;
  vertical-align: baseline;
  bottom: -0.065em;
  font-weight: 900;
  color: #222;
}
.quillWrapper .ql-snow .ql-stroke {
  stroke: rgba(63, 63, 63, 0.95);
  stroke-linecap: square;
  stroke-linejoin: initial;
  stroke-width: 1.7px;
}
.quillWrapper .ql-picker-label {
  font-size: 15px;
}
.quillWrapper .ql-snow .ql-active .ql-stroke {
  stroke-width: 2.25px;
}
.quillWrapper .ql-toolbar.ql-snow .ql-formats {
  vertical-align: top;
}
.ql-picker:not(.ql-background) {
  position: relative;
  top: 2px;
}
.ql-picker.ql-color-picker svg {
  width: 22px !important;
  height: 22px !important;
}
.quillWrapper .imageResizeActive img {
  display: block;
  cursor: pointer;
}
.quillWrapper .imageResizeActive ~ div svg {
  cursor: pointer;
}
</style>
