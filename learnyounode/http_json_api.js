var http = require('http')

var server = http.createServer(function (req, res) {
  if (req.method !== 'GET') return res.end('send me a GET\n')

  var url = require('url').parse('/test?q=1', true)
  if(url.pathname === '/api/parsetime') {
      
  }
  if(url.pathname === '/api/unixtime') {
      
  }
})

server.listen(process.argv[2])