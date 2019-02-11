<template>
  <el-scrollbar wrap-class="scrollbar-wrapper" ref="scrollbarWrapper">
    <!-- :collapse="!sidebar.opened" -->
    <el-menu
      :show-timeout="200"
      :unique-opened="true"
      :default-active="$route.path"
      mode="vertical"
      background-color="#000000"
      text-color="#fff"
      active-text-color="#4899FF"
    >
      <sidebar-item
        v-for="route in permission_routers"
        :key="route.name"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </el-scrollbar>
</template>

<script>
import SidebarItem from './SidebarItem'
import { mapGetters } from 'vuex'

export default {
  name: 'sidebar',
  components: { SidebarItem },
  computed: {
    ...mapGetters(['permission_routers'])
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="scss">
.sidebar-container {
  padding-bottom: 162px;
  background-color: #000000;
  /deep/ .el-menu {
    border: none;
  }
  /deep/ .el-menu--inline {
    .el-menu-item {
      background-color: hsla(0, 0%, 100%, 0.1) !important;
    }
  }
}
.scrollbar-wrapper {
  // position: relative;
  // padding-top: 80px;
  padding-bottom: 142px;
  background-color: #000000;
  .menu-logo {
    position: absolute;
    top: 0;
    left: 0;
    height: 80px;
    width: 200px;
    text-align: center;
    img {
      margin-top: 18px;
      width: 78px;
      height: 43px;
    }
  }

  .menu-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 70;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #000000;
    padding: 0;
    margin: 0;
    .menu-bottom-item {
      height: 56px;
      line-height: 56px;
      position: relative;
      white-space: nowrap;
      list-style: none;
      font-size: 14px;
      color: #fff;
      padding: 0 20px;
      cursor: pointer;
      transition: border-color 0.3s, background-color 0.3s, color 0.3s;
      box-sizing: border-box;
    }
  }
  @media (max-width: 1201px) {
    .menu-bottom {
      width: 180px;
    }
  }
}
</style>
