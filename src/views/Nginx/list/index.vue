<template>
  <el-container class="nginx-container">
    <el-header height="120px">
      <!-- <el-button type="text" :icon="nginxStatus?'el-icon-error':'el-icon-success'"></el-button> -->
      <p class="p-status">
        Nginx当前状态:<i :class="!nginxStatus?'el-icon-error danger':'el-icon-success success'"></i>
      </p>
      <el-button type="primary" @click="handleChooseFile">获取Nginx根目录</el-button>
      <el-button type="success" @click="handleNg(0)">启动</el-button>
      <el-button type="warning" @click="handleNg(1)">重启</el-button>
      <el-button type="danger"  @click="handleNg(2)">停止</el-button>
      <div class="m20">
        <el-tag>已选nginx根目录：{{nginxFile}}</el-tag>
      </div>
    </el-header>
    <el-main v-loading="fileLoadding" ref="elMain">
      <editor v-model="content" :autoComplete='false' :height="`${mainHeight - 40}px`" @init="editorInit" lang="sh"></editor>
    </el-main>
    <el-footer>
      <el-button type="primary" @click="handleSaveFIle" :loading="fileLoadding">保存</el-button>
    </el-footer>
  </el-container>
</template>

<script class="ts">
import index from './index.ts'
export default index
</script>

<style scoped lang="scss">
@import "index.scss";
</style>
