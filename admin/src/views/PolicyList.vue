<template>
  <div>
    <h1>政策列表</h1>
    <!-- 获取到数据 -->
    <el-table :data="items">
      <!-- items._id -->
      <el-table-column prop="_id" label="ID"></el-table-column>

      <el-table-column prop="name" label="政策名称"></el-table-column>

      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <!-- scope.row 表示当前这一行数据 -->
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/categories/edit/${scope.row._id}`)"
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
      items: []
    };
  },
  methods: {},
  created() {}
};
</script>
