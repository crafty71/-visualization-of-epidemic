<template>
  <div>
    <MapEchartsProvience
      :map-data="MapData"
      :provience="provience"
      title="Existing diagnosis"
    />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

import { MapEchartsProvience } from '@/components/page-echarts/index'
import { useStore } from 'vuex'
import { ref } from 'vue'

const route = useRoute()

const store = useStore()

const provience = route.params.row

const dataList = store.getters.getprovienceData.city

const MapData = ref([])
MapData.value = dataList.map((item: any) => {
  return {
    name: item.mapName,
    value: item.econNum
  }
})
</script>

<style scoped></style>
