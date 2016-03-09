var http = require('http')

var server = http.createServer(function (req, res) {
  if (req.method !== 'GET') return res.end('send me a GET\n')

  var url = require('url').parse(req.url, true)
  var dt = new Date(url.query.iso)
  var result
  if (/^\/api\/parsetime/.test(req.url)) {
    result = {hour: dt.getHours(), minute: dt.getMinutes(), second: dt.getSeconds()}
  } else if (/^\/api\/unixtime/.test(req.url)) {
    result = {unixtime: dt.getTime()}
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})

server.listen(process.argv[2])
