import Request from '../request'

export function getData() {
  return Request((
    URL: "/api/statistics/latest"
  ))
}
