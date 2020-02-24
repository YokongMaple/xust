<template>
  <div>
    <h1>专家列表</h1>
    <!-- 获取到数据 -->
    <el-table :data="items.data">
      <!-- items._id -->
      <el-table-column prop="id" label="ID"></el-table-column>

      <el-table-column prop="name" label="专家名称"></el-table-column>

      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <!-- scope.row 表示当前这一行数据 -->
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/expert/edit/${scope.row.id}`)"
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
      items: {}
    };
  },
  methods: {
    async fetchExpert() {
      const res = await this.$http.get(`/display_teachers`);
      this.items = res.data;
      console.log(this.items.data);
    },

    async remove(row) {
      console.log(row.id);
      this.$confirm(`是否确定要删除"${row.name}"`, "提示", {
        confirmButtonText: "ok",
        cancelButtonText: "cancel",
        type: "warning"
      }).then(async () => {
        console.log(`/delete_teacher/teacherId=${row.id}`);
        const res = await this.$http.get(`/delete_teacher?teacherId=${row.id}`);
        this.$message({
          type: "success",
          message: "删除成功"
        });
        this.fetchExpert();
      });
    }
  },
  created() {
    this.fetchExpert();
  }
};
</script>
