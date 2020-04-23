module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "./src/assets/style/global.scss";'
      }
    }
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
        'api': {
        target: 'https://interface.sina.cn/news/wap/fymap2020_data.d.json',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
            '^/api': ''
        }
      },
    },
},
}
