<template>
  <div class="line-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import BaseEchart from '../../echart/index'

const props = defineProps({
  dataList: Object,
  length: {
    type: Number,
    default: 6
  },
  title: {
    type: String
  }
})

const options: any = computed(() => {
  return {
    dataset: {
      source: props.dataList
    },
    title: {
      text: props.title,
      left: 'center',
      textStyle: {
        color: '#000000',
        fontSize: 22
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    toolbox: {
      show: true,
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        dataView: { readOnly: false },
        magicType: { type: ['line', 'bar'] },
        saveAsImage: {}
      }
    },
    legend: {
      top: 30
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        smooth: true,
        type: 'line',
        emphasis: {
          focus: 'series'
        }
      },
      {
        smooth: true,
        type: 'line',
        emphasis: {
          focus: 'series'
        }
      },
      {
        smooth: true,
        type: 'line',
        emphasis: {
          focus: 'series'
        }
      },
      {
        smooth: true,
        type: 'line',
        emphasis: {
          focus: 'series'
        }
      }
    ],
    dataZoom: [
      {
        type: 'slider',
        height: 20,
        start: 95,
        bottom: 10,
        end: 100,
        textStyle: {
          color: '#d4ffff',
          fontSize: 11
        }
      },
      {
        type: 'inside'
      }
    ]
  }
})
</script>

<style scoped></style>
