import * as echarts from 'echarts'

import chinaMapData from '../data/china.json'
import shanghai from '../data/provience/上海市.json'
import yunnan from '../data/provience/云南省.json'
import neimenggu from '../data/provience/内蒙古自治区.json'
import beijing from '../data/provience/北京市.json'
import taiwan from '../data/provience/台湾省.json'
import jilin from '../data/provience/吉林省.json'
import sichuan from '../data/provience/四川省.json'
import tianjin from '../data/provience/天津市.json'
import ningxia from '../data/provience/宁夏回族自治区.json'
import anhui from '../data/provience/安徽省.json'
import shandong from '../data/provience/山东省.json'
import shanxi from '../data/provience/山西省.json'
import guangdong from '../data/provience/广东省.json'
import guangxi from '../data/provience/广西壮族自治区.json'
import xinjiang from '../data/provience/新疆维吾尔自治区.json'
import jiangsu from '../data/provience/江苏省.json'
import jiangxi from '../data/provience/江西省.json'
import hebei from '../data/provience/河北省.json'
import henan from '../data/provience/河南省.json'
import zhejiang from '../data/provience/浙江省.json'
import hainan from '../data/provience/海南省.json'
import hubei from '../data/provience/湖北省.json'
import hunan from '../data/provience/湖南省.json'
import aomen from '../data/provience/澳门.json'
import fujian from '../data/provience/福建省.json'
import xizang from '../data/provience/西藏自治区.json'
import guizhou from '../data/provience/贵州省.json'
import liaoning from '../data/provience/辽宁省.json'
import shanxis from '../data/provience/陕西省.json'
import qinghai from '../data/provience/青海省.json'
import xianggang from '../data/provience/香港特别行政区.json'
import heilongjiang from '../data/provience/黑龙江省.json'
import chongqing from '../data/provience/重庆市.json'
import gansu from '../data/provience/甘肃省.json'
import world from '../data/World_cn.json'

const chinamap: any = chinaMapData
const shanghaimap: any = shanghai
const yunnanmap: any = yunnan
const neimenggumap: any = neimenggu
const beijingmap: any = beijing
const taiwanmap: any = taiwan
const jilinmap: any = jilin
const sichuanmap: any = sichuan
const tianjinmap: any = tianjin
const ningxiamap: any = ningxia
const anhuimap: any = anhui
const shandongmap: any = shandong
const shanximap: any = shanxi
const guangdongmap: any = guangdong
const guangximap: any = guangxi
const xinjiangmap: any = xinjiang
const jiangsumap: any = jiangsu
const jiangximap: any = jiangxi
const hebeimap: any = hebei
const henanmap: any = henan
const zhejiangmap: any = zhejiang
const hainanmap: any = hainan
const hubeimap: any = hubei
const hunanmap: any = hunan
const aomenmap: any = aomen
const fujianmap: any = fujian
const xizangmap: any = xizang
const guizhoumap: any = guizhou
const liaoningmap: any = liaoning
const shanxismap: any = shanxis
const qinghaimap: any = qinghai
const xianggangmap: any = xianggang
const heilongjiangmap: any = heilongjiang
const chongqingmap: any = chongqing
const gansumap: any = gansu
const worldmap: any = world

echarts.registerMap('world', worldmap)
echarts.registerMap('china', chinamap)
echarts.registerMap('shanghai', shanghaimap)
echarts.registerMap('yunnan', yunnanmap)
echarts.registerMap('neimenggu', neimenggumap)
echarts.registerMap('beijing', beijingmap)
echarts.registerMap('taiwan', taiwanmap)
echarts.registerMap('jilin', jilinmap)
echarts.registerMap('sichuan', sichuanmap)
echarts.registerMap('tianjin', tianjinmap)
echarts.registerMap('ningxia', ningxiamap)
echarts.registerMap('anhui', anhuimap)
echarts.registerMap('shandong', shandongmap)
echarts.registerMap('shanxi', shanximap)
echarts.registerMap('guangdong', guangdongmap)
echarts.registerMap('guangxi', guangximap)
echarts.registerMap('xinjiang', xinjiangmap)
echarts.registerMap('jiangsu', jiangsumap)
echarts.registerMap('jiangxi', jiangximap)
echarts.registerMap('hebei', hebeimap)
echarts.registerMap('henan', henanmap)
echarts.registerMap('hainan', hainanmap)
echarts.registerMap('zhejiang', zhejiangmap)
echarts.registerMap('gansu', gansumap)
echarts.registerMap('hubei', hubeimap)
echarts.registerMap('aomen', aomenmap)
echarts.registerMap('fujian', fujianmap)
echarts.registerMap('xizang', xizangmap)
echarts.registerMap('guizhou', guizhoumap)
echarts.registerMap('shanxis', shanxismap)
echarts.registerMap('liaoning', liaoningmap)
echarts.registerMap('qinghai', qinghaimap)
echarts.registerMap('xianggang', xianggangmap)
echarts.registerMap('heilongjiang', heilongjiangmap)
echarts.registerMap('chongqing', chongqingmap)
echarts.registerMap('hunan', hunanmap)

export default function (el: HTMLElement) {
  const echartInstance = echarts.init(el)

  const setOptions = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options)
  }

  const updateSize = () => {
    echartInstance.resize()
  }

  window.addEventListener('resize', () => {
    echartInstance.resize()
  })

  return {
    echartInstance,
    setOptions,
    updateSize
  }
}
