<template>
  <div class="NewConfirmedTrend">
    <LineEchart :dataList="LineData" :length="length" :title="title" />
  </div>
</template>

<script setup lang="ts">
import { LineEchart } from '@/components/page-echarts/index'
import { getchinaDayList } from '@/services/homeApi'
import { onMounted, ref } from 'vue'

const LineData: any = ref([])

const length = ref(1)

const title = ref('Current local diagnosis trends in China')

const getchinaDayAddListData = async () => {
  const res = await getchinaDayList()
  const value = res.data.chinaDayList
  for (const item of value) {
    const Temp = {
      date: item.date,
      confirmNow: item.nowConfirm,
      heal: item.heal,
      noInfect: item.noInfect,
      confirm: item.confirm,
      healRate: item.healRate,
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
