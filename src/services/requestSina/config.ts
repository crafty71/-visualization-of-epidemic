let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/Api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = '/Api'
} else {
  BASE_URL = '/Api'
}

export { BASE_URL, TIME_OUT }
