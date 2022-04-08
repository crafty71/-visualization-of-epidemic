const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://api.inews.qq.com/newsqa/v1',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      },
      '^/Api': {
        target: 'https://interface.sina.cn/news/wap/fymap2020_data.d.json',
        pathRewrite: {
          '^/Api': ''
        },
        changeOrigin: true
      }
    }
  },
  // 2.配置方式二: 和webpack属性完全一致, 最后会进行合并
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components',
        src: '@/src'
      }
    }
  }
})
