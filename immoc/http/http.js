/**
 * Created by ponovo on 2017/11/28.
 */
var http = require('http');

http
    .createServer(function (req, res) {
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.write('hello nodejs');
        res.end();
    })
    .listen(2015);