var connect = require('connect')
var http = require('http')

if (process.env.NODE_ENV=='development') {
	var port = 8080
	var dir = __dirname 
} else {  // production settings
	var port = 80
	var dir = __dirname + '/deploy' 
}

connect()
  .use(redirVersion)
  .use(connect.static(dir))
  .listen(port)


function redirVersion(req,res,next) {
  if (req.url == '/') { 
    res.writeHead(302, {'Location': '/0'} )
    return res.end()
  }
  next()
}

