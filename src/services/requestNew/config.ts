let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'https://api.dreamreader.qq.com/news/v1/province/news'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'https://api.dreamreader.qq.com/news/v1/province/news'
} else {
  BASE_URL = 'https://api.dreamreader.qq.com/news/v1/province/news'
}

export { BASE_URL, TIME_OUT }
