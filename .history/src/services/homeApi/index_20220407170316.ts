import request from '../index'

export function getData() {
  return request((
    URL: "/api/statistics/latest"
  ))
}
