'use strict'

module.exports = {
  port: '6928',
  title: 'laboratory',
  // vendor: [
  // ],
  postcss: [
    require('postcss-cssnext')({
      browsers: ['last 2 versions', 'ie > 8']
    })
  ],
  cssModules: false
}
