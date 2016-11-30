'use strict'

module.exports = {
  port: '4000',
  title: 'gallery',
  vendor: [
    'react',
    'react-dom',
    'ui-router-react'
  ],
  postcss: [
    require('postcss-cssnext')({
      browsers: ['last 2 versions', 'ie > 8']
    })
  ],
  cssModules: false
}
