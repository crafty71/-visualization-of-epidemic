<template>
  <div>about</div>
</template>

<script setup lang="ts">
import Request from '@/services/request'

Request.get({
  URL: '/api/statistics/latest'
})
</script>

<style scoped></style>
