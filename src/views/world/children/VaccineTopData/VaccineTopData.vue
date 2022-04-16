<template>
  <div>
    <div class="CardList">
      <p>Global COVID-19 Vaccination Tracker</p>
      <el-row :gutter="10">
        <el-col :span="8" v-for="(item, index) in CardData" :key="index">
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
  </div>
</template>

<script setup lang="ts">
import { getVaccineTopData } from '@/services/worldApi/index'
import { onMounted, ref } from 'vue'

import CardItem from '@/components/CardItem/CardItem.vue'

interface CardDataType {
  value: { title: string; value: any }[]
}

const CardData: CardDataType | any = ref([])

const getVaccineTop = async () => {
  const res = await getVaccineTopData()
  const item = res.data.VaccineTopData['全球']
  const CardDataTenp = [
    {
      title: 'Cumulative vaccination',
      value: item.total_vaccinations
    },
    {
      title: 'Added from the previous day',
      value: item.new_vaccinations
    },
    {
      title: 'Vaccination per hundred people',
      value: item.total_vaccinations_per_hundred
    }
  ]
  CardData.value = CardDataTenp
}

onMounted(() => {
  getVaccineTop()
})
</script>

<style scoped></style>
