<template>
  <div class="bar-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue'
import BaseEchart from '../../echart/index'
import { IDataType } from '../types'

const props = withDefaults(
  defineProps<{
    title?: string
    mapData: IDataType[]
  }>(),
  {
    title: ''
  }
)

const options: any = computed(() => {
  return {
    title: {
      top: 10,
      text: 'Cumulative diagnosis',
      left: 'center',
      textStyle: {
        color: '#000000'
      }
    },
    tooltip: {
      show: true
    },
    visualMap: {
      // 地图图例
      show: true,
      showLabel: true,
      pieces: [
        // 根据数据大小，各省显示不同颜色
        {
          gte: 3000,
          label: '>=3000',
          color: '#de1f05'
        },
        {
          gte: 1000,
          lt: 3000,
          label: '1000-2000',
          color: '#ff6341'
        },
        {
          gte: 500,
          lt: 1000,
          label: '500 - 999',
          color: '#ff6341'
        },
        {
          gte: 100,
          lt: 500,
          label: '100 - 499',
          color: '#ffa577'
        },
        {
          gte: 10,
          lt: 100,
          label: '10 - 99',
          color: '#ffcea0'
        },
        {
          lt: 10,
          gte: 1,
          label: '1-10',
          color: '#ffe7b2'
        },
        {
          lt: 0,
          gte: 0,
          label: '=0',
          color: '#e2ebf4'
        }
      ]
    },
    geo: {
      // 中国地图设置
      map: 'china',
      scaleLimit: {
        min: 1,
        max: 2
      },
      zoom: 0.8,
      top: 70,
      label: {
        normal: {
          show: false,
          fontSize: '14',
          color: 'rgba(0,0,0,0.7)'
        }
      },
      itemStyle: {
        normal: {
          borderColor: 'rgba(0, 0, 0, 0.2)'
        },
        emphasis: {
          areaColor: '#f2d5ad',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          borderWidth: 0
        }
      }
    },
    series: [
      {
        name: 'New',
        type: 'map',
        geoIndex: 0,
        data: props.mapData
      }
    ]
  }
})
</script>

<style scoped></style>
