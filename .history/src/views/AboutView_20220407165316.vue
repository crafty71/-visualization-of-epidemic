<template>
  <div>about</div>
</template>

<script setup lang="ts">
import Request from '@/services/request'

onMounted(() => {
  Request.get({
    URL: '/api/statistics/latest'
  }).then((res) => {
    console.log(res)
  })
})
</script>

<style scoped></style>
