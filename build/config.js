'use strict'

module.exports = {
  port: '8000',
  title: 'Laboratory',
  vendor: [
    'react',
    'react-dom',
    'react-router',
    'geopattern'
  ],
  postcss: [
    require('postcss-cssnext')({
      browsers: ['last 2 versions', 'ie > 8']
    })
  ],
  cssModules: false
}
