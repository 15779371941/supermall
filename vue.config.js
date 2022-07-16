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
  //
  //   devServer:{
  // port:8085
// }
}