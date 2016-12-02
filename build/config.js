'use strict'

module.exports = {
  port: '12934',
  title: 'gallery',
  vendor: [
    'react',
    'react-dom',
    'react-router'
  ],
  postcss: [
    require('postcss-cssnext')({
      browsers: ['last 2 versions', 'ie > 8']
    })
  ],
  cssModules: false
}
