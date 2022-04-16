<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :router="true"
  >
    <el-menu-item index="/home" class="el-menu-item"
      >Domestic epidemic</el-menu-item
    >
    <el-menu-item index="/world" class="el-menu-item"
      >Overseas epidemic</el-menu-item
    >
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('/home')
// const handleSelect = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }
</script>

<style lang="less" scoped>
.el-menu-demo {
  display: flex;
  justify-content: space-around;
}
</style>
