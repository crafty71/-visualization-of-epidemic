<template>
  <div class="ProvienceDetail">
    <cardList />
    <el-row :gutter="10">
      <el-col :span="12">
        <div class="MapBackGorond">
          <ProvienceMap />
        </div>
      </el-col>
      <el-col :span="12">
        <div class="MapBackGorond">
          <ProvienceMapR />
        </div>
      </el-col>
    </el-row>
    <div>
      <RegionDeatil />
    </div>
    <div>
      <ProvienceNews />
    </div>
  </div>
</template>

<script setup lang="ts">
import cardList from './children/cardList/CardList.vue'
import ProvienceMap from './children/ProvienceMap/ProvienceMap.vue'
import ProvienceMapR from './children/ProvienceMap/ProvienceMapR.vue'
import RegionDeatil from './children/RegionDeatil/RegionDeatil.vue'
import ProvienceNews from './children/ProvienceNews/ProvienceNews.vue'
</script>

<style lang="less" scoped>
.ProvienceDetail {
  padding: 10px;
  background: #f9f9f9;
  .MapBackGorond {
    background: #ffffff;
  }
}
</style>
