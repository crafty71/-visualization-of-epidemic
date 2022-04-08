import Request from '../index'

export function getData() {
  return Request((
    URL: "/api/statistics/latest"
  ))
}
