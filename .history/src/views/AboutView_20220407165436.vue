<template>
  <div>about</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Request from '@/services/request'

onMounted(() => {
  Request({
    URL: '/api/statistics/latest'
  }).then((res) => {
    console.log(res)
  })
})
</script>

<style scoped></style>
