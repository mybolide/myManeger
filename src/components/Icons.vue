<template>
  <i :class="getIconClass"
     aria-hidden="true" />
</template>

<script>
export default {
  name: 'Icon',
  props: {
    iconClass: {
      type: String,
      required: true
    }
  },
  computed: {
    getIconClass () {
      if (this.iconClass) {
        return 'iconfont icon-' + this.iconClass
      } else {
        return 'iconfont'
      }
    }
  }
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
