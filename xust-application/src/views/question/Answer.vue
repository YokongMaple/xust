<template>
  <div>
    <el-form>
      <el-form-item style="margin-top:2em" label="提问者"
        ><span>xxxx</span></el-form-item
      >
      <el-form-item label="问题名称"><span>xxxx</span></el-form-item>
      <el-form-item label="问题内容"
        ><div>
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxloremxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        </div></el-form-item
      >
      <el-form-item
        ><el-button type="primary" @click="model.contacts.push({})"
          >添加回复</el-button
        >
        <el-button>发表回复</el-button>
      </el-form-item>
      <el-row v-for="(item, index) in model.contacts" :key="index">
        <el-row type="flex">
          <el-col :span="12">
            <el-form-item>
              <el-input type="textarea" v-model="item.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-divider></el-divider>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        contacts: [],
      },
    };
  },
};
</script>

<style></style>
