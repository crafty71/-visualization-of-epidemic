import request from '../index'
import requestsina from '../requestSina/index'

export function getData() {
  return request.get({
    url: '/api/statistics/latest'
  })
}

// The latest domestic epidemic data

export function getEpidemicData() {
  return request.get({
    url: '/query/inner/publish/modules/list?modules=diseaseh5Shelf'
  })
}

// query/inner/publish/modules/list?modules=statisGradeCityDetail

export function getstatisGradeCityDetail() {
  return request.get({
    url: 'query/inner/publish/modules/list?modules=statisGradeCityDetail'
  })
}

// /query/inner/publish/modules/list?modules=chinaDayAddList

export function getchinaDayAddList() {
  return request.get({
    url: '/query/inner/publish/modules/list?modules=chinaDayAddList'
  })
}

// getchinaDayList

export function getchinaDayList() {
  return request.get({
    url: '/query/inner/publish/modules/list?modules=chinaDayList'
  })
}

export function getChinaProvience() {
  return requestsina.get({})
}
