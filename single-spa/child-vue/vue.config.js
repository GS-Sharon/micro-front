module.exports = {
  configureWebpack: {
    output: {
      library: 'vueSon',
      libraryTarget: 'umd' //会将vueSon挂载到window上，而且该js文件会有window.vueSon.bootstrap\mount\unmount
    },
    devServer: {
      port: 10000
    }
  }
}