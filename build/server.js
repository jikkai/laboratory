'use strict'
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const proxy = require('http-proxy').createProxyServer()

const webpackConfig = require('./webpack.dev')
const config = require('./config')

const app = express()

webpackConfig.entry.client = [
  'webpack-hot-middleware/client',
  webpackConfig.entry.client
]

const compiler = webpack(webpackConfig)

const devMiddleWare = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }
})
app.use(devMiddleWare)
app.use(require('webpack-hot-middleware')(compiler))

app.use('/api/*', (req, res) => {
  req.url = req.baseUrl
  proxy.web(req, res, {
    target: 'http://118.193.194.216:8000'
  })
})
app.use('/static/*', (req, res) => {
  req.url = req.baseUrl
  proxy.web(req, res, {
    target: 'http://118.193.194.216:8000'
  })
})

app.get('*', (req, res) => {
  const fs = devMiddleWare.fileSystem
  devMiddleWare.waitUntilValid(() => {
    const html = fs.readFileSync(path.join(webpackConfig.output.path, './index.html'))
    res.end(html)
  })
})

app.listen(config.port, () => {
  console.log(`Listening at http://localhost:${config.port}`)
})
