<template>
  <div class="ChinaProvience">
    <h4 class="ChinaProvienceTitle">
      Epidemic situation in China (including Hong Kong, Macao and Taiwan)
    </h4>
    <el-table
      :data="TableData"
      style="width: 100%"
      :default-sort="{ prop: 'econNum', order: 'descending' }"
    >
      <el-table-column type="expand">
        <template #default="props">
          <el-table
            :data="props.row.city"
            :default-sort="{ prop: 'econNum', order: 'descending' }"
          >
            <el-table-column label="city" prop="name" align="center" sortable />
            <el-table-column
              label="Existing"
              prop="econNum"
              align="center"
              sortable
            />
            <el-table-column
              label="Grand total"
              prop="conNum"
              align="center"
              sortable
            />
            <el-table-column
              label="cure"
              prop="cureNum"
              align="center"
              sortable
            />
            <el-table-column
              label="dead"
              prop="deathNum"
              align="center"
              sortable
            />
            <el-table-column
              label="zero"
              prop="zerodays"
              align="center"
              sortable
            />
          </el-table>
        </template>
      </el-table-column>
      <el-table-column label="provience" prop="ename" align="center" />
      <el-table-column
        label="Existing"
        prop="econNum"
        align="center"
        sortable
      />
      <el-table-column
        label="Grand total"
        prop="value"
        align="center"
        sortable
      />
      <el-table-column label="cure" prop="cureNum" align="center" sortable />
      <el-table-column label="dead" prop="deathNum" align="center" sortable />
      <el-table-column label="Operations" align="center">
        <template #default="scope">
          <el-button type="text" size="small" @click="DeatilClick(scope)"
            >Detail</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { getChinaProvience } from '@/services/homeApi/index'
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()

const TableData: any = ref([])

const getChinaProvienceData = async () => {
  const res = await getChinaProvience()
  TableData.value = res.data.list
}

const DeatilClick = (num: any) => {
  router.push(`/home/provience/${num.row.ename}`)
  store.commit('clearprovienceData')
  store.commit('pushprovienceData', num.row)
}

onMounted(() => {
  getChinaProvienceData()
})
</script>

<style lang="less">
.ChinaProvience {
  margin-top: 10px;
  .ChinaProvienceTitle {
    font-size: 22px;
    padding: 10px;
  }
}
</style>
