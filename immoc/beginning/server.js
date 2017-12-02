/**
 * Created by ponovo on 2017/11/25.
 */
var http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead('200',{'Content-Type':'text/plain'});
    res.end('i am asdad')
}).listen(3000,'127.0.0.1');

console.log('server is beginning at http://127.0.0.1:3000');