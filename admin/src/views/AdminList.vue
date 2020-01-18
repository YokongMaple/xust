<template>
  <div>
    <h1>账户列表</h1>
    <el-input style="width:180px" v-model="search1" placeholder="查询"></el-input>333
    <div>
      <el-form-item v-model="msg.title" label="查询" label-width="100px" required>
        <el-select placeholder="学院">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </div>

    <!-- 从分类里面找出来的 -->
    <!-- <el-select v-model="model.items1" multiple>
        <el-option label="专业"></el-option>
    </el-select>-->

    <!-- 获取到数据 -->
    <el-table :data="items">
      <!-- items._id -->
      <el-table-column prop="_id" label="ID"></el-table-column>

      <el-table-column prop="name" label="账户名称"></el-table-column>
      <el-table-column prop="name" label="职位"></el-table-column>
      <el-table-column prop="name" label="专业"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <!-- scope.row 表示当前这一行数据 -->
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/categories/edit/${scope.row._id}`)"
          >编辑</el-button>
          <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
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
      msg: {
        title: ""
      }
    };
  },
  methods: {},
  created() {}
};
</script>
