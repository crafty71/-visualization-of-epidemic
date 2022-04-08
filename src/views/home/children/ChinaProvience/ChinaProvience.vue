<template>
  <div class="ChinaProvience">
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
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { getChinaProvience } from '@/services/homeApi/index'
import { onMounted, ref } from 'vue'

const TableData: any = ref([])
const cityData: any = ref([])

const getChinaProvienceData = async () => {
  const res = await getChinaProvience()
  console.log(res.data.list[0].city)
  TableData.value = res.data.list
  const value = res.data.list
  for (const item of value) {
    console.log(item.city)
  }
}

onMounted(() => {
  getChinaProvienceData()
})

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  }
]
</script>

<style lang="less">
.ChinaProvience {
  margin-top: 10px;
}
</style>
