var connect = require('connect'),
    http = require('http')

connect()
    .use(connect.static(__dirname))
    .listen(80);

