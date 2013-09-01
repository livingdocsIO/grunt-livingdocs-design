
exports.toCamelCase = (string) ->
  string.replace /^([A-Z])|[\s-_](\w)/g, (match, p1, p2, offset) ->
    return p2.toUpperCase() if p2
    p1.toLowerCase()
