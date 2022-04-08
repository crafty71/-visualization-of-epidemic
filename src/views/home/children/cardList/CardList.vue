<template>
  <div class="CardList">
    <p>Statistics as of {{ updateTime }}</p>
    <el-row :gutter="10">
      <el-col :span="8" v-for="(item, index) in cardData" :key="index">
        <div>
          <CardItem class="confirmedCount">
            <template v-slot:header>
              <h4 class="title">{{ item.title }}</h4>
            </template>
            <template v-slot:content>
              <p class="content">{{ item.value }}</p>
            </template>
            <template v-slot:compared>
              <p class="compared">compared to yesterday {{ item.addValue }}</p>
            </template>
          </CardItem>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { getEpidemicData } from '@/services/homeApi/index'

import CardItem from '@/components/CardItem/CardItem.vue'

const cardData: any = ref([])

const updateTime = ref()

const getEpidemic = async () => {
  const res = await getEpidemicData()
  const valuechange = res.data.diseaseh5Shelf.chinaAdd
  const value = res.data.diseaseh5Shelf.chinaTotal
  updateTime.value = res.data.diseaseh5Shelf.lastUpdateTime
  const CardDataTenp = [
    {
      title: 'Locally diagnosed',
      value: value.localConfirm,
      addValue: valuechange.localConfirmH5
    },
    {
      title: 'Existing diagnosis',
      value: value.nowConfirm,
      addValue: valuechange.nowConfirm
    },
    {
      title: 'Cumnlative diagnosis',
      value: value.confirm,
      addValue: valuechange.confirm
    },
    {
      title: 'Asymptomatic infection',
      value: value.nowConfirm,
      addValue: valuechange.nowConfirm
    },
    {
      title: 'Import from abroad',
      value: value.noInfect,
      addValue: valuechange.noInfect
    },
    {
      title: 'Cumulative death',
      value: value.dead,
      addValue: valuechange.dead
    }
  ]
  cardData.value = CardDataTenp
}

onMounted(() => {
  getEpidemic()
})
</script>

<style scoped lang="less">
.CardList {
  width: 100%;
  .confirmedCount {
    margin-bottom: 10px;
    .content {
      color: #e78243;
    }
  }
}
</style>
