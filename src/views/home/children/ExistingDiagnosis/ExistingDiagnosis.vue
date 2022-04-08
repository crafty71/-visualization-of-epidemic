<template>
  <div style="height: 400px">
    <MapEchart :map-data="MapData" />
  </div>
</template>

<script setup lang="ts">
import { MapEchart } from '@/components/page-echarts/index'
import { getEpidemicData } from '@/services/homeApi'
import { onMounted, ref } from 'vue'

const MapData = ref([])

const getEpidemic = async () => {
  const res = await getEpidemicData()
  const value = res.data.diseaseh5Shelf.areaTree[0].children
  MapData.value = value.map((item: any) => {
    return {
      name: item.name,
      value: item.today.confirm
    }
  })
}

onMounted(() => {
  getEpidemic()
})
</script>

<style scoped></style>
