const browserify = require('browserify')
const envify = require('envify/custom')
const watchify = require('watchify')
const fs = require('fs')

const b = browserify({
  cache: {},
  entries: ['src/index.js'],
  packageCache: {},
  plugin: [watchify] // Will automatically watch.
})
const output = fs.createWriteStream('dist/bundle.js')

b.transform(envify({
  NODE_ENV: 'development',
  MAPBOX_ACCESS_TOKEN: process.env.MAPBOX_ACCESS_TOKEN
}))

b.bundle().pipe(output)
