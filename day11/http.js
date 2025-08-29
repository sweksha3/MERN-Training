const http=require('http')
const fs =require('fs')

http.createServer((req,res)=>{
    fs.readFile('hello.html',(err,data)=>{
        res.writeHead(200,{'content-type' : 'text/html'})      //changes can be made 
       //res.writeHead(200,{'content-type' : 'application/json'})
       // res.writeHead(200,{'content-type' : 'plaintext/html'})

        res.end(data)
    })
}).listen(3002)

console.log("hii node")