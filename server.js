var connect = require('connect')
var font_middleware = require('connect-fonts');
var lato = require('connect-fonts-lato');

if (process.env.NODE_ENV=='development') {
	var port = 8080
	var dir = __dirname 
  var current_ver = 'dev'
} else {  // production settings
	var port = process.env.PORT 
	var dir = __dirname + '/deploy' 
  var current_ver = '0-5-1'
}

connect()
  .use(redirVersion)
  .use(redirMoved)
  .use(font_middleware.setup({
    fonts: [ lato ],
    maxage: 15552000000, // 180 days
    compress: true
  }))
  .use(connect.static(dir))
  .use(connect.static(dir+'/'+current_ver)) // catch versioned files as if existing on root as well
  .listen(port)

function redirMoved(req,res,next) {
  if (req.url == '/0-4-0/what_is_ethereum.html' || req.url == '/0/what_is_ethereum.html') { 
    res.writeHead(301, {'Location': '/what_is_ethereum.html'} )
    return res.end()
  }
  next()
}

function redirVersion(req,res,next) {
  if (req.url == '/') { 
    res.writeHead(302, {'Location': '/' + current_ver} )
    return res.end()
  }
  next()
}

