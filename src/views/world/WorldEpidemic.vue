<template>
  <div class="WorldEpidemic">
    <cardList />
    <VaccineTopData />
    <OverseasEpidemic />
    <WorldMap />
  </div>
</template>

<script setup lang="ts">
import cardList from './children/cardList/cardList.vue'
import OverseasEpidemic from './children/OverseasEpidemic/OverseasEpidemic.vue'
import VaccineTopData from './children/VaccineTopData/VaccineTopData.vue'
import WorldMap from './children/worldmap/WorldMap.vue'
</script>

<style scoped lang="less">
.WorldEpidemic {
  padding: 10px;
  background: #f9f9f9;
}
</style>
