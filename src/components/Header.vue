<template>
  <div class="p-warp">
    <div class="main-title" v-text="title"></div>
    <div class="s-title" v-text="sTitle"></div>
  </div>
</template>

<script>
export default {
  name: 'pageHeader',
  data () {
    return {
      title: '',
      sTitle: ''
    }
  },
  created () {
    this.title = this.$route.meta.title
  },
  methods: {
    setTitle (title) {
      this.sTitle = title
    },
    initTitle () {
      this.title = this.$route.meta.title
    }
  }
}
</script>

<style scoped lang="scss">
.p-warp {
  position: fixed;
  top: 0;
  left: 200px;
  z-index: 9;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #fff;
  box-shadow: 0 -2px 30px 0 rgba(94, 100, 105, 0.14);
  @media (max-width: 1201px) {
    left: 180px;
  }
}
.main-title {
  box-sizing: border-box;
  padding: 24px;
  margin: 0;
  font-size: 24px;
  color: #01204b;
}
</style>
