<template>
  <div class="HomeIndex">
    <CardList />
    <RecentLocal />
    <el-row :gutter="10" style="margin-top: 10px">
      <el-col :span="12">
        <div class="MapBackGorond">
          <ExistingDiagnosis />
        </div>
      </el-col>
      <el-col :span="12">
        <div class="MapBackGorond">
          <CumulativeDiagnosis />
        </div>
      </el-col>
    </el-row>
    <div class="MapBackGorond">
      <NewConfirmedTrend />
    </div>
    <div class="MapBackGorond">
      <DiagnosisTrends />
    </div>
    <div class="MapBackGorond">
      <ChinaProvience />
    </div>
  </div>
</template>

<script setup lang="ts">
import CardList from './children/cardList/CardList.vue'
import RecentLocal from './children/RecentLocal/RecentLocal.vue'
import ExistingDiagnosis from './children/ExistingDiagnosis/ExistingDiagnosis.vue'
import CumulativeDiagnosis from './children/CumulativeDiagnosis/CumulativeDiagnosis.vue'
import NewConfirmedTrend from './children/NewConfirmedTrend/NewConfirmedTrend.vue'
import DiagnosisTrends from './children/DiagnosisTrends/DiagnosisTrends.vue'
import ChinaProvience from './children/ChinaProvience/ChinaProvience.vue'
</script>

<style scoped lang="less">
.HomeIndex {
  padding: 10px;
  background: #f9f9f9;
  .MapBackGorond {
    background: #ffffff;
  }
}
</style>
