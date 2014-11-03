fs = require('fs')
path = require('path')
root = path.join(__dirname, '../../..')


exports.write = (file, data, callback) ->
  paths = file.split('/')
  paths.pop()

  directory = root
  for i, dir of paths
    directory = directory + '/' + dir
    unless fs.existsSync(directory)
      fs.mkdirSync(directory)

  fs.writeFile(file, data, callback)


exports.readFile = fs.readFile
exports.readJson = (file, callback) ->
  fs.readFile file, encoding:'utf8', (err, content) ->
    return callback(err) if err
    try
      content = JSON.parse(content)
    catch err
      return callback(err) if err

    callback(null, content)
