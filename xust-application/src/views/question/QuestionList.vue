<template>
  <div>
    <h1>提问列表</h1>
    <!-- 获取到数据 -->
    <el-table :data="items">
      <!-- items._id -->
      <el-table-column prop="id" label="ID"></el-table-column>

      <el-table-column prop="introduction" label="提问名称"></el-table-column>

      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <!-- scope.row 表示当前这一行数据 -->
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/case/edit/${scope.row.id}`)"
            >编辑</el-button
          >
          <el-button type="text" size="small" @click="remove(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async fetchExample() {
      const res = await this.$http.get(`/display_examples`);
      // console.log(res.data.data);
      this.items = res.data.data;
    },
    async remove(row) {
      console.log(row.id);
      this.$confirm(`是否确定要删除"${row.introduction}"`, "提示", {
        confirmButtonText: "ok",
        cancelButtonText: "cancel",
        type: "warning",
      }).then(async () => {
        const res = await this.$http.get(`/delete_example?exampleId=${row.id}`);
        this.$message({
          type: "success",
          message: "删除成功",
        });
        this.fetchExample();
      });
    },
  },
  created() {
    this.fetchExample();
  },
};
</script>
