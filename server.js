var connect = require('connect')
var http = require('http')
var font_middleware = require("connect-fonts");
var lato = require("connect-fonts-lato");

if (process.env.NODE_ENV=='development') {
	var port = 8080
	var dir = __dirname 
} else {  // production settings
	var port = 80
	var dir = __dirname + '/deploy' 
}

connect()
  .use(redirVersion)
  .use(font_middleware.setup({
    fonts: [ lato ],
    maxage: 15552000000, // 180 days
    compress: true
  }))
  .use(connect.static(dir))
  .listen(port)

function redirVersion(req,res,next) {
  if (req.url == '/') { 
    res.writeHead(302, {'Location': '/0-4-0'} )
    return res.end()
  }
  next()
}

