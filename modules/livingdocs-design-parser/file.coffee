fs = require('fs')
path = require('path')
root = path.join(__dirname, '../..')


exports.read = fs.readFileSync


exports.write = (file, data, options) ->
  paths = file.split('/')
  paths.pop()

  directory = root
  for i, dir of paths
    directory = directory + '/' + dir
    unless fs.existsSync(directory)
      fs.mkdirSync(directory)

  fs.writeFileSync(file, data, options)


exports.readJson = (file, options) ->
  JSON.parse(fs.readFileSync(file, { encoding: 'utf8' }))


exports.exists = fs.existsSync
