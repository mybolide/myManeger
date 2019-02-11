<template>
  <el-container class="nginx-container">
    <el-header>
      <el-button type="primary" @click="handleChooseFile">获取文件</el-button>
      <el-button type="success">启动</el-button>
      <el-button type="warning">重启</el-button>
      <el-button type="danger">停止</el-button>
    </el-header>
    <el-main>
      <editor v-model="content" :autoComplete='false' @init="editorInit" lang="sh" width="500" height="100"></editor>
    </el-main>
  </el-container>
</template>

<script class="ts">
import index from './index.ts'
export default index
</script>

<style scoped lang="scss">
@import "index.scss";
</style>
