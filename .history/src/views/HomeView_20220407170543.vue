<template>
  <div>home</div>
</template>

<script setup>
import { getData } from '@/services/homeApi/index'

const getDataData = function () {
  getData().then((res) => {
    console.log(res)
  })
}
</script>

<style lang="scss" scoped></style>
