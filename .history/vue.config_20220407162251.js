const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:7878/api/hy66',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  }
})
