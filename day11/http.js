const http = require('http')
const fs = require('fs')

http.createServer((req, res)=>{
    fs.readFile('hello.html',(err,data)=>{
        res.writeHead(200,{'content-type' : 'text/html'})
        res.end(data)
    })
}).listen(3002)

console.log("Hi")