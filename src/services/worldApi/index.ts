import request from '../index'

// /automation/modules/list?modules=WomWorld

export function getWomWorld() {
  return request.get({
    url: '/automation/modules/list?modules=WomWorld'
  })
}

// /automation/modules/list?modules=WomAboard

export function getWomAboard() {
  return request.get({
    url: '/automation/modules/list?modules=WomAboard'
  })
}

// /automation/modules/list?modules=VaccineTopData

export function getVaccineTopData() {
  return request.get({
    url: '/automation/modules/list?modules=VaccineTopData'
  })
}
