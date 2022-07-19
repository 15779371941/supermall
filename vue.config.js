module.exports={
  configureWebpack:{
    resolve:{
      // 设置别名，@是src
      alias:{
        'assets':'@/assets',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
      }

    }
  },
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: ' favicon.ico',
      msTileImage: 'favicon.ico'
    }
  }

  //
  //   devServer:{
  // port:8085
// }
}