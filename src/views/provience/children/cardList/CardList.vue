<template>
  <div class="CardList">
    <p class="CardList_title">
      {{ route.params.row }} region epidemic situation
    </p>
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
          </CardItem>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import CardItem from '@/components/CardItem/CardItem.vue'

import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()
const store = useStore()

const dataList = store.getters.getprovienceData

const cardData: any = ref([])

const CardDataTenp = [
  {
    title: 'Existing diagnosis',
    value: dataList.value
  },
  {
    title: 'Native asymptomatic',
    value: dataList.asymptomNum
  },
  {
    title: 'Cumulative diagnosis',
    value: dataList.jwsrNum
  },
  {
    title: 'Currently confirmed',
    value: dataList.econNum
  },
  {
    title: 'Import from abroad',
    value: dataList.jwsrNum
  },
  {
    title: 'Cumulative death',
    value: dataList.deathNum
  }
]
cardData.value = CardDataTenp
</script>

<style scoped lang="less">
.CardList {
  width: 100%;
  .CardList_title {
    font-size: 22px;
    font-weight: 700;
    text-align: center;
  }
  .confirmedCount {
    margin-bottom: 10px;
    .content {
      color: #e78243;
    }
  }
}
</style>
