let http = require('http');
let fs = require('fs');

http.createServer(function(req,res){
    fs.appendFile('myFile.html','<h1>Writing it</h1>', (err)=>{
        if(err) throw err;
        console.log("task done")
    })
    fs.readFile('myFile.html', function(err,data){
        res.writeHead(200,  {'Content-Type':'text/html'})
        res.write(data)
        res.end();
    })
}).listen(8000);