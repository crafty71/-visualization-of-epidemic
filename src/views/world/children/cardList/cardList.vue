<template>
  <div>
    <div class="CardList">
      <p>Statistics as of {{ updateTime }}</p>
      <el-row :gutter="10">
        <el-col :span="6" v-for="(item, index) in CardData" :key="index">
          <div>
            <CardItem class="confirmedCount">
              <template v-slot:header>
                <h4 class="title">{{ item.title }}</h4>
              </template>
              <template v-slot:content>
                <p class="content">{{ item.value }}</p>
              </template>
              <template v-slot:compared>
                <p class="compared">
                  compared to yesterday {{ item.addValue }}
                </p>
              </template>
            </CardItem>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getWomWorld } from '@/services/worldApi/index'
import { onMounted, ref } from 'vue'

import CardItem from '@/components/CardItem/CardItem.vue'

const CardData: any = ref([])

const updateTime = ref()

const getWomWorldData = async () => {
  const res = await getWomWorld()
  console.log(res.data.WomWorld)
  updateTime.value = res.data.WomWorld.lastUpdateTime
  const item = res.data.WomWorld
  const CardDataTenp = [
    {
      title: 'Existing diagnosis',
      value: item.nowConfirm,
      addValue: item.nowConfirmAdd
    },
    {
      title: 'Cumulative diagnosis',
      value: item.confirm,
      addValue: item.confirmAdd
    },
    {
      title: 'Cumulative cure',
      value: item.heal,
      addValue: item.healAdd
    },
    {
      title: 'Cumulative deaths',
      value: item.dead,
      addValue: item.deadAdd
    }
  ]
  CardData.value = CardDataTenp
}

onMounted(() => {
  getWomWorldData()
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
    .compared {
      font-size: 10px;
      color: #7c7c7c;
    }
  }
}
</style>
