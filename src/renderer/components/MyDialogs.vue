<!--
 - @Author: zhaoxin
 - @Date: 2022/4/21 17:28
 - @Description: 弹框组件
 -->
<template>
  <el-dialog
    title=""
    width="70%"
    custom-class="dialog"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :visible="dialogVisible"
    @close="closeDialog">
    <div><slot name="content"></slot></div>
    <el-button class="close-btn" @click="closeDialog('ok')">关闭</el-button>
  </el-dialog>
</template>

<script>
export default {
  name: "MyDialogs",
  props: ['name', 'userId'],
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    openDialog() {
      this.dialogVisible = true
    },
    closeDialog(str) {
      this.dialogVisible = false
      this.$emit('closeDialog', str)
    }
  }
}
</script>

<style lang="scss">
.dialog{
  height: 70%;
  max-width: 800px;
  max-height: 600px;
  min-width: 200px;
  min-height: 150px;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  .close-btn{
    margin-top: 24px;
  }
}
</style>

