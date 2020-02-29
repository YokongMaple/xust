<template>
  <div class="about">
    <h2>查看意见 {{ id }}</h2>

    <el-card style="margin-left:100px;margin-top:50px;width:600px" class="box-card">
      <div slot="header" class="clearfix">
        <el-tag style="margin:10px 0;">意见名称：</el-tag>
        <div>{{model.name}}</div>
      </div>
      <div class="text item">
        <el-tag type="warning" style="margin:10px 0;">意见内容</el-tag>
        <div>{{model.content }}</div>
      </div>
    </el-card>
    <el-button
      style="margin:50px 0 0 100px;"
      type="primary"
      @click="$router.push('/option/list')"
    >返回列表</el-button>
  </div>
</template>

<script>
export default {
  props: {
    // 从路由那里接收到的
    id: {}
  },
  components: {},
  data() {
    return {
      model: {}
    };
  },
  methods: {
    // 获取所编辑分类信息的方法
    async fetch() {
      const res = await this.$http.get(`/query_advice?adviceId=${this.id}`);
      this.model = res.data.data;
      console.log(res);
    }
  },
  created() {
    this.fetch();
  }
};
</script>
<style scoped></style>
