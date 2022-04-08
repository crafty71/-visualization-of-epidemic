import request from '../index'

export function getData() {
  return Request((
    URL: "/api/statistics/latest"
  ))
}
