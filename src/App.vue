<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <TabbarMune />
  <router-view></router-view>
</template>

<script lang="ts" setup>
import TabbarMune from './views/Tabbar/TabbarMune.vue'
</script>

<style lang="less"></style>
