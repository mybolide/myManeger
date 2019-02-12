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
</style>
