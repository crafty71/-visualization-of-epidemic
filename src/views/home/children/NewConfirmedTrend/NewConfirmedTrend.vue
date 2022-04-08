<template>
  <div class="NewConfirmedTrend">
    <LineEchart :dataList="LineData" :length="length" :title="title" />
  </div>
</template>

<script setup lang="ts">
import { LineEchart } from '@/components/page-echarts/index'
import { getchinaDayAddList } from '@/services/homeApi'
import { onMounted, ref } from 'vue'

const LineData: any = ref([])

const length = ref(1)

const title = ref('The trend of new confirmed cases in china')

const getchinaDayAddListData = async () => {
  const res = await getchinaDayAddList()
  const value = res.data.chinaDayAddList
  for (const item of value) {
    const Temp = {
      date: item.date,
      confirm: item.confirm || 0,
      increase: item.localConfirmadd,
      infect: item.infect,
      imported: item.importedCase,
      healrate: item.healRate,
      dead: item.dead
    }
    LineData.value.push(Temp)
    length.value = 6
  }
}

onMounted(() => {
  getchinaDayAddListData()
})
</script>

<style lang="less" scoped>
.NewConfirmedTrend {
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 10px;
}
</style>
