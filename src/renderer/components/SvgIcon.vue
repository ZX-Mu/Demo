<!--
 - @Author: zhaoxin
 - @Date: 2022/3/18 10:46
 - @Description: svg-icon组件
 -->
<template>
  <svg :class="svgClass" aria-hidden="true" >
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.iconClass}`
    },
    svgClass () {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    }
  }
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
}
</style>
