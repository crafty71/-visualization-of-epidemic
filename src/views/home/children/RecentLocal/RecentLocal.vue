<template>
  <div>
    <CraftyTable
      :listData="statisGradeCityDetailData"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
      :listCount="listCount"
    >
    </CraftyTable>
  </div>
</template>

<script setup lang="ts">
import CraftyTable from '@/components/Table/index'
import { getstatisGradeCityDetail } from '@/services/homeApi/index'
import { onMounted, ref } from 'vue'

const contentTableConfig = {
  title:
    'Recent local cases in 31 provinces, autonomous regions and municipalities',
  propList: [
    { prop: 'city', label: 'City', minWidth: '80' },
    {
      prop: 'province',
      label: 'Province',
      minWidth: '80',
      slotName: 'oldPrice'
    },
    { prop: 'confirmAdd', label: 'new', minWidth: '80' },
    {
      prop: 'confirm',
      label: 'Existing diagnosis',
      minWidth: '100',
      slotName: 'image'
    },
    {
      prop: 'heal',
      label: 'Heal',
      minWidth: '100',
      slotName: 'status'
    }
  ],
  showIndexColumn: false,
  showSelectColumn: false
}

const pageInfo = ref({ currentPage: 1, pageSize: 10 })

const statisGradeCityDetailData = ref()

const listCount = ref(0)

const getstatisGradeCityDetailData = async () => {
  const res = await getstatisGradeCityDetail()
  statisGradeCityDetailData.value = res.data.statisGradeCityDetail
  listCount.value = res.data.statisGradeCityDetail.length
}

onMounted(() => {
  getstatisGradeCityDetailData()
})
</script>

<style scoped lang="less"></style>
