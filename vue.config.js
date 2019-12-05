module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    proxy: {
      '^/api': {
        target: 'http://localhost:8000/'
      }
    }
  }
}