var connect = require('connect')
var http = require('http')
var port = 80

if (process.env.NODE_ENV=='development') port = 8080 

connect()
  .use(redirVersion)
  .use(connect.static(__dirname))
  .listen(port)


function redirVersion(req,res,next) {
  if (req.url == '/3') { 
    res.writeHead(302, {'Location': '/0'} )
    return res.end()
  }
  next()
}

