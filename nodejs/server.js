let http = require('http');
let port = 9000;

let server = http.createServer(function(req,res){
    console.log("server running on "+ port)
    res.write("<html><body><h1>Welcome to NodeJs jjjj</h1></body></html>")
    res.end()
})

/*let server = http.createServer((req,res)  =>{
    res.write("<html><body><h1>Welcome to NodeJs</h1></body></html>")
    res.end()
})
*/

server.listen(port);