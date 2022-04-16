<template>
  <div class="WorldEcharts">
    <WorldEcharts :map-data="MapData" class="confirmAdd" />
    <WorldEcharts :map-data="MapaDataTotal" class="confirmAdd" />
  </div>
</template>

<script setup lang="ts">
import { WorldEcharts } from '@/components/page-echarts/index'

import { getWomAboard } from '@/services/worldApi/index'
import { onMounted, ref } from 'vue'

interface CardDataType {
  value: { name: string; value: any }[]
}

const MapData: CardDataType | any = ref([])

const MapaDataTotal: CardDataType | any = ref([])

const getWomAboardData = async () => {
  const res = await getWomAboard()
  const item = res.data.WomAboard
  MapData.value = item.map((item: { name: any; confirmAdd: any }) => {
    console.log(item)
    return {
      name: item.name,
      value: item.confirmAdd
    }
  })
  MapaDataTotal.value = item.map((item: { name: any; confirm: any }) => {
    console.log(item)
    return {
      name: item.name,
      value: item.confirm
    }
  })
}

onMounted(() => {
  getWomAboardData()
})
</script>

<style lang="less" scoped>
.WorldEcharts {
  .confirmAdd {
    background: #ffffff;
    margin-bottom: 10px;
  }
}
</style>
