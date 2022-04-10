<template>
  <div class="ProvienceNews">
    <h4 class="title">疫情速报</h4>
    <el-card
      class="box-card"
      v-for="(item, index) in newData"
      :key="index"
      shadow="hover"
    >
      <a :href="item.news_url">
        <div class="text_item">
          <div class="card_title">
            <h4>{{ item.title }}</h4>
            <img :src="item.shortcut" alt="" />
          </div>
          <div class="card_detail">
            <p>{{ item.srcfrom }}</p>
            <p>{{ item.publish_time }}</p>
          </div>
        </div>
      </a>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { getProvienceNews } from '@/services/homeApi/index'
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const provience = store.getters.getprovienceData.ename

const newData: any = ref([])

const getProvienceNewsData = async () => {
  const res = await getProvienceNews(provience)
  newData.value = res.data.items
}

onMounted(() => {
  getProvienceNewsData()
})
</script>

<style scoped lang="less">
.ProvienceNews {
  .title {
    font-size: 22px;
    padding: 10px;
    background: #ffffff;
  }
  .box-card {
    margin-top: 10px;
    .text_item {
      .card_title {
        display: flex;
        justify-content: space-between;
        color: #000000;
      }
      .card_detail {
        display: flex;
        color: #a6a6a6;
        font-size: 12px;
        p {
          margin-right: 20px;
        }
      }
    }
  }
}

a {
  text-decoration: none;
}
</style>
