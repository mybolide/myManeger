<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container"/>
    <div class="app-main">
      <page-header ref="pageHeader"/>
      <transition name="fade-transform" mode="out-in">
        <router-view :key="key"/>
      </transition>
    </div>
  </div>
</template>

<script>
import { Sidebar } from './components'

export default {
  name: 'Layout',
  components: { Sidebar },
  watch: {
    '$route' (to, from) {
      this.$nextTick(() => {
        this.$refs.pageHeader.initTitle()
      })
    }
  },
  computed: {
    key () {
      return this.$route.fullPath
    }
  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">
.sidebar-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 200px;
  height: 100%;
  @media (max-width: 1201px) {
    width: 180px;
  }
}
.app-main {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  touch-action: pan-y;
  -webkit-overflow-scrolling: touch;
  padding-top: 91px;
  padding-left: 200px;
  @media (max-width: 1201px) {
    padding-left: 180px;
  }
}
</style>
