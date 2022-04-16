<template>
  <div>
    <CraftyTable
      :listData="WomAboardData"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
      :listCount="listCount"
    >
    </CraftyTable>
  </div>
</template>

<script setup lang="ts">
import CraftyTable from '@/components/Table/index'
import { getWomAboard } from '@/services/worldApi/index'
import { onMounted, ref } from 'vue'

const contentTableConfig = {
  title: 'Overseas epidemic',
  propList: [
    { prop: 'name', label: 'name', minWidth: '80' },
    {
      prop: 'continent',
      label: 'continent',
      minWidth: '80',
      slotName: 'continent'
    },
    { prop: 'confirmAdd', label: 'Newly diagnosed', minWidth: '80' },
    {
      prop: 'confirm',
      label: 'Cumulative diagnosis',
      minWidth: '100',
      slotName: 'confirm'
    },
    {
      prop: 'heal',
      label: 'cure',
      minWidth: '100',
      slotName: 'status'
    }
  ],
  showIndexColumn: false,
  showSelectColumn: false
}

const pageInfo = ref({ currentPage: 1, pageSize: 10 })

const WomAboardData = ref()

const listCount = ref(0)

const getstatisGradeCityDetailData = async () => {
  const res = await getWomAboard()
  WomAboardData.value = res.data.WomAboard
  listCount.value = res.data.WomAboard.length
}

onMounted(() => {
  getstatisGradeCityDetailData()
})
</script>

<style scoped lang="less"></style>
