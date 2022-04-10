<template>
  <div class="RegionDeatil">
    <LineEchartProvience :dataList="DataList" :title="title" />
  </div>
  <div class="RegionDeatilNew">
    <LineEchartProvience :dataList="DataListNew" :title="NewTitle" />
  </div>
</template>

<script setup lang="ts">
import { getChinaProvienceDeatil } from '@/services/homeApi/index'
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'

import { LineEchartProvience } from '@/components/page-echarts/index'
const store = useStore()

const dataList = store.getters.getprovienceData

const DataList: any = ref([])
const DataListNew: any = ref([])

const title = `The cumulative trend of the epidemic situation in ${dataList.ename}`

const NewTitle = `New trends in the epidemic situation in ${dataList.ename}`

const getChinaProvienceDeatilData = async () => {
  const res = await getChinaProvienceDeatil(dataList.name)
  for (const item of res.data) {
    const temp: any = {
      date: item.year + '.' + item.date,
      confirm: item.confirm,
      dead: item.dead,
      heal: item.heal,
      asymptomatic: item.wzz
    }
    DataList.value.push(temp)
  }
  for (const item of res.data) {
    const temp = {
      date: item.year + '.' + item.date,
      confirm: item.newConfirm,
      dead: item.newDead,
      heal: item.newHeal,
      asymptomatic: item.wzz_add
    }
    DataListNew.value.push(temp)
  }
}

onMounted(() => {
  getChinaProvienceDeatilData()
})
</script>

<style scoped lang="less">
.RegionDeatil {
  margin: 10px 0;
  padding: 10px;
  background: #ffffff;
}

.RegionDeatilNew {
  margin-top: 10px;
  padding: 10px;
  background: #ffffff;
}
</style>
