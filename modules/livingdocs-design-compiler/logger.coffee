exports.error = (args...) ->
  args[0] = args[0].red
  console.error.apply(console, args)
  process.exit(1)


exports.warn = (args...) ->
  args[0] = args[0].yellow
  console.warn.apply(console, args)


exports.log = (args...) ->
  args[0] = args[0].grey
  console.log.apply(console, args)
